import React, { useState } from 'react';

interface CheckboxProps {
    options: string[];
}

const Checkbox: React.FC<CheckboxProps> = ({ options }) => {
    // Define the state for the selected values
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    // Function to handle the change event of the checkboxes
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSelectedValues((prevValues) =>
            event.target.checked
                ? [...prevValues, value]
                : prevValues.filter((val) => val !== value)
        );
    };

    return (
        <div>
            <h3>Sở thích: {JSON.stringify(selectedValues)}</h3>
            {options.map((option, index) => (
                <div key={index}>
                    <input
                        type="checkbox"
                        id={`checkbox-${index}`}
                        value={option}
                        onChange={handleChange}
                    />
                    <label htmlFor={`checkbox-${index}`}>{option}</label>
                </div>
            ))}
        </div>
    );
};

export default Checkbox;
