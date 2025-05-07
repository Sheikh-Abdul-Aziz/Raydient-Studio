"use client"

import React from "react";


export default function Showcase() {

    return (
        <div> 
        {/*    <div className="flex-row fixed left-0 right-0 top-14 bottom-0 h-full w-full bg-background text-foreground p-6" initial={{ x: "-100%" }} animate={{ x: isOpen ? "0%" : "-100%" }} transition={{ duration: 0.1 }}>
                <ul>
                    {Menus.map(({ image, name, price, discount }, i) => {
                        const isClicked = clicked === i;
                        const hasSubMenu = subMenu?.length;
                        return (
                            <li key={name}>
                                <Image src={image} alt="Product image" className="w-full h-96 object-cover" onClick={() => setClicked(isClicked ? null : i)}/>
                                <span className="flex p-4 hover:bg-foreground/5 rounded-md cursor-pointer relative" >
                                    {name}
                                    {hasSubMenu && (<ChevronDown className={`ml-auto ${isClicked && "rotate-180"} `} />)}
                                </span>
                                {hasSubMenu && (
                                    <motion.ul initial="exit" animate={isClicked ? "enter" : "exit"} variants={subMenuDrawer} className="ml-5">
                                        {subMenu.map(({ name, icon: Icon }) => (
                                            <li key={name} className="p-2 flex hover:bg-white/5 rounded-md gap-x-2 cursor-pointer">
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
            </div>*/}
        </div>
    )
}