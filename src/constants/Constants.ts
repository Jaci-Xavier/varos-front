import { Cards, NavItem, MenuItems } from '../types';
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
import selecao from '../assets/Selecão-icon.png';
import rectangle from '../assets/Rectangle89.png';
import frame593 from '../assets/Frame 593.png';
import frame594 from '../assets/Frame 594.png';
import frame595 from '../assets/Frame 595.png';

const nav: Array<NavItem> = [
  { name: 'Produtos', path: '/produtos' },
  { name: 'Blog', path: '/blog' },
  { name: 'Conteúdos', path: '/conteudos' },
  { name: 'Quem Somos', path: '/quem-somos' },
];

const cards: Array<Cards> = [
  { path: g1, title: 'Image 1', width: '67px', height: '26px' },
  { path: g2, title: 'Image 2', width: '26px', height: '25px' },
  { path: g3, title: 'Image 3', width: '77px', height: '26px' },
  { path: g4, title: 'Image 4', width: '28px', height: '28px' },
  { path: g5, title: 'Image 5', width: '29px', height: '28px' },
  { path: g6, title: 'Image 6', width: '141px', height: '26px' },
];

const testimonials: Array<Cards> = [
  { path: frame593, title: 'Image 1' },
  { path: frame594, title: 'Image 2' },
  { path: frame595, title: 'Image 3' },
];

const testimonialsBg: Array<Cards> = [
  { path: frame594, title: 'Image 2' },
  { path: frame595, title: 'Image 3' },
  { path: frame593, title: 'Image 1' },
];

const carteiras: Array<MenuItems> = [
  {
    title: 'Carteira Seleção',
    img: selecao,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    key: 0,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque',
    photo: rectangle,
    menu: 1,
  },
  {
    title: 'Carteira FATOR',
    img: fator,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    key: 1,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque',
    photo: rectangle,
    menu: 1,
  },
  {
    title: 'Carteira Dividendos',
    img: dividendo,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    key: 2,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque',
    photo: rectangle,
    menu: 1,
  },
  {
    title: 'Carteira Essencial',
    img: essencial,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    key: 3,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque',
    photo: rectangle,
    menu: 1,
  },
  {
    title: 'Carteira de FIIs',
    img: fils,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    key: 4,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque',
    photo: rectangle,
    menu: 1,
  },
  {
    title: 'Carteira Small Caps',
    img: smal,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    key: 5,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque',
    photo: rectangle,
    menu: 1,
  },
];

const cursos: Array<MenuItems> = [
  {
    title: 'Valuation 2.0',
    img: vza,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    key: 6,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque',
    photo: rectangle,
    menu: 2,
  },
  {
    title: 'Código.py',
    img: codigo,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    key: 7,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque',
    photo: rectangle,
    menu: 2,
  },
  {
    title: 'Dash.py',
    img: dash,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    key: 8,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque',
    photo: rectangle,
    menu: 2,
  },
  {
    title: 'Carteira Essencial',
    img: essencial,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    key: 9,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque',
    photo: rectangle,
    menu: 2,
  },
  {
    title: 'Curso Reels',
    img: curso,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    key: 10,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque',
    photo: rectangle,
    menu: 2,
  },
  {
    title: 'Enciclopédia',
    img: enciclopedia,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    key: 11,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque',
    photo: rectangle,
    menu: 2,
  },
];

const constultoria: Array<MenuItems> = [
  {
    title: 'Consultoria VAROS',
    img: vza,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    key: 12,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque',
    photo: rectangle,
    menu: 3,
  },
];

export { nav, cards, carteiras, cursos, constultoria, testimonials, testimonialsBg };
