import { BsArrowRightShort } from "react-icons/bs";
export default function ProjectHeader({
	description,
	name,
	web3,
	framework,
	strategy,
	link,
}) {
	const styles = {
		wrapper: "w-full ",
		title: " lg:w-2/3 w-full lg:text-5xl text-4xl  text-white italic font-['Coolvetica'] ",
		flex: "lg:flex w-full gap-20 h-fit lg:my-20 my-10 content-center shrink",
		flexDiv1: "lg:w-1/2 my-10 ",
		flexDiv2: "lg:w-1/2 h-fit  mt-auto ml-auto",
		description: "lg:w-3/4",
		infoDiv:
			"flex  m-[-10] lg:gap-10 gap-5 h-fit w-full lg:mt-auto lg:shrink lg:flex-nowrap flex-wrap ",
		info: "border-t-2 lg:w-1/3 w-[45%] my-5 border-white   ",
		btn: "my-5 block w-fit hover:text-primary group transition-all",
		btnBorder:
			"w-1/3 group-hover:w-full mt-1 group-hover:bg-primary h-px bg-white transition-all",
		infoTitle: "font-['Coolvetica'] italic ",
	};
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>{name}</div>
			<div className={styles.flex}>
				<div className={styles.flexDiv1}>
					<div className={styles.description}>{description}</div>
				</div>
				<div className={styles.flexDiv2}>
					<div className={styles.infoDiv}>
						<div className={styles.info}>
							<div className={styles.infoTitle}>Strategy </div>
							{strategy}
						</div>
						<div className={styles.info}>
							<div className={styles.infoTitle}> Web3 Tech </div>
							{web3}
						</div>
						<div className={styles.info}>
							<div className={styles.infoTitle}> Framework </div>
							{framework}
						</div>
					</div>
					{link && (
						<a
							href={link}
							target="_blank"
							rel="noreferrer"
							className={styles.btn}
						>
							Open Project{" "}
							<BsArrowRightShort className="inline w-[25px] h-[25px] transition-all group-hover:translate-x-2 " />
							<div className={styles.btnBorder}></div>
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
