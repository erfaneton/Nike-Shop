import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
function App() {
    const router = useRoutes(routes)
    return (
        <div className='vh-100 px-5'>
            <Navbar></Navbar>
            {router}
            <Footer></Footer>
        </div>
    )
}
export default App
