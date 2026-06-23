import { Handle } from 'reactflow';
import { Settings2 } from 'lucide-react'; // Icon example, maybe we can pass an icon later

export const BaseNode = ({ id, label, children, handles, icon: Icon }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 min-w-[250px] transition-all hover:shadow-xl hover:-translate-y-1">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-xl px-4 py-3 text-white flex items-center gap-2">
        {Icon ? <Icon size={18} /> : <Settings2 size={18} />}
        <span className="font-semibold text-sm tracking-wide">{label}</span>
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
            background: h.type === 'source' ? '#10b981' : '#6366f1', // emerald for source, indigo for target
            border: '2px solid white',
            ...h.style
          }}
        />
      ))}
    </div>
  );
};
