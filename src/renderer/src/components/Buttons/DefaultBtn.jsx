import React from 'react'

const DefaultBtn = ({ label = "Click the Button", onClick, type = "button", disabled = false }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
                mt-1 px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-sm
                ${disabled
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white shadow-md hover:shadow-lg'
                }
            `}
        >
            {label}
        </button>
    )
}

export default DefaultBtn
