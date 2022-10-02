import {Routes,Route} from 'react-router-dom' ; 
import CricketPage from './CricketPage';
import CryptoPage from './CryptoPage';
import EntertainmentPage from './EntertainmentPage';
import Home from './Home';
import IndiaPage from './IndiaPage';
import PoliticsPage from './PoliticsPage';
import SportsPage from './SportsPage';
import TechPage from './TechPage';
import WorldPage from './WorldPage';
import SciencePage from './SciencePage';
import BusinessPage from './BusinessPage';
import SingleNewsPage from '../Component/SingleNewsPage/SingleNewsPage';


function AllRoutes(){


    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/india' element={<IndiaPage/>}/>
                <Route path='/india/news/:id' element={<SingleNewsPage/>}/>
                <Route path='/world' element={<WorldPage/>}/>
                <Route path='/politics' element={<PoliticsPage/>}/>
                <Route path='/science' element={<SciencePage/>}/>
                <Route path='/business' element={<BusinessPage/>}/>
                <Route path='/sports' element={<SportsPage/>}/>
                <Route path='/cricket' element={<CricketPage/>}/>
                <Route path='/entertainment' element={<EntertainmentPage/>}/>
                <Route path='/tech' element={<TechPage/>}/>
                <Route path='/crypto' element={<CryptoPage/>}/>
                <Route path='/news/:id' element={<SingleNewsPage/>}/>
                <Route path='/world/news/:id' element={<SingleNewsPage/>}/>
                <Route path='/politics/news/:id' element={<SingleNewsPage/>}/>
                <Route path='/science/news/:id' element={<SingleNewsPage/>}/>
                <Route path='/business/news/:id' element={<SingleNewsPage/>}/>
                <Route path='/sports/news/:id' element={<SingleNewsPage/>}/>
                <Route path='/cricket/news/:id' element={<SingleNewsPage/>}/>
                <Route path='/entertainment/news/:id' element={<SingleNewsPage/>}/>
                <Route path='/tech/news/:id' element={<SingleNewsPage/>}/>
                <Route path='/crypto/news/:id' element={<SingleNewsPage/>}/>
            </Routes>
        </div>
    )
}
export default AllRoutes ; 
