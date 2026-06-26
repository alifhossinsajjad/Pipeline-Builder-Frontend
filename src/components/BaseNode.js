import { Handle } from 'reactflow';
import { Settings2, X } from 'lucide-react'; 
import { useStore } from '../store';

export const BaseNode = ({ id, label, children, handles, icon: Icon }) => {
  const removeNode = useStore((state) => state.removeNode);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 min-w-[250px] transition-all hover:shadow-xl hover:-translate-y-1">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-xl px-4 py-3 text-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          {Icon ? <Icon size={18} /> : <Settings2 size={18} />}
          <span className="font-semibold text-sm tracking-wide">{label}</span>
        </div>
        <button 
          onClick={() => removeNode(id)} 
          className="hover:text-red-300 transition-colors p-1"
          title="Delete Node"
        >
          <X size={16} />
        </button>
      </div>
      <div className="p-4 flex flex-col gap-4">
        {children}
      </div>
      {handles && handles.map((h, i) => (
        <Handle
          key={h.id || i}
          type={h.type}
          position={h.position}
          id={h.id}
          style={{
            width: '12px',
            height: '12px',
            background: h.type === 'source' ? '#10b981' : '#6366f1', 
            border: '2px solid white',
            ...h.style
          }}
        />
      ))}
    </div>
  );
};
