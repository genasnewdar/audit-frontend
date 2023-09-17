import { IContactItem } from "@/Moduls/MContact";

import {LContacts} from "./LContacts";
import {LMiniBanners} from "./LMiniBanners";
import {LMock} from "./LMock";
import navItems from "./LNavItems.json";
import problemItems from "./LProblems.json";
import solutionItems from "./LSolutions.json";

interface ILibs {
	navItems: Array<INav>;
	LContacts: Array<IContactItem>
	LMiniBanners: Array<{name: string, desk: string}>
	problemItems: Array<string>
	solutionItems: Array<string>
	LMock: Array<{title: string, desk: string, imgUrl: string}>
}
export const LIBS: ILibs = {
	navItems,
	LContacts,
	LMiniBanners,
	problemItems,
	solutionItems,
	LMock
};
