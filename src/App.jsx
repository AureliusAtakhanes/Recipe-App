import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import RecipeDetails from './components/recipeDetails/RecipeDetails'
import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipe/:id' element={<RecipeDetails />} />
      </Routes>
    </div>
  )
}

export default App
