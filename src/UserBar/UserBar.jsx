import { Link } from 'react-router-dom'
import './UserBar.css'

export const UserBar = () => {
    return (
        <>
            <Link to='/'><img className="home"  src="/house-solid.svg" alt="" /></Link>
            <Link to='/search'><img className="search" src="/magnifying-glass-solid.svg" alt="" /></Link>
            <Link to='/user'><img className="userProfile" src="/user-solid.svg" alt="" /></Link>
        </>
    )
}