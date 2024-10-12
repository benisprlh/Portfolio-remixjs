import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

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
                        // <Link href={social.link} key={index} aria-label={social.label}>
                        <Icon className="w-6 h-6 hover:scale-125 transition-all hover:cursor-pointer text-white" key={index} />
                        // </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default Navbar;
