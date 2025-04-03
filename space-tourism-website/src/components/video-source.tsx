export function VideoSource({ source }: { source: string }) {
  return (
    <div className="fixed inset-0 w-full h-full bg-black -z-50 animate-fade-in">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        preload="auto"
      >
        <source src={source} type="video/webm" />
      </video>
    </div>
  );
}
