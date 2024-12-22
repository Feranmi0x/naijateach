import { MobileSideBar } from "./mobilesidebar";

export const MobileHeader = ( ) => {
    return (
        <nav className="bg-logo h-[50px] lg:hidden px-6 flex items-center fixed w-full border-b border-slate-300 z-50">
            <MobileSideBar />
        </nav>
    );
};