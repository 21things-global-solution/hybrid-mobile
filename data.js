import { v4 as uuid } from 'uuid';

export const data = [
  {
    id: uuid(),
    details: {
      name: 'IBIS Styles São Paulo Anhembi',
      price: 170,
      address: 'Av. Cruzeiro do Sul, 1709 - Santana, São Paulo - SP, 02031-000',
      phone: '(11) 3336-5400',
      stars: 2,
      image: require('./assets/ibis-styles-anhembi.jpg'),
    },
  },
  {
    id: uuid(),
    details: {
      name: 'Comfort Ibirapuera',
      price: 192,
      address: 'Av. Sabiá, 825 - Indianópolis, São Paulo - SP, 04515-001',
      phone: '(11) 4673-0255',
      stars: 3,
      image: require('./assets/comfort-ibirapurera.jpg'),
    },
  },
  {
    id: uuid(),
    details: {
      name: 'Blue Tree Premium Morumbi',
      price: 230,
      address: 'Av. Roque Petroni Júnior, 1000 - Vila Gertrudes, São Paulo - SP, 04707-000',
      phone: '(11) 5187-1200',
      stars: 4,
      image: require('./assets/blue-tree-morumbi.jpg'),
    },
  },
  {
    id: uuid(),
    details: {
      name: 'Mercure São Paulo Pamplona',
      price: 235,
      address: 'R. Pamplona, 1315 - Jardim Paulista, São Paulo - SP, 01405-002',
      phone: '(11) 2878-5500',
      stars: 4,
      image: require('./assets/mercure-pamplona.jpg'),
    },
  },
  {
    id: uuid(),
    details: {
      name: 'Sheraton São Paulo WTC Hotel',
      price: 356,
      address: 'Av. das Nações Unidas, 12559 - Brooklin Novo, São Paulo - SP, 04578-903',
      phone: '(11) 3055-8000',
      stars: 5,
      image: require('./assets/sheraton-wtc.jpg'),
    },
  },
  {
    id: uuid(),
    details: {
      name: 'Bourbon Convention Ibirapuera',
      price: 236,
      address: 'Av. Ibirapuera, 2927 - Ibirapuera, São Paulo - SP, 04029-200',
      phone: '(11) 2161-2200',
      stars: 3,
      image: require('./assets/bourbon-ibirapuera.jpg'),
    },
  },
  {
    id: uuid(),
    details: {
      name: 'Blue Tree Premium Paulista',
      price: 291,
      address: 'Rua Peixoto Gomide, 707 - Bela Vista, São Paulo - SP, 01409-001',
      phone: '(11) 3147-7000',
      stars: 4,
      image: require('./assets/blue-tree-paulista.jpg'),
    },
  },
  {
    id: uuid(),
    details: {
      name: 'Golden Tulip Paulista Plaza',
      price: 207,
      address: 'Alameda Santos, 85 - Jardins, São Paulo - SP, 01419-000',
      phone: '(11) 2627-1000',
      stars: 4,
      image: require('./assets/golden-tulip-paulista.jpg'),
    },
  },
  {
    id: uuid(),
    details: {
      name: 'Renaissance São Paulo Hotel',
      price: 672,
      address: 'Alameda Santos, 2233 - Jardim Paulista, São Paulo - SP, 01419-002',
      phone: '(11) 3069-2233',
      stars: 5,
      image: require('./assets/renaissance-sao-paulo.jpg'),
    },
  },
];
