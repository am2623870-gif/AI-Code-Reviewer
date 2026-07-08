const {
  reviewCode,
  explainCode,
  debugCode,
  optimizeCode,
  securityAudit,
  refactorCode,
  generateTests,
  generateDocumentation,
} = require("../services/geminiService");

exports.reviewCode = async (req, res) => {
  try {
    const {
      language,
      code,
      mode = "Review",
    } = req.body;

    if (!language || !code) {
      return res.status(400).json({
        error: "Language and code are required.",
      });
    }

    let result;

    switch (mode) {
      case "Review":
        result = await reviewCode(language, code);
        break;

      case "Explain":
        result = await explainCode(language, code);
        break;

      case "Optimize":
        result = await optimizeCode(language, code);
        break;

      case "Debug":
        result = await debugCode(language, code);
        break;

      case "Security":
        result = await securityAudit(language, code);
        break;

      case "Refactor":
        result = await refactorCode(language, code);
        break;

      case "Tests":
        result = await generateTests(language, code);
        break;

      case "Documentation":
        result = await generateDocumentation(language, code);
        break;

      default:
        result = await reviewCode(language, code);
    }

    res.status(200).json({
      success: true,
      mode,
      review: result,
    });

  } catch (error) {
    console.error("Review Controller Error:", error);

    res.status(500).json({
      success: false,
      error: "Failed to process AI request.",
    });
  }
};