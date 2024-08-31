import { FaRegFrown } from "react-icons/fa";

const Placeholder = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full py-10 text-center">
      <FaRegFrown className="text-6xl text-gray-500 mb-4" />{" "}
      <h2 className="text-xl font-semibold text-gray-300">
        No Campaigns Available
      </h2>
      <p className="text-gray-400 mt-2">
        You haven&apos;t created any campaigns yet. Start by creating your first
        campaign to see it listed here!
      </p>
    </div>
  );
};

export default Placeholder;
