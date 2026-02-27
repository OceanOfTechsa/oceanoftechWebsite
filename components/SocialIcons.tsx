import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

interface SocialIconsProps {
  changeBg?: boolean;
}

const CompanySocials = {
  Facebook: "https://web.facebook.com/oceanoftechsa/",
  Youtube: "https://www.youtube.com/@Oceanoftech_sa",
  Twitter: "https://x.com/oceanoftech_sa/",
  LinkedIn: "https://www.linkedin.com/in/oceanoftechsa",
  Instagram: "https://www.instagram.com/oceanoftech_sa/",
  Github: "https://github.com/OceanOfTechsa/",
};

const SocialIcons = ({ changeBg = false }: SocialIconsProps) => {
  const socials = [
    { icon: <FaFacebookF />, url: CompanySocials.Facebook },
    { icon: <FaLinkedinIn />, url: CompanySocials.LinkedIn },
    { icon: <FaTwitter />, url: CompanySocials.Twitter },
    { icon: <FaGithub />, url: CompanySocials.Github },
    { icon: <FaInstagram />, url: CompanySocials.Instagram },
    { icon: <FaYoutube />, url: CompanySocials.Youtube },
  ];

  return (
    <ul className="flex space-x-3 -mt-2">
      {socials.map((social, i) => (
        <li key={i}>
          <Link
            href={social.url}
            target="_blank"
            className={`p-2 ${changeBg ? "bg-gray-200 dark:bg-[#292a2d]" : "bg-[#292a2d]"} rounded-sm active:bg-[#c6c6c6] focus:bg-white focus:text-black hover:bg-[#d3d3d3]/20 transition-colors flex items-center justify-center`}
          >
            {social.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default SocialIcons;
