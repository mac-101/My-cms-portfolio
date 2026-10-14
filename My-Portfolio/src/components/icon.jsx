// src/components/Icon.jsx
export default function Icon({ url, label, className = "h-6 w-6" }) {
  // No icon set: show the first letter instead of a gap
  if (!url) {
    return (
      <span
        aria-hidden="true"
        className={`${className} inline-flex items-center justify-center rounded bg-neutral-200 text-xs font-semibold text-neutral-700`}
      >
        {label.charAt(0)}
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className={`${className} inline-block bg-current`}
      style={{
        WebkitMaskImage: `url(${url})`,
        maskImage: `url(${url})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}