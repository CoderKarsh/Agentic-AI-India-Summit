import React from "react";

// ImageMarquee: continuously scrolling, seamless marquee that duplicates the images
// Props:
// - images: array of image src strings
// - speed: duration in seconds for one full marquee loop (default: 24)
export default function ImageMarquee({ images = [], speed = 5 }) {
  // Duplicate images so the animation appears seamless when looping
  const items = [...images, ...images];

  return (
    <div className="marquee-outer w-full overflow-hidden">
      <div
        className="marquee-track flex items-center"
        style={{ animationDuration: `${speed}s` }}
        aria-hidden="true"
      >
        {items.map((src, i) => (
          <div className="marquee-item shrink-0" key={`m-${i}`}>
            <img src={src} alt="marquee" className="marquee-img" />
          </div>
        ))}
      </div>
    </div>
  );
}
