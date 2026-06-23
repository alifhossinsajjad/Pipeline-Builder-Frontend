import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';
import { LogOut } from 'lucide-react';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-value` }
  ];

  return (
    <BaseNode id={id} label="Output" handles={handles} icon={LogOut}>
      <div className="flex flex-col gap-2">
        <label className="flex flex-col text-sm font-medium text-gray-700">
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange} 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1 border"
          />
        </label>
        <label className="flex flex-col text-sm font-medium text-gray-700">
          Type:
          <select 
            value={outputType} 
            onChange={handleTypeChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1 border bg-white"
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
}
