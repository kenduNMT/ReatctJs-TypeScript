import React, { useState } from 'react';

interface SelectProps {
    cities: string[];
}

const Select: React.FC<SelectProps> = ({ cities }) => {
    // Define the state for the selected city
    const [selectedCity, setSelectedCity] = useState<string>('');

    // Function to handle the change event of the select element
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCity(event.target.value);
    };

    return (
        <div>
            <label htmlFor="city-select">Thành phố:</label>
            <select id="city-select" value={selectedCity} onChange={handleChange}>
                <option value="">-- Chọn thành phố --</option>
                {cities.map((city, index) => (
                    <option key={index} value={city}>
                        {city}
                    </option>
                ))}
            </select>
            {selectedCity && <p>Thành phố: {selectedCity}</p>}
        </div>
    );
};

export default Select;
