import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const SocialIcons = () => {
    const socials = [
        { icon: <FaFacebookF />, url: "#" },
        { icon: <FaInstagram />, url: "#" },
        { icon: <FaTwitter />, url: "#" },
        { icon: <FaLinkedinIn />, url: "#" },
        { icon: <FaYoutube />, url: "#" },
    ];

    return (
        <ul className="flex space-x-3 mt-3">
            {socials.map((social, i) => (
                <li key={i}>
                    <Link href={social.url} className="p-2 bg-[#292a2d] rounded-sm active:bg-[#c6c6c6] focus:bg-white focus:text-black hover:bg-[#d3d3d3]/20 transition-colors flex items-center justify-center">
                        {social.icon}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default SocialIcons;
