import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import CategoryContext from "./Context/shoeContext.jsx";
import { useState } from "react";
import { homePageShoes } from "./data.jsx";
function App() {
    const router = useRoutes(routes)
    const [shoesData, setShoesData] = useState(homePageShoes)
    const [curentShoes, setCurentShoes] = useState()
    return (
        <>
            <CategoryContext.Provider value={{
                shoesData,
                setShoesData,
                curentShoes,
                setCurentShoes
            }}>
                <div className='vh-100 px-5'>
                    <Navbar />
                    {router}
                    <Footer />
                </div>
            </CategoryContext.Provider>
        </>
    )
}
export default App
