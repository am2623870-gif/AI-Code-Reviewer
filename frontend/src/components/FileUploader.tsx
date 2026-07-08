interface Props {
  onFileLoad: (
    code: string,
    language: string,
    fileName: string
  ) => void;
}

export default function FileUploader({ onFileLoad }: Props) {
  const detectLanguage = (name: string) => {
    const ext = name.split(".").pop()?.toLowerCase();

    switch (ext) {
      case "js":
        return "javascript";

      case "ts":
        return "typescript";

      case "py":
        return "python";

      case "java":
        return "java";

      case "cpp":
      case "cc":
      case "cxx":
        return "cpp";

      default:
        return "javascript";
    }
  };

  const handleFile = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      onFileLoad(
        reader.result as string,
        detectLanguage(file.name),
        file.name
      );
    };

    reader.readAsText(file);
  };

  return (
    <label className="cursor-pointer bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition">
      📂 Upload Code

      <input
        hidden
        type="file"
        accept=".js,.ts,.py,.java,.cpp,.cc,.cxx"
        onChange={handleFile}
      />
    </label>
  );
}