import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';
import { Globe } from 'lucide-react';

export const APINode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || 'https://api.example.com');
  const [method, setMethod] = useState(data?.method || 'GET');

  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-trigger` },
    { type: 'source', position: Position.Right, id: `${id}-response` }
  ];

  return (
    <BaseNode id={id} label="API Node" handles={handles} icon={Globe}>
      <div className="flex flex-col gap-2">
        <label className="flex flex-col text-sm font-medium text-gray-700">
          Method:
          <select 
            value={method} 
            onChange={(e) => setMethod(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1 border bg-white"
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
        </label>
        <label className="flex flex-col text-sm font-medium text-gray-700">
          URL:
          <input 
            type="text" 
            value={url} 
            onChange={(e) => setUrl(e.target.value)} 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1 border"
          />
        </label>
      </div>
    </BaseNode>
  );
}
