// src/app/departments/filled-oil/page.tsx

import React, { useState } from 'react';

const FilledOil: React.FC = () => {
    const [date, setDate] = useState<string>('');
    const [pr, setPr] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
 
    };

    return (
        <div>
            <h1>Filled Oil</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="pr">PR:</label>
                    <input
                        type="text"
                        id="pr"
                        value={pr}
                        onChange={(e) => setPr(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FilledOil;
