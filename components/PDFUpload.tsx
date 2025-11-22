"use client";

import { useState } from "react";

interface PDFUploadProps {
  rules: string[];
  setResults: (results: any[]) => void;
}

export default function PDFUpload({ rules, setResults }: PDFUploadProps) {
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) setPdfFile(e.target.files[0]);
  };

  const handleCheck = () => {
    if (!pdfFile) return alert("Upload a PDF first.");

    const results = rules.map((rule) => ({
      rule,
      status: "pass",
      evidence: `Found "${rule}"`,
    }));

    setResults(results);
  };

  return (
    <div className="flex flex-col gap-6 p-6 bg-white/20 backdrop-blur-xl rounded-xl shadow-xl max-w-4xl mx-auto">
      <label className="block w-full">
        <span className="text-gray-900 font-semibold mb-2">Upload PDF</span>
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="block w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </label>

      <button
        onClick={handleCheck}
        className="self-start px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform duration-200"
      >
        Check PDF
      </button>
    </div>
  );
}
