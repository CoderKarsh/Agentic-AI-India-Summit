import React from "react";

export default function InsightsDialogueConnection({
  className = "",
  alt = "Event Collage ",
  ...props
}) {
  const [isLarge, setIsLarge] = React.useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia && window.matchMedia("(min-width: 768px)").matches;
  });

  React.useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (ev) => setIsLarge(ev.matches);
    // Some browsers support addEventListener on MediaQueryList
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);
    // set initial
    setIsLarge(mq.matches);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, []);

  const src = isLarge ? "/EventCollageL.svg" : "/EventCollageP.svg";

  return (
    <div className={className} {...props}>
      <img src={src} alt={alt} className="w-full h-auto block" />
    </div>
  );
}
