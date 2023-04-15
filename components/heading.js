import style from "../styles/header.module.css";
import { motion } from "framer-motion";

export default function Heading({ texts, scrollAnimation, center }) {
	const styles = {
		anim: "hover:animate-rubberBand hover:text-primary ",
		main: "w-full    my-auto  text-[74px] font-['Logo']  leading-[1.25]  ",
	};
	const stagger = {
		visible: {
			transition: {
				staggerChildren: 0.09,
			},
		},
	};

	const progress = {
		visible: {
			opacity: [0, 1, 1],
			scaleY: [0.3, 1.1, 0.9, 1.03, 0.97, 1],
			scaleX: [0.3, 1.1, 0.9, 1.03, 0.97, 1],
			scaleZ: [0.3, 1.1, 0.9, 1.03, 0.97, 1],
			transition: {
				duration: 1,
				ease: "easeInOut",
			},
		},
	};

	return (
		<motion.div
			variants={stagger}
			viewport={{ once: true }}
			whileInView="visible"
			initial="enter"
			className={styles.main}
		>
			{texts.map((m) => (
				<div
					key={m}
					className={`lg:flex hidden ${
						center ? "justify-center" : ""
					} `}
				>
					{m.split("").map((t) => (
						<motion.div
							key={t}
							variants={scrollAnimation ? progress : ""}
							className={
								style.rubberBand +
								" hover:text-primary " +
								style.bounceIn
							}
						>
							{t === " " ? <span className="mx-2"> </span> : t}
						</motion.div>
					))}
				</div>
			))}
			<div className="lg:hidden w-full text-center mx-auto text-2xl leading-[1.5]">
				{texts}
			</div>
		</motion.div>
	);
}
