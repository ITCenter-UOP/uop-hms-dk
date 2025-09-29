import React, { useState } from 'react'
import DefaultBtn from '../components/Buttons/DefaultBtn'
import DefaultInput from '../components/Form/DefaultInput'
import DateInput from '../components/Form/DateInput'
import Dropdown from '../components/Form/Dropdown'
import FileInput from '../components/Form/FileInput'
import TextAreaInput from '../components/Form/TextAreaInput'

const FormTest = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        dob: '',
        gender: '',
        bio: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(JSON.stringify(form, null, 2))
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg"
            >
                <h1 className="text-2xl font-bold mb-6 text-gray-800">Form Test</h1>

                <DefaultInput
                    label="Full Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                />

                <DefaultInput
                    label="Email Address"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                />

                <DateInput
                    label="Date of Birth"
                    name="dob"
                    value={form.dob}
                    onChange={handleChange}
                    required
                />

                <Dropdown
                    label="Gender"
                    name="gender"
                    onChange={handleChange}
                    options={[
                        { value: 'male', label: 'Male' },
                        { value: 'female', label: 'Female' },
                        { value: 'other', label: 'Other' },
                    ]}
                />

                <TextAreaInput
                    label="Bio"
                    name="bio"
                    value={form.bio}
                    onChange={handleChange}
                    placeholder="Tell us about yourself"
                />

                <FileInput
                    label="Upload Documents"
                    name="documents"
                    onChange={() => { }}
                    multiple
                />

                <DefaultBtn label="Submit" type="submit" />
            </form>
        </div>
    )
}

export default FormTest
