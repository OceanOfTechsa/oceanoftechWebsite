"use client";

import {JSX} from "react";
import { motion, Variants } from "framer-motion";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, RefreshCw, Home, Bug, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Error({error,reset,}: {error: Error & { digest?: string };reset: () => void;}): JSX.Element {

    useEffect(() => {
        // Log to console (and potentially external service)
        console.error("Application error:", error);
    }, [error]);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
            },
        },
    };

   const isDevelopment: boolean = process.env.NODE_ENV === "development";

    return (
        <div className="w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto flex items-center justify-center">
            <motion.div
                className="max-w-2xl w-full text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Error Icon */}
                <motion.div variants={itemVariants} className="mb-8">
                    <div className="relative inline-block">
                        <motion.div
                            className="w-24 h-24 bg-gradient-to-br  from-orange-50 to-red-500 rounded-full flex items-center justify-center mb-6 mx-auto"
                            animate={{
                                scale: [1, 1.05, 1],
                                rotate: [0, 1, -1, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            }}
                        >
                            <AlertTriangle className="w-12 h-12 text-red-600" />
                        </motion.div>
                        <Badge variant="destructive" className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 dark:bg-red-500">
                            Error Detected
                        </Badge>
                    </div>
                </motion.div>

                {/* Headline */}
                <motion.div variants={itemVariants} className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold  mb-4">
                        Something Went Wrong
                    </h1>
                    <p className="text-lg mb-8 max-w-lg mx-auto">
                        {isDevelopment
                            ? error?.message || "We encountered an unexpected error. Don`t worry, our team has been notified and we`re working on a fix."
                            : "We encountered an unexpected issue. Please try again later or contact support if the problem persists."
                        }
                    </p>
                </motion.div>

                {/* Show details only in development */}
                {!isDevelopment && error.message && (
                    <motion.div variants={itemVariants} className="mb-8">
                        <Card className="bg-red-50/50 border-red-200 w-full">
                            <CardContent className="p-6">
                                <div className="flex items-start space-x-3">
                                    <Bug className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                                    <div className="text-left">
                                        <h3 className="font-medium text-red-900 mb-2">Error Details</h3>
                                        <p className="text-sm text-red-700 font-mono bg-red-100 p-3 rounded-lg">
                                            {error?.message}
                                        </p>
                                        {error?.digest && (
                                            <p className="text-xs text-red-600 mt-2">
                                                Error ID: {error?.digest}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                )}

                {/* Action Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            size="lg"
                            onClick={reset}
                            className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white cursor-pointer"
                        >
                            <RefreshCw className="w-5 h-5 mr-2" />
                            Try Again
                        </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/">
                                <Home className="w-5 h-5 mr-2" />
                                Go Home
                            </Link>
                        </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/support">
                                <MessageCircle className="w-5 h-5 mr-2" />
                                Contact Support
                            </Link>
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Extra help section (only dev) */}
                {!isDevelopment && (
                    <motion.div variants={itemVariants}>
                        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                            <CardContent className="p-8">
                                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                                    What You Can Do
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="font-medium text-gray-900 mb-2">Quick Fixes</h3>
                                            <ul className="text-sm text-gray-600 space-y-1">
                                                <li>• Refresh the page</li>
                                                <li>• Clear your browser cache</li>
                                                <li>• Try a different browser</li>
                                                <li>• Check your internet connection</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="font-medium text-gray-900 mb-2">Get Help</h3>
                                            <div className="space-y-2">
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    className="w-full justify-start bg-transparent"
                                                    asChild
                                                >
                                                    <Link href="/support">
                                                        <MessageCircle className="w-4 h-4 mr-2" />
                                                        Contact Support
                                                    </Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                )}

                {/* Footer note (always shown) */}
                <motion.div variants={itemVariants} className="mt-8 text-sm text-gray-500">
                    <p>
                        {isDevelopment
                            ? "If the issue continues, please reach out to our support team."
                            : "This error has been automatically reported to our development team."}
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}
