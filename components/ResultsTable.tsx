interface ResultsTableProps {
  results: any[];
}

export default function ResultsTable({ results }: ResultsTableProps) {
  return (
    <table className="w-full border-collapse border border-gray-300 mt-4">
      <thead>
        <tr className="bg-indigo-100">
          <th className="border p-2">Rule</th>
          <th className="border p-2">Status</th>
          <th className="border p-2">Evidence</th>
          <th className="border p-2">Reasoning</th>
          <th className="border p-2">Confidence</th>
        </tr>
      </thead>
      <tbody>
        {results.map((r, i) => (
          <tr key={i} className="even:bg-gray-100">
            <td className="border p-2">{r.rule}</td>
            <td className="border p-2">{r.status}</td>
            <td className="border p-2">{r.evidence}</td>
            <td className="border p-2">{r.reasoning}</td>
            <td className="border p-2">{r.confidence}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
