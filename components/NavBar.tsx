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
  SheetClose,  
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import LinkPreview from "@/components/ui/link-preview";
import AppSettings from "@/Oceanoftech.Business/ConfigurationBusiness/AppSettings";
import { CgMenuLeft } from "react-icons/cg";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const NavBar = (): React.JSX.Element => {
  const pathname = usePathname();
  const [navOffset, setNavOffset] = React.useState(0);
  const [scrolled, setScrolled] = React.useState(false);
  const ticking = React.useRef(false);
  const lastScrollY = React.useRef(0);
  const effectTriggered = React.useRef(false);
  const animationTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

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
            }, 220);
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
          "transform 0.50s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.35s ease-in-out",
        opacity: navOffset === 0 ? 1 : 0.95,
      }}
      className={`w-full bg-transparent dark:text-white fixed top-0 left-0 z-50 will-change-transform transition-all ease-in-out duration-500
        ${!scrolled ? "py-1 md:py-3 bg-transparent" : "py-0 border-b bg-white dark:bg-[#161618] shadow-stone-200"}`}
    >
      <nav className="p-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-start">
            <svg width="38" height="38" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="31" cy="31" r="31" fill="#09B850"/>
              <path d="M48.3844 33.2596C47.0282 33.2596 45.9289 32.1602 45.9289 30.8041C45.9289 29.448 47.0282 28.3486 48.3844 28.3486C49.7405 28.3486 50.8398 29.448 50.8398 30.8041C50.8398 32.1602 49.7405 33.2596 48.3844 33.2596Z" fill="white"/>
              <path d="M13.0247 35.3357H13.3685C14.2034 35.3357 14.8418 34.6972 14.8418 33.8624V27.7458C14.8418 26.9109 14.2034 26.2725 13.3685 26.2725H13.0247C12.1899 26.2725 11.5514 26.9109 11.5514 27.7458V33.9115C11.5514 34.6972 12.1899 35.3357 13.0247 35.3357Z" fill="white"/>
              <path d="M19.5579 41.916H19.9017C20.7366 41.916 21.375 41.2776 21.375 40.4427V21.1647C21.375 20.3298 20.7366 19.6914 19.9017 19.6914H19.5579C18.7231 19.6914 18.0846 20.3298 18.0846 21.1647V40.3936C18.0846 41.2285 18.7722 41.916 19.5579 41.916Z" fill="white"/>
              <path d="M26.138 37.715H26.4818C27.3167 37.715 27.9551 37.0766 27.9551 36.2417V25.3664C27.9551 24.5315 27.3167 23.8931 26.4818 23.8931H26.138C25.3032 23.8931 24.6647 24.5315 24.6647 25.3664V36.2417C24.6647 37.0766 25.3032 37.715 26.138 37.715Z" fill="white"/>
              <path d="M44.3083 31.0987C44.0137 32.1265 43.377 32.714 42.593 32.8413C42.1519 32.9295 41.7599 33.2233 41.5835 33.6153L35.8301 46.5149C35.6146 46.9751 35.1444 47.2688 34.6351 47.2688H33.9493C33.2144 47.2688 32.646 46.7004 32.646 45.9656V16.0334C32.646 15.2986 33.2144 14.7302 33.9493 14.7302H34.6842C35.1935 14.7302 35.6637 15.0239 35.8792 15.4841L41.6326 28.4328C41.8091 28.8739 42.201 29.1186 42.6421 29.2068C43.4261 29.3832 44.0628 29.9517 44.3574 30.9794C44.3574 31.1558 44.3574 31.3323 44.3083 31.0987ZM39.3571 30.7147L36.6141 24.1027C36.4086 23.5643 35.5864 23.7307 35.5864 24.3183V37.2107C35.5864 37.7983 36.4086 37.9647 36.6141 37.4263L39.3571 30.8143C39.4845 30.5205 39.4845 30.1876 39.3571 30.7147Z" fill="white"/>
            </svg>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {AppSettings.NavLinks.map((link:  {label: string, href: string},) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      relative px-1 transition-colors font-[500] text-[16.008px]
                      ${isActive ? "text-[#09b850] font-semibold" : "hover:text-[#09b850] dark:hover:hover:text-[#0B9944] text-[#606261] dark:text-[#ffffffd9]"}
                      after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 
                      after:bg-[#0B9944] after:transition-all after:duration-300 
                      hover:after:w-full 
                    `}
                  >
                    {link.label}
                  </Link>
                );
              })}
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
              <Link href="/contact" className="flex gap-2 items-center justify-start">
                <TfiHeadphoneAlt />
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
                  <CgMenuLeft className="h-8 w-8" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="p-6 flex flex-col gap-6 w-[65vw]">
                <SheetHeader className="sr-only">
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col gap-5 mt-6">
                  {AppSettings.NavLinks.map((link) => (
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
                      <Link href="/contact" className="flex gap-2 items-center justify-start">
                        <TfiHeadphoneAlt />
                        Contact us
                      </Link>
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