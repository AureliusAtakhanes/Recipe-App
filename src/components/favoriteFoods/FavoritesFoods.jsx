import React, { useEffect, useState } from 'react'
import styles from './FavoritesFoods.module.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const FavoritesFoods = () => {
    const URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

    const [recipes, setRecipes] = useState([]);
    const [showRecipes, setShowRecipes] = useState(0);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const res = await fetch(URL)
                const data = await res.json()

                setRecipes(data.meals.slice(0, 8))
            } catch (error) {
                console.log(error)
            }
        }

        fetchRecipes();
    }, []);

    const handleArrow = (direction) => {
        if (direction === 'left') {
            if (showRecipes === 0) {
                setShowRecipes(recipes.length - 1)
            } else {
                setShowRecipes(prev => prev - 1)
            }
        }

        if (direction === 'right') {
            if (showRecipes === recipes.length - 1) {
                setShowRecipes(0)
            } else {
                setShowRecipes(prev => prev + 1)
            }
        }

    }


    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.titles}>
                    <h5>Recipes people like the most</h5>
                    <h2>Our client's favorite recipes</h2>
                </div>
                <div className={styles.recipes}>
                    <AiOutlineArrowLeft onClick={() => handleArrow('left')} className={styles.leftArrow} />
                    {recipes?.map((recipe) => (
                        <div style={{ transform: `translateX(-${showRecipes * 750}px)` }} className={styles.recipe} key={recipe.idMeal}>
                            <img src={recipe.strMealThumb} alt="" />
                            <h3>{recipe?.strMeal}</h3>
                        </div>
                    ))}
                    <AiOutlineArrowRight onClick={() => handleArrow('right')} className={styles.rightArrow} />
                </div>
                <div className={styles.dots}>
                    {recipes?.map((recipe, index) => (
                        <div
                            onClick={() => setShowRecipes(index)}
                            className={`${styles.dot} ${showRecipes === index && styles.activeDot}`}
                            key={recipe.idMeal}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FavoritesFoods
