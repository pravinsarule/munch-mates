import React from "react";
import PropTypes from "prop-types";

const Button = ({ type = "button", onClick, children, variant = "", className = "", disabled = false, selected = false, }) => {

   
    const variants = {
        primary: "bg-indigo-600 text-white hover:bg-indigo-700",
        secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
        danger: "bg-red-600 text-white hover:bg-red-700",
        outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
        pill: selected ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200", 
        softBlue: selected  ?  "bg-white text-blue-700 border border-blue-300 shadow-md" 
            : "bg-transparent text-white border border-blue-300"


    };

    

    const buttonClass = `${variants[variant]} px-6 py-4 rounded-full font-medium transition-all ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
    } ${className}`;

    return (
        <button
            type={type}
            onClick={onClick}
            className={buttonClass}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(["primary", "secondary", "danger", "outline", "pill", "softBlue"]),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    selected: PropTypes.bool,
};

export default Button;
