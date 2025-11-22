"use client";

import { useState } from "react";
import PDFUpload from "@/components/PDFUpload";
import RuleInput from "@/components/RuleInput";
import ResultsTable from "@/components/ResultsTable";

export default function DashboardPage() {
  const [results, setResults] = useState<any[]>([]);
  const [rules, setRules] = useState<string[]>([
    "The document must have a purpose section.",
    "The document must mention at least one date.",
    "The document must define at least one term."
  ]);

  return (
    <div className="p-6 flex flex-col gap-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-indigo-700">PDF Checker Dashboard</h1>

      {/* Rules Input */}
      <RuleInput rules={rules} setRules={setRules} />

      {/* PDF Upload + Preview */}
      <PDFUpload rules={rules} setResults={setResults} />

      {/* Results Table */}
      {results.length > 0 && <ResultsTable results={results} />}
    </div>
  );
}
