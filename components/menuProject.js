import { motion } from "framer-motion";
import { BsArrowRightShort } from "react-icons/bs";
import { useState } from "react";
import Link from "next/link";

export default function MenuProject({
    index,
    logo,
    title,
    color,
    textColor,
    inProgress,
}) {
    const hover = {
        enter: { scale: 1 },
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.4,
                ease: "easeInOut",
            },
        },
    };
    const styles = {
        wrapper: "flex  shrink gap-5 my-10 ",
        main: `   cursor-pointer lg:p-[50px] p-10 rounded-[45px] h-[220px] lg:h-[280px]    `,
        animation: "  w-full h-full flex flex-wrap ",
        indexDiv: "flex w-full mb-auto",
        index: "text-sm text-left w-1/2 ",
        showcase: "text-sm text-right w-1/2 ",
        title1: `text-2xl my-auto w-full  font-[${logo}]  font-['logo'] text-center w-full`,
        bottomDiv: "flex w-full mt-auto",
    };

    return (
        <Link
            href={
                inProgress
                    ? "#in-progress"
                    : `/projects/${title.toLowerCase().replaceAll(" ", "-")}`
            }
        >
            <motion.div
                className={styles.main}
                variants={hover}
                initial="enter"
                whileHover="hover"
                style={{
                    background: color,
                    color: textColor,
                }}
                id="in-progress"
            >
                <motion.div className={styles.animation}>
                    <div className={styles.indexDiv}>
                        <div className={styles.index}>Showcase</div>
                    </div>
                    <div className={styles.title1} style={{ fontWeight: logo }}>
                        <span>{title}</span>
                    </div>
                    <div className={styles.bottomDiv}>
                        <div className={styles.index}>
                            {inProgress ? "In Progress" : " Launch Project "}
                        </div>

                        <div className={styles.showcase}>
                            <BsArrowRightShort className="w-8 h-8 ml-auto rotate-[-45deg]" />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </Link>
    );
}
