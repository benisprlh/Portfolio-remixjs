import React from "react";
import MarqueeItem from "./marqueeItem";
import { SiAmazonec2, SiAmazonwebservices, SiApollographql, SiAxios, SiBootstrap, SiCss3, SiExpress, SiFirebase, SiFramer, SiGithub, SiHtml5, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiRedis, SiRedux, SiRemix, SiSequelize, SiSocketdotio, SiTailwindcss, SiTypescript } from "react-icons/si";

const Marquee = () => {
    const upperMarquee = [
        SiReact,
        SiMongodb,
        SiPostgresql,
        SiHtml5,
        SiTailwindcss,
        SiNextdotjs,
        SiTypescript,
        SiExpress,
        SiNodedotjs,
        SiGithub,
        SiFirebase,
    ];

    const lowerMarquee = [
        SiAmazonwebservices,
        SiSequelize,
        SiRedux,
        SiRemix,
        SiAxios,
        SiRedis,
        SiBootstrap,
        SiApollographql,
        SiSocketdotio,
        SiCss3,
        SiFramer,
    ];

    return (
        <div className="container mx-auto">
            <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
            <MarqueeItem images={lowerMarquee} from={"-100%"} to={0} />
        </div>
    );
};

export default Marquee;