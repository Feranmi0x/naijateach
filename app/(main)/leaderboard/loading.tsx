"use client";
import Rive from '@rive-app/react-canvas';

 const Loading = () => {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="w-[300px] h-[300px]">
                <Rive
                    src="loadin.riv"
                />
            </div>
        </div>
    );
};

export default Loading;