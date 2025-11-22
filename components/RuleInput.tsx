"use client";

import { useState } from "react";

interface RuleInputProps {
  rules: string[];
  setRules: (rules: string[]) => void;
}

export default function RuleInput({ rules, setRules }: RuleInputProps) {
  const [newRule, setNewRule] = useState("");

  const handleAdd = () => {
    if (!newRule.trim()) return;
    setRules([...rules, newRule.trim()]);
    setNewRule("");
  };

  const handleRemove = (index: number) => {
    setRules(rules.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col gap-3 bg-white/20 p-4 rounded-xl backdrop-blur-md border border-gray-200">
      <h3 className="text-indigo-700 font-semibold text-lg">Rules</h3>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Add a new rule"
          className="flex-1 p-2 border rounded bg-white/30 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
          value={newRule}
          onChange={(e) => setNewRule(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          Add
        </button>
      </div>

      {rules.length > 0 && (
        <ul className="list-disc pl-5 text-gray-800">
          {rules.map((rule, i) => (
            <li key={i} className="flex justify-between items-center mb-1">
              <span>{rule}</span>
              <button
                onClick={() => handleRemove(i)}
                className="text-red-500 hover:text-red-700 font-bold ml-2"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
