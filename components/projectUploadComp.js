// import { useState, useEffect, useContext } from "react";
// import ImageUpload from "./components/imageupload.js";
// import { PortfolioContext } from "../context/portfolioContext.js";
// import Router from "next/router";
// export default function ProjectUpload() {
// 	const [img, setImg] = useState([]);
// 	const [gallery, setGallery] = useState([]);
// 	const [name, setName] = useState("");
// 	const [des, setDes] = useState("");
// 	const [project, setProject] = useState([]);
// 	const [submit, setSubmit] = useState("");
// 	const { uploadPortfolio } = useContext(PortfolioContext);

// 	const dta = {
// 		name: name,
// 		nameId: name.lowerCase().replace(" ", "-"),
// 		description: des,
// 		images: project,
// 		gallery: gallery,
// 	};
// 	const formData = [
// 		{ des: des },
// 		{ images: project },
// 		{ name: name },
// 		{ gallery: gallery },
// 	];
// 	useEffect(() => {
// 		const updateProject = () => {
// 			if (submit) {
// 				if (!checkEmptyField(formData)) {
// 					if (img.length === project.length) {
// 						console.log(dta);
// 						uploadPortfolio(dta);
// 						window.location.pathname;
// 					} else {
// 						setSubmit(false);
// 					}
// 				} else {
// 					console.log(checkEmptyField(formData));
// 					console.log(img, project);
// 					setSubmit(false);
// 				}
// 			}
// 		};
// 		updateProject();
// 	}, [submit]);
// 	return (
// 		<div className="h-min-screen p-20">
// 			<input
// 				type="text"
// 				placeholder="Name"
// 				onChange={(e) => setName(e.target.value)}
// 				className="bg-blue-100 border-2 w-3/4 my-10 border-grey-900 text-black"
// 			/>
// 			<input
// 				type="text"
// 				multiline
// 				rows="4"
// 				placeholder="Description"
// 				onChange={(e) => setDes(e.target.value)}
// 				className="bg-blue-100 border-2 w-full my-10 border-grey-900 text-black"
// 			/>
// 			<ImageUpload img={img} setImg={setImg} />
// 			{img.length &&
// 				img.map((i) => (
// 					<Projects
// 						img={i}
// 						setProject={setProject}
// 						index={img.indexOf(i)}
// 					/>
// 				))}
// 			<ImageUpload img={gallery} setImg={setGallery} />
// 			<button onClick={() => setSubmit(true)}>
// 				{submit ? "Done" : "Submit"}
// 			</button>
// 		</div>
// 	);
// }

// const Projects = ({ img, setProject, index }) => {
// 	const [text, setInput] = useState("");
// 	const [name, setName] = useState("");
// 	const [submit, setSubmit] = useState("");
// 	const data = {
// 		id: index,
// 		img: img,
// 		name: name,
// 		features: text,
// 	};
// 	useEffect(() => {
// 		const SubmitHandler = () => {
// 			if (submit) {
// 				setProject((prev) => [...prev, data]);
// 			}
// 		};
// 		SubmitHandler();
// 	}, [submit]);

// 	const features = text.split(",");

// 	return (
// 		<div className="flex gap-20 text-white w-[850px] my-20 mx-auto ">
// 			<div className="w-1/2">
// 				<img src={img} alt="" />
// 			</div>
// 			<div className="h-fit w-fit m-auto">
// 				{features && features.map((fea) => <div>{fea}</div>)}
// 				<input
// 					type="text"
// 					placeholder="Name"
// 					multiple
// 					rows="4"
// 					onChange={(e) => setName(e.target.value)}
// 					className="bg-blue-100 border-2 w-[350px] h-[100px] border-grey-900 text-black"
// 				/>
// 				<input
// 					type="text"
// 					placeholder="Features"
// 					multiple
// 					rows="4"
// 					onChange={(e) => setInput(e.target.value)}
// 					className="bg-blue-100 border-2 w-[350px] h-[100px] border-grey-900 text-black"
// 				/>
// 				<button onClick={() => setSubmit(true)}>
// 					{submit ? "Done" : "Submit"}
// 				</button>
// 			</div>
// 		</div>
// 	);
// };

// const checkEmptyField = (formData) => {
// 	const result = formData.map((data) =>
// 		Object.values(data) == "" || Object.values(data) == []
// 			? Object.keys(data).join()
// 			: ""
// 	);

// 	const filledFormData = formData.map((data) =>
// 		Object.values(data) == "" || Object.values(data) == []
// 			? ""
// 			: Object.keys(data).join()
// 	);
// 	if (!filledFormData.includes("")) {
// 		return false;
// 	} else {
// 		return result;
// 	}
// };

// // NFT Audio Minting Site Where User Can Mint NFT and Share with others. NFT are Automatically Listed on Openseas.
// // Upload Audio NFT [Upload Image on IPFS, Generate Metadata & Create NFT (ERC 721) ,Mint NFT On Mumbai Testnet, Mint Audio Along With Image ,Auto Listing of NFT on Opensea Testnet  ]
// // Album Page [Get The Minted Songs by Album, Generate Album Cover & Audio from IPFS Url, Get The Song Information from NFT Metadata ]
// // Home Page [Database Generated from Smart Contract (On Moralis) , Select Featured NFT to Show on Cover Page, Show Recently Generated Audio NFT ]

// // An Web3 Version of Airbnb. where Owner Gets 10% from Both Seller and Buyer For Every Transaction.
// // Home Page[Generate Event Database with Moralis, Select Featured from Event, Sort by Attributes from Event]
// // New Room [Publish New Room With Gallery and Room Data , Fetch Room Data From Smart Contract Event By Moralis   ]
// // User Profile [Update User Profile, Withdraw Balance From Smart Contract, Can't Change The Profile Once Completed]
// // User Room [See The Listed And Booked Rooms, All of Which are Filtered from Smart Contract]
// // Book Room [Connect Wallet, Book Room Directly From Smart Contract]
