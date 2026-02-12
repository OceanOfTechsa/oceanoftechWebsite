import {JSX} from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import Image from 'next/image';
import Link from "next/link";
import { IoLibraryOutline } from "react-icons/io5";

const NavMegaMenu = (): JSX.Element => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
                <span className="relative font-[500] px-1 transition-colors hover:text-[#0B9944] dark:hover:hover:text-[#0B9944] text-[#606261] dark:text-[#ffffffd9] flex items-center gap-2 cursor-pointer after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#0B9944] after:transition-all after:duration-300 hover:after:w-full">
                    Resources
                    <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4062 5.65625 17.6875 5.9375C17.9688 6.21875 17.9688 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1562 10.1875 14.25 10 14.25Z" fill="currentColor"/>
                    </svg>
                </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full bg-none shadow-0 p-0 border-0 md:w-[705px] lg:w-[750px] mt-4">
                <div className="w-full dark:shadow-card dark:bg-[#191b1d] backdrop-blur">
                    <div className="pt-2 md:pt-0 grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-0">
                        <div className="col-span-3 md:p-3">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-1">
                                <div className="flex flex-col">
                                    <div className="space-y-0.5">
                                        <span className="ms-2.5 font-semibold text-xs uppercase">About us</span>
                                        <Link className="mt-2 p-2 flex gap-x-3  focus:outline-none  rounded-md hover:bg-[#09b850]/10 hover:text-[#09b850] focus:bg-[#09b850]" href="/customer-stories">
                                            <svg className="shrink-0 size-4 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                                            </svg>
                                            <div className="grow">
                                                <p className="text-sm mb-0">
                                                   Customer stories
                                                </p>
                                            </div>
                                        </Link>

                                        <Link className="mt-2 p-2 flex gap-x-3  focus:outline-none  rounded-md hover:bg-[#09b850]/10 hover:text-[#09b850] focus:bg-[#09b850]" href="/pricing">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bank2 shrink-0 size-4 mt-0.5" viewBox="0 0 16 16">
                                                <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916zM12.375 6v7h-1.25V6zm-2.5 0v7h-1.25V6zm-2.5 0v7h-1.25V6zm-2.5 0v7h-1.25V6zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2M.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1z"/>
                                            </svg>
                                            <div className="grow">
                                                <p className="text-sm mb-0">Pricing</p>
                                            </div>
                                        </Link>

                                        <Link className="mt-2 p-2 flex gap-x-3  focus:outline-none  rounded-md hover:bg-[#09b850]/10 hover:text-[#09b850] focus:bg-[#09b850]" href="/mentorship">
                                            <svg className="shrink-0 size-4 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                                                <polyline points="14 2 14 8 20 8"/>
                                                <line x1="16" x2="8" y1="13" y2="13"/>
                                                <line x1="16" x2="8" y1="17" y2="17"/>
                                                <line x1="10" x2="8" y1="9" y2="9"/>
                                            </svg>
                                            <div className="grow">
                                                <p className="text-sm mb-0">Mentorship</p>
                                            </div>
                                        </Link>

                                        <Link className="mt-2 p-2 flex gap-x-3  focus:outline-none  rounded-md hover:bg-[#09b850]/10 hover:text-[#09b850] focus:bg-[#09b850]" href="/automation">
                                            <svg className="shrink-0 size-4 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                                            </svg>
                                            <div className="grow">
                                                <p className="text-sm mb-0">Automation</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <div className="space-y-0.5">
                                        <span className="ms-2.5 mb-2 font-semibold text-xs uppercase">Support</span>
                                        <Link className="mt-2 p-2 flex gap-x-3  focus:outline-none  rounded-md hover:bg-[#09b850]/10 hover:text-[#09b850] focus:bg-[#09b850]" href="/developer.hub">
                                            <svg className="shrink-0 size-4 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="4"/>
                                                <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/>
                                            </svg>
                                            <div className="grow">
                                                <p className="text-sm mb-0">
                                                    Developer Hub
                                                </p>
                                            </div>
                                        </Link>

                                        <Link className="mt-2 p-2 flex gap-x-3  focus:outline-none  rounded-md hover:bg-[#09b850]/10 hover:text-[#09b850] focus:bg-[#09b850]" href="/ui-library">
                                            <IoLibraryOutline />
                                            <div className="grow">
                                                <p className="text-sm mb-0">UI Library</p>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="mt-3 md:mt-7 space-y-0.5">
                                        <span className="ms-2.5 mb-2 font-semibold text-xs uppercase">Partners</span>
                                        <Link className="mt-2 p-2 flex gap-x-3  focus:outline-none  rounded-md hover:bg-[#09b850]/10 hover:text-[#09b850] focus:bg-[#09b850]" href="/become-a-partner">
                                            <svg className="shrink-0 size-4 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-6"/>
                                                <polyline points="14 2 14 8 20 8"/>
                                                <path d="M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                                <path d="M7 16.5 8 22l-3-1-3 1 1-5.5"/>
                                            </svg>
                                            <div className="grow">
                                                <p className="text-sm mb-0">
                                                    Become a Partner
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-2">
                            <div className="p-2 md:p-4 md:h-full md:flex-1 flex flex-col md:bg-gray-50 md:rounded-br-lg dark:bg-[#202124] rounded-lg">
                                <span className="mb-2 font-semibold text-xs uppercase">Our Blog Posts</span>
                                <Link className="group flex flex-row items-center md:items-start md:flex-col gap-4 md:gap-2 focus:outline-none group" href="/blog">
                                    <Image className="shrink-0 md:w-full size-28 object-cover rounded-lg" src="/menu-blog.jpg" alt="Our blog Image" title="Our blog Image" width={600} height={600} quality={100} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                                    <div className="grow">
                                        <p className="text-sm mb-0">
                                            Explore tech insights, tips, and trends to elevate your digital presence and empower your business.
                                        </p>
                                        <p className="mt-3 inline-flex items-center gap-x-1 text-sm decoration-2 hover:underline group-hover:text-green-500">
                                            Start reading
                                            <svg className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="m9 18 6-6-6-6"/>
                                            </svg>
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default NavMegaMenu;
