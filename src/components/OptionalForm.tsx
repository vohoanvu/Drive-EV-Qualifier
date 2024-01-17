import { OOSQualifyingDealerships } from "../typings/types";
import { FormInput, FormSelect } from "./FormInput";

interface OOSDealerNameFormProps {
    selectedDealer: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const OOSDealerNameForm: React.FC<OOSDealerNameFormProps> = ({
    selectedDealer,
    onChange,
}) => {
    const dealershipOptions = Array.from(OOSQualifyingDealerships, ([value, label]) => ({ 
        value, 
        label: `${value} - ${label}`
    }));

    return (
        <div className="indented-row">
             <FormSelect
                id="oosDealerName"
                label="Out-Of-State Dealership Name"
                value={selectedDealer}
                options={dealershipOptions}
                onChange={onChange}
            />
        </div>
    );
};



interface LeaseTermProps {
    leaseTermInMonths: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LeaseTermForm: React.FC<LeaseTermProps> = ({
    leaseTermInMonths,
    onChange,
}) => {
    return (
        <div className="indented-row">
            {/* <label htmlFor="leaseTerm">Lease Term (in months)</label>
            <input
                id="leaseTerm"
                type="number"
                value={leaseTermInMonths}
                onChange={onChange}
            /> */}
            <FormInput
                id="leaseTerm"
                label="Lease Term (in months)"
                type="number"
                value={leaseTermInMonths}
                onChange={onChange}
                placeholder="Enter Lease Term in Months"
            />
        </div>
    );
};
  