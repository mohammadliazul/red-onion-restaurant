import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Authentications from './pages/Authentications';
import Home from './pages/Home';

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Authentications />} />
                    <Route path="/signup" element={<Authentications />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
