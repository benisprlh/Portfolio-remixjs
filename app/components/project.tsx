import React, { useEffect, Suspense, useRef, useState, RefObject } from "react";
import { motion } from "framer-motion";

export const Projects = [
    {
        title: "Corefash",
        image: "/corefash.png",
        description:
            "'CoreFash' is a solo project of mine, an e-commerce website. It incorporates features such as login/register, infinite scroll, add to wishlist, and product search. Taking on the role of a fullstack developer, I utilized a tech stack that includes Typescript, MongoDB, Next.js, bcryptjs, JWT, GraphQL, and Apollo to implement the functionalities seamlessly.",
        technologies: ["Typescript", "MongoDB", "NextJs", "Tailwind", "GraphQL"],
    },
    {
        title: "Terrarium",
        image: "/terrarium.jpg",
        description:
            "Terrarium is a web-based application to make it easier for local residents, especially farmers, to sell their agricultural products. With this website, farmers can sell their agricultural products easily and also at a predetermined market price. So that farmers no longer sell their agricultural products far below the market price.",
        technologies: [
            "ReactJS",
            "Tailwind",
            "NodeJS",
            "Whatsapp Bot JS",
            "ExpressJS",
            "PostgreSQL",
            "Midtrans",
            "Sequelize",
        ],
    },
    {
        title: "Basketball Information",
        image: "/bbi.png",
        description:
            '"Basketball Information" is my individual project that encompasses various features such as Google Auth, Midtrans Payment Gateway integration, standard login and register functionality, data retrieval from an API, and account upgrade capabilities. In this project, I assumed the role of a full-stack developer, employing a tech stack that includes JavaScript, Express.js, Sequelize, PostgreSQL, React, Redux, bcryptjs, and JWT for enhanced security and authentication.',
        technologies: [
            "ReactJS",
            "Redux",
            "NodeJS",
            "PostgreSQL",
            "ExpressJS",
            "Sequelize",
        ],
    },
    {
        title: "Talk To Stranger",
        image: "/talkToStranger.png",
        description:
            "'Talk To Stranger' is a group project involving three team members, aimed at creating an application that enables users to engage in real-time voice calls with others registered on our platform. In this project, I took on the role of a fullstack developer and was responsible for ensuring the smooth implementation of the voice call feature. Additionally, I was tasked with designing the user interface (UI) for the main page of the project. The tech stack utilized includes Javascript, Sequelize, PostgreSQL, React, Redux, Socket.IO, bcryptjs, and JWT.",
        technologies: [
            "ReactJS",
            "Redux",
            "Socket.io",
            "PostgreSQL",
            "ExpressJS",
            "Sequelize",
        ],
    },
    {
        title: "Sosmed Me",
        image: "/sosmedMe.png",
        description:
            "'Sosmed Me' is a group project that I collaborated on during a bootcamp with a team of two members. The project primarily focuses on the development of login, register, and CRUD features. In this project, I took responsibility for crafting both the frontend and backend for the login and register modules. The tech stack employed includes JavaScript for frontend development, Express.js for the backend, Sequelize as the ORM (Object-Relational Mapping) tool, and PostgreSQL as the database. Additionally, session management was implemented to enhance security and authorization.",
        technologies: ["PostgreSQL", "ExpressJS", "Sequelize"],
    },
];

// Lazy load each section
const Project = () => {
    const [loadProjects, setLoadProjects] = useState(false);
    const projectRef = useRef<HTMLDivElement | null>(null);
    const projectRefs = useRef<(RefObject<HTMLDivElement>)[]>(Projects.map(() => React.createRef<HTMLDivElement>()));
    const [visibleProjects, setVisibleProjects] = useState(Array(Projects.length).fill(false));

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setLoadProjects(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (projectRef.current) observer.observe(projectRef.current);

        return () => {
            if (projectRef.current) observer.unobserve(projectRef.current);
        };
    }, []);

    useEffect(() => {
        // Explicitly type the observers array
        const observers: IntersectionObserver[] = projectRefs.current.map((ref, index) => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleProjects((prev) => {
                            const newVisible = [...prev];
                            newVisible[index] = true; // Set the specific project to visible
                            return newVisible;
                        });
                        observer.disconnect(); // Disconnect after it's visible
                    }
                });
            }, { threshold: 0.1 });

            if (ref.current) observer.observe(ref.current);

            return observer; // Return the observer
        });

        return () => {
            projectRefs.current.forEach((ref, index) => {
                if (ref.current) observers[index].unobserve(ref.current);
            });
        };
    }, [loadProjects]);

    return (
        <section className="border-b border-neutral-900 pb-4" ref={projectRef}>
            <h2 className="my-20 text-center text-4xl text-white">Projects</h2>
            {loadProjects ? (
                <Suspense fallback={<div>Loading...</div>}>
                    <div>
                        {Projects.map((project, index) => {
                            return (
                                <motion.div
                                    key={index}
                                    ref={projectRefs.current[index]} // Use the ref for this project
                                    className="mb-8 flex flex-wrap lg:justify-center items-center"
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={visibleProjects[index] ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 1.5 }}
                                >
                                    <div className="w-full lg:w-1/4">
                                        <img
                                            src={project.image}
                                            width={150}
                                            height={150}
                                            alt={project.title}
                                            className="mb-6 rounded"
                                        />
                                    </div>
                                    <div className="w-full max-w-xl lg:w-3/5">
                                        <h5 className="mb-2 font-semibold text-xl">{project.title}</h5>
                                        <p className="mb-4 text-neutral-400">{project.description}</p>
                                        <div className="flex flex-row flex-wrap gap-2">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-green-500"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </Suspense>

            ) : (
                <div className="text-white">Loading projects...</div>
            )}
        </section>
    );
};

export default Project;
