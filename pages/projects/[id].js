import ProjectHeader from "../../components/projectHeader.js";
import ProjectComp from "../../components/projectComp.js";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { PortfolioContext } from "../../context/portfolioContext.js";
import Link from "next/link";
import Loader from "../../components/preloader.js";
import MenuProject from "../../components/menuProject.js";
import { topProjects } from "../../components/topProjects.js";
import Head from "next/head";

export default function Project() {
	const router = useRouter();

	const [dta, setDta] = useState();

	const { fetchingProject } = useContext(PortfolioContext);

	const { id } = router.query;

	const styles = {
		projects: "lg:flex shrink  gap-10 mx-auto",

		starterText2: `text-4xl my-10 w-full  font-['logo']  w-full`,
	};

	useEffect(() => {
		const fetchProjectDta = async () => {
			if (id) {
				const newDta = await fetchingProject(id);
				if (newDta.length > 0) {
					setDta(newDta[0]);
				}
				console.log(newDta);
			}
		};
		fetchProjectDta();
	}, [id]);

	return (
		<div>
			<Loader key={id} />
			<div className="lg:w-[1200px] w-[350px] pt-[210px] mx-auto text-white">
				<Head>
					<title>Project</title>
				</Head>
				{dta ? (
					<>
						<Head>
							<title>{dta.name}</title>
						</Head>
						<ProjectHeader
							description={dta.description}
							name={dta.name}
							web3={dta.web3}
							framework={dta.framework}
							strategy={dta.strategy}
							link={dta.link}
						/>
						<ProjectComp imgdta={dta.images} />
					</>
				) : (
					"No Project Found"
				)}
				<div className={styles.starterText2 + " my-10 "}>
					Latest Projects I Am Working On
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
								/>
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
