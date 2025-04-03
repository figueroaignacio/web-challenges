export function CrewTab({
  isActive,
  onClick,
}: {
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`py-2 my-6 text-start transition-colors duration-300 size-8 rounded-full hover:bg-white cursor-pointer ${
        isActive ? "bg-white" : "bg-white/50 "
      }`}
      onClick={onClick}
      role="tab"
      aria-selected={isActive}
    />
  );
}
