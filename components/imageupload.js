import { FiCamera } from "react-icons/fi";
import Dropzone from "./dropzone.js";
import { useState, useEffect } from "react";
import Image from "next/image";
import storage from "../Firebase/firebase.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function ImageUpload({ img, setImg, errors }) {
	const [imgFiles, setImgFiles] = useState([]);

	useEffect(() => {
		if (imgFiles == "") {
			return;
		}
		const handleUpload = () => {
			const promises = [];
			imgFiles.forEach((file) => {
				const storageRef = ref(storage, `/files/${file.name}`);

				const uploadTask = uploadBytesResumable(storageRef, file);

				uploadTask.on(
					"state_changed",
					(snapshot) => {},
					(err) => console.log(err),
					() => {
						// download url
						getDownloadURL(uploadTask.snapshot.ref).then((url) => {
							setImg((prev) => [...prev, url]);
						});
					}
				);
			});

			Promise.all(promises)
				.then(() => console.log("Image Uploaded"))
				.catch((err) => console.log(err));
		};
		handleUpload();
	}, [imgFiles]);

	const [preview, setPreview] = useState([]);
	const onDrop = (files) => {
		setImgFiles(files);
		console.log(img);
	};

	const acceptedFiles = {
		"image/jpeg": ["jpeg"],
		"image/png": ["png"],
		"image/jpg": ["jpg"],
	};

	return (
		<div className="w-full p-10">
			<h1 className="text-center"></h1>
			<Dropzone onDrop={onDrop} accept={acceptedFiles} />

			{img ? (
				<div
					className="text-right cursor-pointer hover:text-green-700 "
					onClick={(e) => setImg([])}
				>
					{" "}
					Clear
				</div>
			) : (
				""
			)}
		</div>
	);
}
