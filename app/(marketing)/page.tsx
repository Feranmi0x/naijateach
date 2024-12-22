import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div className="font-[family-name:var(--font-geist-mono)] flex flex-col items-center justify-center lg:flex-row bg-[url('/bg.png')] bg-contain w-full min-h-screen mt-6">
    <div className="flex flex-col items-center">
    <Image src="/digi.png" height={400} width={400} alt="Digi Art"/>
    </div>
    <div className="flex flex-col items-center">
    <h1 className="text-3xl lg:text-3xl font-bold max-w-[570px] text-center text-black tracking-wide mb-8 pl-12 pr-12">Learn about Nigeria’s languages and culture in a fun, interactive, and free way!</h1>
    <ClerkLoaded>
      <SignedOut>
        <SignInButton
        mode="modal"
        fallbackRedirectUrl="/learn"
        signUpFallbackRedirectUrl="/learn">
          <Button size="lg" variant="primary" className="w-96 max-w-300 mb-3 tracking-wide">Get Started</Button>
        </SignInButton>
        <SignInButton
        mode="modal"
        fallbackRedirectUrl="/learn"
        signUpFallbackRedirectUrl="/learn">
          <Button size="lg" variant="primaryOutline" className="mt-1 w-96 tracking-wide">Alreay Have an Account</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <Link href="/learn">
        <Button className="w-full min-w-[360px]" variant="primary" size="lg">Continue Learning</Button>
        </Link>
      </SignedIn>
    </ClerkLoaded>
    <ClerkLoading>
      <Loader className="h-4 w-5 text-muted-foreground animate-spin"></Loader>
    </ClerkLoading>
    </div>
   </div>
  );
}

