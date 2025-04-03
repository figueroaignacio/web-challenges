export function DestinationTab({
  name,
  isActive,
  onClick,
}: {
  name: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`py-2 border-b-4 transition-colors duration-300 ${
        isActive
          ? "border-white border-b-4"
          : "border-transparent hover:border-gray-200"
      }`}
      onClick={onClick}
      role="tab"
      aria-selected={isActive}
    >
      {name}
    </button>
  );
}
