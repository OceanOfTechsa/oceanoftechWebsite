import AppSettings  from "@/Oceanoftech.Business/ConfigurationBusiness/AppSettings";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaGithub } from "react-icons/fa";

interface SocialIconsProps {
    changeBg?: boolean
}

const SocialIcons = ({changeBg = false} : SocialIconsProps) => {
    const socials = [
        { icon: <FaFacebookF />, url: AppSettings.CompanySocials.Facebook },
        { icon: <FaLinkedinIn />, url: AppSettings.CompanySocials.LinkedIn },
        { icon: <FaTwitter />, url: AppSettings.CompanySocials.Twitter },
        {icon: <FaGithub />, url: AppSettings.CompanySocials.Github },
        { icon: <FaInstagram />, url: AppSettings.CompanySocials.Instagram },
        { icon: <FaYoutube />, url: AppSettings.CompanySocials.Youtube },
    ];

    return (
        <ul className="flex space-x-3 -mt-2">
            {socials.map((social, i) => (
                <li key={i}>
                    <Link href={social.url} className={`p-2 ${changeBg ? "bg-gray-100 dark:bg-[#292a2d]" : "bg-[#292a2d]"} rounded-sm active:bg-[#c6c6c6] focus:bg-white focus:text-black hover:bg-[#d3d3d3]/20 transition-colors flex items-center justify-center`}>
                        {social.icon}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
export default SocialIcons;