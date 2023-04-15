import { useState, useEffect } from "react";

export default function Cursor() {
	const [top, setTop] = useState(-50);
	const [left, setLeft] = useState(-50);

	useEffect(() => {
		const setXY = (e) => {
			setTop(e.clientY);
			setLeft(e.clientX);
		};
		window.addEventListener("mousemove", setXY);
	}, []);

	const styles = {
		outer: `fixed z-10 w-10 h-10 transition-all rounded-full border-[1px] border-primary   `,
		inner: " bg-primary w-2 h-2 mx-auto my-[15px] rounded-full ",
	};
	return (
		<div className="hidden lg:block">
			<div
				className={styles.outer}
				style={{
					top: top + "px",
					left: left + "px",
				}}
			>
				<div className={styles.inner}></div>
			</div>
		</div>
	);
}
