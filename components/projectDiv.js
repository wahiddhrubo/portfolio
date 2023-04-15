import { motion } from "framer-motion";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";

export default function ProjectDiv({
    index,
    logo1,
    logo2,
    title1,
    title2,
    color1,
    color2,
    textColor1,
    textColor2,
}) {
    const div1 = {
        enter: {
            x: "50%",
        },
        exit: {
            x: "0",

            transition: {
                duration: 2,
                ease: "easeInOut",
            },
        },
    };
    const hover = {
        enter: { scale: 1 },
        hover: {
            scale: 0.95,
            transition: {
                duration: 0.4,
                ease: "easeInOut",
            },
        },
    };
    const div2 = {
        enter: {
            x: "-50%",
        },
        exit: {
            x: "0",
            translate: (0, 0),
            transition: {
                duration: 2,
                ease: "easeInOut",
            },
        },
    };

    const styles = {
        wrapper: "lg:flex shrink gap-5 my-10 lg:h-[300px]  ",
        main: ` lg:w-1/2 lg:p-[50px] my-5 p-10 rounded-[75px] h-[250px] lg:h-full flex flex-wrap `,
        animation:
            "hover:scale-95 cursor-pointer w-full h-full flex flex-wrap transition-all",
        indexDiv: "flex w-full mb-auto",
        index: "text-sm text-left w-1/2 ",
        showcase: "text-sm text-right w-1/2 ",
        title1: `lg:text-5xl text-3xl my-auto w-full  font-[${logo1}]  font-['logo'] text-center w-full`,
        title2: `lg:text-5xl text-3xl my-auto w-full  font-[${logo2}]  font-['logo'] text-center w-full`,
        bottomDiv: "flex w-full mt-auto",
    };

    return (
        <div className={styles.wrapper}>
            <Link
                href={`/projects/${title1.toLowerCase().replaceAll(" ", "-")}`}
            >
                <motion.div
                    className={styles.main}
                    variants={div1}
                    initial={"enter"}
                    whileInView={"exit"}
                    viewport={{ once: true }}
                    style={{
                        background: color1,
                        color: textColor1,
                    }}
                >
                    <motion.div
                        variants={hover}
                        whileHover="hover"
                        className={styles.animation}
                    >
                        <div className={styles.indexDiv}>
                            <div className={styles.index}>{index}.</div>
                            <div className={styles.showcase}>Showcase</div>
                        </div>

                        <div
                            className={styles.title1}
                            style={{ fontWeight: logo1 }}
                        >
                            {title1}
                        </div>

                        <div className={styles.bottomDiv}>
                            <div className={styles.index}>Launch project</div>
                            <div className={styles.showcase}>
                                <BsArrowRightShort className="w-8 h-8 ml-auto rotate-[-45deg]" />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </Link>
            <Link
                href={`/projects/${title2.toLowerCase().replaceAll(" ", "-")}`}
            >
                <motion.div
                    className={styles.main}
                    variants={div2}
                    initial={"enter"}
                    whileInView={"exit"}
                    viewport={{ once: true }}
                    style={{
                        background: color2,
                        color: textColor2,
                    }}
                >
                    <motion.div
                        variants={hover}
                        whileHover="hover"
                        className={styles.animation}
                    >
                        <div className={styles.indexDiv}>
                            <div className={styles.index}>{index + 1}.</div>
                            <div className={styles.showcase}>Showcase</div>
                        </div>

                        <div
                            className={styles.title2}
                            style={{ fontWeight: logo2 }}
                        >
                            {title2}
                        </div>

                        <div className={styles.bottomDiv}>
                            <div className={styles.index}>Launch project</div>
                            <div className={styles.showcase}>
                                <BsArrowRightShort className="w-8 h-8 ml-auto rotate-[-45deg]" />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </Link>
        </div>
    );
}
