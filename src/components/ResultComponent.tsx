import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ResultComponentProps {
    isEligible: boolean;
    message: string;
    rebateAmount: number;
}

const ResultComponent: React.FC<ResultComponentProps> = ({ 
    isEligible, 
    message, 
    rebateAmount 
}) => 
{
    const navigate = useNavigate();

    // Function to handle back button click
    const handleBackClick = () => {
        navigate('/');
    };


    return (
      <div>
        <h1>Rebate Component</h1>
        <p>{message}</p>
        {isEligible && (
            <p>You are eligible for a rebate of ${rebateAmount.toFixed(2)}</p>
        )}
        {!isEligible && (
            <p>Unfortunately, you are not eligible for a rebate.</p>
        )}
        <button onClick={handleBackClick}>Back to Form</button> {/* Back button */}
      </div>
    );
};
  
  export default ResultComponent;