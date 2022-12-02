import React from 'react';
import './Index.css';

interface MyButtonProps {
    variant: string;
    children: string;
}

const MyButton = (props: MyButtonProps) => {
    return (
        <button className={`button ${props.variant}`}>
            {props.children}
        </button>
    );
};

export default MyButton;