import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ResultComponentProps {
    isEligible: boolean;
    message: string;
    rebateAmount: number;
    failReasons?: string[];
}

const ResultComponent: React.FC<ResultComponentProps> = ({ 
    isEligible, 
    message, 
    rebateAmount,
    failReasons
}) => 
{
    const navigate = useNavigate();

    // Function to handle back button click
    const handleBackClick = () => {
        navigate('/');
    };


    return (
      <div>
        <h1>Rhodes Island Drive EV Results</h1>
        <p>{message}</p>
        {
            isEligible ? (
                <p>You are eligible for a rebate amount of ${rebateAmount.toFixed(2)}</p>
            ) : (
                <>
                    <p>Unfortunately, you are not eligible for a rebate based on the following reasons:</p>
                    <br/>
                    <ul>
                        {failReasons?.map((reason, index) => (
                            <li key={index}>{reason}</li>
                        ))}
                    </ul>
                </>
            )
        }
        <button onClick={handleBackClick}>Back to Form</button> {/* Back button */}
      </div>
    );
};
  
export default ResultComponent;