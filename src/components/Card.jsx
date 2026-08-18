import React from "react";

function Card({
  children,
  title,
  description,
  image,
  price,
  className = "",
}) {
  return (
    <article
      className={`
        group
        overflow-hidden
        border
        border-[#E2DCD5]
        bg-white
        shadow-[0_10px_30px_rgba(42,26,20,0.08)]
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[#8B5E3C]
        hover:shadow-[0_18px_40px_rgba(42,26,20,0.15)]
        ${className}
      `}
    >
      {image && (
        <div className="h-52 w-full overflow-hidden bg-[#2A1A14]">
          <img
            src={image}
            alt={title || "Dragão Barbado"}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        </div>
      )}

      <div className="p-6">
        {title && (
          <h3 className="mb-2 text-xl font-extrabold text-[#2A1A14]">
            {title}
          </h3>
        )}

        {description && (
          <p className="mb-5 text-sm leading-relaxed text-[#66615D]">
            {description}
          </p>
        )}

        {children}

        {price && (
          <span className="block text-xl font-extrabold text-[#6B4226]">
            {price}
          </span>
        )}
      </div>
    </article>
  );
}

export default Card;