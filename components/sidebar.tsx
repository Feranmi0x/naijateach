// Sidebar Component
"use client"; // Client component declaration

import { cn } from "@/lib/utils";
import Image from "next/image";
import { SideBarItem } from "./sidebaritem";
import { Loader } from "lucide-react";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";

type Props = {
  className: string;
  onClose?: () => void; // onClose is now passed to client component
};

export const Sidebar = ({ className, onClose }: Props) => {
  return (
    <div
      className={cn(
        "flex h-full bg-yelloww lg:border-r-2 lg:w-[276px] lg:fixed left-0 top-0 px-6 flex-col",
        className
      )}
    >
      <div className="flex items-center justify-center pt-3 pb-2 flex-col">
        <Image
          src="/logo.png"
          height={60}
          width={60}
          alt="naijateach logo"
          className="rounded-sm"
        />
        <h1 className="font-extrabold text-white tracking-wide text-2xl">
          NaijaTeach
        </h1>
      </div>
      <div className="flex flex-col h-full">
        <SideBarItem label="Learn" iconSrc="/hm.png" href="/learn" onClick={onClose} />
        <SideBarItem label="Leaderboard" iconSrc="/ld.png" href="/leaderboard" onClick={onClose} />
        <SideBarItem label="Shop" iconSrc="/sh.png" href="/shop" onClick={onClose} />
        <SideBarItem label="Quest" iconSrc="/qt.png" href="/quest" onClick={onClose} />
        <SideBarItem label="Contact" iconSrc="/co.png" href="/contact" onClick={onClose} />
        <SideBarItem label="Resources" iconSrc="/rs.png" href="/resource" onClick={onClose} />
        <SideBarItem label="Dictionary" iconSrc="/dc.png" href="/dictionary" onClick={onClose} />
      </div>
      <div className="pb-8 pl-8">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin"></Loader>
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSwitchSessionUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};
