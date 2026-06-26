// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className="p-4 h-full overflow-y-auto w-full">
            <h2 className="text-center text-lg font-bold text-gray-800 mb-4 border-b pb-2">
                Nodes
            </h2>
            <div className="flex flex-col gap-3">
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='api' label='API' />
                <DraggableNode type='database' label='Database' />
                <DraggableNode type='email' label='Email' />
                <DraggableNode type='filter' label='Filter' />
                <DraggableNode type='delay' label='Delay' />
            </div>
        </div>
    );
};
