import {
    SiReact,
    SiMongodb,
    SiNodedotjs,
    SiNextdotjs,
    SiTypescript,
    SiPostgresql,
    SiExpress,
} from "react-icons/si";
import Marquee from "./marquee";

function Technologies() {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h2 className="my-20 text-center text-4xl text-white">Skills</h2>
            <Marquee />
        </div>
    );
}

export default Technologies;
