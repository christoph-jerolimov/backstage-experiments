import {
  createFrontendPlugin,
  PageBlueprint,
} from '@backstage/frontend-plugin-api';

import routes from './routes';

const Icon = () => null;

export const page = PageBlueprint.make({
  name: 'page-n',
  params: {
    path: '/n-pages',
    routeRef: routes.root,
    title: 'Pages n',
    icon: <Icon />,
    loader: () => import('./components/TodoPage').then(m => <m.TodoPage />),
  },
});

export const page1 = PageBlueprint.make({
  name: 'page-1',
  params: {
    path: '/n-pages-1',
    routeRef: routes.pages1,
    title: 'Pages 1',
    icon: <Icon />,
    loader: () => import('./components/TodoPage1').then(m => <m.TodoPage1 />),
  },
});

export const page2 = PageBlueprint.make({
  name: 'page-2',
  params: {
    path: '/n-pages/2',
    routeRef: routes.pages2,
    title: 'Pages 2',
    icon: <Icon />,
    loader: () => import('./components/TodoPage2').then(m => <m.TodoPage2 />),
  },
});

export const page3 = PageBlueprint.make({
  name: 'page-3',
  params: {
    path: '/n-pages/3',
    routeRef: routes.pages3,
    title: 'Pages 3',
    icon: <Icon />,
    loader: () => import('./components/TodoPage3').then(m => <m.TodoPage3 />),
  },
});

export const page4 = PageBlueprint.make({
  name: 'page-4',
  params: {
    path: '/n-pages/4',
    routeRef: routes.pages4,
    title: 'Pages 4',
    icon: <Icon />,
    loader: () => import('./components/TodoPage4').then(m => <m.TodoPage4 />),
  },
});

export const page5 = PageBlueprint.make({
  name: 'page-5',
  params: {
    path: '/n-pages/5',
    routeRef: routes.pages5,
    title: 'Pages 5',
    icon: <Icon />,
    loader: () => import('./components/TodoPage5').then(m => <m.TodoPage5 />),
  },
});

export const page6 = PageBlueprint.make({
  name: 'page-6',
  params: {
    path: '/n-pages/6',
    routeRef: routes.pages6,
    title: 'Pages 6',
    icon: <Icon />,
    loader: () => import('./components/TodoPage6').then(m => <m.TodoPage6 />),
  },
});

export const page7 = PageBlueprint.make({
  name: 'page-7',
  params: {
    path: '/n-pages/7',
    routeRef: routes.pages7,
    title: 'Pages 7',
    icon: <Icon />,
    loader: () => import('./components/TodoPage7').then(m => <m.TodoPage7 />),
  },
});

export const page8 = PageBlueprint.make({
  name: 'page-8',
  params: {
    path: '/n-pages/8',
    routeRef: routes.pages8,
    title: 'Pages 8',
    icon: <Icon />,
    loader: () => import('./components/TodoPage8').then(m => <m.TodoPage8 />),
  },
});

export const page9 = PageBlueprint.make({
  name: 'page-9',
  params: {
    path: '/n-pages/9',
    routeRef: routes.pages9,
    title: 'Pages 9',
    icon: <Icon />,
    loader: () => import('./components/TodoPage9').then(m => <m.TodoPage9 />),
  },
});

export const page10 = PageBlueprint.make({
  name: 'page-10',
  params: {
    path: '/n-pages/10',
    routeRef: routes.pages10,
    title: 'Pages 10',
    icon: <Icon />,
    loader: () => import('./components/TodoPage10').then(m => <m.TodoPage10 />),
  },
});

export const page11 = PageBlueprint.make({
  name: 'page-11',
  params: {
    path: '/n-pages/11',
    routeRef: routes.pages11,
    title: 'Pages 11',
    icon: <Icon />,
    loader: () => import('./components/TodoPage11').then(m => <m.TodoPage11 />),
  },
});

export const page12 = PageBlueprint.make({
  name: 'page-12',
  params: {
    path: '/n-pages/12',
    routeRef: routes.pages12,
    title: 'Pages 12',
    icon: <Icon />,
    loader: () => import('./components/TodoPage12').then(m => <m.TodoPage12 />),
  },
});

export const page13 = PageBlueprint.make({
  name: 'page-13',
  params: {
    path: '/n-pages/13',
    routeRef: routes.pages13,
    title: 'Pages 13',
    icon: <Icon />,
    loader: () => import('./components/TodoPage13').then(m => <m.TodoPage13 />),
  },
});

export const page14 = PageBlueprint.make({
  name: 'page-14',
  params: {
    path: '/n-pages/14',
    routeRef: routes.pages14,
    title: 'Pages 14',
    icon: <Icon />,
    loader: () => import('./components/TodoPage14').then(m => <m.TodoPage14 />),
  },
});

export const page15 = PageBlueprint.make({
  name: 'page-15',
  params: {
    path: '/n-pages/15',
    routeRef: routes.pages15,
    title: 'Pages 15',
    icon: <Icon />,
    loader: () => import('./components/TodoPage15').then(m => <m.TodoPage15 />),
  },
});

export const page16 = PageBlueprint.make({
  name: 'page-16',
  params: {
    path: '/n-pages/16',
    routeRef: routes.pages16,
    title: 'Pages 16',
    icon: <Icon />,
    loader: () => import('./components/TodoPage16').then(m => <m.TodoPage16 />),
  },
});

export const page17 = PageBlueprint.make({
  name: 'page-17',
  params: {
    path: '/n-pages/17',
    routeRef: routes.pages17,
    title: 'Pages 17',
    icon: <Icon />,
    loader: () => import('./components/TodoPage17').then(m => <m.TodoPage17 />),
  },
});

export const page18 = PageBlueprint.make({
  name: 'page-18',
  params: {
    path: '/n-pages/18',
    routeRef: routes.pages18,
    title: 'Pages 18',
    icon: <Icon />,
    loader: () => import('./components/TodoPage18').then(m => <m.TodoPage18 />),
  },
});

export const page19 = PageBlueprint.make({
  name: 'page-19',
  params: {
    path: '/n-pages/19',
    routeRef: routes.pages19,
    title: 'Pages 19',
    icon: <Icon />,
    loader: () => import('./components/TodoPage19').then(m => <m.TodoPage19 />),
  },
});

export const page20 = PageBlueprint.make({
  name: 'page-20',
  params: {
    path: '/n-pages/20',
    routeRef: routes.pages20,
    title: 'Pages 20',
    icon: <Icon />,
    loader: () => import('./components/TodoPage20').then(m => <m.TodoPage20 />),
  },
});

export const page21 = PageBlueprint.make({
  name: 'page-21',
  params: {
    path: '/n-pages/21',
    routeRef: routes.pages21,
    title: 'Pages 21',
    icon: <Icon />,
    loader: () => import('./components/TodoPage21').then(m => <m.TodoPage21 />),
  },
});

export const page22 = PageBlueprint.make({
  name: 'page-22',
  params: {
    path: '/n-pages/22',
    routeRef: routes.pages22,
    title: 'Pages 22',
    icon: <Icon />,
    loader: () => import('./components/TodoPage22').then(m => <m.TodoPage22 />),
  },
});

export const page23 = PageBlueprint.make({
  name: 'page-23',
  params: {
    path: '/n-pages/23',
    routeRef: routes.pages23,
    title: 'Pages 23',
    icon: <Icon />,
    loader: () => import('./components/TodoPage23').then(m => <m.TodoPage23 />),
  },
});

export const page24 = PageBlueprint.make({
  name: 'page-24',
  params: {
    path: '/n-pages/24',
    routeRef: routes.pages24,
    title: 'Pages 24',
    icon: <Icon />,
    loader: () => import('./components/TodoPage24').then(m => <m.TodoPage24 />),
  },
});

export const page25 = PageBlueprint.make({
  name: 'page-25',
  params: {
    path: '/n-pages/25',
    routeRef: routes.pages25,
    title: 'Pages 25',
    icon: <Icon />,
    loader: () => import('./components/TodoPage25').then(m => <m.TodoPage25 />),
  },
});

export const page26 = PageBlueprint.make({
  name: 'page-26',
  params: {
    path: '/n-pages/26',
    routeRef: routes.pages26,
    title: 'Pages 26',
    icon: <Icon />,
    loader: () => import('./components/TodoPage26').then(m => <m.TodoPage26 />),
  },
});

export const page27 = PageBlueprint.make({
  name: 'page-27',
  params: {
    path: '/n-pages/27',
    routeRef: routes.pages27,
    title: 'Pages 27',
    icon: <Icon />,
    loader: () => import('./components/TodoPage27').then(m => <m.TodoPage27 />),
  },
});

export const page28 = PageBlueprint.make({
  name: 'page-28',
  params: {
    path: '/n-pages/28',
    routeRef: routes.pages28,
    title: 'Pages 28',
    icon: <Icon />,
    loader: () => import('./components/TodoPage28').then(m => <m.TodoPage28 />),
  },
});

export const page29 = PageBlueprint.make({
  name: 'page-29',
  params: {
    path: '/n-pages/29',
    routeRef: routes.pages29,
    title: 'Pages 29',
    icon: <Icon />,
    loader: () => import('./components/TodoPage29').then(m => <m.TodoPage29 />),
  },
});

export const page30 = PageBlueprint.make({
  name: 'page-30',
  params: {
    path: '/n-pages/30',
    routeRef: routes.pages30,
    title: 'Pages 30',
    icon: <Icon />,
    loader: () => import('./components/TodoPage30').then(m => <m.TodoPage30 />),
  },
});

export const page31 = PageBlueprint.make({
  name: 'page-31',
  params: {
    path: '/n-pages/31',
    routeRef: routes.pages31,
    title: 'Pages 31',
    icon: <Icon />,
    loader: () => import('./components/TodoPage31').then(m => <m.TodoPage31 />),
  },
});

export const page32 = PageBlueprint.make({
  name: 'page-32',
  params: {
    path: '/n-pages/32',
    routeRef: routes.pages32,
    title: 'Pages 32',
    icon: <Icon />,
    loader: () => import('./components/TodoPage32').then(m => <m.TodoPage32 />),
  },
});

export const page33 = PageBlueprint.make({
  name: 'page-33',
  params: {
    path: '/n-pages/33',
    routeRef: routes.pages33,
    title: 'Pages 33',
    icon: <Icon />,
    loader: () => import('./components/TodoPage33').then(m => <m.TodoPage33 />),
  },
});

export const page34 = PageBlueprint.make({
  name: 'page-34',
  params: {
    path: '/n-pages/34',
    routeRef: routes.pages34,
    title: 'Pages 34',
    icon: <Icon />,
    loader: () => import('./components/TodoPage34').then(m => <m.TodoPage34 />),
  },
});

export const page35 = PageBlueprint.make({
  name: 'page-35',
  params: {
    path: '/n-pages/35',
    routeRef: routes.pages35,
    title: 'Pages 35',
    icon: <Icon />,
    loader: () => import('./components/TodoPage35').then(m => <m.TodoPage35 />),
  },
});

export const page36 = PageBlueprint.make({
  name: 'page-36',
  params: {
    path: '/n-pages/36',
    routeRef: routes.pages36,
    title: 'Pages 36',
    icon: <Icon />,
    loader: () => import('./components/TodoPage36').then(m => <m.TodoPage36 />),
  },
});

export const page37 = PageBlueprint.make({
  name: 'page-37',
  params: {
    path: '/n-pages/37',
    routeRef: routes.pages37,
    title: 'Pages 37',
    icon: <Icon />,
    loader: () => import('./components/TodoPage37').then(m => <m.TodoPage37 />),
  },
});

export const page38 = PageBlueprint.make({
  name: 'page-38',
  params: {
    path: '/n-pages/38',
    routeRef: routes.pages38,
    title: 'Pages 38',
    icon: <Icon />,
    loader: () => import('./components/TodoPage38').then(m => <m.TodoPage38 />),
  },
});

export const page39 = PageBlueprint.make({
  name: 'page-39',
  params: {
    path: '/n-pages/39',
    routeRef: routes.pages39,
    title: 'Pages 39',
    icon: <Icon />,
    loader: () => import('./components/TodoPage39').then(m => <m.TodoPage39 />),
  },
});

export const page40 = PageBlueprint.make({
  name: 'page-40',
  params: {
    path: '/n-pages/40',
    routeRef: routes.pages40,
    title: 'Pages 40',
    icon: <Icon />,
    loader: () => import('./components/TodoPage40').then(m => <m.TodoPage40 />),
  },
});

export const page41 = PageBlueprint.make({
  name: 'page-41',
  params: {
    path: '/n-pages/41',
    routeRef: routes.pages41,
    title: 'Pages 41',
    icon: <Icon />,
    loader: () => import('./components/TodoPage41').then(m => <m.TodoPage41 />),
  },
});

export const page42 = PageBlueprint.make({
  name: 'page-42',
  params: {
    path: '/n-pages/42',
    routeRef: routes.pages42,
    title: 'Pages 42',
    icon: <Icon />,
    loader: () => import('./components/TodoPage42').then(m => <m.TodoPage42 />),
  },
});

export const page43 = PageBlueprint.make({
  name: 'page-43',
  params: {
    path: '/n-pages/43',
    routeRef: routes.pages43,
    title: 'Pages 43',
    icon: <Icon />,
    loader: () => import('./components/TodoPage43').then(m => <m.TodoPage43 />),
  },
});

export const page44 = PageBlueprint.make({
  name: 'page-44',
  params: {
    path: '/n-pages/44',
    routeRef: routes.pages44,
    title: 'Pages 44',
    icon: <Icon />,
    loader: () => import('./components/TodoPage44').then(m => <m.TodoPage44 />),
  },
});

export const page45 = PageBlueprint.make({
  name: 'page-45',
  params: {
    path: '/n-pages/45',
    routeRef: routes.pages45,
    title: 'Pages 45',
    icon: <Icon />,
    loader: () => import('./components/TodoPage45').then(m => <m.TodoPage45 />),
  },
});

export const page46 = PageBlueprint.make({
  name: 'page-46',
  params: {
    path: '/n-pages/46',
    routeRef: routes.pages46,
    title: 'Pages 46',
    icon: <Icon />,
    loader: () => import('./components/TodoPage46').then(m => <m.TodoPage46 />),
  },
});

export const page47 = PageBlueprint.make({
  name: 'page-47',
  params: {
    path: '/n-pages/47',
    routeRef: routes.pages47,
    title: 'Pages 47',
    icon: <Icon />,
    loader: () => import('./components/TodoPage47').then(m => <m.TodoPage47 />),
  },
});

export const page48 = PageBlueprint.make({
  name: 'page-48',
  params: {
    path: '/n-pages/48',
    routeRef: routes.pages48,
    title: 'Pages 48',
    icon: <Icon />,
    loader: () => import('./components/TodoPage48').then(m => <m.TodoPage48 />),
  },
});

export const page49 = PageBlueprint.make({
  name: 'page-49',
  params: {
    path: '/n-pages/49',
    routeRef: routes.pages49,
    title: 'Pages 49',
    icon: <Icon />,
    loader: () => import('./components/TodoPage49').then(m => <m.TodoPage49 />),
  },
});

export const page50 = PageBlueprint.make({
  name: 'page-50',
  params: {
    path: '/n-pages/50',
    routeRef: routes.pages50,
    title: 'Pages 50',
    icon: <Icon />,
    loader: () => import('./components/TodoPage50').then(m => <m.TodoPage50 />),
  },
});

export const page51 = PageBlueprint.make({
  name: 'page-51',
  params: {
    path: '/n-pages/51',
    routeRef: routes.pages51,
    title: 'Pages 51',
    icon: <Icon />,
    loader: () => import('./components/TodoPage51').then(m => <m.TodoPage51 />),
  },
});

export const page52 = PageBlueprint.make({
  name: 'page-52',
  params: {
    path: '/n-pages/52',
    routeRef: routes.pages52,
    title: 'Pages 52',
    icon: <Icon />,
    loader: () => import('./components/TodoPage52').then(m => <m.TodoPage52 />),
  },
});

export const page53 = PageBlueprint.make({
  name: 'page-53',
  params: {
    path: '/n-pages/53',
    routeRef: routes.pages53,
    title: 'Pages 53',
    icon: <Icon />,
    loader: () => import('./components/TodoPage53').then(m => <m.TodoPage53 />),
  },
});

export const page54 = PageBlueprint.make({
  name: 'page-54',
  params: {
    path: '/n-pages/54',
    routeRef: routes.pages54,
    title: 'Pages 54',
    icon: <Icon />,
    loader: () => import('./components/TodoPage54').then(m => <m.TodoPage54 />),
  },
});

export const page55 = PageBlueprint.make({
  name: 'page-55',
  params: {
    path: '/n-pages/55',
    routeRef: routes.pages55,
    title: 'Pages 55',
    icon: <Icon />,
    loader: () => import('./components/TodoPage55').then(m => <m.TodoPage55 />),
  },
});

export const page56 = PageBlueprint.make({
  name: 'page-56',
  params: {
    path: '/n-pages/56',
    routeRef: routes.pages56,
    title: 'Pages 56',
    icon: <Icon />,
    loader: () => import('./components/TodoPage56').then(m => <m.TodoPage56 />),
  },
});

export const page57 = PageBlueprint.make({
  name: 'page-57',
  params: {
    path: '/n-pages/57',
    routeRef: routes.pages57,
    title: 'Pages 57',
    icon: <Icon />,
    loader: () => import('./components/TodoPage57').then(m => <m.TodoPage57 />),
  },
});

export const page58 = PageBlueprint.make({
  name: 'page-58',
  params: {
    path: '/n-pages/58',
    routeRef: routes.pages58,
    title: 'Pages 58',
    icon: <Icon />,
    loader: () => import('./components/TodoPage58').then(m => <m.TodoPage58 />),
  },
});

export const page59 = PageBlueprint.make({
  name: 'page-59',
  params: {
    path: '/n-pages/59',
    routeRef: routes.pages59,
    title: 'Pages 59',
    icon: <Icon />,
    loader: () => import('./components/TodoPage59').then(m => <m.TodoPage59 />),
  },
});

export const page60 = PageBlueprint.make({
  name: 'page-60',
  params: {
    path: '/n-pages/60',
    routeRef: routes.pages60,
    title: 'Pages 60',
    icon: <Icon />,
    loader: () => import('./components/TodoPage60').then(m => <m.TodoPage60 />),
  },
});

export const page61 = PageBlueprint.make({
  name: 'page-61',
  params: {
    path: '/n-pages/61',
    routeRef: routes.pages61,
    title: 'Pages 61',
    icon: <Icon />,
    loader: () => import('./components/TodoPage61').then(m => <m.TodoPage61 />),
  },
});

export const page62 = PageBlueprint.make({
  name: 'page-62',
  params: {
    path: '/n-pages/62',
    routeRef: routes.pages62,
    title: 'Pages 62',
    icon: <Icon />,
    loader: () => import('./components/TodoPage62').then(m => <m.TodoPage62 />),
  },
});

export const page63 = PageBlueprint.make({
  name: 'page-63',
  params: {
    path: '/n-pages/63',
    routeRef: routes.pages63,
    title: 'Pages 63',
    icon: <Icon />,
    loader: () => import('./components/TodoPage63').then(m => <m.TodoPage63 />),
  },
});

export const page64 = PageBlueprint.make({
  name: 'page-64',
  params: {
    path: '/n-pages/64',
    routeRef: routes.pages64,
    title: 'Pages 64',
    icon: <Icon />,
    loader: () => import('./components/TodoPage64').then(m => <m.TodoPage64 />),
  },
});

export const page65 = PageBlueprint.make({
  name: 'page-65',
  params: {
    path: '/n-pages/65',
    routeRef: routes.pages65,
    title: 'Pages 65',
    icon: <Icon />,
    loader: () => import('./components/TodoPage65').then(m => <m.TodoPage65 />),
  },
});

export const page66 = PageBlueprint.make({
  name: 'page-66',
  params: {
    path: '/n-pages/66',
    routeRef: routes.pages66,
    title: 'Pages 66',
    icon: <Icon />,
    loader: () => import('./components/TodoPage66').then(m => <m.TodoPage66 />),
  },
});

export const page67 = PageBlueprint.make({
  name: 'page-67',
  params: {
    path: '/n-pages/67',
    routeRef: routes.pages67,
    title: 'Pages 67',
    icon: <Icon />,
    loader: () => import('./components/TodoPage67').then(m => <m.TodoPage67 />),
  },
});

export const page68 = PageBlueprint.make({
  name: 'page-68',
  params: {
    path: '/n-pages/68',
    routeRef: routes.pages68,
    title: 'Pages 68',
    icon: <Icon />,
    loader: () => import('./components/TodoPage68').then(m => <m.TodoPage68 />),
  },
});

export const page69 = PageBlueprint.make({
  name: 'page-69',
  params: {
    path: '/n-pages/69',
    routeRef: routes.pages69,
    title: 'Pages 69',
    icon: <Icon />,
    loader: () => import('./components/TodoPage69').then(m => <m.TodoPage69 />),
  },
});

export const page70 = PageBlueprint.make({
  name: 'page-70',
  params: {
    path: '/n-pages/70',
    routeRef: routes.pages70,
    title: 'Pages 70',
    icon: <Icon />,
    loader: () => import('./components/TodoPage70').then(m => <m.TodoPage70 />),
  },
});

export const page71 = PageBlueprint.make({
  name: 'page-71',
  params: {
    path: '/n-pages/71',
    routeRef: routes.pages71,
    title: 'Pages 71',
    icon: <Icon />,
    loader: () => import('./components/TodoPage71').then(m => <m.TodoPage71 />),
  },
});

export const page72 = PageBlueprint.make({
  name: 'page-72',
  params: {
    path: '/n-pages/72',
    routeRef: routes.pages72,
    title: 'Pages 72',
    icon: <Icon />,
    loader: () => import('./components/TodoPage72').then(m => <m.TodoPage72 />),
  },
});

export const page73 = PageBlueprint.make({
  name: 'page-73',
  params: {
    path: '/n-pages/73',
    routeRef: routes.pages73,
    title: 'Pages 73',
    icon: <Icon />,
    loader: () => import('./components/TodoPage73').then(m => <m.TodoPage73 />),
  },
});

export const page74 = PageBlueprint.make({
  name: 'page-74',
  params: {
    path: '/n-pages/74',
    routeRef: routes.pages74,
    title: 'Pages 74',
    icon: <Icon />,
    loader: () => import('./components/TodoPage74').then(m => <m.TodoPage74 />),
  },
});

export const page75 = PageBlueprint.make({
  name: 'page-75',
  params: {
    path: '/n-pages/75',
    routeRef: routes.pages75,
    title: 'Pages 75',
    icon: <Icon />,
    loader: () => import('./components/TodoPage75').then(m => <m.TodoPage75 />),
  },
});

export const page76 = PageBlueprint.make({
  name: 'page-76',
  params: {
    path: '/n-pages/76',
    routeRef: routes.pages76,
    title: 'Pages 76',
    icon: <Icon />,
    loader: () => import('./components/TodoPage76').then(m => <m.TodoPage76 />),
  },
});

export const page77 = PageBlueprint.make({
  name: 'page-77',
  params: {
    path: '/n-pages/77',
    routeRef: routes.pages77,
    title: 'Pages 77',
    icon: <Icon />,
    loader: () => import('./components/TodoPage77').then(m => <m.TodoPage77 />),
  },
});

export const page78 = PageBlueprint.make({
  name: 'page-78',
  params: {
    path: '/n-pages/78',
    routeRef: routes.pages78,
    title: 'Pages 78',
    icon: <Icon />,
    loader: () => import('./components/TodoPage78').then(m => <m.TodoPage78 />),
  },
});

export const page79 = PageBlueprint.make({
  name: 'page-79',
  params: {
    path: '/n-pages/79',
    routeRef: routes.pages79,
    title: 'Pages 79',
    icon: <Icon />,
    loader: () => import('./components/TodoPage79').then(m => <m.TodoPage79 />),
  },
});

export const page80 = PageBlueprint.make({
  name: 'page-80',
  params: {
    path: '/n-pages/80',
    routeRef: routes.pages80,
    title: 'Pages 80',
    icon: <Icon />,
    loader: () => import('./components/TodoPage80').then(m => <m.TodoPage80 />),
  },
});

export const page81 = PageBlueprint.make({
  name: 'page-81',
  params: {
    path: '/n-pages/81',
    routeRef: routes.pages81,
    title: 'Pages 81',
    icon: <Icon />,
    loader: () => import('./components/TodoPage81').then(m => <m.TodoPage81 />),
  },
});

export const page82 = PageBlueprint.make({
  name: 'page-82',
  params: {
    path: '/n-pages/82',
    routeRef: routes.pages82,
    title: 'Pages 82',
    icon: <Icon />,
    loader: () => import('./components/TodoPage82').then(m => <m.TodoPage82 />),
  },
});

export const page83 = PageBlueprint.make({
  name: 'page-83',
  params: {
    path: '/n-pages/83',
    routeRef: routes.pages83,
    title: 'Pages 83',
    icon: <Icon />,
    loader: () => import('./components/TodoPage83').then(m => <m.TodoPage83 />),
  },
});

export const page84 = PageBlueprint.make({
  name: 'page-84',
  params: {
    path: '/n-pages/84',
    routeRef: routes.pages84,
    title: 'Pages 84',
    icon: <Icon />,
    loader: () => import('./components/TodoPage84').then(m => <m.TodoPage84 />),
  },
});

export const page85 = PageBlueprint.make({
  name: 'page-85',
  params: {
    path: '/n-pages/85',
    routeRef: routes.pages85,
    title: 'Pages 85',
    icon: <Icon />,
    loader: () => import('./components/TodoPage85').then(m => <m.TodoPage85 />),
  },
});

export const page86 = PageBlueprint.make({
  name: 'page-86',
  params: {
    path: '/n-pages/86',
    routeRef: routes.pages86,
    title: 'Pages 86',
    icon: <Icon />,
    loader: () => import('./components/TodoPage86').then(m => <m.TodoPage86 />),
  },
});

export const page87 = PageBlueprint.make({
  name: 'page-87',
  params: {
    path: '/n-pages/87',
    routeRef: routes.pages87,
    title: 'Pages 87',
    icon: <Icon />,
    loader: () => import('./components/TodoPage87').then(m => <m.TodoPage87 />),
  },
});

export const page88 = PageBlueprint.make({
  name: 'page-88',
  params: {
    path: '/n-pages/88',
    routeRef: routes.pages88,
    title: 'Pages 88',
    icon: <Icon />,
    loader: () => import('./components/TodoPage88').then(m => <m.TodoPage88 />),
  },
});

export const page89 = PageBlueprint.make({
  name: 'page-89',
  params: {
    path: '/n-pages/89',
    routeRef: routes.pages89,
    title: 'Pages 89',
    icon: <Icon />,
    loader: () => import('./components/TodoPage89').then(m => <m.TodoPage89 />),
  },
});

export const page90 = PageBlueprint.make({
  name: 'page-90',
  params: {
    path: '/n-pages/90',
    routeRef: routes.pages90,
    title: 'Pages 90',
    icon: <Icon />,
    loader: () => import('./components/TodoPage90').then(m => <m.TodoPage90 />),
  },
});

export const page91 = PageBlueprint.make({
  name: 'page-91',
  params: {
    path: '/n-pages/91',
    routeRef: routes.pages91,
    title: 'Pages 91',
    icon: <Icon />,
    loader: () => import('./components/TodoPage91').then(m => <m.TodoPage91 />),
  },
});

export const page92 = PageBlueprint.make({
  name: 'page-92',
  params: {
    path: '/n-pages/92',
    routeRef: routes.pages92,
    title: 'Pages 92',
    icon: <Icon />,
    loader: () => import('./components/TodoPage92').then(m => <m.TodoPage92 />),
  },
});

export const page93 = PageBlueprint.make({
  name: 'page-93',
  params: {
    path: '/n-pages/93',
    routeRef: routes.pages93,
    title: 'Pages 93',
    icon: <Icon />,
    loader: () => import('./components/TodoPage93').then(m => <m.TodoPage93 />),
  },
});

export const page94 = PageBlueprint.make({
  name: 'page-94',
  params: {
    path: '/n-pages/94',
    routeRef: routes.pages94,
    title: 'Pages 94',
    icon: <Icon />,
    loader: () => import('./components/TodoPage94').then(m => <m.TodoPage94 />),
  },
});

export const page95 = PageBlueprint.make({
  name: 'page-95',
  params: {
    path: '/n-pages/95',
    routeRef: routes.pages95,
    title: 'Pages 95',
    icon: <Icon />,
    loader: () => import('./components/TodoPage95').then(m => <m.TodoPage95 />),
  },
});

export const page96 = PageBlueprint.make({
  name: 'page-96',
  params: {
    path: '/n-pages/96',
    routeRef: routes.pages96,
    title: 'Pages 96',
    icon: <Icon />,
    loader: () => import('./components/TodoPage96').then(m => <m.TodoPage96 />),
  },
});

export const page97 = PageBlueprint.make({
  name: 'page-97',
  params: {
    path: '/n-pages/97',
    routeRef: routes.pages97,
    title: 'Pages 97',
    icon: <Icon />,
    loader: () => import('./components/TodoPage97').then(m => <m.TodoPage97 />),
  },
});

export const page98 = PageBlueprint.make({
  name: 'page-98',
  params: {
    path: '/n-pages/98',
    routeRef: routes.pages98,
    title: 'Pages 98',
    icon: <Icon />,
    loader: () => import('./components/TodoPage98').then(m => <m.TodoPage98 />),
  },
});

export const page99 = PageBlueprint.make({
  name: 'page-99',
  params: {
    path: '/n-pages/99',
    routeRef: routes.pages99,
    title: 'Pages 99',
    icon: <Icon />,
    loader: () => import('./components/TodoPage99').then(m => <m.TodoPage99 />),
  },
});

export const page100 = PageBlueprint.make({
  name: 'page-100',
  params: {
    path: '/n-pages/100',
    routeRef: routes.pages100,
    title: 'Pages 100',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage100').then(m => <m.TodoPage100 />),
  },
});

export const page101 = PageBlueprint.make({
  name: 'page-101',
  params: {
    path: '/n-pages/101',
    routeRef: routes.pages101,
    title: 'Pages 101',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage101').then(m => <m.TodoPage101 />),
  },
});

export const page102 = PageBlueprint.make({
  name: 'page-102',
  params: {
    path: '/n-pages/102',
    routeRef: routes.pages102,
    title: 'Pages 102',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage102').then(m => <m.TodoPage102 />),
  },
});

export const page103 = PageBlueprint.make({
  name: 'page-103',
  params: {
    path: '/n-pages/103',
    routeRef: routes.pages103,
    title: 'Pages 103',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage103').then(m => <m.TodoPage103 />),
  },
});

export const page104 = PageBlueprint.make({
  name: 'page-104',
  params: {
    path: '/n-pages/104',
    routeRef: routes.pages104,
    title: 'Pages 104',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage104').then(m => <m.TodoPage104 />),
  },
});

export const page105 = PageBlueprint.make({
  name: 'page-105',
  params: {
    path: '/n-pages/105',
    routeRef: routes.pages105,
    title: 'Pages 105',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage105').then(m => <m.TodoPage105 />),
  },
});

export const page106 = PageBlueprint.make({
  name: 'page-106',
  params: {
    path: '/n-pages/106',
    routeRef: routes.pages106,
    title: 'Pages 106',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage106').then(m => <m.TodoPage106 />),
  },
});

export const page107 = PageBlueprint.make({
  name: 'page-107',
  params: {
    path: '/n-pages/107',
    routeRef: routes.pages107,
    title: 'Pages 107',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage107').then(m => <m.TodoPage107 />),
  },
});

export const page108 = PageBlueprint.make({
  name: 'page-108',
  params: {
    path: '/n-pages/108',
    routeRef: routes.pages108,
    title: 'Pages 108',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage108').then(m => <m.TodoPage108 />),
  },
});

export const page109 = PageBlueprint.make({
  name: 'page-109',
  params: {
    path: '/n-pages/109',
    routeRef: routes.pages109,
    title: 'Pages 109',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage109').then(m => <m.TodoPage109 />),
  },
});

export const page110 = PageBlueprint.make({
  name: 'page-110',
  params: {
    path: '/n-pages/110',
    routeRef: routes.pages110,
    title: 'Pages 110',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage110').then(m => <m.TodoPage110 />),
  },
});

export const page111 = PageBlueprint.make({
  name: 'page-111',
  params: {
    path: '/n-pages/111',
    routeRef: routes.pages111,
    title: 'Pages 111',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage111').then(m => <m.TodoPage111 />),
  },
});

export const page112 = PageBlueprint.make({
  name: 'page-112',
  params: {
    path: '/n-pages/112',
    routeRef: routes.pages112,
    title: 'Pages 112',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage112').then(m => <m.TodoPage112 />),
  },
});

export const page113 = PageBlueprint.make({
  name: 'page-113',
  params: {
    path: '/n-pages/113',
    routeRef: routes.pages113,
    title: 'Pages 113',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage113').then(m => <m.TodoPage113 />),
  },
});

export const page114 = PageBlueprint.make({
  name: 'page-114',
  params: {
    path: '/n-pages/114',
    routeRef: routes.pages114,
    title: 'Pages 114',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage114').then(m => <m.TodoPage114 />),
  },
});

export const page115 = PageBlueprint.make({
  name: 'page-115',
  params: {
    path: '/n-pages/115',
    routeRef: routes.pages115,
    title: 'Pages 115',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage115').then(m => <m.TodoPage115 />),
  },
});

export const page116 = PageBlueprint.make({
  name: 'page-116',
  params: {
    path: '/n-pages/116',
    routeRef: routes.pages116,
    title: 'Pages 116',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage116').then(m => <m.TodoPage116 />),
  },
});

export const page117 = PageBlueprint.make({
  name: 'page-117',
  params: {
    path: '/n-pages/117',
    routeRef: routes.pages117,
    title: 'Pages 117',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage117').then(m => <m.TodoPage117 />),
  },
});

export const page118 = PageBlueprint.make({
  name: 'page-118',
  params: {
    path: '/n-pages/118',
    routeRef: routes.pages118,
    title: 'Pages 118',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage118').then(m => <m.TodoPage118 />),
  },
});

export const page119 = PageBlueprint.make({
  name: 'page-119',
  params: {
    path: '/n-pages/119',
    routeRef: routes.pages119,
    title: 'Pages 119',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage119').then(m => <m.TodoPage119 />),
  },
});

export const page120 = PageBlueprint.make({
  name: 'page-120',
  params: {
    path: '/n-pages/120',
    routeRef: routes.pages120,
    title: 'Pages 120',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage120').then(m => <m.TodoPage120 />),
  },
});

export const page121 = PageBlueprint.make({
  name: 'page-121',
  params: {
    path: '/n-pages/121',
    routeRef: routes.pages121,
    title: 'Pages 121',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage121').then(m => <m.TodoPage121 />),
  },
});

export const page122 = PageBlueprint.make({
  name: 'page-122',
  params: {
    path: '/n-pages/122',
    routeRef: routes.pages122,
    title: 'Pages 122',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage122').then(m => <m.TodoPage122 />),
  },
});

export const page123 = PageBlueprint.make({
  name: 'page-123',
  params: {
    path: '/n-pages/123',
    routeRef: routes.pages123,
    title: 'Pages 123',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage123').then(m => <m.TodoPage123 />),
  },
});

export const page124 = PageBlueprint.make({
  name: 'page-124',
  params: {
    path: '/n-pages/124',
    routeRef: routes.pages124,
    title: 'Pages 124',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage124').then(m => <m.TodoPage124 />),
  },
});

export const page125 = PageBlueprint.make({
  name: 'page-125',
  params: {
    path: '/n-pages/125',
    routeRef: routes.pages125,
    title: 'Pages 125',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage125').then(m => <m.TodoPage125 />),
  },
});

export const page126 = PageBlueprint.make({
  name: 'page-126',
  params: {
    path: '/n-pages/126',
    routeRef: routes.pages126,
    title: 'Pages 126',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage126').then(m => <m.TodoPage126 />),
  },
});

export const page127 = PageBlueprint.make({
  name: 'page-127',
  params: {
    path: '/n-pages/127',
    routeRef: routes.pages127,
    title: 'Pages 127',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage127').then(m => <m.TodoPage127 />),
  },
});

export const page128 = PageBlueprint.make({
  name: 'page-128',
  params: {
    path: '/n-pages/128',
    routeRef: routes.pages128,
    title: 'Pages 128',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage128').then(m => <m.TodoPage128 />),
  },
});

export const page129 = PageBlueprint.make({
  name: 'page-129',
  params: {
    path: '/n-pages/129',
    routeRef: routes.pages129,
    title: 'Pages 129',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage129').then(m => <m.TodoPage129 />),
  },
});

export const page130 = PageBlueprint.make({
  name: 'page-130',
  params: {
    path: '/n-pages/130',
    routeRef: routes.pages130,
    title: 'Pages 130',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage130').then(m => <m.TodoPage130 />),
  },
});

export const page131 = PageBlueprint.make({
  name: 'page-131',
  params: {
    path: '/n-pages/131',
    routeRef: routes.pages131,
    title: 'Pages 131',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage131').then(m => <m.TodoPage131 />),
  },
});

export const page132 = PageBlueprint.make({
  name: 'page-132',
  params: {
    path: '/n-pages/132',
    routeRef: routes.pages132,
    title: 'Pages 132',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage132').then(m => <m.TodoPage132 />),
  },
});

export const page133 = PageBlueprint.make({
  name: 'page-133',
  params: {
    path: '/n-pages/133',
    routeRef: routes.pages133,
    title: 'Pages 133',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage133').then(m => <m.TodoPage133 />),
  },
});

export const page134 = PageBlueprint.make({
  name: 'page-134',
  params: {
    path: '/n-pages/134',
    routeRef: routes.pages134,
    title: 'Pages 134',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage134').then(m => <m.TodoPage134 />),
  },
});

export const page135 = PageBlueprint.make({
  name: 'page-135',
  params: {
    path: '/n-pages/135',
    routeRef: routes.pages135,
    title: 'Pages 135',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage135').then(m => <m.TodoPage135 />),
  },
});

export const page136 = PageBlueprint.make({
  name: 'page-136',
  params: {
    path: '/n-pages/136',
    routeRef: routes.pages136,
    title: 'Pages 136',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage136').then(m => <m.TodoPage136 />),
  },
});

export const page137 = PageBlueprint.make({
  name: 'page-137',
  params: {
    path: '/n-pages/137',
    routeRef: routes.pages137,
    title: 'Pages 137',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage137').then(m => <m.TodoPage137 />),
  },
});

export const page138 = PageBlueprint.make({
  name: 'page-138',
  params: {
    path: '/n-pages/138',
    routeRef: routes.pages138,
    title: 'Pages 138',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage138').then(m => <m.TodoPage138 />),
  },
});

export const page139 = PageBlueprint.make({
  name: 'page-139',
  params: {
    path: '/n-pages/139',
    routeRef: routes.pages139,
    title: 'Pages 139',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage139').then(m => <m.TodoPage139 />),
  },
});

export const page140 = PageBlueprint.make({
  name: 'page-140',
  params: {
    path: '/n-pages/140',
    routeRef: routes.pages140,
    title: 'Pages 140',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage140').then(m => <m.TodoPage140 />),
  },
});

export const page141 = PageBlueprint.make({
  name: 'page-141',
  params: {
    path: '/n-pages/141',
    routeRef: routes.pages141,
    title: 'Pages 141',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage141').then(m => <m.TodoPage141 />),
  },
});

export const page142 = PageBlueprint.make({
  name: 'page-142',
  params: {
    path: '/n-pages/142',
    routeRef: routes.pages142,
    title: 'Pages 142',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage142').then(m => <m.TodoPage142 />),
  },
});

export const page143 = PageBlueprint.make({
  name: 'page-143',
  params: {
    path: '/n-pages/143',
    routeRef: routes.pages143,
    title: 'Pages 143',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage143').then(m => <m.TodoPage143 />),
  },
});

export const page144 = PageBlueprint.make({
  name: 'page-144',
  params: {
    path: '/n-pages/144',
    routeRef: routes.pages144,
    title: 'Pages 144',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage144').then(m => <m.TodoPage144 />),
  },
});

export const page145 = PageBlueprint.make({
  name: 'page-145',
  params: {
    path: '/n-pages/145',
    routeRef: routes.pages145,
    title: 'Pages 145',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage145').then(m => <m.TodoPage145 />),
  },
});

export const page146 = PageBlueprint.make({
  name: 'page-146',
  params: {
    path: '/n-pages/146',
    routeRef: routes.pages146,
    title: 'Pages 146',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage146').then(m => <m.TodoPage146 />),
  },
});

export const page147 = PageBlueprint.make({
  name: 'page-147',
  params: {
    path: '/n-pages/147',
    routeRef: routes.pages147,
    title: 'Pages 147',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage147').then(m => <m.TodoPage147 />),
  },
});

export const page148 = PageBlueprint.make({
  name: 'page-148',
  params: {
    path: '/n-pages/148',
    routeRef: routes.pages148,
    title: 'Pages 148',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage148').then(m => <m.TodoPage148 />),
  },
});

export const page149 = PageBlueprint.make({
  name: 'page-149',
  params: {
    path: '/n-pages/149',
    routeRef: routes.pages149,
    title: 'Pages 149',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage149').then(m => <m.TodoPage149 />),
  },
});

export const page150 = PageBlueprint.make({
  name: 'page-150',
  params: {
    path: '/n-pages/150',
    routeRef: routes.pages150,
    title: 'Pages 150',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage150').then(m => <m.TodoPage150 />),
  },
});

export const page151 = PageBlueprint.make({
  name: 'page-151',
  params: {
    path: '/n-pages/151',
    routeRef: routes.pages151,
    title: 'Pages 151',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage151').then(m => <m.TodoPage151 />),
  },
});

export const page152 = PageBlueprint.make({
  name: 'page-152',
  params: {
    path: '/n-pages/152',
    routeRef: routes.pages152,
    title: 'Pages 152',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage152').then(m => <m.TodoPage152 />),
  },
});

export const page153 = PageBlueprint.make({
  name: 'page-153',
  params: {
    path: '/n-pages/153',
    routeRef: routes.pages153,
    title: 'Pages 153',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage153').then(m => <m.TodoPage153 />),
  },
});

export const page154 = PageBlueprint.make({
  name: 'page-154',
  params: {
    path: '/n-pages/154',
    routeRef: routes.pages154,
    title: 'Pages 154',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage154').then(m => <m.TodoPage154 />),
  },
});

export const page155 = PageBlueprint.make({
  name: 'page-155',
  params: {
    path: '/n-pages/155',
    routeRef: routes.pages155,
    title: 'Pages 155',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage155').then(m => <m.TodoPage155 />),
  },
});

export const page156 = PageBlueprint.make({
  name: 'page-156',
  params: {
    path: '/n-pages/156',
    routeRef: routes.pages156,
    title: 'Pages 156',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage156').then(m => <m.TodoPage156 />),
  },
});

export const page157 = PageBlueprint.make({
  name: 'page-157',
  params: {
    path: '/n-pages/157',
    routeRef: routes.pages157,
    title: 'Pages 157',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage157').then(m => <m.TodoPage157 />),
  },
});

export const page158 = PageBlueprint.make({
  name: 'page-158',
  params: {
    path: '/n-pages/158',
    routeRef: routes.pages158,
    title: 'Pages 158',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage158').then(m => <m.TodoPage158 />),
  },
});

export const page159 = PageBlueprint.make({
  name: 'page-159',
  params: {
    path: '/n-pages/159',
    routeRef: routes.pages159,
    title: 'Pages 159',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage159').then(m => <m.TodoPage159 />),
  },
});

export const page160 = PageBlueprint.make({
  name: 'page-160',
  params: {
    path: '/n-pages/160',
    routeRef: routes.pages160,
    title: 'Pages 160',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage160').then(m => <m.TodoPage160 />),
  },
});

export const page161 = PageBlueprint.make({
  name: 'page-161',
  params: {
    path: '/n-pages/161',
    routeRef: routes.pages161,
    title: 'Pages 161',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage161').then(m => <m.TodoPage161 />),
  },
});

export const page162 = PageBlueprint.make({
  name: 'page-162',
  params: {
    path: '/n-pages/162',
    routeRef: routes.pages162,
    title: 'Pages 162',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage162').then(m => <m.TodoPage162 />),
  },
});

export const page163 = PageBlueprint.make({
  name: 'page-163',
  params: {
    path: '/n-pages/163',
    routeRef: routes.pages163,
    title: 'Pages 163',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage163').then(m => <m.TodoPage163 />),
  },
});

export const page164 = PageBlueprint.make({
  name: 'page-164',
  params: {
    path: '/n-pages/164',
    routeRef: routes.pages164,
    title: 'Pages 164',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage164').then(m => <m.TodoPage164 />),
  },
});

export const page165 = PageBlueprint.make({
  name: 'page-165',
  params: {
    path: '/n-pages/165',
    routeRef: routes.pages165,
    title: 'Pages 165',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage165').then(m => <m.TodoPage165 />),
  },
});

export const page166 = PageBlueprint.make({
  name: 'page-166',
  params: {
    path: '/n-pages/166',
    routeRef: routes.pages166,
    title: 'Pages 166',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage166').then(m => <m.TodoPage166 />),
  },
});

export const page167 = PageBlueprint.make({
  name: 'page-167',
  params: {
    path: '/n-pages/167',
    routeRef: routes.pages167,
    title: 'Pages 167',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage167').then(m => <m.TodoPage167 />),
  },
});

export const page168 = PageBlueprint.make({
  name: 'page-168',
  params: {
    path: '/n-pages/168',
    routeRef: routes.pages168,
    title: 'Pages 168',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage168').then(m => <m.TodoPage168 />),
  },
});

export const page169 = PageBlueprint.make({
  name: 'page-169',
  params: {
    path: '/n-pages/169',
    routeRef: routes.pages169,
    title: 'Pages 169',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage169').then(m => <m.TodoPage169 />),
  },
});

export const page170 = PageBlueprint.make({
  name: 'page-170',
  params: {
    path: '/n-pages/170',
    routeRef: routes.pages170,
    title: 'Pages 170',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage170').then(m => <m.TodoPage170 />),
  },
});

export const page171 = PageBlueprint.make({
  name: 'page-171',
  params: {
    path: '/n-pages/171',
    routeRef: routes.pages171,
    title: 'Pages 171',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage171').then(m => <m.TodoPage171 />),
  },
});

export const page172 = PageBlueprint.make({
  name: 'page-172',
  params: {
    path: '/n-pages/172',
    routeRef: routes.pages172,
    title: 'Pages 172',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage172').then(m => <m.TodoPage172 />),
  },
});

export const page173 = PageBlueprint.make({
  name: 'page-173',
  params: {
    path: '/n-pages/173',
    routeRef: routes.pages173,
    title: 'Pages 173',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage173').then(m => <m.TodoPage173 />),
  },
});

export const page174 = PageBlueprint.make({
  name: 'page-174',
  params: {
    path: '/n-pages/174',
    routeRef: routes.pages174,
    title: 'Pages 174',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage174').then(m => <m.TodoPage174 />),
  },
});

export const page175 = PageBlueprint.make({
  name: 'page-175',
  params: {
    path: '/n-pages/175',
    routeRef: routes.pages175,
    title: 'Pages 175',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage175').then(m => <m.TodoPage175 />),
  },
});

export const page176 = PageBlueprint.make({
  name: 'page-176',
  params: {
    path: '/n-pages/176',
    routeRef: routes.pages176,
    title: 'Pages 176',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage176').then(m => <m.TodoPage176 />),
  },
});

export const page177 = PageBlueprint.make({
  name: 'page-177',
  params: {
    path: '/n-pages/177',
    routeRef: routes.pages177,
    title: 'Pages 177',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage177').then(m => <m.TodoPage177 />),
  },
});

export const page178 = PageBlueprint.make({
  name: 'page-178',
  params: {
    path: '/n-pages/178',
    routeRef: routes.pages178,
    title: 'Pages 178',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage178').then(m => <m.TodoPage178 />),
  },
});

export const page179 = PageBlueprint.make({
  name: 'page-179',
  params: {
    path: '/n-pages/179',
    routeRef: routes.pages179,
    title: 'Pages 179',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage179').then(m => <m.TodoPage179 />),
  },
});

export const page180 = PageBlueprint.make({
  name: 'page-180',
  params: {
    path: '/n-pages/180',
    routeRef: routes.pages180,
    title: 'Pages 180',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage180').then(m => <m.TodoPage180 />),
  },
});

export const page181 = PageBlueprint.make({
  name: 'page-181',
  params: {
    path: '/n-pages/181',
    routeRef: routes.pages181,
    title: 'Pages 181',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage181').then(m => <m.TodoPage181 />),
  },
});

export const page182 = PageBlueprint.make({
  name: 'page-182',
  params: {
    path: '/n-pages/182',
    routeRef: routes.pages182,
    title: 'Pages 182',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage182').then(m => <m.TodoPage182 />),
  },
});

export const page183 = PageBlueprint.make({
  name: 'page-183',
  params: {
    path: '/n-pages/183',
    routeRef: routes.pages183,
    title: 'Pages 183',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage183').then(m => <m.TodoPage183 />),
  },
});

export const page184 = PageBlueprint.make({
  name: 'page-184',
  params: {
    path: '/n-pages/184',
    routeRef: routes.pages184,
    title: 'Pages 184',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage184').then(m => <m.TodoPage184 />),
  },
});

export const page185 = PageBlueprint.make({
  name: 'page-185',
  params: {
    path: '/n-pages/185',
    routeRef: routes.pages185,
    title: 'Pages 185',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage185').then(m => <m.TodoPage185 />),
  },
});

export const page186 = PageBlueprint.make({
  name: 'page-186',
  params: {
    path: '/n-pages/186',
    routeRef: routes.pages186,
    title: 'Pages 186',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage186').then(m => <m.TodoPage186 />),
  },
});

export const page187 = PageBlueprint.make({
  name: 'page-187',
  params: {
    path: '/n-pages/187',
    routeRef: routes.pages187,
    title: 'Pages 187',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage187').then(m => <m.TodoPage187 />),
  },
});

export const page188 = PageBlueprint.make({
  name: 'page-188',
  params: {
    path: '/n-pages/188',
    routeRef: routes.pages188,
    title: 'Pages 188',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage188').then(m => <m.TodoPage188 />),
  },
});

export const page189 = PageBlueprint.make({
  name: 'page-189',
  params: {
    path: '/n-pages/189',
    routeRef: routes.pages189,
    title: 'Pages 189',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage189').then(m => <m.TodoPage189 />),
  },
});

export const page190 = PageBlueprint.make({
  name: 'page-190',
  params: {
    path: '/n-pages/190',
    routeRef: routes.pages190,
    title: 'Pages 190',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage190').then(m => <m.TodoPage190 />),
  },
});

export const page191 = PageBlueprint.make({
  name: 'page-191',
  params: {
    path: '/n-pages/191',
    routeRef: routes.pages191,
    title: 'Pages 191',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage191').then(m => <m.TodoPage191 />),
  },
});

export const page192 = PageBlueprint.make({
  name: 'page-192',
  params: {
    path: '/n-pages/192',
    routeRef: routes.pages192,
    title: 'Pages 192',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage192').then(m => <m.TodoPage192 />),
  },
});

export const page193 = PageBlueprint.make({
  name: 'page-193',
  params: {
    path: '/n-pages/193',
    routeRef: routes.pages193,
    title: 'Pages 193',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage193').then(m => <m.TodoPage193 />),
  },
});

export const page194 = PageBlueprint.make({
  name: 'page-194',
  params: {
    path: '/n-pages/194',
    routeRef: routes.pages194,
    title: 'Pages 194',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage194').then(m => <m.TodoPage194 />),
  },
});

export const page195 = PageBlueprint.make({
  name: 'page-195',
  params: {
    path: '/n-pages/195',
    routeRef: routes.pages195,
    title: 'Pages 195',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage195').then(m => <m.TodoPage195 />),
  },
});

export const page196 = PageBlueprint.make({
  name: 'page-196',
  params: {
    path: '/n-pages/196',
    routeRef: routes.pages196,
    title: 'Pages 196',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage196').then(m => <m.TodoPage196 />),
  },
});

export const page197 = PageBlueprint.make({
  name: 'page-197',
  params: {
    path: '/n-pages/197',
    routeRef: routes.pages197,
    title: 'Pages 197',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage197').then(m => <m.TodoPage197 />),
  },
});

export const page198 = PageBlueprint.make({
  name: 'page-198',
  params: {
    path: '/n-pages/198',
    routeRef: routes.pages198,
    title: 'Pages 198',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage198').then(m => <m.TodoPage198 />),
  },
});

export const page199 = PageBlueprint.make({
  name: 'page-199',
  params: {
    path: '/n-pages/199',
    routeRef: routes.pages199,
    title: 'Pages 199',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage199').then(m => <m.TodoPage199 />),
  },
});

export const page200 = PageBlueprint.make({
  name: 'page-200',
  params: {
    path: '/n-pages/200',
    routeRef: routes.pages200,
    title: 'Pages 200',
    icon: <Icon />,
    loader: () =>
      import('./components/TodoPage200').then(m => <m.TodoPage200 />),
  },
});

const extensions = [
  page,
  page1,
  page2,
  page3,
  page4,
  page5,
  page6,
  page7,
  page8,
  page9,
  page10,
  page11,
  page12,
  page13,
  page14,
  page15,
  page16,
  page17,
  page18,
  page19,
  page20,
  page21,
  page22,
  page23,
  page24,
  page25,
  page26,
  page27,
  page28,
  page29,
  page30,
  page31,
  page32,
  page33,
  page34,
  page35,
  page36,
  page37,
  page38,
  page39,
  page40,
  page41,
  page42,
  page43,
  page44,
  page45,
  page46,
  page47,
  page48,
  page49,
  page50,
  page51,
  page52,
  page53,
  page54,
  page55,
  page56,
  page57,
  page58,
  page59,
  page60,
  page61,
  page62,
  page63,
  page64,
  page65,
  page66,
  page67,
  page68,
  page69,
  page70,
  page71,
  page72,
  page73,
  page74,
  page75,
  page76,
  page77,
  page78,
  page79,
  page80,
  page81,
  page82,
  page83,
  page84,
  page85,
  page86,
  page87,
  page88,
  page89,
  page90,
  page91,
  page92,
  page93,
  page94,
  page95,
  page96,
  page97,
  page98,
  page99,
  page100,
  page101,
  page102,
  page103,
  page104,
  page105,
  page106,
  page107,
  page108,
  page109,
  page110,
  page111,
  page112,
  page113,
  page114,
  page115,
  page116,
  page117,
  page118,
  page119,
  page120,
  page121,
  page122,
  page123,
  page124,
  page125,
  page126,
  page127,
  page128,
  page129,
  page130,
  page131,
  page132,
  page133,
  page134,
  page135,
  page136,
  page137,
  page138,
  page139,
  page140,
  page141,
  page142,
  page143,
  page144,
  page145,
  page146,
  page147,
  page148,
  page149,
  page150,
  page151,
  page152,
  page153,
  page154,
  page155,
  page156,
  page157,
  page158,
  page159,
  page160,
  page161,
  page162,
  page163,
  page164,
  page165,
  page166,
  page167,
  page168,
  page169,
  page170,
  page171,
  page172,
  page173,
  page174,
  page175,
  page176,
  page177,
  page178,
  page179,
  page180,
  page181,
  page182,
  page183,
  page184,
  page185,
  page186,
  page187,
  page188,
  page189,
  page190,
  page191,
  page192,
  page193,
  page194,
  page195,
  page196,
  page197,
  page198,
  page199,
  page200,
];

export const nPagesPlugin = createFrontendPlugin({
  pluginId: 'n-pages',
  info: { packageJson: () => import('../package.json') },
  extensions, // : extensions.slice(0, 11),
  routes,
});
