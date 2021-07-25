import React from 'react';

interface IInputProps {
    name: string;
    value: string | number;
    placeholder: string;
    onChangeEvent: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInputProps> = ({
    name,
    value,
    placeholder,
    onChangeEvent,
}) => {
    return (
        <div data-test="input-component">
            <input
                type="text"
                data-test="input-element"
                onChange={(e) => onChangeEvent(e)}
                value={value}
                name={name}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
