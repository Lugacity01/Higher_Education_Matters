/* eslint-disable react/prop-types */

import { cn } from "@/lib/utils";

const ImageHero = ({ videoSrc, imageSrc, children, className }) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen w-full bg-black/65 text-center",
        className,
      )}
    >
      {/* Conditionally render video or image based on provided props */}
      {videoSrc ? (
        <video
          src={videoSrc}
          autoPlay
          loop
          muted  // Mute the video to ensure autoplay works across all browsers
          playsInline  // Ensure video plays inline on mobile devices
          id="video-bg"
          className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
        ></video>
      ) : (
        imageSrc && (
          <img
            src={imageSrc}
            alt="Hero background"
            id="image-bg"
            className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
          />
        )
      )}

      <div className={cn("z-10 w-full px-6 text-left md:px-12 2xl:px-20")}>
        {children}
      </div>
    </div>
  );
};

export default ImageHero;
