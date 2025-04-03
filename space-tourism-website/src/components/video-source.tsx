export function VideoSource({ source }: { source: string }) {
  return (
    <div className="absolute inset-0 w-full h-full bg-black -z-50">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        preload="auto"
      >
        <source src={source} type="video/webm" />
      </video>
    </div>
  );
}
