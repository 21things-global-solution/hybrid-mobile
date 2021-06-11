import { v4 as uuid } from 'uuid';

export const data = [
  {
    id: uuid(),
    details: {
      name: 'IBIS Styles São Paulo Anhembi',
      price: 170,
      address: 'Av. Cruzeiro do Sul, 1709 - Santana, São Paulo - SP, 02031-000',
      phone: '1133365400',
      stars: 2,
      image: require('./assets/ibis-styles-anhembi.jpg'),
      site: null,
    },
  },
  {
    id: uuid(),
    details: {
      name: 'Comfort Ibirapuera',
      price: 192,
      address: 'Av. Sabiá, 825 - Indianópolis, São Paulo - SP, 04515-001',
      phone: '1146730255',
      stars: 3,
      image: require('./assets/comfort-ibirapurera.jpg'),
      site: null,
    },
  },
  {
    id: uuid(),
    details: {
      name: 'Blue Tree Premium Morumbi',
      price: 230,
      address: 'Av. Roque Petroni Júnior, 1000 - Vila Gertrudes, São Paulo - SP, 04707-000',
      phone: '1151871200',
      stars: 4,
      image: require('./assets/blue-tree-morumbi.jpg'),
      site: 'https://www.bluetree.com.br/hotel/blue-tree-premium-morumbi/',
    },
  },
  {
    id: uuid(),
    details: {
      name: 'Mercure São Paulo Pamplona',
      price: 235,
      address: 'R. Pamplona, 1315 - Jardim Paulista, São Paulo - SP, 01405-002',
      phone: '1128785500',
      stars: 4,
      image: require('./assets/mercure-pamplona.jpg'),
      site: "https://mercure.accor.com",
    },
  },
  {
    id: uuid(),
    details: {
      name: 'Sheraton São Paulo WTC Hotel',
      price: 356,
      address: 'Av. das Nações Unidas, 12559 - Brooklin Novo, São Paulo - SP, 04578-903',
      phone: '1130558000',
      stars: 5,
      image: require('./assets/sheraton-wtc.jpg'),
      site: "http://www.sheratonsaopaulowtc.com.br",
    },
  },
  {
    id: uuid(),
    details: {
      name: 'Bourbon Convention Ibirapuera',
      price: 236,
      address: 'Av. Ibirapuera, 2927 - Ibirapuera, São Paulo - SP, 04029-200',
      phone: '1121612200',
      stars: 3,
      image: require('./assets/bourbon-ibirapuera.jpg'),
      site: "https://www.bourbon.com.br/hotel/bourbon-convention-ibirapuera-hotel/",
    },
  },
  {
    id: uuid(),
    details: {
      name: 'Blue Tree Premium Paulista',
      price: 291,
      address: 'Rua Peixoto Gomide, 707 - Bela Vista, São Paulo - SP, 01409-001',
      phone: '1131477000',
      stars: 4,
      image: require('./assets/blue-tree-paulista.jpg'),
      site: "https://www.bluetree.com.br/hotel/blue-tree-premium-paulista/",
    },
  },
  {
    id: uuid(),
    details: {
      name: 'Golden Tulip Paulista Plaza',
      price: 207,
      address: 'Alameda Santos, 85 - Jardins, São Paulo - SP, 01419-000',
      phone: '1126271000',
      stars: 4,
      image: require('./assets/golden-tulip-paulista.jpg'),
      site: "https://www.radissonhotelsamericas.com/en-us/hotels/radisson-sao-paulo-paulista",
    },
  },
  {
    id: uuid(),
    details: {
      name: 'Renaissance São Paulo Hotel',
      price: 672,
      address: 'Alameda Santos, 2233 - Jardim Paulista, São Paulo - SP, 01419-002',
      phone: '1130692233',
      stars: 5,
      image: require('./assets/renaissance-sao-paulo.jpg'),
      site: "https://www.marriott.com/hotels/travel/saobr-renaissance-sao-paulo-hotel/",
    },
  },
];
