export interface DriveEVRebateEligibilityForm {
    vehicleType: string;
    purchaseOrLeaseDate: Date;
    vehiclePrice: number; // Agreed-upon value of the vehicle, before taxes and fees
    dealerType: string; // RI = Rhode Island, OOS = Out-Of-State
    isRhodeIslandResident: boolean; // Rhode Island residency confirmation
    isVehicleRegisteredInRI: boolean; // Vehicle registration in Rhode Island confirmation
    income: number; // Applicant's income
    isLease: boolean; // Lease or purchase confirmation
    isUsed: boolean; // New or used vehicle confirmation
    isConversion: boolean; // Aftermarket conversion confirmation
    OosDealerName?: string; // Out-Of-State dealership name
    leaseTermInMonths?: number; // Lease term in months
}

export const OOSQualifyingDealerships = new Map<string, string>([
    ["Volkswagen of North Attleboro", "563 Kelley Blvd #152, North Attleborough, MA 02760"],
    ["Boch Nissan South", "685 S Washington St, North Attleborough, MA 02760"],
    ["Boch Toyota South", "620 S Washington St, North Attleborough, MA 02760"],
    ["Patriot Subaru of North Attleboro", "551 S Washington St, North Attleborough, MA 02760"],
    ["Kia of Attleboro", "795 Newport Ave South Attleboro, MA 02703"],
    ["Stateline Subaru", "1451 Brayton Point Rd, Somerset, MA 02725"],
    ["Courtesy Mitsubishi", "11 Scott St, Attleboro, MA 02703"],
    ["Milford Nissan", "320 East Main St, Milford MA 01757"],
    ["Bob Valenti Chevrolet", "72 Jerry Browne Rd, Mystic, CT 06355"],
    ["Copeland Chevrolet", "955 Pearl St, Brockton, MA 02301"],
    ["McGovern Hyundai", "240 Manley St, Brockton, MA 02301"],
    ["McGovern Chevrolet", "54 Main St, Greenfield, MA 01301"],
    ["Imperial Ford", "8 Uxbridge Rd, Mendon, MA 01756"],
    ["Putnam Kia", "157 Providence Pike, Rt, 44, Putnam, CT 06260"],
    ["Marlboro Nissan", "740 Boston Post Rd E, Marlborough, MA 01752"],
    ["1A Auto Sales", "1449 Main St, Walpole, MA 02081"],
    ["Bristol Toyota", "2283 Grand Army of the Republic Hwy, Swansea, MA 02777"],
    ["Others", "Other dealerships not listed above need to be approved by the Rhode Island Office of Energy Resources."]
]);
  