interface ButtonProps {
  children: React.ReactNode;
}

export function Button({ children }: ButtonProps) {
  return (
    <button className="bg-primary text-white px-12 py-3 rounded-full hover:brightness-125">
      {children}
    </button>
  );
}
