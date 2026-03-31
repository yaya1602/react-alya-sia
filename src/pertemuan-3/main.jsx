import { createRoot } from 'react-dom/client'
import './tailwind.css';
import Tailwindcss from './TailwindCSS';
import UserForm from './UserForm';
import HitungGajiForm from './HitungGajiForm';

createRoot(document.getElementById('root'))
.render(
  <div>
    {/* <Tailwindcss /> */}
    <UserForm />
    <HitungGajiForm />
  </div>
  
)
