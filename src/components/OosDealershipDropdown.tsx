import React from 'react';
import { OOSQualifyingDealerships } from '../typings/types';

const DealershipDropdown : React.FC = () => {
    return (
        <select>
            {[...OOSQualifyingDealerships.keys()].map((dealership) => (
                <option key={dealership} value={dealership}>
                    {dealership}
                </option>
            ))}
        </select>
    );
};

export default DealershipDropdown;