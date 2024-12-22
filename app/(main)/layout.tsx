import { MobileHeader } from "@/components/mobileheader";
import { Sidebar } from "@/components/sidebar";

type Props = {
    children: React.ReactNode;
};

const LearnLayout = ({ children, }: Props)  => {
    return (
        <>
        <MobileHeader />
        <Sidebar className="hidden lg:flex font-[family-name:var(--font-geist-mono)]"/>
        <main className="font-[family-name:var(--font-geist-mono)] lg:pl-[256px] h-full pt-[50px] lg:pt-0">
            <div className="max-w-[1050px] mx-auto h-full pt-5 text-xl">
            {children}
            </div>
        </main>
        </>
    );
};

export default LearnLayout;