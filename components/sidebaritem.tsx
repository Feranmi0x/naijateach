"use client";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type Props = {
    label: string;
    iconSrc: string;
    href: string;
};


export const SideBarItem = ({ label,
    iconSrc,
    href,
}: Props) => {
    const pathname = usePathname();
    const active = pathname === href;

    return (
        <Link href={href}>
        <Button className="justify-start h-[52px]" variant={ active ? "sidebarOutline" : "sidebar" }>  
        <Image className="mr-3" src={iconSrc} height={80} width={80} alt="Learn"/>    
          {label}   
        </Button>
        </Link>
    );
};