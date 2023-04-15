import FadeDiv from "./fadeDiv.js";
import Link from "next/link";

export default function Card({ title, description, year1, year2 }) {
	const styles = {
		wrapper:
			"lg:w-1/2 w-full mx-auto my-10 font-sans text-grey-600 text-sm shadow-2xl bg-black p-5 py-8",
		title: "text-white text-xl font-bold text-primary my-2 italic",
		year: "my-2",
	};
	return (
		<Link href={`/projects/${title.toLowerCase().replaceAll(" ", "-")}`}>
			<FadeDiv className={styles.wrapper}>
				<div className={styles.title}>{title}</div>
				<div className={styles.year}>
					{" "}
					{year1} {`-${year2}`}{" "}
				</div>
				{description}
			</FadeDiv>
		</Link>
	);
}
