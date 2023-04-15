import { SiUpwork } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { Links } from "../lib/constants.js";
import Link from "next/link";

export default function Contact({ active }) {
	const styles = {
		wrapper: "  text-white text-5xl w-[80%] my-20 mt-[250px] ",
		title: "bg-gradient-to-r from-primary to-[#ffcfdf] bg-clip-text text-transparent  ",
		subTitle: "text-base text-[#c4c4c4]",

		starterText: "text-lg my-5 font-[100] flex  gap-5 font-bold ",

		iconDiv:
			"flex  gap-2 justify-center hover:text-primary hover:scale-105 h-10 content-center",
		icon: "lg:w-10 w-5 lg:h-8 h-10 block my-auto ",
	};

	return (
		<div className={styles.wrapper}>
			<div className="my-5 font-bold ">
				<span className={styles.title}>Have A New Idea</span>
			</div>
			<div className="my-5 leading-relaxed text-4xl text-[#c4c4c4] ">
				Thanks for stopping by, I’m currently looking to join a new team
				of creative designers and developers. If you think we might be a
				good fit for one another, give me a call 🇳🇬 or send me an email
				📧.
			</div>
			<div className="my-5 mt-20 font-bold ">
				<span className={styles.title}>Dont be a stranger!</span>👋
			</div>
			<div className={styles.subTitle}>Connect with me online</div>
			<div className={styles.starterText}>
				<Link href={Links.upwork}>
					<a target="_blank">
						<div className={styles.iconDiv}>
							<SiUpwork className={styles.icon} />
							<div className="h-fit my-auto">UP</div>
						</div>
					</a>
				</Link>
				<Link href={Links.git}>
					<a target="_blank">
						<div className={styles.iconDiv}>
							<BsGithub className={styles.icon} />
							<div className="h-fit my-auto">GH</div>
						</div>
					</a>
				</Link>
			</div>
		</div>
	);
}
