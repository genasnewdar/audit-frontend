import { Facebook, Instagram,Linkedin,Twitter } from "lucide-react";
import Link from "next/link";

const PSocial = () => {
	return (
		<div className="flex gap-2 md:gap-4 items-center">
			<Link target="_blank" href="">
				<Twitter size={24} />
			</Link>
			<Link target="_blank" href="">
				<Linkedin size={24}/>
			</Link>
			<Link target="_blank" href="">
				<Facebook size={24}/>
			</Link>
			<Link target="_blank" href="">
				<Instagram size={24}/>
			</Link>
		</div>
	);
};

export default PSocial;
