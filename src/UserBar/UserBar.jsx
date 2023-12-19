import { Link } from 'react-router-dom'
import './UserBar.css'

export const UserBar = () => {
    return (
        <>
            <Link to='/'><img className="home" src="./public/house-solid.svg" alt="" /></Link>
            <Link to='/search'><img className="search" src="./public/magnifying-glass-solid.svg" alt="" /></Link>
            <img className="userProfile" src="./public/user-solid.svg" alt="" />
        </>
    )
}