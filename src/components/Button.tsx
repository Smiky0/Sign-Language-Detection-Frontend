import React from "react";

interface ButtonProps {
    label: string;
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
    icon?: React.ReactNode; // Optional icon prop
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    className = "",
    style = {},
    icon,
}) => {
    // Define base styles for the button
    const baseStyles = `
		px-4 py-2 text-lg capitalize font-medium rounded-xl transition duration-400 ease-in-out opacity-100 scale-90 hover:scale-100
		inline-flex items-center justify-center cursor-pointer`;

    // Combine all class names
    const combinedClassName = `${baseStyles}  ${className}`.trim();

    return (
        <button
            className={combinedClassName}
            onClick={onClick}
            style={{
                backgroundColor: "#eeeeee",
                color: "#2c2c2c",
                ...style,
            }}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {label}
        </button>
    );
};

export default Button;
