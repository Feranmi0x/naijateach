"use client";

import { useEffect, useRef, useState } from 'react';
import SupportWindow from './SupportWindow';
import Avatar from './Avatar';




const SupportEngine = () => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setVisible(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
}, [ref])

    return (
        <div ref={ref}>
            <SupportWindow 
            visible={visible}
            />

           <Avatar 
           onClick={() => setVisible(true)}
           style={{ 
            position: 'fixed', 
            bottom: '24px', 
            right: '24px'}}
           />
        </div>
    );
}

export default SupportEngine;