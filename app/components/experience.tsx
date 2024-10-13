const Experiences = [
    {
        start: "Feb 2024",
        end: "Mar 2024",
        position: "Project Based Internship",
        role: "Fullstack Developer",
        company: "BANK BTPN Syariah x Rakamin Academy",
        description: ["Make a project"], // ubah menjadi array
        technologies: ["Golang", "Java", "Javascript", "Vue", "GoGin"],
    },
    {
        start: "Aug 2024",
        end: "Now",
        position: "Fulltime",
        role: "Frontend Developer (IT Programmer)",
        company: "Apotek Roxy",
        description: [
            "- Responsible for developing dynamic and interactive user interfaces (UI) using modern technologies such as React.js, Next.js, and Tailwind CSS.",
            "- Collaborate with the design team to translate visual designs into responsive and optimized web pages across a variety of devices and screen sizes.",
            "- Implement API to get data dynamically and display information in real-time on frontend pages.",
            "- Optimize website performance through lazy loading techniques, code splitting, and static asset optimization to ensure fast page load times.",
            "- Implement best practices in frontend development, including version control (Git), code reviews, and testing to maintain application quality and stability.",
            "- Work with the backend team to integrate new features, support end-to-end feature testing, and ensure user interface compatibility with server-side logic.",
            "- Monitor and fix reported bugs on various platforms, and continuously improve the user experience based on feedback."
        ],
        technologies: ["NextJS", "Zustand", "Tailwind", "Toastify", "Axios"],
    },
];

const Experience = () => {
    return (
        <section className="border-b border-neutral-900 pb-4 text-gray-100">
            <h2 className="my-20 text-center text-4xl ">Experience</h2>
            <div>
                {Experiences.map((experience, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4 flex-row">
                            <p className="mb-2 text-sm text-neutral-400">
                                {experience.start}{" "}
                                {experience.end !== "" && `- ${experience.end}`}
                            </p>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4 text-xl">
                            <h3 className="mb-2 font-semibold ">
                                {experience.role} -{" "}
                                <span className="text-lg text-green-100">
                                    {experience.company}
                                </span>
                                <span className="text-xs text-green-300 ml-2">
                                    {experience.position !== "" && experience.position}
                                </span>
                            </h3>
                            <div className="mb-4 text-neutral-400 text-sm">
                                {experience.description.map((desc, idx) => (
                                    <p key={idx}>{desc}</p>
                                ))}
                            </div>
                            {experience.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-green-500"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
