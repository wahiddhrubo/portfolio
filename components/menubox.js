import { motion } from "framer-motion";
import MenuProject from "./menuProject.js";
import { SiUpwork } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import { topProjects } from "./topProjects.js";

export default function MenuBox({ active, setActive }) {
	const click = {
		enter: {
			x: "100%",
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.1,
				duration: 2,
			},
		},
		animation: {
			x: active ? 0 : "100%",
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.1,
				duration: 2,
			},
		},
	};
	const childAnim = {
		animation: {
			opacity: 1,
		},
	};
	const styles = {
		wrapper:
			"fixed w-screen overflow-y-scroll h-screen text-white bg-bg lg:py-[150px] py-[50px] lg:px-10 z-[5]",
		projects: "lg:flex shrink  gap-10 mx-auto",
		starter: "flex  font-[100] lg:gap-20 gap-10 text-white mx-auto my-20",
		starterDiv: "w-1/2 text-center cursor-pointer ",
		starterText:
			"text-lg content-center my-5 font-[100] flex  justify-center gap-5 font-bold ",
		starterText2: "lg:text-4xl text-2xl font-bold ",
		iconDiv:
			"flex  gap-2 justify-center hover:text-primary hover:scale-105 h-10 content-center",
		icon: "lg:w-8 w-5 lg:h-8 h-5 block my-auto ",
	};

	return (
		<motion.div
			className={styles.wrapper}
			variants={click}
			animate={active ? "animation" : "enter"}
			initial="enter"
		>
			<div className="px-10 lg:px-0">
				<div className="lg:w-[60%] mx-auto">
					<div className={styles.starter}>
						<motion.div
							variants={childAnim}
							className={styles.starterDiv}
						>
							DONT BE A STRANGER
							<div className={styles.starterText}>
								<div className={styles.iconDiv}>
									<SiUpwork className={styles.icon} />
									<div className="h-fit my-auto">UP</div>
								</div>
								<div className={styles.iconDiv}>
									<BsGithub className={styles.icon} />
									<div className="h-fit my-auto">GH</div>
								</div>
							</div>
						</motion.div>
						<motion.div
							variants={childAnim}
							className={styles.starterDiv}
						>
							HAVE AN IDEA?
							<div className={styles.starterText2}>
								Tell Me About It
							</div>
						</motion.div>
					</div>
					<div className={styles.starterText2 + " my-10 "}>
						Top Projects
					</div>
				</div>
				<div className={styles.projects}>
					{topProjects.map((p) => (
						<div key={p.id} className="lg:w-1/3">
							<Link
								href={`/projects/${p.title
									.toLowerCase()
									.replaceAll(" ", "-")}`}
							>
								<MenuProject
									index={topProjects.indexOf(p)}
									logo={p.logo}
									title={p.title}
									color={p.color}
									textColor={p.textColor}
									inProgress={p.inProgress}
									toggle={setActive}
								/>
							</Link>
						</div>
					))}
				</div>
			</div>
		</motion.div>
	);
}
