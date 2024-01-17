import React, { useState } from 'react';
import { DriveEVRebateEligibilityForm } from '../typings/types';
import { DealerTypes, EligibleVehicleTypes } from '../typings/constanst';

const EligibilityFormComponent: React.FC = () => 
{
    const [formState, setFormState] = useState<DriveEVRebateEligibilityForm>({
        vehicleType: '',
        purchaseOrLeaseDate: new Date(),
        vehiclePrice: 0,
        dealerType: '',
        isRhodeIslandResident: false,
        isVehicleRegisteredInRI: false,
        income: 0,
        isLease: false,
        isUsed: false,
        isConversion: false,
        OosDealerName: '',
        leaseTermInMonths: 0,
    });

    function CheckEligibilityHandler(formData: DriveEVRebateEligibilityForm) {
        console.log(formData);
    }

    const vehicleOptions = [
        { value: '', label: 'Select Vehicle Type' },
        { value: EligibleVehicleTypes.BEV, label: EligibleVehicleTypes.BEV },
        { value: EligibleVehicleTypes.FCEV, label: EligibleVehicleTypes.FCEV },
        { value: EligibleVehicleTypes.PHEV, label: EligibleVehicleTypes.PHEV },
    ];
    
    const dealerOptions = [
        { value: '', label: 'Select EV Dealer Type' },
        { value: DealerTypes.RI_Dealer, label: 'Rhode Island Dealer' },
        { value: DealerTypes.OOS_Dealer, label: 'Out-Of-State Dealer' },
    ];

    return (
        <div>
            <h1>Drive EV Rebate Eligibility Form For Rhode Island residents</h1>
            <form onSubmit={(e) => { e.preventDefault(); if (formState) CheckEligibilityHandler(formState); }}>
                <div className='label-form-align'>
                    <label htmlFor="vehicleType">What is your vehicle type?</label>
                    <select
                        id="vehicleType"
                        value={formState?.vehicleType}
                        onChange={(e) => setFormState({ 
                            ...formState, 
                            vehicleType: e.target.value as EligibleVehicleTypes
                        })}
                    >
                        <option value="">Select Vehicle Type</option>
                        <option value={EligibleVehicleTypes.BEV}>{EligibleVehicleTypes.BEV}</option>
                        <option value={EligibleVehicleTypes.FCEV}>{EligibleVehicleTypes.FCEV}</option>
                        <option value={EligibleVehicleTypes.PHEV}>{EligibleVehicleTypes.PHEV}</option>
                    </select>
                </div>
                <div className='label-form-align'>
                    <label htmlFor='purchaseDate'>What is your vehicle's purchase date</label>
                    <input
                        id='purchaseDate'
                        type="date"
                        value={formState.purchaseOrLeaseDate.toISOString().substring(0, 10)}
                        onChange={(e) => setFormState({ 
                            ...formState, 
                            purchaseOrLeaseDate: new Date(e.target.value) 
                        })}
                        placeholder="Purchase Date" />
                </div>
                <div className='label-form-align'>
                    <label htmlFor="vehiclePrice">Vehicle Price in US $</label>
                    <input
                        id="vehiclePrice"
                        type="number"
                        value={formState?.vehiclePrice}
                        onChange={(e) => setFormState({ 
                            ...formState, 
                            vehiclePrice: Number(e.target.value) 
                        })}
                        placeholder="Vehicle Price" />
                </div>
                <div className='label-form-align'>
                    <label htmlFor="dealerType">Where did you purchase your vehicle?</label>
                    <select
                        id="dealerType"
                        value={formState?.dealerType}
                        onChange={(e) => setFormState({ 
                            ...formState, 
                            dealerType: e.target.value as DealerTypes
                        })}>
                        <option value="">Select EV Dealer Type</option>
                        <option value="RI_Dealer">Rhode Island Dealer</option>
                        <option value="OOS_Dealer">Out-Of-State Dealer</option>
                    </select>
                </div>
                <div className='label-form-align'>
                    <label htmlFor="isRhodeIslandResident">Are you a Rhode Island Resident?</label>
                    <input
                        id="isRhodeIslandResident"
                        type="checkbox"
                        checked={formState?.isRhodeIslandResident}
                        onChange={(e) => setFormState({ 
                            ...formState, 
                            isRhodeIslandResident: e.target.checked 
                            })} />
                </div>
                <div className='label-form-align'>
                    <label htmlFor="isVehicleRegisteredInRI">Is your vehicle registered in Rhode Island?</label>
                    <input
                        id="isVehicleRegisteredInRI"
                        type="checkbox"
                        checked={formState?.isVehicleRegisteredInRI}
                        onChange={(e) => setFormState({ 
                            ...formState, 
                            isVehicleRegisteredInRI: e.target.checked 
                        })} />
                </div>
                <div className='label-form-align'>
                    <label htmlFor="income">Your annual income</label>
                    <input
                        id="income"
                        type="number"
                        value={formState?.income}
                        onChange={(e) => setFormState({ 
                            ...formState, 
                            income: Number(e.target.value) 
                        })}
                        placeholder="Income" />
                </div>

                <button type="submit">Check Your Eligibility</button>
            </form>
        </div>
    );
};

export default EligibilityFormComponent;