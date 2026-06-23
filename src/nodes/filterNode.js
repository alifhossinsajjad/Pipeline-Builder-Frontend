import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';
import { Filter } from 'lucide-react';

export const FilterNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || 'x > 10');

  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-input` },
    { type: 'source', position: Position.Right, id: `${id}-true`, style: { top: '33%', background: '#10b981' } }, // Green for True
    { type: 'source', position: Position.Right, id: `${id}-false`, style: { top: '66%', background: '#ef4444' } } // Red for False
  ];

  return (
    <BaseNode id={id} label="Filter" handles={handles} icon={Filter}>
      <div className="flex flex-col gap-2">
        <label className="flex flex-col text-sm font-medium text-gray-700">
          Condition:
          <input 
            type="text" 
            value={condition} 
            onChange={(e) => setCondition(e.target.value)} 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1 border font-mono"
          />
        </label>
      </div>
    </BaseNode>
  );
}
