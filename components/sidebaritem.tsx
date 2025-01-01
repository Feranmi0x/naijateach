"use client";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type Props = {
  label: string;
  iconSrc: string;
  href: string;
  onClick?: () => void; // Optional onClick prop
};

export const SideBarItem = ({ label, iconSrc, href, onClick }: Props) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link href={href}>
      <Button
        className="justify-start h-[40px]"
        variant={active ? "sidebarOutline" : "sidebar"}
        onClick={onClick} // Trigger the onClick function when the button is clicked
      >
        <Image className="mr-3" src={iconSrc} height={80} width={80} alt={label} />
        {label}
      </Button>
    </Link>
  );
};