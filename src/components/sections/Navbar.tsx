import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#clans", label: "Clans" },
  { href: "#rules", label: "Rules" },
  { href: "#join", label: "Join" },
];

function useNavbarVisibility() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    let frameId = 0;

    const updateVisibility = () => {
      frameId = 0;
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= lastScrollYRef.current || currentScrollY <= 100);
      lastScrollYRef.current = currentScrollY;
    };

    const handleScroll = () => {
      frameId ||= window.requestAnimationFrame(updateVisibility);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return isVisible;
}

export function Navbar() {
  const isVisible = useNavbarVisibility();

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-fit max-w-[calc(100%-1.5rem)] z-50 transition-[translate,opacity] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-[150%] opacity-0"
      }`}
    >
      <div className="h-16 flex items-center justify-center px-5 sm:px-8 bg-background/80 backdrop-blur-xl border border-border/50 shadow-[0_8px_30px_rgb(0,0,0,0.4)] rounded-full alliance-card-glow">
        <div className="flex items-center justify-center gap-4 sm:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="min-h-10 flex items-center font-mc text-[18px] sm:text-2xl hover:text-primary transition-colors drop-shadow-md"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
