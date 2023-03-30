import React, { useEffect, useState } from 'react'
import styles from './Hero.module.css';
import meal from '../../assets/meal1.jpg';

const Hero = () => {
    const URL1 = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast';
    const URL2 = 'https://www.themealdb.com/api/json/v1/1/search.php?s=burger';

    const [chickenRecipe, setChickenRecipe] = useState('')
    const [burgerRecipe, setBurgerRecipe] = useState('')

    useEffect(() => {
        const fetchChickenRecipe = async () => {
            try {
                const res = await fetch(URL1)
                const data = await res.json()

                setChickenRecipe(data.meals[0])
            } catch (error) {
                console.log(error)
            }
        }
        fetchChickenRecipe()
    }, []);

    useEffect(() => {
        const fetchBurgerRecipe = async () => {
            try {
                const res = await fetch(URL2)
                const data = await res.json()

                setBurgerRecipe(data.meals[0])
            } catch (error) {
                console.log(error)
            }
        }

        fetchBurgerRecipe()
    }, [])


    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <h2>Craving some <br />delicious meals</h2>
                    <h5>Feeling the cooking vibe</h5>
                    <p className={styles.firstDesc}>You've come to the right place for some tasty recipes</p>
                    <p className={styles.secondDesc}>Just see what we have for you</p>
                    <div className={styles.buttons}>
                        <button>Get Started</button>
                        <button>Explore recipes</button>
                    </div>
                </div>
                <div className={styles.right}>
                    <img src={meal} />
                    <div className={styles.chickenMeal}>
                        <div className={styles.imgContainer}>
                            <img src={chickenRecipe?.strMealThumb} />
                        </div>
                        <h5>{chickenRecipe?.strMeal}</h5>
                    </div>
                    <div className={styles.burgerMeal}>
                        <div className={styles.imgContainer}>
                            <img src={burgerRecipe?.strMealThumb} />
                        </div>
                        <h5>{burgerRecipe?.strMeal}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
