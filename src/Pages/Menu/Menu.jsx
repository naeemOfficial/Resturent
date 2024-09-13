import React from 'react';
import Banner2 from '../../Components/Banner2/Banner2';
import Starters from '../../Components/Starters/Starters';
import Mains from '../../Components/Mains/Mains';
import Drinks from '../../Components/Drinks/Drinks';
import Reservation from '../../Components/Reservation/Reservation';

const Menu = () => {
    return (
        <div>
            <Banner2/>
            <Starters/>
            <Mains/>
            <Drinks/>
            <Reservation/>
        </div>
    );
};

export default Menu;