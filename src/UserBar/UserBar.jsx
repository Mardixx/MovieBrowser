import { Link } from 'react-router-dom'
import './UserBar.css'
import { useState } from 'react'

export const UserBar = () => {
    return (
        <>
            <Link to='/'><img className="home"  src="./public/house-solid.svg" alt="" /></Link>
            <Link to='/search'><img className="search" src="./public/magnifying-glass-solid.svg" alt="" /></Link>
            <Link to='/user'><img className="userProfile" src="./public/user-solid.svg" alt="" /></Link>
        </>
    )
}