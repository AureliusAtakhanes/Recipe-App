import React from 'react'
import Hero from '../hero/Hero';
import FavoriteFoods from '../favoriteFoods/FavoritesFoods';
import Categories from '../categories/Categories';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div>
            <Hero />
            <FavoriteFoods />
            <Categories />
        </div>
    )
}

export default Home
