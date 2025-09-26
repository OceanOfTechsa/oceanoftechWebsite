import React from "react";

export interface AccordionItemProps {
    question: string
    answer: React.ReactNode
    isOpen: boolean
    onToggle: () => void
    icon: "plus" | "minus"
}