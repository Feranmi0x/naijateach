"use client"


import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export const Promo = () => {
return (
<div className="border-2 rounded-xl p-4 space-y-4">
<div>
<div className="flex items-center gap-x-2">
<Image
src="/progem.png" 
alt="Pro" 
height={40} 
width={40}
/>
<h3 className="font-bold text-lg">
Upgrade to Pro 
</h3> 
</div> 
<p className="text-muted-foreground mb-4">
Get unlimited hearts and more!
</p>
</div>
<Link href="/shop">
<Button
variant="super" 
className="w-full" 
size="lg">
Upgrade today
</Button>
</Link>
</div>
);
};
