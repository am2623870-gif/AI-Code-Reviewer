import Editor from "@monaco-editor/react";

interface CodeEditorProps {
  language: string;
  code: string;
  onChange: (value: string) => void;
}

export default function CodeEditor({
  language,
  code,
  onChange,
}: CodeEditorProps) {
  return (
    <Editor
      height="70vh"
      language={language}
      value={code}
      theme="vs-dark"
      onChange={(value) => onChange(value || "")}
      options={{
        fontSize: 15,
        minimap: {
          enabled: false,
        },
        automaticLayout: true,
        scrollBeyondLastLine: false,
        wordWrap: "on",
      }}
    />
  );
}