export const minPurchaseOrLeaseDate = new Date('2022-07-07');

export const newEvPriceCap = 60000;
export const usedEvPriceCap = 40000;


export const newBev_FcevReward = 1500;
export const newPhevReward = 1000;
export const usedBev_FcevReward = 1000;
export const usedPhevReward = 750;

export const minimumLeaseTermInMonths = 24;

export const applicationSubmissionDeadlineInDays = 120;

export const applicationFrequencyLimitInMonths = 48; //4 years from last approval until reapply

export const minimumAnnualIncome = 33645;


export enum IneligibleVehicleTypes {
    AftermarketConversion = 'Aftermarket Conversion',
    ElectricScooter = 'Electric Scooter',
    ATV = 'All-Terrain Vehicle',
    ElectricBicycle = 'Electric Bicycle',
    ElectricBus = 'Electric Bus',
    NEV = 'Neighborhood Electric Vehicle',
    LSP = 'Low-Speed Vehicle',
    ZEM = 'Zero-Emission Motorcycle'
}

export enum EligibleVehicleTypes {
    BEV = 'Battery Electric Vehicle',
    FCEV = 'Fuel-Cell Electric Vehicle',
    PHEV = 'Plug-In Hybrid Electric Vehicle'
}

export enum DealerTypes {
    RI_Dealer = 'Rhode Island Dealer',
    OOS_Dealer = 'Out-Of-State Dealer'
}