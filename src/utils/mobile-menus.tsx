import { Bolt, Home, Info } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { BellDot } from "lucide-react";
import { BookOpenText } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { Images } from "lucide-react";
import { Figma } from "lucide-react";
import { Play } from "lucide-react";
import { MapPin } from "lucide-react";
import { Database } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";
import { PanelTop } from "lucide-react";

export const Menus = [
	{
		name: "Home",
		icon: Home,
	},
	{
		name: "About",
		icon: Info,
	},
	{
		name: "Portfolio",
		icon: BriefcaseBusiness,
	},
	{
		name: "All Projects",
		subMenuHeading: ["Design", "Scale"],
		subMenu: [
			{
				name: "All Projects",
				desc: "Responsive design",
				icon: PanelsTopLeft,
			},
			{
				name: "Web Designs",
				desc: "Site control",
				icon: Bolt,
			},
			{
				name: "Redesigns",
				desc: "Link pages",
				icon: PanelTop,
			},
			{
				name: "Sections",
				desc: "Management content",
				icon: Database,
			},
		],
		gridCols: 2,
	},
	{
		name: "Resources",
		subMenuHeading: ["Get started", "Programs", "Recent"],
		subMenu: [
			{
				name: "Markplace",
				desc: "Browse templates",
				icon: ShoppingBag,
			},
			{
				name: "Meetups",
				desc: "Upcoming events",
				icon: MapPin,
			},
			{
				name: "Updates",
				desc: "Changelog",
				icon: BellDot,
			},
			{
				name: "Academy",
				desc: "Watch lessions",
				icon: Play,
			},
			{
				name: "Blog",
				desc: "Posts",
				icon: BookOpenText,
			},
			{
				name: "Figma",
				desc: "Plugin",
				icon: Figma,
			},
			{
				name: "Experts",
				desc: "Jobs",
				icon: BriefcaseBusiness,
			},
			{
				name: "Gallery",
				desc: "Images",
				icon: Images,
			},
		],
		gridCols: 3,
	},
];