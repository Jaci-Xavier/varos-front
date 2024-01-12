import { NavItem } from '../types';
import g1 from '../assets/Group.png';
import g2 from '../assets/Group2.png';
import g3 from '../assets/Group3.png';
import g4 from '../assets/Group4.png';
import g5 from '../assets/Group5.png';
import g6 from '../assets/Group6.png';

const cards = [g1, g2, g3, g4, g5, g6];

const nav: Array<NavItem> = [
  { name: 'Produtos', path: '/produtos' },
  { name: 'Blog', path: '/blog' },
  { name: 'Conteúdos', path: '/conteudos' },
  { name: 'Quem Somos', path: '/quem-somos' },
];

export { nav, cards };