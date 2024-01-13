import { Cards, NavItem } from '../types';
import g1 from '../assets/Group.png';
import g2 from '../assets/Group2.png';
import g3 from '../assets/Group3.png';
import g4 from '../assets/Group4.png';
import g5 from '../assets/Group5.png';
import g6 from '../assets/Group6.png';


const nav: Array<NavItem> = [
  { name: 'Produtos', path: '/produtos' },
  { name: 'Blog', path: '/blog' },
  { name: 'Conteúdos', path: '/conteudos' },
  { name: 'Quem Somos', path: '/quem-somos' },
];

const cards: Array<Cards> = [
  { path: g1, title: 'Image 1', width: '67px', height: '26px'},
  { path: g2, title: 'Image 2', width: '26px', height: '25px'},
  { path: g3, title: 'Image 3', width: '77px', height: '26px'},
  { path: g4, title: 'Image 4', width: '28px', height: '28px'},
  { path: g5, title: 'Image 5', width: '29px', height: '28px'},
  { path: g6, title: 'Image 6', width: '141px', height: '26px'},
];


export { nav, cards };