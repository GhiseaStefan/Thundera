import React from 'react'
import { Container } from './SuccessPageStyles';
import { MdDone } from 'react-icons/md';

const SuccessPage = () => {
    return (
        <Container>
            <div>
                <MdDone />
            </div>
            <h2>Payment was successful</h2>
        </Container>
    )
}

export default SuccessPage