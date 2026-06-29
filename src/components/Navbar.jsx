import Button from "@/ui/Button";
import { Menu } from "lucide-react";


const navLink = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonial", label: "Testimonial" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          BH<span className="text-primary">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLink.map((link, ind) => (
              <a
                href={link.href}
                key={ind}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button size="sm">Contact Me</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-foreground">
            <Menu size={24}></Menu>
        </button>

        {/* Mobile Menu */}
        <div className="md:hidden glass-strong">

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
