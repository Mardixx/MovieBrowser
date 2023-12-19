import { Link, Route, Routes } from 'react-router-dom'
import '../src/App.css'
import { FetchTrending, FetchDiscover, FetchMovie, FetchSimilar, FetchGenreSame } from "./api_fetch/api_fetch"
import { UserBar } from './UserBar/UserBar'
import { Search } from './Search/Search'

export default function App() {
  return (
        <>
          <Link to ='/'> <img className='logoLong' src='./public/tmdbLogoLong.svg'/></Link>
          <Routes>
            <Route path='/' element={<><FetchTrending /><FetchDiscover /></>} />
            <Route path='/discover' element={<><FetchMovie /><FetchSimilar /></>} />
            <Route path='/genres' element={<FetchGenreSame />} />
            <Route path='/search' element={<Search />} />
          </Routes>
          <footer>
            <UserBar />
          </footer>
        </>
  )
}