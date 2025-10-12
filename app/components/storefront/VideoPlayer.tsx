"use client";

interface iVideoPlayerProps {
    src : string,
    autoPlay?: boolean;
    controls?: boolean;
    loop?: boolean;
    muted?: boolean;
    className?: string;
}

export function VideoPlayer() {
    const videoConfig = {
        src: "https://lattafa.com/wp-content/uploads/2025/07/Lattafa-Ice-on-Fire-Web.mp4",
        autoPlay: true,
        controls: false,
        loop: true,
        muted: true,
        className: "",
  };
    return (
    <div className={`relative w-full overflow-hidden rounded-xl ${videoConfig.className} mt-28`}>
      <video
        src={videoConfig.src} // works for both local & remote
        controls={videoConfig.controls}
        autoPlay={videoConfig.autoPlay}
        loop={videoConfig.loop}
        muted={videoConfig.muted}
        playsInline
        preload="metadata"
        className="w-full h-auto rounded-xl"
      >
        Your browser does not support the video tag.
      </video>
    </div>
    );
}