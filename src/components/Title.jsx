import React from "react";

function Title({
  children,
  subtitle,
  align = "center",
  light = false,
}) {
  const containerAlignment =
    align === "left"
      ? "items-start text-left"
      : "items-center text-center";

  const titleColor = light ? "text-[#F5F2ED]" : "text-[#0D0D0D]";

  const subtitleColor = light
    ? "text-[#CFC9C2]"
    : "text-[#66615D]";

  const decorationColor = light
    ? "text-[#D6B892]"
    : "text-[#8B5E3C]";

  return (
    <div className={`flex flex-col ${containerAlignment} mb-12`}>
      <span
        className={`mb-2 text-lg ${decorationColor}`}
      >
        ✦
      </span>

      <h2
        className={`
          text-3xl
          sm:text-4xl
          md:text-5xl
          font-extrabold
          leading-tight
          tracking-tight
          ${titleColor}
        `}
      >
        {children}
      </h2>

      <div
        className={`
          mt-4
          h-[3px]
          w-14
          bg-gradient-to-r
          from-[#5C3825]
          to-[#D6B892]
        `}
      />

      {subtitle && (
        <p
          className={`
            max-w-2xl
            mt-4
            text-base
            leading-relaxed
            ${subtitleColor}
          `}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default Title;