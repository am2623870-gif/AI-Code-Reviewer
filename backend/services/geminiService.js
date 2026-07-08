const ai = require("../config/gemini");

/**
 * Generic Gemini caller
 */
const askGemini = async (prompt) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    if (!response || !response.text) {
      throw new Error("No response received from Gemini.");
    }

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error.message);
    throw new Error("Failed to generate AI response.");
  }
};

/* ==========================================
   REVIEW
========================================== */

const reviewCode = async (language, code) => {
  return askGemini(`
You are a senior software engineer.

Perform a professional code review.

Return your response in Markdown.

Include:

# Overall Score (/10)

# Security Score (/10)

# Performance Score (/10)

# Readability Score (/10)

# Best Practices Score (/10)

# Executive Summary

# Bugs

# Security Issues

# Performance Improvements

# Readability Improvements

# Best Practices

# Time Complexity

# Space Complexity

# Optimized Code

# Final Verdict

Language:
${language}

Code:
${code}
`);
};

/* ==========================================
   EXPLAIN
========================================== */

const explainCode = async (language, code) => {
  return askGemini(`
Explain this ${language} code like you are teaching a junior developer.

Return:

# Purpose

# Step-by-step Explanation

# Functions

# Variables

# Algorithm

# Time Complexity

# Space Complexity

Code:

${code}
`);
};

/* ==========================================
   DEBUG
========================================== */

const debugCode = async (language, code) => {
  return askGemini(`
You are an expert debugger.

Find:

# Syntax Errors

# Logical Errors

# Runtime Errors

# Edge Cases

# Fixed Code

Explain every fix.

Language:

${language}

Code:

${code}
`);
};

/* ==========================================
   OPTIMIZE
========================================== */

const optimizeCode = async (language, code) => {
  return askGemini(`
You are a performance optimization expert.

Optimize this ${language} code.

Return:

# Bottlenecks

# Better Algorithm

# Performance Improvements

# Memory Improvements

# Optimized Code

Explain every optimization.

Code:

${code}
`);
};

/* ==========================================
   SECURITY AUDIT
========================================== */

const securityAudit = async (language, code) => {
  return askGemini(`
Perform a professional security audit.

Return:

# Vulnerabilities

# Risk Level

# OWASP Issues

# Secure Coding Recommendations

# Secure Version

Language:

${language}

Code:

${code}
`);
};

/* ==========================================
   REFACTOR
========================================== */

const refactorCode = async (language, code) => {
  return askGemini(`
Refactor this ${language} code.

Return:

# Problems

# SOLID Improvements

# Naming Improvements

# Cleaner Structure

# Refactored Code

Explain why each improvement was made.

Code:

${code}
`);
};

/* ==========================================
   UNIT TESTS
========================================== */

const generateTests = async (language, code) => {
  return askGemini(`
Generate comprehensive unit tests.

Use the most popular testing framework.

Return:

# Test Cases

# Edge Cases

# Test Code

# Coverage Suggestions

Language:

${language}

Code:

${code}
`);
};

/* ==========================================
   DOCUMENTATION
========================================== */

const generateDocumentation = async (language, code) => {
  return askGemini(`
Generate professional documentation.

Include:

# Overview

# Functions

# Parameters

# Return Values

# Example Usage

Language:

${language}

Code:

${code}
`);
};

module.exports = {
  reviewCode,
  explainCode,
  debugCode,
  optimizeCode,
  securityAudit,
  refactorCode,
  generateTests,
  generateDocumentation,
};