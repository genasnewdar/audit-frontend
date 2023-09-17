import { Facebook, Instagram,Linkedin,Twitter } from "lucide-react";
import Link from "next/link";

const PSocial = () => {
	return (
		<div className="flex gap-2 md:gap-4 items-center">
			<Link target="_blank" href="https://twitter.com/leveredsystems">
				<Twitter size={24} />
			</Link>
			<Link target="_blank" href="https://www.linkedin.com/company/lever-ed/">
				<Linkedin size={24}/>
			</Link>
			<Link target="_blank" href="https://www.instagram.com/leveredsystems/">
				<Instagram size={24}/>
			</Link>
		</div>
	);
};

export default PSocial;
