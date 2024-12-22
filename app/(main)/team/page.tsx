import Image from "next/image";
import Link from "next/link";


const teamPage = () => {
    return (
        <>
        <h2 className="text-3xl uppercase tracking-wide font-extrabold py-[20px] text-center">team & Contributor</h2>
        <div className="flex flex-col lg:flex-row lg:justify-center lg:pt-[40px] gap-x-4 items-center gap-y-4">
            <div className="w-[280px] bg-gray-100 p-10 flex items-center flex-col border-b-4 border-gray-300 rounded-[10px]">
                <div>
                    <Image 
                    src="/feranmi.jpg" 
                    height={100} 
                    width={100} 
                    alt="team"
                    className="rounded-full border-r-4 border-logo border-l-4"
                    />
                </div>
                <p className="font-bold text-2xl mt-8">Joe Doe</p>
                <p className="text-logo text-md mt-6 text-center">Web Developer, Animator, Contributor, <span className="text-nowrap">Co-Founder</span></p>
                <Link href="https://x.com/0xgalilei" className="mt-8" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </Link>
            </div>
            <div className="w-[280px] bg-gray-100 p-10 flex items-center flex-col border-b-4 border-gray-300 rounded-[10px]">
                <div>
                    <Image 
                    src="/feranmi.jpg" 
                    height={100} 
                    width={100} 
                    alt="team"
                    className="rounded-full border-r-4 border-logo border-l-4"
                    />
                </div>
                <p className="font-bold text-2xl mt-8 tracking-wide">Joe Doe</p>
                <p className="text-logo text-md mt-6 text-center">Web Developer, Animator, Contributor, <span className="text-nowrap">Co-Founder</span></p>
                <Link href="https://x.com/0xgalilei" className="mt-8">
                <i>Twitter</i>
                </Link>
            </div>
        </div>
        </>
    )
};

export default teamPage;