import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ByteBistroPage from './pages/projects/ByteBistro.jsx'
import MPXOSPage from './pages/projects/MPXOS.jsx'
import MomentumPage from './pages/projects/Momentum.jsx'

export default function App()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects/bytebistro" element={<ByteBistroPage />} />
                <Route path="/projects/mpx-os" element={<MPXOSPage />} />
                <Route path="/projects/momentum" element={<MomentumPage />} />
            </Routes>
        </BrowserRouter>
    )
}
