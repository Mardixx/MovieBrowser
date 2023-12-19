import { Link, Route, Routes } from 'react-router-dom'
import '../src/App.css'
import { FetchTrending, FetchDiscover, FetchMovie, FetchSimilar, FetchGenreSame, FetchSearch } from "./api_fetch/api_fetch"
import { UserBar } from './UserBar/UserBar'
import { User } from './User/User'

export default function App() {
  return (
        <>
          <Link to ='/'> <img className='logoLong' src='./public/tmdbLogoLong.svg'/></Link>
          <Routes>
            <Route path='/' element={<><FetchTrending /><FetchDiscover /></>} />
            <Route path='/discover' element={<><FetchMovie /><FetchSimilar /></>} />
            <Route path='/genres' element={<FetchGenreSame />} />
            <Route path='/search' element={<FetchSearch />} />
            <Route path='/user' element={<User />} />
          </Routes>
          <footer>
            <UserBar />
          </footer>
        </>
  )
}