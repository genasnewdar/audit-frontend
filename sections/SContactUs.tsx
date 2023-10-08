"use client";
import React from "react";

import { PButton, PInput, PTextArea } from "@/partials";
import { formDataToJson } from "@/utils";

const SContactUs = () => {
	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formdata = new FormData(event.target as HTMLFormElement);
		const body = formDataToJson(formdata);
		fetch("url", {
			method: "POST",
			headers: {
				Accept: "application.json",
				"Content-Type": "application/json"
			},
			body: body as BodyInit,
			cache: "default"
		});
	};
	return (
		<div className="bg-white w-full rounded-3xl border border-[#DDDDDD] shadow-xl pt-[52px] px-8 pb-6 flex flex-col gap-10">
			<div className="w-full">
				<h2 className="text-center text-black font-bold text-[22px] leading-[33px]">
					Contact us
				</h2>
			</div>
			<form
				action="submit"
				onSubmit={onSubmit}
				className=" flex flex-col gap-10 w-full  ">
				<PInput isRequired name="name" placeholder="Your Name" />
				<PInput isRequired name="email" placeholder="Your Email" />
				<PTextArea isRequired name="message" placeholder="Your Message" />
				<div>
					<PButton
						type="submit"
						className=" bg-primary-900 px-10 py-4 rounded-full text-white ">
						Send
					</PButton>
				</div>
			</form>
		</div>
	);
};

export default SContactUs;
