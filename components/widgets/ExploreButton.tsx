import { ArrowRight } from "lucide-react";

interface ExploreButtonProps {
  text?: string;
  onClick?: () => void;
  showIcon?: boolean;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
}

export default function ExploreButton({
  text = "Explore",
  onClick,
  showIcon = true,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  className = "",
}: ExploreButtonProps) {
  const baseStyles =
    "font-semibold transition-all duration-300 flex items-center justify-center gap-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-primary via-[#A84545] to-[#8B3A3A] text-white hover:shadow-[0_8px_25px_rgba(255,255,255,0.4)] shadow-[0_4px_15px_rgba(255,255,255,0.3)] hover:from-[#8B3A3A] hover:via-[#A84545] hover:to-primary disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-0 focus:ring-offset-0",
    secondary:
      "bg-gradient-to-r from-accent to-[#D4A574] text-primary hover:opacity-90 shadow-[0_4px_15px_rgba(255,255,255,0.3)] focus:ring-accent disabled:opacity-50 disabled:cursor-not-allowed",
    outline:
      "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`}
      aria-label={text}
    >
      {text}
      {showIcon && <ArrowRight size={size === "sm" ? 16 : size === "md" ? 20 : 24} />}
    </button>
  );
}
