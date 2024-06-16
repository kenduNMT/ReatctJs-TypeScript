import React, { useState } from 'react';

interface ToggleProps {
    initialVisibility?: boolean;
}

const Toggle: React.FC<ToggleProps> = ({ initialVisibility = false }) => {
    // Define the state for the text visibility
    const [isVisible, setIsVisible] = useState<boolean>(initialVisibility);

    // Function to toggle the text visibility
    const toggleVisibility = () => {
        setIsVisible((prevVisibility) => !prevVisibility);
    };

    return (
        <div>
            <button onClick={toggleVisibility}>
                {isVisible ? 'Ẩn' : 'Hiện'}
            </button>
            {isVisible && <h1>Tiêu đề văn bản</h1>}
        </div>
    );
};

export default Toggle;
