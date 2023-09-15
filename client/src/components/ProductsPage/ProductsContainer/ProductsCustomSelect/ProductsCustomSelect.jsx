import React, { useState } from 'react'
import { Container, Header, Option, Options } from './ProductsCustomSelectStyles.js';

const ProductsCustomSelect = ({ options, selectedOption, setSelectedOption }) => {
    const [$isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    }

    const toggleOptions = () => {
        setIsOpen(!$isOpen);
    }

    return (
        <Container>
            <Header onClick={toggleOptions}>
                {selectedOption ? selectedOption : ''}
            </Header>
            <Options $isOpen={$isOpen}>
                {options.map((option) => (
                    <Option key={option} onClick={() => handleOptionClick(option)}>
                        {option}
                    </Option>
                ))}
            </Options>
        </Container>
    )
}

export default ProductsCustomSelect