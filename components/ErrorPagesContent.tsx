'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { BsArrowLeft } from "react-icons/bs"

interface ErrorPageProps {
    title: string;
    subtitle: string;
    question: string;
    hideButton?: boolean;
}

const ErrorPagesContent = ({ title, subtitle, question, hideButton = false }: ErrorPageProps) => {
    const router = useRouter()
    const handleGoBack = () => {
        router.back();
    }

    return (
        <div className="flex flex-col w-full absolute inset-x-0 items-center text-center gap-3">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-sm">{subtitle}</p>
            {
                !hideButton &&
                <Button onClick={handleGoBack} aria-label="Back button" className="cursor-pointer flex items-center gap-2 group" size="sm">
                    <BsArrowLeft className="group-hover:-translate-x-1 transition-all duration-500 ease-in-out" />
                    Go back
                </Button>
            }
            <p className="text-xs text-muted-foreground mt-4">
                {question}?{" "}
                <a
                    href="mailto:support@oceanoftechsa.com"
                    className="underline font-medium hover:text-black dark:hover:text-white"
                >
                    Contact support
                </a>
            </p>
        </div>
    )
}

export default ErrorPagesContent
