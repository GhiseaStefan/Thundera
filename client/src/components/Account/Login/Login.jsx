import React, { useState } from 'react'
import { Container, Error } from './LoginStyles'
import { useDispatch } from 'react-redux'
import User from '../../../stores/userStore';
import { setUser } from '../../../slices/userSlice';

const Login = () => {
    const dispatch = useDispatch();

    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevState) => ({ ...prevState, [name]: value }));
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await User.loginUser(data.email, data.password);
            if (response.status === 200) {
                dispatch(setUser({
                    _id: response.data.sanitizedData._id,
                    email: response.data.sanitizedData.email,
                    cart: response.data.sanitizedData.cart,
                    token: response.data.sanitizedData.token,
                    firstName: response.data.sanitizedData.firstName,
                    lastName: response.data.sanitizedData.lastName,
                    phone: response.data.sanitizedData.phone,
                    county: response.data.sanitizedData.county,
                    city: response.data.sanitizedData.city,
                    address: response.data.sanitizedData.address,
                    zip: response.data.sanitizedData.zip
                }));
                localStorage.setItem('userToken', response.data.sanitizedData.token);
                setData({
                    email: '',
                    password: ''
                });
            }
        } catch (err) {
            setError(err.response.data.error);
        }
    }

    return (
        <Container>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' name='email' value={data.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' id='password' name='password' value={data.password} onChange={handleChange} />
                </div>
                {error &&
                    <Error>
                        {error}
                    </Error>
                }
                <div>
                    <input type='submit' value='Login' />
                </div>
            </form>
        </Container>
    )
}

export default Login