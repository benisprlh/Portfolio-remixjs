import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { Link } from "@remix-run/react"; // Import the Link component

const Navbar = () => {
    const socials = [
        {
            link: "https://www.linkedin.com/in/beni-saprulah",
            label: "Linkedin",
            Icon: SiLinkedin,
        },
        {
            link: "https://www.github.com/benisprlh",
            label: "Github",
            Icon: SiGithub,
        },
        {
            link: "https://www.instagram.com/benisprlh",
            label: "Instagram",
            Icon: SiInstagram,
        },
    ];

    return (
        <nav className="py-10 flex justify-between items-center z-50 lg:pb-10 pb-20">
            <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2 text-white">
                Beni Saprulah 👨🏻‍💻
            </h1>
            <div className="flex items-center gap-5">
                {socials.map((social, index) => {
                    const Icon = social.Icon;
                    return (
                        <a href={social.link} key={index} aria-label={social.label} target="_blank" rel="noopener noreferrer"> {/* Use anchor tag for external links */}
                            <Icon className="w-6 h-6 hover:scale-125 transition-all hover:cursor-pointer text-white" />
                        </a>
                    );
                })}
            </div>
        </nav>
    );
};

export default Navbar;
