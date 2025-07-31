import { JetBrains_Mono } from "@/fonts/local";
import { cn } from "@/lib/utils";
import { IconSquareFilled } from "@tabler/icons-react";
import { Marquee } from "./ui/marquee";

const reviews = [
	{
		name: "Jack",
		username: "@jack",
		body: "I've never seen anything like this before. It's amazing. I love it.",
		img: "https://avatar.vercel.sh/jack",
	},
	{
		name: "Jill",
		username: "@jill",
		body: "I don't know what to say. I'm speechless. This is amazing.",
		img: "https://avatar.vercel.sh/jill",
	},
	{
		name: "John",
		username: "@john",
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: "https://avatar.vercel.sh/john",
	},
	{
		name: "Jane",
		username: "@jane",
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: "https://avatar.vercel.sh/jane",
	},
	{
		name: "Jenny",
		username: "@jenny",
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: "https://avatar.vercel.sh/jenny",
	},
	{
		name: "James",
		username: "@james",
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: "https://avatar.vercel.sh/james",
	},
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
	className,
	img,
	name,
	username,
	body,
}: {
	className?: string;
	img: string;
	name: string;
	username: string;
	body: string;
}) => {
	return (
		<div className={cn(
			"relative h-auto w-full max-w-xs cursor-pointer overflow-hidden rounded-lg p-4",
			"bg-surface hover:bg-muted/80 active:bg-muted/80 transition-colors duration-170 ease-in-out cursor-pointer",
			className
		)}>
			<div className="flex flex-row items-center gap-2">
				<img className="rounded-full" width="32" height="32" alt="" src={img} />
				<div className="flex flex-col">
					<h5 className="text-sm font-medium text-foreground">
						{name}
					</h5>
					<p className="text-xs font-medium text-muted-foreground">{username}</p>
				</div>
			</div>
			<p className="mt-2 text-sm">{body}</p>
		</div>
	);
};

export default function Testimonial() {
	return (
		<div className="relative flex flex-col justify-start items-start w-full h-auto overflow-hidden px-4 py-8 gap-y-6 max-w-7xl mx-auto">
			<div className="text-left justify-start items-start align-middle">
				<div className="inline-flex flex-row items-center justify-start gap-x-1">
					<IconSquareFilled size={12} className="text-foreground" />
					<h3 className={`${JetBrains_Mono.className} antialiased translate-y-px md:translate-y-0 text-xs font-medium tracking-tight leading-none items-center text-muted-foreground uppercase`}>Testimonials</h3>
				</div>
				<h2 className="text-xl font-medium text-foreground normal-case leading-[1.3]">Take a Quick Look at our{" "}<br className="md:hidden" />Recent Branding Projects</h2>
			</div>
			<div className="relative w-full h-auto flex flex-col gap-y-4">
				{/* First row marquee */}
				<Marquee pauseOnHover className="w-full" duration={30} gap="1rem">
					{[...firstRow, ...firstRow].map((review, idx) => (
						<ReviewCard key={review.username + idx} {...review} />
					))}
				</Marquee>
				{/* Second row marquee (reverse) */}
				<Marquee reverse pauseOnHover className="w-full" duration={30} gap="1rem">
					{[...secondRow, ...secondRow].map((review, idx) => (
						<ReviewCard key={review.username + idx} {...review} />
					))}
				</Marquee>
			</div>
			{/* Gradient overlays for the edges */}
			<div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-background"></div>
			<div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-background"></div>
		</div>
	);
}