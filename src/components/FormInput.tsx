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
    <div className='label-form-align'>
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
    <div className='label-form-align'>
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
    <div className='label-form-align'>
        <label htmlFor={id}>{label}</label>
        <input id={id} type="checkbox" checked={checked} onChange={onChange} />
    </div>
);
  
  
  