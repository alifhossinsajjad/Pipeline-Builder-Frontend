import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../components/BaseNode";
import { Database } from "lucide-react";

export const DatabaseNode = ({ id, data }) => {
  const [dbName, setDbName] = useState(data?.dbName || "PostgreSQL");
  const [query, setQuery] = useState(data?.query || "SELECT * FROM users;");

  const handles = [
    { type: "target", position: Position.Left, id: `${id}-query-input` },
    { type: "source", position: Position.Right, id: `${id}-result` },
  ];

  return (
    <BaseNode id={id} label="Database" handles={handles} icon={Database}>
      <div className="flex flex-col gap-2">
        <label className="flex flex-col text-sm font-medium text-gray-700">
          DB Name:
          <input
            type="text"
            value={dbName}
            onChange={(e) => setDbName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1 border"
          />
        </label>
        <label className="flex flex-col text-sm font-medium text-gray-700">
          Query:
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            rows={2}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1 border resize-none font-mono text-xs"
          />
        </label>
      </div>
    </BaseNode>
  );
};
