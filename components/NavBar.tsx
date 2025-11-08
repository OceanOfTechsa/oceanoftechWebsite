"use client"

import { navLinks } from "@/AppSettings";
import ModeToggle from "@/components/ModeToggle";
import NavMegaMenu from "@/components/NavMegaMenu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger,  SheetTitle,  SheetHeader, } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import LinkPreview from "@/components/ui/link-preview";

const NavBar = (): React.JSX.Element => {
    const pathname: string = usePathname();
    const [navOffset, setNavOffset] = React.useState(0);
    const [scrolled, setScrolled] = React.useState(false);
    const ticking: React.RefObject<boolean> = React.useRef(false);
    const lastScrollY: React.RefObject<number> = React.useRef(0);
    const effectTriggered: React.RefObject<boolean> = React.useRef(false);

    const animationTimeoutRef: React.RefObject<NodeJS.Timeout | null> = React.useRef<NodeJS.Timeout | null>(null);

    React.useEffect((): void | (() => void) => {
        const handleScroll = (): void => {
            if (!ticking.current) {
                window.requestAnimationFrame((): void => {
                    const currentScrollY: number = window.scrollY;

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
        return (): void => {
            window.removeEventListener("scroll", handleScroll);
            if (animationTimeoutRef.current) {
                clearTimeout(animationTimeoutRef.current);
            }
        };
    }, []);
    return (
        <header
            style={{
                transform: `translateY(${navOffset}px)`,
                transition:"transform 0.35s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.35s ease",
                opacity: navOffset === 0 ? 1 : 0.95,
            }}
            className={`w-full bg-transparent dark:text-white backdrop-blur-md fixed top-0 left-0 z-50 will-change-transform transition-all ease-in-out duration-500
        ${!scrolled ? "py-3 bg-transparent" : "py-0 border-b bg-white/80 dark:bg-[#161618] "}`}
        >

        <nav className="p-3">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Brand */}
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/Logo.svg"
                            width={38}
                            height={38}
                            alt="Brand Logo"
                            priority
                            loading="eager"
                            quality={100}
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link: { label: string, href: string }): React.JSX.Element => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`
                                    relative px-1 transition-colors 
                                    ${pathname === link.href ? "text-[#0B9944] font-semibold"
                                    : "hover:text-[#0B9944]"}
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
                        <Button className="bg-[#202124] hover:bg-[#3c3e41] text-white  rounded-[0.2rem]">
                            <span className="flex gap-2 items-center">
                                <FaRegUserCircle />
                                <LinkPreview url="https://oceanoftechsa.com">
                                    Sign in
                                </LinkPreview>
                            </span>
                        </Button>
                        <Button className="bg-[#09b850] hover:bg-[#0B9944] text-white inline-block transition-all duration-500 ease-in-out rounded-[0.2rem]">
                            <Link href="/contact" className="px-[0.5rem] py-[0.5rem]">Contact us</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden flex items-center">
                        <ModeToggle />
                        <Sheet>
                            <SheetTrigger asChild className="cursor-pointer ml-2">
                                <Button variant="outline" size="icon" >
                                    <Menu className="h-8 w-8" />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="p-6 flex flex-col gap-6">
                                <SheetHeader className="hidden">
                                      <SheetTitle>Navigation</SheetTitle>
                                </SheetHeader>
                                <nav className="flex flex-col gap-4">
                                    {navLinks.map((link: { label: string, href: string }): React.JSX.Element => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className={`text-lg ${
                                                pathname === link.href
                                                    ? "text-[#0B9944] font-semibold"
                                                    : "hover:text-[#09B850]"
                                            } transition-colors`}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                    <div className="p-3">
                                        <NavMegaMenu />
                                    </div>
                                </nav>
                                <div className="flex gap-2 items-center">
                                    <Button className="bg-[#202124] hover:bg-[#3c3e41] text-white rounded-[0.2rem]">
                                        <Link href="/contact" className="flex gap-2 items-center"><FaRegUserCircle /> Sign in</Link>
                                    </Button>
                                    <Button className="bg-[#0B9944] hover:bg-[#09B850] text-white rounded-[0.2rem]">
                                        <Link href="/contact">Contact us</Link>
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default NavBar;