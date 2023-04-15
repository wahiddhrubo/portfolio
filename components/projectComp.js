import { BsArrowRightShort } from "react-icons/bs";
import { motion, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectComp({ imgdta }) {
	const [positionY, setPositionY] = useState();
	const container = useRef(null);
	const feaDiv = useRef(null);
	const imgDiv = useRef(null);
	const { scrollY } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});

	const lock = {
		animate: {
			y: positionY,
			transition: {
				ease: "linear",
			},
		},
	};
	const mobAnim = {
		animate: {
			opacity: [0, 1],
			transition: {
				ease: "easeInOut",
				duration: 1,
			},
		},
	};
	useEffect(() => {
		return scrollY.onChange((latest) => {
			if (latest >= 350) {
				setPositionY(latest);
			}
		});
	}, []);

	const featureRef = useRef([]);
	featureRef.current = [];

	const imgRef = useRef([]);
	imgRef.current = [];
	const styles = {
		wrapper:
			"w-full my-20 lg:flex gap-20 overflow-hidden relative hidden content-center ",

		mobileWrapper:
			"w-full my-20 lg:hidden block overflow-hidden relative   ",
		flexBox1:
			"  relative flex content-center  justify-center w-3/4 rounded-md   ",
		title: " w-2/3 text-3xl text-white italic  font-['Coolvetica'] ",
		flexBox2: "w-1/4 h-fit my-auto",
		flexBoxMobile: "w-full ",
		fixedImg: "absolute  top-[-25%] ",
		fea: "mt-[200px] ",
	};
	useEffect(() => {
		const changeImg = () => {
			featureRef.current.forEach((el, index) => {
				const tl = new gsap.timeline({
					scrollTrigger: {
						trigger: el,
						scrub: true,
						start: "center bottom",
						end: "bottom bottom",
					},
				});
				tl.fromTo(
					imgRef.current[index],
					{
						autoAlpha: 0,
						zIndex: 1 + index,
						ease: "none",
					},
					{
						autoAlpha: 1,
						zIndex: 1 + index,
						ease: "none",
					}
				);
			});
		};
		changeImg();
	}, [imgdta]);

	return (
		<div>
			<div className="relative" ref={container}>
				<div className={styles.wrapper}>
					<motion.div
						className={styles.flexBox1}
						ref={imgDiv}
						animate="animate"
						variants={lock}
					>
						{imgdta.map((i, index) => (
							<div key={i.name} className={styles.fixedImg}>
								<img
									src={i.img}
									ref={(el) => (imgRef.current[index] = el)}
								/>
							</div>
						))}
					</motion.div>
					<div className={styles.flexBox2} ref={feaDiv}>
						{imgdta.map((dta, index) => (
							<div key={dta.name} className={styles.fea}>
								<div
									ref={(el) =>
										(featureRef.current[index] = el)
									}
								>
									<div className={styles.title}>
										{dta.name}
									</div>
									{dta.features.split(",").map((fea) => (
										<p key={fea} className="my-5">
											{" "}
											{fea}{" "}
										</p>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className={styles.mobileWrapper}>
				<div className={styles.flexBoxMobile}>
					{imgdta.map((dta) => (
						<div key={dta.name}>
							<motion.div
								className="my-[75px]"
								variants={mobAnim}
								whileInView="animate"
								viewport={{ once: true }}
							>
								<img src={dta.img} />
							</motion.div>
							<div className="">
								<motion.div
									variants={mobAnim}
									whileInView="animate"
									viewport={{ once: true }}
								>
									<div className={styles.title}>
										{dta.name}
									</div>
									{dta.features.split(",").map((fea) => (
										<p key={fea} className="my-2">
											{" "}
											{fea}{" "}
										</p>
									))}
								</motion.div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
