import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';
import { BrainCircuit } from 'lucide-react';

export const LLMNode = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-system`, style: { top: `${100/3}%` } },
    { type: 'target', position: Position.Left, id: `${id}-prompt`, style: { top: `${200/3}%` } },
    { type: 'source', position: Position.Right, id: `${id}-response` }
  ];

  return (
    <BaseNode id={id} label="LLM" handles={handles} icon={BrainCircuit}>
      <div className="text-sm text-gray-600">
        This is an LLM node. Connect system and prompt inputs to generate a response.
      </div>
    </BaseNode>
  );
}
