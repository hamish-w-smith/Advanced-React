import React from 'react'
import Link from 'next/link'

const Home = () => (
    <>
        <h1>Home page</h1>
        <Link href="/sell">
            <a>Sell page</a>
        </Link>
    </>
)

export default Home