import React from "react";

function Button({
  children,
  type = "button",
  variant = "primary",
  onClick,
  href,
  className = "",
}) {
  const variants = {
    primary:
      "bg-[#6B4226] text-white border border-[#C49A6C] hover:bg-[#8B5E3C] hover:text-white",

    secondary:
      "bg-transparent text-[#5C3825] border border-[#5C3825] hover:bg-[#5C3825] hover:text-white",

    dark:
      "bg-[#0D0D0D] text-white border border-[#0D0D0D] hover:bg-[#2A1A14]",

    light:
      "bg-[#F5F2ED] text-[#171513] border border-[#F5F2ED] hover:bg-[#D6B892]",
  };

  const baseClasses =
    "inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm tracking-wide transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg cursor-pointer";

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  const handleClick = (event) => {
    if (onClick) onClick(event);

    if (!href || href === "/") return;

    if (href === "/contato" && window.location.pathname === "/") {
      event.preventDefault();
      const target = document.getElementById("contato");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  if (href) {
    return (
      <a href={href} onClick={handleClick} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export default Button;