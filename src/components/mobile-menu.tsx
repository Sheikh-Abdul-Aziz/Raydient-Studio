"use client";

import React, { useState } from "react";
import ThemeSwitcher from "./theme-switcher";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

interface MenuItem {
	name: string;
	subMenu?: { name: string; icon: React.ComponentType<{ size: number }> }[];
}

interface MobMenuProps {
	Menus: MenuItem[];
}

export default function MobMenu({ Menus }: MobMenuProps) {

	const [isOpen, setIsOpen] = useState(false);
	const [clicked, setClicked] = useState<number | null>(null);
	const toggleDrawer = () => {
		setIsOpen(!isOpen);
		setClicked(null);
	};

	const subMenuDrawer = {
		enter: {
			height: "auto",
			overflow: "hidden",
		},
		exit: {
			height: 0,
			overflow: "hidden",
		},
	};

	return (
		<div>
			<Button variant="outlined" size="icon" className="flex flex-col items-center justify-center p-[8px] gap-1.5 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-secondary" onClick={() => { setIsOpen(!isOpen); toggleDrawer(); }}>
				<motion.span className="block w-full h-0.5 bg-foreground rounded-md" animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 4 : 0 }} transition={{ duration: 0.1 }} />
				<motion.span className="block w-full h-0.5 bg-foreground rounded-md" animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -4 : 0 }} transition={{ duration: 0.1 }} />
			</Button>
			<motion.div className="flex flex-col fixed left-0 right-0 top-16 bottom-0 h-screen w-screen bg-background text-foreground px-4 py-4 z-50 gap-3" initial={{ x: "-100%" }} animate={{ x: isOpen ? "0%" : "-100%" }} transition={{ duration: 0 }}>
				<div className="flex flex-col items-center justify-between gap-4">
					<Button variant="filled" size="wide" align="center">
						Signup
					</Button>
					<Button variant="outlined" size="wide" align="center">
						Login
					</Button>
				</div>
				<h6 className="text-sm text-foreground font-display">Preferences</h6>
				<div className="space-y-4">
					<div className="flex flex-row items-center justify-between">
						<span className="text-sm font-normal normal text-muted-foreground">Theme</span>
						<ThemeSwitcher />
					</div>
					<div className="flex flex-row items-center justify-between">
						<span className="text-sm font-normal normal text-muted-foreground">Dashboard</span>
						<Avatar className="w-8 h-8 border border-border rounded-full">
							<AvatarImage src="/favicon.ico" />
							<AvatarFallback>SA</AvatarFallback>
						</Avatar>
					</div>
				</div>
				<div className="px-0">
					<hr className="w-full h-[1px] border-border" />
				</div>
				<h6 className="text-sm text-foreground font-display">Resources</h6>
				<ul className="flex flex-col gap-2">
					{Menus.map(({ name, subMenu }, i) => {
						const isClicked = clicked === i;
						const hasSubMenu = subMenu?.length;
						return (
							<li key={name}>
								<span className="flex py-2 text-sm hover:bg-accent text-muted-foreground hover:text-foreground rounded-md cursor-pointer relative" onClick={() => setClicked(isClicked ? null : i)}>
									{name}
									{hasSubMenu && (<ChevronDown className={`ml-auto ${isClicked && "rotate-180 duration-2"} `} />)}
								</span>
								{hasSubMenu && (
									<motion.ul initial="exit" animate={isClicked ? "enter" : "exit"} variants={subMenuDrawer} className="ml-4">
										{subMenu.map(({ name, icon: Icon }) => (
											<li key={name} className="px-3 py-2 flex flex-row text-sm hover:bg-accent rounded-md gap-x-2 cursor-pointer">
												<Icon size={17} />
												{name}
											</li>
										))}
									</motion.ul>
								)}
							</li>
						);
					})}
				</ul>
			</motion.div>
		</div>
	);
}