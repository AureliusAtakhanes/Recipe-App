import React from 'react'
import Hero from '../hero/Hero';
import FavoriteFoods from '../favoriteFoods/FavoritesFoods';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div>
            <Hero />
            <FavoriteFoods />
        </div>
    )
}

export default Home
