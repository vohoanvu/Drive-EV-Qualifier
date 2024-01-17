import '../App.css';

export interface InputProps {
    id: string;
    label: string;
    type: 'text' | 'number' | 'date';
    value: string | number;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
  
export const FormInput: React.FC<InputProps> = ({ 
    id, 
    label, 
    type, 
    value, 
    placeholder, 
    onChange 
}) => (
    <div className="form-row">
        <label htmlFor={id}>{label}</label>
        <input 
            id={id} 
            type={type} 
            value={value} 
            onChange={onChange} 
            placeholder={placeholder} />
    </div>
);

export interface SelectProps {
    id: string;
    label: string;
    value: string;
    options: { value: string; label: string }[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
  
export const FormSelect: React.FC<SelectProps> = ({ id, label, value, options, onChange }) => (
    <div className="form-row">
        <label htmlFor={id}>{label}</label>
        <select id={id} value={value} onChange={onChange}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    </div>
);

export interface CheckboxProps {
    id: string;
    label: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
  
export const FormCheckbox: React.FC<CheckboxProps> = ({ id, label, checked, onChange }) => (
    <div className="form-row">
        <label htmlFor={id}>{label}</label>
        <input id={id} type="checkbox" checked={checked} onChange={onChange} />
    </div>
);

export interface DoubleCheckboxProps {
    name: string;
    mainLabel: string;
    label1: string;
    label2: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
  
export const FormDoubleCheckbox: React.FC<DoubleCheckboxProps> = ({
    name,
    mainLabel,
    label1,
    label2,
    value,
    onChange,
}) => (
    <div className="form-row">
        <label>{mainLabel}</label>
        <div className="checkbox-option">
            <input
                id={`${name}1`}
                name={name}
                type="radio"
                value="true"
                checked={value === "true"}
                onChange={onChange}
            />
            <label htmlFor={`${name}1`}>{label1}</label>
            <input
                id={`${name}2`}
                name={name}
                type="radio"
                value="false"
                checked={value === "false"}
                onChange={onChange}
            />
            <label htmlFor={`${name}2`}>{label2}</label>
        </div>
    </div>
);
  
  
  
  