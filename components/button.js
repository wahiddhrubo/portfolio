export default function DefaultButton({
	onClick,
	color,
	text,
	type,
	className,
}) {
	if (type == "DefaultButton") {
		return (
			<div className={className ? className : ""}>
				<div className="h-[20px]">
					<div>
						<a
							href="#_"
							onClick={onClick}
							className="relative inline-flex items-center border-primary border-[1px] justify-start text-center w-48 py-3 overflow-hidden font-medium transition-all bg-transparent text-white rounded hover:bg-transparent group cursor-pointer z-[2]"
						>
							<span className="w-48 h-48 rounded rotate-[-40deg] bg-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 ml-9 mb-9 transition-all translate-y-full  group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0">
								.
							</span>
							<span className="relative w-full text-center transition-colors duration-300 ease-in-out group-hover:text-black">
								{text}
							</span>
						</a>
					</div>
				</div>
			</div>
		);
	} else if (type == "SubmitButton") {
		return (
			<div className={className ? className : ""}>
				<div className="h-[20px]">
					<a
						href="#_"
						onClick={onClick}
						className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-[#f12711] border-2 border-[#f12711] rounded-md hover:text-white group hover:bg-gray-50"
					>
						<span className="absolute left-0 block w-full h-0 transition-all bg-[#f12711] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
						<span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
							<svg
								className="w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M14 5l7 7m0 0l-7 7m7-7H3"
								></path>
							</svg>
						</span>
						<span className="relative">{text}</span>
					</a>
				</div>
			</div>
		);
	} else if (type == "SearchButton") {
		return (
			<div className={className ? className : ""}>
				<div className="h-[20px]">
					<a
						href="#_"
						onClick={onClick}
						className="relative inline-flex items-center w-[50px] h-[50px] rounded-full overflow-hidden text-lg font-medium text-[#f12711] border-2 border-[#f12711] rounded-md hover:text-white group hover:bg-gray-50"
					>
						<span className="absolute left-0 block w-full h-0 transition-all bg-[#f12711] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>

						<span className="relative mx-auto">{text}</span>
					</a>
				</div>
			</div>
		);
	} else if (type == "DisabledSearchButton") {
		return (
			<div className={className ? className : ""}>
				<div className="h-[20px] ">
					<a
						href="#_"
						onClick={onClick}
						className="relative cursor-default inline-flex items-center w-[50px] h-[50px] bg-gray-500 rounded-full overflow-hidden text-lg font-medium text-[white] border-2 rounded-md"
					>
						<span className="relative mx-auto ">{text}</span>
					</a>
				</div>
			</div>
		);
	}
}
