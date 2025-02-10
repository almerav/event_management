"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";
import { useEffect, useState } from "react";
import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const MobileSidebar = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            {!isOpen && (
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsOpen(true)}
                    >
                        <Menu />
                    </Button>
                </SheetTrigger>
            )}
            <SheetContent
                side="left"
                className="p-0"
                onInteractOutside={() => setIsOpen(false)}
                onEscapeKeyDown={() => setIsOpen(false)}
            >
                <VisuallyHidden>
                    <DialogTitle>Sidebar Navigation</DialogTitle>
                </VisuallyHidden>
                <Sidebar />
            </SheetContent>
        </Sheet>
    );
};

export default MobileSidebar;
