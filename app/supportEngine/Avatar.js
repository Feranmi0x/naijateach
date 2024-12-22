'use client';

import { useState } from 'react';
import { styles } from './styles';


const Avatar = props => {
    const [hovered, setHovered] = useState(false)
    return (
        <div style={props.style}>

        <div
        onMouseEnter={() => setHovered(true)} 
        onMouseLeave={() => setHovered(false)}
        onClick={() => props.onClick && props.onClick()}
        style={{
            ...styles.chatWithMeButton,
            ...{border: hovered ? '1px solid #f9f0ff' : '2px solid #25C525'}
        }}
        />
        </div>
    )
}

export default Avatar;
