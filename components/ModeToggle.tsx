"use client";

import {motion, AnimatePresence} from "framer-motion";
import {useTheme} from "next-themes";
import {Button} from "@/components/ui/button";
import {Sun, Moon} from "lucide-react";
import {useEffect, useState} from "react";

const ModeToggle = () => {
    const {theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div
            className="md:border-s md:border-gray-300 md:ps-3 flex items-center h-[20px] dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500">
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="relative cursor-pointer "
                aria-label="Toggle theme"
            >
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={theme}
                        initial={{opacity: 0, rotate: -90, scale: 0.5}}
                        animate={{opacity: 1, rotate: 0, scale: 1}}
                        exit={{opacity: 0, rotate: 90, scale: 0.5}}
                        transition={{duration: 0.3}}
                    >
                        {theme === "dark" ? <Sun className="h-5 w-5 text-yellow-400"/> :
                            <Moon className="h-5 w-5 text-slate-700"/>}
                    </motion.div>
                </AnimatePresence>
            </Button>
        </div>
    )
}

export default ModeToggle;