import { CContacts } from "@/components/contact";
import { PSocial } from "@/partials";

export default function Contact() {
	return (
		<div className="max-w-[870px] flex flex-col items-center justify-between gap-4 md:gap-[50px] my-4 md:my-[50px]">
            <div className="flex justify-center items-center text-start flex-col gap-2 md:gap-4">
                <h2 className="text-black-900 text-2xl md:text-[46px] p-2">Contact Us</h2>
                <p className="text-black-900 p-[10px]">If you have any question, don’t hesitate to contact us</p>
            </div>
            <div className=" text-primary-900 "><PSocial/></div>
            <CContacts/>
		</div>
	);
}
