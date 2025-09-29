import React from 'react'
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm'
import useAuth from '../../hooks/useAuth';
import DefaultInput from '../../components/Form/DefaultInput';
import DefaultBtn from '../../components/Buttons/DefaultBtn';
import API from '../../services/api'

const Login = () => {
    const { values, handleChange } = useForm({
        email: '',
        password: '',
    });

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post('/auth/signin', values);
            if (res.data.Status === "Success") {
                alert(res.data.Message);
                login(res.data.Token);
                navigate('/Dashboard')
            } else {
                alert(res.data.Error);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 px-6">
            <div className="w-full max-w-md bg-white/90 backdrop-blur-xl p-10 rounded-2xl shadow-2xl border border-gray-200">
                {/* Welcome Message */}
                <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">
                    Welcome Back 👋
                </h1>
                <p className="text-center text-gray-600 mb-8 text-sm">
                    Hostel Management System <br />
                    <span className="font-semibold">University of Peradeniya</span>
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    <DefaultInput
                        label="Email Address"
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />

                    <DefaultInput
                        label="Password"
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                    />

                    <DefaultBtn label="Login" type="submit" />
                </form>
            </div>
        </div>
    )
}

export default Login
