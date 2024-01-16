import React, { useState } from 'react';
import { DriveEVRebateEligibilityForm } from '../typings/types';

const FormComponent: React.FC = () => 
{
    const [formState, setFormState] = useState<DriveEVRebateEligibilityForm>({ 
        vehicleType: '', 
        purchaseDate: '', 
        vehiclePrice: 0,
        dealerType: 'RI_Dealer',
        isRhodeIslandResident: false,
        isVehicleRegisteredInRI: false,
        income: 0,
        driversLicense: undefined,
        w9Form: undefined,
        vehicleRegistration: undefined,
        salesOrLeaseContract: undefined
    });

    // Form handling logic goes here

    return (
        <div>
            <h1>Drive EV Rebate Eligibility Form</h1>
                {/* Form elements go here. Example: Input for vehicle type */}
                <input
                    type="text"
                    value={formState.vehicleType}
                    onChange={(e) => setFormState({ ...formState, vehicleType: e.target.value })}
                    placeholder="Vehicle Type" />
                {/*Add more form inputs for purchaseDate, income, etc. */}
        </div>
    );
};

export default FormComponent;