import React from 'react'

const FileInput = ({ label, name, onChange, required = false, accept, multiple = false }) => {
    return (
        <div className="mb-5">
            {label && (
                <label htmlFor={name} className="block text-sm font-semibold text-gray-700 mb-2">
                    {label}
                </label>
            )}
            <input
                type="file"
                name={name}
                id={name}
                onChange={onChange}
                required={required}
                accept={accept}
                multiple={multiple}
                className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg bg-gray-50 file:px-4 file:py-2 file:mr-4 file:border-0 file:bg-gray-200 file:text-gray-800 file:rounded-md hover:file:bg-gray-300 transition shadow-sm"
            />
        </div>
    )
}

export default FileInput
