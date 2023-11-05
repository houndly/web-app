import HomeIcon from '@mui/icons-material/Home';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { Appointment_History } from '../views/pages/appointment_history';
import { Home } from '../views/pages/home';

export const menuItems = [
  { text: 'Home', path: 'home', icon: <HomeIcon /> },
  { text: 'historial citas', path: 'historial-citas', icon: <EventNoteIcon /> },
];
export const routes = [
  { path: 'home', component: <Home /> },
  { path: 'historial-citas', component: <Appointment_History /> },

];

export const COMMERCE_NAME: string = 'My Best Friend';
