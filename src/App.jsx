import { Link, Route, Routes } from 'react-router-dom'
import '../src/App.css'
import { FetchTrending, FetchDiscover, FetchMovie, FetchSimilar, FetchGenreSame } from "./api_fetch/api_fetch"

export default function App() {
  return (
        <>
          <Link to ='/'> <img className='logoLong' src='./public/tmdbLogoLong.svg'/></Link>
          <Routes>
            <Route path='/discover' element={<><FetchMovie /><FetchSimilar /></>} />
            <Route path='/' element={<><FetchTrending /><FetchDiscover /></>} />
            <Route path='/genres' element={<FetchGenreSame />} />
          </Routes>
        </>
  )
}