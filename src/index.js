import _ from 'lodash';
import './style.css';
import { mainPage } from './mainPage';
import { menu } from './menu';


const homeNav = document.getElementById('home');
const menuNav = document.getElementById('menu');
const contactNav = document.getElementById('contact');

menu();


homeNav.addEventListener('click', mainPage);
menuNav.addEventListener('click', menu);

//contactNav.addEventListener('click', func

 




