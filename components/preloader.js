import { motion } from "framer-motion";

export default function Transition({ key }) {
	const blackBox = {
		enter: {
			height: "100vh",
			bottom: "0",
		},
		animate: {
			height: 0,
			bottom: ["0%", "100%"],
			transition: {
				when: "afterChildren",
				duration: 2,
			},
		},
		exit: {},
	};

	const skills = {
		enter: {
			y: 0,
		},
		animate: {
			y: "-1200%",
			transition: {
				duration: 5,
				ease: "linear",
			},
		},
		exit: {
			opacity: 0,
		},
	};
	const skillsDiv = {
		animate: {
			opacity: 0,
			transition: {
				when: "afterChildren",
				ease: "linear",
			},
		},
	};

	const styles = {
		wrapper:
			"bg-[#000] fixed  flex justify-center z-[20] w-screen h-screen overflow-hidden ",
		title: "text-white text-5xl w-[250px] gap-5 overflow-hidden flex text-center uppercase h-[50px] my-auto",
		skills: "w-fit  my-auto  text-base h-10 ",
		skillList: "overflow-hidden my-10  text-left   ",
	};

	return (
		<motion.div
			key={key}
			className={styles.wrapper}
			variants={blackBox}
			initial="enter"
			animate="animate"
			exit="exit"
		>
			<motion.div variants={skillsDiv} className={styles.title}>
				WD
				<motion.div className={styles.skills}>
					<motion.p variants={skills} className={styles.skillList}>
						{" "}
						React
					</motion.p>
					<motion.p variants={skills} className={styles.skillList}>
						{" "}
						Next
					</motion.p>
					<motion.p variants={skills} className={styles.skillList}>
						{" "}
						Solidity
					</motion.p>
					<motion.p variants={skills} className={styles.skillList}>
						{" "}
						Framer Motion
					</motion.p>
					<motion.p variants={skills} className={styles.skillList}>
						{" "}
						Tailwind
					</motion.p>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
