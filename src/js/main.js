'use strict';

import db from '../data/db.json';
import modals from './module/modal';
import tabs from './module/tabs';
import forms from './module/forms';
import slider from './module/slider';
import calculator from './module/calculator';
import menu from './module/menu';
import timer from './module/timer';

const server = 'http://localhost:3000/';

window.addEventListener('DOMContentLoaded', () => {
    modals();
    tabs();
    forms(server);
    slider(server);
     try { calculator(); }
     catch { console.log('Calculator is broken'); }
    menu(server);
    timer(db.deadline);
});