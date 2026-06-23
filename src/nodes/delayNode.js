import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';
import { Clock } from 'lucide-react';

export const DelayNode = ({ id, data }) => {
  const [seconds, setSeconds] = useState(data?.seconds || 5);

  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-input` },
    { type: 'source', position: Position.Right, id: `${id}-output` }
  ];

  return (
    <BaseNode id={id} label="Delay" handles={handles} icon={Clock}>
      <div className="flex flex-col gap-2">
        <label className="flex flex-col text-sm font-medium text-gray-700">
          Wait (Seconds):
          <input 
            type="number" 
            min="1"
            value={seconds} 
            onChange={(e) => setSeconds(e.target.value)} 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1 border"
          />
        </label>
      </div>
    </BaseNode>
  );
}
