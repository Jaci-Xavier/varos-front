import { Cards, NavItem, Carteiras } from '../types';
import g1 from '../assets/Group.png';
import g2 from '../assets/Group2.png';
import g3 from '../assets/Group3.png';
import g4 from '../assets/Group4.png';
import g5 from '../assets/Group5.png';
import g6 from '../assets/Group6.png';
import fator from '../assets/FATOR.png';
import dividendo from '../assets/Dividendos.png';
import essencial from '../assets/Essencial.png';
import fils from '../assets/FII.png';
import smal from '../assets/small caps.png';
import vza from '../assets/VZA.png';
import codigo from '../assets/CODIGO.png';
import dash from '../assets/Dash.png';
import curso from '../assets/Minicurso.png';
import enciclopedia from '../assets/Enciclopedia.png';


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

const carteiras: Array<Carteiras> = [
  { title: 'Carteira FATOR', img: fator, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. '},
  { title: 'Carteira Dividendos', img: dividendo, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. '},
  { title: 'Carteira Essencial', img: essencial, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. '},
  { title: 'Carteira FII', img: fils, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. '},
  { title: 'Carteira Small Caps', img: smal, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. '},
];

const cursos: Array<Carteiras> = [
  { title: 'Valuation 2.0', img: vza, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. '},
  { title: 'Código.py', img: codigo, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. '},
  { title: 'Dash.py', img: dash, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. '},
  { title: 'Carteira Essencial', img: essencial, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor.'},
  { title: 'Curso Reels', img: curso, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. '},
  { title: 'Enciclopédia', img: enciclopedia, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. '},
];

const constultoria: Array<Carteiras> = [
  { title: 'Consultoria VAROS', img: vza, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor.'},
];


export { nav, cards, carteiras, cursos, constultoria };