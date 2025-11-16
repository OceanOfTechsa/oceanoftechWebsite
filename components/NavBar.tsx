"use client";

import ModeToggle from "@/components/ModeToggle";
import NavMegaMenu from "@/components/NavMegaMenu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
  SheetClose,           // ← THIS IS THE KEY
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import LinkPreview from "@/components/ui/link-preview";
import AppSettings from "@/Oceanoftech.Business/ConfigurationBusiness/AppSettings";

const NavBar = (): React.JSX.Element => {
  const pathname = usePathname();
  const [navOffset, setNavOffset] = React.useState(0);
  const [scrolled, setScrolled] = React.useState(false);
  const ticking = React.useRef(false);
  const lastScrollY = React.useRef(0);
  const effectTriggered = React.useRef(false);
  const animationTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Your existing scroll effect (unchanged)
  React.useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY < 80) {
            effectTriggered.current = false;
            setNavOffset(0);
            setScrolled(false);
            if (animationTimeoutRef.current) {
              clearTimeout(animationTimeoutRef.current);
              animationTimeoutRef.current = null;
            }
          }

          if (!effectTriggered.current && currentScrollY > 80) {
            effectTriggered.current = true;
            setScrolled(true);
            setNavOffset(-300);
            animationTimeoutRef.current = setTimeout(() => {
              setNavOffset(0);
              animationTimeoutRef.current = null;
            }, 280);
          }

          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current);
    };
  }, []);

  return (
    <header
      style={{
        transform: `translateY(${navOffset}px)`,
        transition:
          "transform 0.35s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.35s ease",
        opacity: navOffset === 0 ? 1 : 0.95,
      }}
      className={`w-full bg-transparent dark:text-white backdrop-blur-md fixed top-0 left-0 z-50 will-change-transform transition-all ease-in-out duration-500
        ${!scrolled ? "py-3 bg-transparent" : "py-0 border-b bg-white/80 dark:bg-[#161618]"}`}
    >
      <nav className="p-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/Logo.svg"
              width={38}
              height={38}
              alt="Ocean of Tech Logo"
              priority
              loading="eager"
              quality={100}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {AppSettings.NavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative px-1 transition-colors 
                  ${pathname === link.href ? "text-[#0B9944] font-semibold" : "hover:text-[#0B9944]"}
                  after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 
                  after:bg-[#0B9944] after:transition-all after:duration-300 
                  hover:after:w-full
                `}
              >
                {link.label}
              </Link>
            ))}
            <NavMegaMenu />
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2 ps-2">
            <ModeToggle />
            <Button className="bg-[#202124] hover:bg-[#3c3e41] text-white rounded-[0.2rem]">
              <span className="flex gap-2 items-center">
                <FaRegUserCircle />
                <LinkPreview url="https://oceanoftechsa.com">Sign in</LinkPreview>
              </span>
            </Button>
            <Button className="bg-[#09b850] hover:bg-[#0B9944] text-white rounded-[0.2rem]">
              <Link href="/contact" className="px-[0.5rem] py-[0.5rem]">
                Contact us
              </Link>
            </Button>
          </div>

          {/* Mobile Menu – FIXED */}
          <div className="md:hidden flex items-center gap-3">
            <ModeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-8 w-8" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="p-6 flex flex-col gap-6 w-[85vw]">
                <SheetHeader className="sr-only">
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col gap-5 mt-6">
                  {AppSettings.NavLinks.map((link) => (
                    // SheetClose wraps the link → closes sheet on click
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className={`text-lg font-medium transition-colors ${
                          pathname === link.href
                            ? "text-[#0B9944]"
                            : "text-foreground hover:text-[#09b850]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}

                  <div className="pt-4 border-t border-border">
                    <SheetClose asChild>
                      <div className="w-full">
                        <NavMegaMenu />
                      </div>
                    </SheetClose>
                  </div>
                </nav>

                <div className="flex flex-col gap-3 mt-auto">
                  <SheetClose asChild>
                    <Button className="w-full bg-[#202124] hover:bg-[#3c3e41] text-white rounded-[0.2rem] justify-start">
                      <FaRegUserCircle className="mr-2" />
                      Sign in
                    </Button>
                  </SheetClose>

                  <SheetClose asChild>
                    <Button asChild className="w-full bg-[#0B9944] hover:bg-[#09b850] text-white rounded-[0.2rem]">
                      <Link href="/contact">Contact us</Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;