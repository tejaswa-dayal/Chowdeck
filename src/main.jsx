import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
    duration: 2000,
});
createRoot(document.getElementById('root')).render(

    <App />

)
