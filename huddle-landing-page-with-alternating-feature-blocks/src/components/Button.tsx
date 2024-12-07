interface ButtonProps {
  children: React.ReactNode;
}

export function Button({ children }: ButtonProps) {
  return (
    <button className="bg-primary text-white px-12 py-3 rounded-full hover:brightness-125 active:scale-95 transition-all duration-200 hover:scale-[1.03]">
      {children}
    </button>
  );
}
