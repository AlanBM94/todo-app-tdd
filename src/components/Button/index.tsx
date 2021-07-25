import React from 'react';

interface IButtonProps {
    text: string;
    event: () => void;
}

const Button: React.FC<IButtonProps> = ({ text, event }) => {
    return (
        <button data-test="button-component" onClick={() => event()}>
            {text}
        </button>
    );
};

export default Button;
