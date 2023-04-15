import {
	useMoralis,
	useMoralisQuery,
	useNewMoralisObject,
} from "react-moralis";
import { createContext, useEffect, useState } from "react";

export const PortfolioContext = createContext();

export function PortfolioContextProvider({ children }) {
	const { save } = useNewMoralisObject("portfolio");

	const uploadPortfolio = (dta) => {
		save(dta, {
			onSuccess: (albm) => {
				alert("Your Album is Created " + albm.id);
			},
			onError: (error) => {
				alert(
					"Failed to create new object, with error code: " +
						error.message
				);
			},
		});
	};

	const fetchingProject = async (id) => {
		if (id) {
			await Moralis.start({
				serverUrl: process.env.NEXT_PUBLIC_MORALIS_SERVER,
				appId: process.env.NEXT_PUBLIC_APP_ID,
			});
			const results = Moralis.Object.extend("portfolio");
			const query = new Moralis.Query(results);
			query.equalTo("nameId", id);

			const result = await query.find();
			const project = result.map((p) => p.attributes);
			console.log(project, id);
			return project;
		} else {
			return false;
		}
	};

	const { Moralis } = useMoralis();

	return (
		<PortfolioContext.Provider value={{ uploadPortfolio, fetchingProject }}>
			{children}
		</PortfolioContext.Provider>
	);
}
