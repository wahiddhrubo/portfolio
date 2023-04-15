import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AiOutlineLine } from "react-icons";
import MenuBox from "./menubox.js";

export default function NavBar() {
	const [active, setActive] = useState(false);

	const click = {
		icon1: {
			rotate: active ? "45deg" : 0,
			y: active ? 8 : 0,
		},
		icon2: {
			opacity: active ? 0 : 1,
		},
		icon3: {
			rotate: active ? "-50deg" : 0,
			y: active ? -8 : 0,
			width: active ? "50px" : "",
		},
	};

	const styles = {
		wrapper:
			"  w-[80%] lg:w-[60%] h-20 bg-[#2a2b3880] p-5 px-10 flex content-center rounded-[10px] mt-10 mx-auto bg-opacity-20 backdrop-blur-lg  drop-shadow-lg",
		activeIcon1: `w-[50px]  bg-white h-px cursor-pointer my-2 `,
		activeIcon2: `w-10 mr-auto bg-white h-px cursor-pointer my-2 `,
		activeIcon3: `w-5 mr-auto  bg-white h-px cursor-pointer my-2 `,
		icon: "ml-auto cursor-pointer font-light gap-5 flex my-auto text-white h-fit",
	};
	return (
		<>
			<MenuBox active={active} setActive={setActive} />
			<div className="fixed w-screen h-20 inset-0 z-10">
				<div className={styles.wrapper}>
					<div
						className={styles.icon}
						onClick={() => setActive(!active)}
					>
						<div className="h-fit my-auto">
							{!active ? "Menu" : "Close"}
						</div>

						<div>
							<motion.div
								variants={click}
								animate="icon1"
								className={styles.activeIcon1}
							></motion.div>
							<motion.div
								variants={click}
								animate="icon2"
								className={styles.activeIcon2}
							></motion.div>
							<motion.div
								variants={click}
								animate="icon3"
								className={styles.activeIcon3}
							></motion.div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
