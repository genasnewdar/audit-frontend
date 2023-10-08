import { CContacts } from "@/components/contact";
import { PSocial } from "@/partials";
import { SContactUs, SMap } from "@/sections";

export default function Contact() {
	return (
		<div className="max-w-[870px] flex flex-col items-center justify-between gap-4 md:gap-[50px] px-4 md:px-0 my-4 md:my-[50px]">
			<div className="flex w-full justify-center items-center text-start flex-col gap-2 md:gap-4">
				<h2 className="text-black-900 text-2xl md:text-[46px] p-2">
					Contact Us
				</h2>
				<p className="text-black-900 p-[10px]">
					If you have any question, don’t hesitate to contact us
				</p>
			</div>
			<div className=" text-primary-900 ">
				<PSocial />
			</div>
			<SMap />
			<CContacts />
			<SContactUs />
		</div>
	);
}
