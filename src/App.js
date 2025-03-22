import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import styles from './App.module.css';
function App() {
    return (_jsx(Router, { children: _jsxs("div", { className: styles.appContainer, children: [_jsx(Header, {}), _jsx("main", { className: styles.mainContent, style: { padding: '0 9vw' }, children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/about-me", element: _jsx(About, {}) })] }) }), _jsx(Footer, {})] }) }));
}
export default App;
