export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'photographs',
    price: 197907,
    description:
      'Enormous tuition bless adjustment weak data reasons, bulk impose viking emphasis each hire opinion, brunswick sheep milk edt cherry broker respiratory, shelf keep processor essential. ',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'http://localhost:8080/image.jpg',
  },
  {
    id: 2,
    name: 'involved',
    price: 100,
    description: 'Bob corn caused drill lion apparel pen, loved lucy. ',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'http://localhost:8080/image.jpg',
  },
  {
    id: 3,
    name: 'locally',
    price: 1637638,
    description:
      'Ensures pair supply vertex contain offense antenna, babes warming significant talking deaths surfaces electronics, seasons house youth describes estimation protect bloggers, act toshiba logic. ',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'http://localhost:8080/image.jpg',
  },
];

export default products;
