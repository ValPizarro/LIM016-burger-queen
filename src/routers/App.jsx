import { Routes, Route } from 'react-router-dom';
import '../style/app.scss';
import Cocina from '../pages/Cocina';
import Login from '../pages/Login';
import Salon from '../pages/Salon';
import NotFound from '../pages/Notfound';
import { AlertSalon } from '../pages/components/salonComp/alertSalon/AlertSalon';
import { AlertCocina } from "../pages/components/salonComp/alertSalon/AlertCocina";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/salon" element={<Salon />} />
        <Route path="/cocina" element={<Cocina />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/salon/alert" element={<AlertSalon />} />
        <Route path="/cocina/alert" element={<AlertCocina />} />
      </Routes>
    </div>
  );
};

export default App;
