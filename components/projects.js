import ScaleDiv from "./scaleDiv.js";
import FadeDiv from "./fadeDiv.js";
import ProjectDiv from "./projectDiv.js";
import Heading from "./heading.js";

export default function Projects({}) {
	const styles = {
		wrapper:
			" w-full content-center text-primary font-[Coolvetica] text-left",
		mainProject: " bg-primaryBackground rounded shadow-2xl ",
	};
	return (
		<div className={styles.wrapper}>
			<div className="my-20">
				<Heading texts={["My Portfolio"]} scrollAnimation={true} />
			</div>
			<ScaleDiv
				index={1}
				logo={100}
				title="travelome"
				color="#ffffff"
				textColor="#000"
			>
				Travel Home
			</ScaleDiv>
			<ProjectDiv
				index={2}
				logo1={100}
				logo2={200}
				title1="Travel Home"
				title2="Break The Silence"
				color1="#ffffff"
				color2="#001F23"
				textColor1="#f12711"
				textColor2="#90F4D0"
			/>
		</div>
	);
}
