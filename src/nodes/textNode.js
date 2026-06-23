import { useState, useRef, useEffect } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';
import { Type } from 'lucide-react';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  useEffect(() => {
    // Extract variables using regex
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = [];
    let match;
    while ((match = regex.exec(currText)) !== null) {
      matches.push(match[1]);
    }
    const uniqueVars = [...new Set(matches)];
    setVariables(uniqueVars);

    // Auto-resize textarea to fit content
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      
      // Calculate width based on text length to allow node resizing
      // We set a minimum width but allow it to grow by adjusting cols
      const lines = currText.split('\n');
      const maxLineLength = Math.max(...lines.map(line => line.length));
      // Base width is handled by min-w in BaseNode, but we can set cols
      textareaRef.current.cols = Math.max(25, maxLineLength + 2);
    }
  }, [currText]);

  // Create handles dynamically based on variables
  const handles = variables.map((variable, index) => ({
    type: 'target',
    position: Position.Left,
    id: `${id}-${variable}`,
    // Distribute handles evenly along the left edge
    style: { top: `${((index + 1) * 100) / (variables.length + 1)}%` }
  }));

  // Add the default output handle on the right
  handles.push({
    type: 'source',
    position: Position.Right,
    id: `${id}-output`
  });

  return (
    <BaseNode id={id} label="Text" handles={handles} icon={Type}>
      <div className="flex flex-col gap-2 w-full">
        <label className="flex flex-col text-sm font-medium text-gray-700 w-full">
          Text:
          <textarea 
            ref={textareaRef}
            value={currText} 
            onChange={handleTextChange} 
            className="mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1 border overflow-hidden resize-none bg-white font-mono"
            rows={1}
            style={{ minWidth: '100%' }}
          />
        </label>
      </div>
    </BaseNode>
  );
}
