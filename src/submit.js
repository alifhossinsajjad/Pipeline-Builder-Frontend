import { useStore } from "./store";
import { shallow } from "zustand/shallow";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);

  const handleSubmit = async () => {
    try {

      const loadingToast = toast.loading("Analyzing pipeline...");

      const response = await axios.post(
        "http://localhost:8000/pipelines/parse",
        {
          nodes: nodes,
          edges: edges,
        },
      );

      const { num_nodes, num_edges, is_dag } = response.data;

      toast.dismiss(loadingToast);

      toast.success(
        <div>
          <p className="font-bold">Pipeline Analysis Complete!</p>
          <ul className="text-sm mt-1">
            <li>Nodes: {num_nodes}</li>
            <li>Edges: {num_edges}</li>
            <li>Is DAG: {is_dag ? "✅ Yes" : "❌ No (Cycle Detected)"}</li>
          </ul>
        </div>,
        { duration: 5000 },
      );
    } catch (error) {
      console.error(error);
      toast.error(
        "Failed to submit pipeline to backend. Is the backend running?",
      );
    }
  };

  return (
    <>
      <Toaster position="bottom-center" />
      <div className="flex items-center justify-center p-4">
        <button
          onClick={handleSubmit}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 text-lg tracking-wide"
        >
          Submit Pipeline
        </button>
      </div>
    </>
  );
};
