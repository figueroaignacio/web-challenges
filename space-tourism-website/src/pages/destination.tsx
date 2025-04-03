import { VideoSource } from "../components/video-source";

export function Destination() {
  return (
    <div>
      <VideoSource source="/videos/video1.webm" />
      <h1>Destination</h1>
    </div>
  );
}
