import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className="flex h-screen w-full flex-col font-sans">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Toolbar */}
        <div className="w-64 border-r border-gray-200 bg-gray-50 flex flex-col h-full z-10 shadow-[2px_0_8px_rgba(0,0,0,0.05)]">
          <PipelineToolbar />
        </div>

        {/* Main Canvas Area */}
        <div className="flex-1 relative bg-white">
          <PipelineUI />
        </div>
      </div>

      {/* Bottom Submit Area */}
      <div>
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;
