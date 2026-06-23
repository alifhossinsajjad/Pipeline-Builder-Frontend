import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';
import { Mail } from 'lucide-react';

export const EmailNode = ({ id, data }) => {
  const [recipient, setRecipient] = useState(data?.recipient || 'user@example.com');
  const [subject, setSubject] = useState(data?.subject || 'Hello from VectorShift!');

  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-trigger` },
    { type: 'source', position: Position.Right, id: `${id}-status` }
  ];

  return (
    <BaseNode id={id} label="Email Node" handles={handles} icon={Mail}>
      <div className="flex flex-col gap-2">
        <label className="flex flex-col text-sm font-medium text-gray-700">
          To:
          <input 
            type="email" 
            value={recipient} 
            onChange={(e) => setRecipient(e.target.value)} 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1 border"
          />
        </label>
        <label className="flex flex-col text-sm font-medium text-gray-700">
          Subject:
          <input 
            type="text" 
            value={subject} 
            onChange={(e) => setSubject(e.target.value)} 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1 border"
          />
        </label>
      </div>
    </BaseNode>
  );
}
