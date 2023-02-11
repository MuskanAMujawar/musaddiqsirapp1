import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Home } from './Page/Home'
import { About } from './Page/About'
import { Contact } from './Page/Contact'
import { Blog } from './Page/Blog'
import { Navbar } from './Nav/Navbar'

export const RouteData = ()=>{
    return(
        <div>
            <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/blog" element={<Blog/>}/>
            </Routes>
             </BrowserRouter>
        </div>
    )
}