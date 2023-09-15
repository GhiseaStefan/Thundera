import React from 'react'
import Carousel from './Carousel/Carousel'
import HomeCategories from './HomeCategories/HomeCategories';

const items = [
    {
        'text': 'Styles accessories & New Gadgets',
        'description': 'Nam vel augue sit amet ligula tincidunt blandit sed sed neque. Morbi vulputate augue malesuada mi viverra blandit.',
        'imageUrl': '/images/carousel/headphones.png'
    },
    {
        'text': 'Styles accessories & New Gadgets',
        'description': 'Nam vel augue sit amet ligula tincidunt blandit sed sed neque. Morbi vulputate augue malesuada mi viverra blandit.',
        'imageUrl': '/images/carousel/laptop.png'
    },
    {
        'text': 'Styles accessories & New Gadgets',
        'description': 'Nam vel augue sit amet ligula tincidunt blandit sed sed neque. Morbi vulputate augue malesuada mi viverra blandit.',
        'imageUrl': '/images/carousel/monitor.png'
    }
];

const Home = () => {
    return (
        <>
            <Carousel items={items} repeat={true} repeatInterval={3000} />
            <HomeCategories />
        </>
    )
}

export default Home