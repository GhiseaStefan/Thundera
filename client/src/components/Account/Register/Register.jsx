import React, { useState } from 'react'
import { Container, Error } from './RegisterStyles'
import User from '../../../stores/userStore';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../slices/userSlice';

const Register = () => {
    const dispatch = useDispatch();

    const [data, setData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevState) => ({ ...prevState, [name]: value }));
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        if (data.password === data.confirmPassword) {
            try {
                const response = await User.registerUser(data.email, data.password);
                if (response.status === 201) {
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
                        password: '',
                        confirmPassword: ''
                    });
                }
            } catch (err) {
                setError(err.response.data.error);
            }
        } else {
            setError(`Passwords don't match!`);
        }
    }

    return (
        <Container>
            <form onSubmit={handleRegister}>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' name='email' value={data.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' id='password' name='password' value={data.password} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='confirmPassword'>Confirm Password:</label>
                    <input type='password' id='confirmPassword' name='confirmPassword' value={data.confirmPassword} onChange={handleChange} />
                </div>
                {error &&
                    <Error>
                        {error}
                    </Error>
                }
                <div>
                    <input type='submit' value='Register' />
                </div>
            </form>
        </Container>
    )
}

export default Register