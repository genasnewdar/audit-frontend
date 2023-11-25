'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react';

import { LIBS } from "@/libs";
import { PNavItem } from "@/partials";

const CHeaderNav = () => {
	const navigation =usePathname()
	const [navbar, setNavbar] = useState(false);
	return (
		<>
			<div className="hidden md:flex flex-col gap-4 md:gap-[25px]">
				{LIBS.navItems?.map((e, i) => (
					<PNavItem isPath={navigation === e?.href} key={i} href={e.href}>
						{e.name}
					</PNavItem>
				))}
			</div>
            

			<div className="md:hidden relative whitespace-nowrap py-4 px-6">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
							<div className={`absolute bg-white rounded-3xl shadow-2xl px-10 py-6 right-0 z-10 md:hidden flex flex-col text-2xl gap-2 ${
											navbar ? "block" : "hidden"
										}`}>
									{LIBS.navItems?.map((e, i) => (
											<PNavItem isPath={navigation === e?.href} key={i} href={e.href}>
												{e.name}
											</PNavItem>
									))}
							</div>
                        </div>
		</>
	);
};

export default CHeaderNav;
