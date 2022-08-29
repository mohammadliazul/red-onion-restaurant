import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Authentications from './pages/Authentications';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {

    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Authentications />} />
                    <Route path="/signup" element={<Authentications />} />
                    <Route path="/search=:searchQuery" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
