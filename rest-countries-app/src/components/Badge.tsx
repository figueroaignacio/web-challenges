export const Badge = ({label}: { label: string }) => {
  return (
    <span className="bg-blue-500 text-white text-xs font-medium mr-1 px-2.5 py-0.5 rounded">
      {label}
    </span>
  );
};
