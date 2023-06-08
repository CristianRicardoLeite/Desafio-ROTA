import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Desafio1, Desafio2, Desafio3 } from '../pages'
import App from '../App'


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/desafio-1" element={<Desafio1 />} />
                <Route path="/desafio-2" element={<Desafio2 />} />
                <Route path="/desafio-3" element={<Desafio3 />} />
            </Routes>
        </BrowserRouter>

    )
}