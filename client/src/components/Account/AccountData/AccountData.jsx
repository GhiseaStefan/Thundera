import React, { useState } from 'react'
import { Container, Error, LabelInputContainer, PairContainer, SubmitButton } from './AccountDataStyles'
import { useSelector } from 'react-redux';
import User from '../../../stores/userStore';

const AccountData = () => {
    const user = useSelector((state) => state.user);
    const [data, setData] = useState({
        userId: user._id,
        firstName: user.firstName ? user.firstName : '',
        lastName: user.lastName ? user.lastName : '',
        phone: user.phone ? user.phone : '',
        county: user.county ? user.county : '',
        city: user.city ? user.city : '',
        address: user.address ? user.address : '',
        zip: user.zip ? user.zip : '',
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
        phone: '',
        zip: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevState => ({ ...prevState, [name]: value }));

        if (errors[name]) {
            setErrors(prevState => ({ ...prevState, [name]: '' }))
        }
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        if (data.newPassword === data.confirmPassword) {
            try {
                const response = await User.updateUser(data);

                if (response.status === 200) {
                    window.location.href = '/account/accountData';
                }
            } catch (err) {
                setErrors(err.response.data.errors);
            }
        } else {
            setErrors((prevState) => ({ ...prevState, confirmPassword: `Passwords don't match` }));
        }
    }

    return (
        <Container>
            <form onSubmit={handleUpdate}>
                <div>
                    <h2>My Data</h2>
                    <PairContainer>
                        <LabelInputContainer>
                            <label htmlFor='firstName'>First Name</label>
                            <input type='text' id='firstName' name='firstName' value={data.firstName} onChange={handleChange} />
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <label htmlFor='lastName'>Last Name</label>
                            <input type='text' id='lastName' name='lastName' value={data.lastName} onChange={handleChange} />
                        </LabelInputContainer>
                    </PairContainer>
                    <PairContainer>
                        <LabelInputContainer>
                            <label htmlFor='phone'>Phone</label>
                            <input type='text' id='phone' name='phone' value={data.phone} onChange={handleChange} />
                            {errors.phone && <Error>{errors.phone}</Error>}
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <label htmlFor='email'>Email</label>
                            <input type='email' id='email' name='email' value={user.email} disabled />
                        </LabelInputContainer>
                    </PairContainer>
                </div>
                <div>
                    <h2>Adress</h2>
                    <PairContainer>
                        <LabelInputContainer>
                            <label htmlFor='county'>County</label>
                            <input type='text' id='county' name='county' value={data.county} onChange={handleChange} />
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <label htmlFor='City'>City</label>
                            <input type='text' id='city' name='city' value={data.city} onChange={handleChange} />
                        </LabelInputContainer>
                    </PairContainer>
                    <PairContainer>
                        <LabelInputContainer>
                            <label htmlFor='address'>Address</label>
                            <input type='text' id='address' name='address' value={data.address} onChange={handleChange} />
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <label htmlFor='zip'>ZIP Code</label>
                            <input type='text' id='zip' name='zip' value={data.zip} onChange={handleChange} />
                            {errors.zip && <Error>{errors.zip}</Error>}
                        </LabelInputContainer>
                    </PairContainer>
                </div>
                <div>
                    <h2>Password</h2>
                    <LabelInputContainer>
                        <label htmlFor='oldPassword'>Old Password</label>
                        <input type='password' id='oldPassword' name='oldPassword' value={data.oldPassword} onChange={handleChange} />
                        {errors.oldPassword && <Error>{errors.oldPassword}</Error>}
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <label htmlFor='newPassword'>New Password</label>
                        <input type='password' id='newPassword' name='newPassword' value={data.newPassword} onChange={handleChange} />
                        {errors.newPassword && <Error>{errors.newPassword}</Error>}
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <label htmlFor='confirmPassword'>Confirm New Password</label>
                        <input type='password' id='confirmPassword' name='confirmPassword' value={data.confirmPassword} onChange={handleChange} />
                        {errors.confirmPassword && <Error>{errors.confirmPassword}</Error>}
                    </LabelInputContainer>
                </div>
                <SubmitButton type='submit' value='Save Changes' />
            </form>
        </Container>
    )
}

export default AccountData