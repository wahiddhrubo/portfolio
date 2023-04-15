import { motion } from "framer-motion";
import MenuProject from "./menuProject.js";
import { SiUpwork } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { Links } from "../lib/constants.js";

export default function Footer({ active }) {
	const styles = {
		wrapper:
			"w-screen overflow-y-scroll  text-white bg-bg mt-20  border-t-[1px] border-[#a8a8a840] ",
		starterText:
			"text-lg content-center my-5 font-[100] flex w-fit ml-auto justify-center gap-5 font-bold ",

		iconDiv:
			"flex  gap-2 justify-center hover:text-primary hover:scale-105 h-10 content-center",
		icon: "lg:w-8 w-5 lg:h-8 h-5 block my-auto ",
	};
	return (
		<div className={styles.wrapper}>
			<div className="w-[1200px] mx-auto ">
				<div className={styles.starterText}>
					<a href={Links.upwork} target="_blank">
						<div className={styles.iconDiv}>
							<SiUpwork className={styles.icon} />
							<div className="h-fit my-auto"></div>
						</div>
					</a>
					<a href={Links.git} target="_blank">
						<div className={styles.iconDiv}>
							<BsGithub className={styles.icon} />
							<div className="h-fit my-auto"></div>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}
