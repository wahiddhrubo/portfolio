import { motion } from "framer-motion";

export default function FadeDiv({ children, className }) {
	const progress = {
		enter: {
			opacity: 0,
		},
		exit: {
			opacity: 1,

			transition: {
				duration: 2,
				ease: "easeInOut",
			},
		},
	};

	return (
		<motion.div
			className={className}
			variants={progress}
			viewport={{ once: true }}
			initial={"enter"}
			whileInView={"exit"}
		>
			{children}{" "}
		</motion.div>
	);
}
