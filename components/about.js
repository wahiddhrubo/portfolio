import Heading from "./heading.js";
import Card from "./card.js";
import SkillsDiv from "./skills.js";

export default function About() {
	const styles = {
		wrapper:
			"lg:flex gap-20 py-20 w-full  px-[50px] lg:px-0 content-center",
		about: "lg:w-1/2 text-base text-white  font-sans h-fit my-auto ",
		skills: "",
		cards: "lg:flex shrink  gap-5",
		progress: "my-10",
	};

	const skills = [
		["Solidity", "92%", "#08FDD8"],
		["FrontEnd", "89%", "#f12711"],
		["React", "85%", "#08FDD8"],
		["NextJs", "79%", "#ff2253"],
	];
	const cards = [
		{
			title: "Frontend & React Developer",
			description:
				"Creative brand, website design and development studio that can bring your online business dreams to life",
			year1: "2019",
			year2: "present",
		},
		{
			title: "Solidity & BlockChain Developer",
			description:
				"Creative brand, website design and development studio that can bring your online business dreams to life",
			year1: "2019",
			year2: "present",
		},
	];
	return (
		<div className={styles.wrapper}>
			<div className={styles.about}>
				<div className="text-primary font-[Coolvetica] ">
					<Heading
						texts={["Skills & Experience"]}
						scrollAnimation={true}
					/>
				</div>
				<div className="my-5 leading-relaxed text-center lg:text-left">
					Since beginning my journey as a freelance developer nearly
					10 years ago, I’ve done remote work for agencies, consulted
					for startups, and collaborated with talented people to
					create web products for both business and consumer use.
					<br />
					<br /> I create successful responsive websites that are
					fast, easy to use, and built with best practices. The main
					area of my expertise is front-end development, HTML, CSS,
					JS, building small and medium web apps, custom plugins,
					features, animations, and coding interactive layouts.
					<br />
					<br /> I also have full-stack developer experience with
					popular open-source CMS like (WordPress, Drupal, Magento,
					Keystone.js and others) . Visit my LinkedIn profile for more
					details or just contact me.
				</div>
			</div>
			<div className={styles.skills}>
				<div className={styles.progress}>
					{skills.map((s) => (
						<SkillsDiv key={s[0]} skill={s} />
					))}
				</div>
				<div className={styles.cards}>
					{cards.map((c) => (
						<Card
							key={c.title}
							title={c.title}
							description={c.description}
							year1={c.year1}
							year2={c.year2}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
