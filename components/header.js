import Background from "../public/bg.jpg";
import { useState } from "react";
import Button from "./button.js";
import Heading from "./heading.js";

export default function Header({}) {
	const styles = {
		wrapper:
			"w-screen  bg-[#10101ad4] bg-cover text-center text-white  my-auto bg-center ",
	};
	return (
		<div
			className={styles.wrapper}
			style={{ backgroundImage: `url("/bg.jpg")` }}
		>
			<div className=" bg-[#10101A99] flex w-screen  h-screen  m-auto">
				<div className=" my-auto w-full">
					<Heading
						texts={["Wahid Dhrubo ", "Web Developer"]}
						center={true}
					/>

					<div className="italic font-medium text-primary my-5">
						FrontEnd And BlockChain Developer
					</div>
					<Button type="DefaultButton" text={"See Projects"} />
				</div>
			</div>
		</div>
	);
}
