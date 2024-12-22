import Image from "next/image";
import { ClerkLoading,
    ClerkLoaded,
    SignedIn,
    UserButton,
    SignedOut,
    SignInButton
 } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
    return (
        <header className="h-16 w-full border-b-2 border-slate-200 px-4 fixed bg-white">
            <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
                <div className="flex items-center gap-x-1 pl-4 pt-8 pb-7">
                     <Image src="/logo.png" height={60} width={60} alt="naijateach logo" className="rounded-sm"/>
                     <div>
                     <h1 className="font-extrabold text-yelloww tracking-wide text-xl drop-shadow-2xl mb-[-5px]">Naijateach</h1>
                     </div>
                </div>
                <ClerkLoading>
                    <Loader className="h-4 w-5 text-muted-foreground animate-spin" />
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode="modal" fallbackRedirectUrl="/learn" signUpFallbackRedirectUrl="/learn">
                            <Button variant="ghost" className="text-neutrall text-sm font-extrabold">
                                Login
                            </Button>
                        </SignInButton>
                    </SignedOut>
                </ClerkLoaded>
            </div>
        </header>
    );
};