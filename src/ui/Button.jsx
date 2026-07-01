import { Slot } from "@radix-ui/react-slot";

const Button = ({
  className = "",
  size = "default",
  asChild = false,
  children,
  ...props
}) => {
  const Comp = asChild ? Slot : "button";

  const baseClasses =
    "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all duration-300";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <Comp
      className={`${baseClasses} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </Comp>
  );
};

export default Button;
