import React, { useState } from 'react';
import { DriveEVRebateEligibilityForm } from '../typings/types';
import { DealerTypes, EligibleVehicleTypes } from '../typings/constanst';
import { FormSelect, FormInput, FormCheckbox, FormDoubleCheckbox  } from './FormInput';
import { LeaseTermForm, OOSDealerNameForm } from './OptionalForm';
import { EVehicle } from '../services/EVehicle';
import { useNavigate } from 'react-router-dom';

type EligibilityFormComponentProps = {
    setEligibilityResult: React.Dispatch<React.SetStateAction<{
        isEligible: boolean;
        message: string;
        rebateAmount: number;
        failReasons?: string[];
    }>>
};

const EligibilityFormComponent: React.FC<EligibilityFormComponentProps> = ({ setEligibilityResult }) =>
{
    const navigate = useNavigate();

    const [formState, setFormState] = useState<DriveEVRebateEligibilityForm>({
        vehicleType: EligibleVehicleTypes.BEV.toString(),
        purchaseOrLeaseDate: new Date(),
        vehiclePrice: 0,
        dealerType: DealerTypes.RI_Dealer.toString(),
        isRhodeIslandResident: true,
        isVehicleRegisteredInRI: true,
        income: 0,
        isLease: false,
        isUsed: false,
        isConversion: false,
        OosDealerName: '',
        leaseTermInMonths: 0,
    });

    const CheckEligibilityHandler = (formData: DriveEVRebateEligibilityForm) => {
        // Step 1: Instantiate a new EVehicle object
        const eVehicle = new EVehicle(formData);
        console.log('form data: ', formData);
        // Step 2: Validate data and determine eligibility
        const isEligible = eVehicle.isEligibleForDriveEV();

        let failReasons: string[] = [];
        const rebateAmount = eVehicle.getRebateAmount();
        const isDrivePlusEligible = eVehicle.isDrivePlusEligible();

        if (isEligible) {
            setEligibilityResult({
                isEligible: true,
                message: isDrivePlusEligible ? 
                    "Congratulations! You are both eligible for the Drive EV and Drive Plus programs!" :
                    "Congratulations! You are eligible for the Drive EV program!",
                rebateAmount: rebateAmount,
            });
        } else {
            failReasons = eVehicle.getFailReasons();
            
            setEligibilityResult({
                isEligible: false,
                message: "Sorry, you are not eligible!",
                rebateAmount: rebateAmount,
                failReasons: failReasons,
            });
        }

        navigate('/result');
    };

    const vehicleOptions = [
        { value: EligibleVehicleTypes.BEV, label: EligibleVehicleTypes.BEV },
        { value: EligibleVehicleTypes.FCEV, label: EligibleVehicleTypes.FCEV },
        { value: EligibleVehicleTypes.PHEV, label: EligibleVehicleTypes.PHEV },
    ];
    
    const dealerOptions = [
        { value: DealerTypes.RI_Dealer, label: 'Rhode Island Dealer' },
        { value: DealerTypes.OOS_Dealer, label: 'Out-Of-State Dealer' },
    ];

    const handleDoubleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log(name, value);

        // Directly convert the string value to a boolean
        const booleanValue = value === 'true';

        // Use the booleanValue to update the state
        setFormState(prevState => ({
            ...prevState,
            [name]: booleanValue,
        }));
    };

    return (
        <div className="eligibility-form">
            <h1>Drive EV Rebate Eligibility Form For Rhode Island residents</h1>
            <form onSubmit={(e) => { e.preventDefault(); if (formState) CheckEligibilityHandler(formState); }}>
                <FormSelect
                    id="vehicleType"
                    label="What is your vehicle type?"
                    value={formState?.vehicleType}
                    options={vehicleOptions}
                    onChange={(e) => setFormState({ ...formState, vehicleType: e.target.value as EligibleVehicleTypes })}
                />
                <FormDoubleCheckbox
                    name="isUsed"
                    mainLabel="New or Used?"
                    label1="Used"
                    label2="New"
                    value={String(formState.isUsed)} // Assuming 'true' represents "New" and 'false' represents "Used"
                    onChange={handleDoubleCheckboxChange}
                />
                
                <FormDoubleCheckbox
                    name="isLease"
                    mainLabel="Purchase or Lease?"
                    label1="Lease"
                    label2="Purchased"
                    value={String(formState.isLease)} // Assuming 'true' represents "Purchased" and 'false' represents "Lease"
                    onChange={handleDoubleCheckboxChange}
                />
                {formState?.isLease && (
                    <LeaseTermForm
                        leaseTermInMonths={formState.leaseTermInMonths ?? 0}
                        onChange={(e) => 
                            setFormState({ 
                                ...formState, 
                                leaseTermInMonths: Number(e.target.value) 
                            })
                        }
                    />
                )}

                <FormInput
                    id='purchaseDate'
                    label="Date of Purchase or Lease"
                    type="date"
                    value={formState.purchaseOrLeaseDate.toISOString().substring(0, 10)}
                    onChange={(e) => setFormState({ ...formState, purchaseOrLeaseDate: new Date(e.target.value) })}
                />
                <FormInput
                    id="vehiclePrice"
                    label="Vehicle Purchase Price in US$"
                    type="number"
                    value={formState?.vehiclePrice}
                    onChange={(e) => setFormState({ ...formState, vehiclePrice: Number(e.target.value) })}
                />

                <FormSelect
                    id="dealerType"
                    label="Where did you purchase your vehicle?"
                    value={formState?.dealerType}
                    options={dealerOptions}
                    onChange={(e) => setFormState({ ...formState, dealerType: e.target.value as DealerTypes })}
                />
                {formState?.dealerType === DealerTypes.OOS_Dealer && (
                    <OOSDealerNameForm
                        selectedDealer={formState.OosDealerName ?? ''}
                        onChange={(e) => 
                            setFormState({ 
                                ...formState, 
                                OosDealerName: e.target.value 
                            })
                        }
                    />
                )}

                <FormCheckbox
                    id="isRhodeIslandResident"
                    label="Are you a Rhode Island Resident? (Check if yes, otherwise leave blank)"
                    checked={formState?.isRhodeIslandResident}
                    onChange={(e) => setFormState({ ...formState, isRhodeIslandResident: e.target.checked })}
                />
                {
                    formState?.dealerType === DealerTypes.OOS_Dealer && (
                        <FormCheckbox
                            id="isVehicleRegisteredInRI"
                            label="Is your vehicle registered in Rhode Island? (Check if yes, otherwise leave blank)"
                            checked={formState?.isVehicleRegisteredInRI}
                            onChange={(e) => setFormState({ ...formState, isVehicleRegisteredInRI: e.target.checked })}
                        />
                    )
                }
                <FormCheckbox
                    id="isConversion"
                    label="Have you converted your vehicle to an electric vehicle as aftermarket conversion? (check if yes, otherwise leave blank)"
                    checked={formState?.isConversion}
                    onChange={(e) => setFormState({ ...formState, isConversion: e.target.checked })}
                />
                <FormInput
                    id="income"
                    label="Your Annual Income in $"
                    type="number"
                    value={formState?.income ?? 0}
                    onChange={(e) => setFormState({ ...formState, income: Number(e.target.value) })}
                />
                <button 
                    type="submit" 
                    style={{
                        padding: '15px 30px',
                        fontSize: '20px',
                        cursor: 'pointer',
                    }}>
                    Check Your Eligibility
                </button>
            </form>
        </div>
    );
};

export default EligibilityFormComponent;