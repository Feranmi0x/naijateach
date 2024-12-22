import Image from "next/image";
export const Footer = () => {
    return (
       <footer className="hidden lg:block h-16 w-full border-t-2 border-slate-200 p-2 z-50 sticky bottom-0 bg-white">
        <div className="lg:max-w-screen-lg mx-auto flex flex-row justify-between items-center pl-40 lg:pl-7 lg:pr-4 pr-40 text-extrabold tracking-wide text-neutral-600 h-full">
            <div className="flex gap-x-2 flex-row items-center">
                <Image src="/ig.jpg" alt="Igbo" height={50} width={50} className="rounded-md border-2 border-grey-400"/>
                <h1 className="font-bold text-l ml-2 text-gray-500">IGBO</h1>
            </div>
            <div className="flex gap-x-2 flex-row items-center">
                <Image src="/yr.jpg" alt="Yoruba" height={50} width={50} className="rounded-md border-2 border-grey-400"/>
                <h1 className="font-bold text-l ml-2 text-gray-500">YORUBA</h1>
            </div>
            <div className="flex gap-x-2 flex-row items-center">
                <Image src="/hs.png" alt="Hausa" height={50} width={50} className="rounded-md border-2 border-grey-400"/>
                <h1 className="font-bold text-l ml-2 text-gray-500">HAUSA</h1>   
            </div>
            <div className="flex gap-x-2 flex-row items-center">
                <Image src="/pg.png" alt="Pidgin" height={50} width={50} className="rounded-md border-2 border-grey-400"/>
                <h1 className="font-bold text-l ml-2 text-gray-500">PIDGIN</h1>   
            </div>
        </div>
       </footer>
    );
};