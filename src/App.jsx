import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ByteBistroPage from './pages/projects/ByteBistro.jsx'

export default function App()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects/bytebistro" element={<ByteBistroPage />} />
            </Routes>
        </BrowserRouter>
    )
}
