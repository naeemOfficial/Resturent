import React from 'react';
import Banner from './Banner';
import OurMenu from './OurMenu';
import Cook from './Cook';
import Card from '../../Components/Card/Card';
import Items from '../../Components/Items/Items';
import Reservation from '../../Components/Reservation/Reservation';
import Menu from '../../Components/Menu/Menu';
import Swiper from '../../Components/Swiper/Swiper';

const Home = () => {
    return (
        <div>
            <Banner/>
            <OurMenu/>
            <Cook/>
            <Card/>
            <Items/>
            <Reservation/>
            <Menu/>
            <Swiper/>
        </div>
    );
};

export default Home;