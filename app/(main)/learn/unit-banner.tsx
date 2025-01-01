import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type Props = {
    title: string;
    description: string;
    };
    export const UnitBanner = ({
        title,
        description,
    }: Props) => {
    return ( 
        <div className="sticky top-0 w-full border-b-4 border-logo bg-black p-2
        text-white flex items-center justify-between z-50">
            <div className="space-y-1">
            <div className="flex items-center gap-1">
            <Link href="/courses">
              <ArrowLeft className="h-5 w-5 stroke-2 text-white" />
            </Link>    
            <h1 className="text-xl font-bold">
                {title}
            </h1>
            </div>
            <p className="text-lg">
                {description}
            </p>
            </div>
            {/* <Link href="/lesson">
            <Button
            size="lg"
            variant="secondary"
            className="hidden rounded-none xl:flex border-[0.5px] border-b-4
             active: border-b-21 bg-yelloww">
            <NotebookText className="mr-2" />
             Continue
            </Button>
            </Link> */}
        </div>
    );
};