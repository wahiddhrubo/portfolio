import { motion } from "framer-motion";
export default function SkillsDiv({ skill }) {
	const progress = {
		enter: {
			width: 0,
		},
		exit: {
			width: skill[1],

			transition: {
				duration: 2,
				ease: "easeInOut",
			},
		},
	};

	return (
		<div key={skill[0]} className="my-10">
			{skill[0]}
			<div className="w-full bg-primaryBackground my-2 rounded-full h-[3px] dark:bg-gray-700">
				<motion.div
					className={` h-[3px] rounded-full`}
					style={{
						backgroundColor: skill[2],
					}}
					variants={progress}
					initial="enter"
					whileInView="exit"
					viewport={{ once: true }}
				></motion.div>
			</div>
		</div>
	);
}
