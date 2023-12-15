import '../src/App.css'
import { FetchTrending, FetchDiscover } from "./api_fetch/api_fetch"

export default function App() {
  return (
        <>
        <FetchTrending />
        <FetchDiscover />
        </>
  )
}