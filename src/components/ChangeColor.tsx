import React, { useState } from 'react';

interface ChangeColorProps {
    initialColor?: string;
}

const ChangeColor: React.FC<ChangeColorProps> = ({ initialColor = 'black' }) => {
    // Define the state for the text color
    const [color, setColor] = useState<string>(initialColor);

    // Function to toggle the text color between black and red
    const toggleColor = () => {
        setColor((prevColor) => (prevColor === 'black' ? 'red' : 'black'));
    };

    return (
        <div>
            <p style={{ color }}>This is some text</p>
            <button onClick={toggleColor}>Change Color</button>
        </div>
    );
};

export default ChangeColor;
