"use client";

import React from "react";
import { Button } from "./ui/button";
import { BellDotIcon } from "lucide-react";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "./ui/drawer";
import { useMobileMenu } from "./mobile-menu";

export default function Notifications() {
    const { isMenuOpen } = useMobileMenu();
    return (
        <Drawer> {/* Drawer for Notifications */}
            <DrawerTrigger asChild>
                <Button disabled={ isMenuOpen } aria-label={"notifications"} variant={"outlined"} size={"icon"} radius={"medium"}>
                    <BellDotIcon />
                </Button>
            </DrawerTrigger>
            {/* Drawer content can be added here */}
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Notifications</DrawerTitle>
                    <DrawerDescription>No new notifications</DrawerDescription>
                    <DrawerClose asChild>
                        <Button variant="text">Close</Button>
                    </DrawerClose>
                </DrawerHeader>
                <DrawerFooter>
                    <p>No new notifications</p>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}