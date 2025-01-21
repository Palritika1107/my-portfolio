import React from "react";

const TabSelector = ({
                         isActive,
                         children,
                         onClick,
                     }) => (
    <button
        className={`group inline-flex items-center px-10 py-4 border-b-2 font-medium text-sm leading-5 cursor-pointer whitespace-nowrap font-bold lg:text-lg ${
            isActive
                ? "border-teal-800 text-teal-800 focus:outline-none focus:text-teal-800 focus:border-teal-800"
                : "border-transparent text-yellow-300 hover:text-yellow-300 hover:border-yellow-300 focus:text-yellow-300 focus:border-yellow-300"
        }`}
        onClick={onClick}
    >
        {children}
    </button>
);

export default TabSelector;