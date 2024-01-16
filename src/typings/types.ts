export interface DriveEVRebateEligibilityForm {
    vehicleType: string;
    purchaseDate: string;
    vehiclePrice: number; // Agreed-upon value of the vehicle
    dealerType: 'RI_Dealer' | 'OOS_Dealer'; // RI = Rhode Island, OOS = Out-Of-State
    isRhodeIslandResident: boolean; // Rhode Island residency confirmation
    isVehicleRegisteredInRI: boolean; // Vehicle registration in Rhode Island confirmation
    income: number; // Applicant's income
    // Supporting Documents
    driversLicense?: File; // Copy of Rhode Island driver's license
    w9Form?: File; // Completed and signed W-9 form
    vehicleRegistration?: File; // Rhode Island vehicle registration
    salesOrLeaseContract?: File; // Signed and executed sales or lease contract
}
  