// components/icons/HelpCenterIcons.tsx
import { JSX } from "react";
import {
    Code,
    Search,
    Palette,
    Layers,
    Mail,
    Server,
    Settings,
    BarChart3,
    Clock1Icon
} from "lucide-react";

interface IconProps {
    className?: string;
    size?: number;
}

interface HelpCenterIconProps extends IconProps {
    title: string;
}

export const HelpCenterIcon = ({ title, className = "", size = 20 }: HelpCenterIconProps): JSX.Element => {
    const iconConfig = {
        "web development": Code,
        "seo": Search,
        "web design": Palette,
        "ui/ux design": Layers,
        "business email": Mail,
        "hosting": Server,
        "maintenance and support": Settings,
        "peek": BarChart3,
        "default": Clock1Icon
    };

    const normalizedTitle = title.toLowerCase();
    let IconComponent = iconConfig.default;

    // Check for exact matches or partial matches
    if (normalizedTitle.includes("web dev") || normalizedTitle.includes("web development")) {
        IconComponent = iconConfig["web development"];
    } else if (normalizedTitle.includes("seo")) {
        IconComponent = iconConfig.seo;
    } else if (normalizedTitle.includes("web design")) {
        IconComponent = iconConfig["web design"];
    } else if (normalizedTitle.includes("ui/ux") || normalizedTitle.includes("ui ux")) {
        IconComponent = iconConfig["ui/ux design"];
    } else if (normalizedTitle.includes("business email")) {
        IconComponent = iconConfig["business email"];
    } else if (normalizedTitle.includes("hosting")) {
        IconComponent = iconConfig.hosting;
    } else if (normalizedTitle.includes("maintenance") || normalizedTitle.includes("support")) {
        IconComponent = iconConfig["maintenance and support"];
    } else if (normalizedTitle.includes("peek") || normalizedTitle.includes("monitoring")) {
        IconComponent = iconConfig.peek;
    }

    return <IconComponent className={className} size={size} />;
};