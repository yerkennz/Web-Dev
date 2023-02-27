export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  url: string;
  imgURL: string;
  link: string;
};

export const products = [
  {
    id: 1,
    name: "Samsung Galaxy A53",
    price: 160370,
    description: "Любуйтесь яркими деталями на дисплее Super AMOLED 120 Гц в разрешении FHD+. Широкий 6.5-дюймовый дисплей обеспечивает отличную видимость на улице с яркостью до 800 нит и снижает уровень синего света благодаря технологии защиты глаз Eye Comfort Shield.",
    rating: 5,
    url: "https://kaspi.kz/shop/p/samsung-galaxy-a53-5g-6-gb-128-gb-chernyi-104253225/?c=750000000#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h21/he7/49613532528670/smartfon-samsung-galaxy-a53-5g-128gb-sm-a536ezkdskz-black-104253225-1.jpg",
    link: "https://t.me/angularwebdev2023/2"
  },
  {
    id: 2,
    name: "JBL Tune 510BT",
    price: 25526,
    description: "Наушники JBL Tune 510BT позволяют наслаждаться мощными басами благодаря технологии JBL Pure Bass без проводов. Эти простые в использовании наушники работают до 40 часов на одном заряде аккумулятора, а, подключив зарядный кабель USB-C всего на пять минут к сети питания, вы получите еще 2 часа воспроизведения.",
    rating: 5,
    url: "https://kaspi.kz/shop/p/jbl-tune-510bt-chernyi-101420081/?c=750000000#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3d/h1d/33957524537374/jbl-tune-510bt-cernyj-101420081-1-Container.jpg",
    link: "https://t.me/angularwebdev2023/3"
  },
  {
    id: 3,
    name: "Samsung Galaxy S22",
    price: 348770,
    description: "Samsung Galaxy S22 просто великолепен.  Утонченные лицевые панели гармонично сочетаются с изысканным корпусом. Роскошный вид дополняет лаконичная система линейных камер",
    rating: 5,
    url: "https://kaspi.kz/shop/p/samsung-galaxy-s22-8-gb-128-gb-chernyi-103662719/?c=750000000#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h21/h7a/62349965197342/samsung-galaxy-s22-8-gb-128-gb-chernyi-103662719-1.jpg",
    link: "https://t.me/angularwebdev2023/6"
  },
  {
    id: 4,
    name: "ASUS TUF Gaming A15 FA506IHRB-HN084 90NR07G7-M008C0",
    price: 349930,
    description: "",
    rating: 5,
    url: "https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/?c=750000000#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6b/h33/62100002701342/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-1.jpg",
    link: "https://t.me/angularwebdev2023/10"
  },
  {
    id: 5,
    name: "Apple iPhone 11",
    price: 302300,
    description: "Функциональный и стильный смартфон Apple iPhone 11 в металлическом корпусе способен обеспечить не только повседневное общение и развлечения, но и продуктивную работу.",
    rating: 5,
    url: "https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0a/h2e/31489167622174/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg",
    link: "https://t.me/angularwebdev2023/8"
  },
  {
    id: 6,
    name: "Samsung Galaxy Watch 4",
    price: 95977,
    description: "Умные часы Samsung - это не просто гаджет, а ваш верный спутник на пути к достижению задач и самосовершенствованию.",
    rating: 5,
    url: "https://kaspi.kz/shop/p/samsung-galaxy-watch-4-classic-sm-r890nzkacis-46-mm-chernyi-chernyi-102170938/?c=750000000#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h31/h9b/62047597559838/samsung-galaxy-watch-4-classic-sm-r890-cernyj-102170938-1-Container.jpg",
    link: "https://t.me/angularwebdev2023/9"
  },
  {
    id: 7,
    name: "Amazon Kindle Paperwhite 2021",
    price: 161000,
    description: "Электронная книга Amazon Kindle Paperwhite 2021.",
    rating: 5,
    url: "https://kaspi.kz/shop/p/amazon-kindle-paperwhite-2021-chernyi-102838488/?c=750000000#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6a/ha1/47093254455326/amazon-kindle-paper-2021-chernyi-102838488-1.jpg",
    link: "https://t.me/angularwebdev2023/11"
  },
  {
    id: 8,
    name: "Apple AirPods Max",
    price: 365990,
    description: "Bluetooth гарнитура Apple AirPods Max сможет полностью изменить ваше представление о полноразмерных наушниках. Данная модель разработана с применением первоклассных материалов и передовых технологий.",
    rating: 5,
    url: "https://kaspi.kz/shop/p/apple-airpods-max-sinii-101180956/?c=750000000#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h84/h0d/46659800498206/apple-airpods-max-sinij-101180956-1-Container.jpg",
    link: "https://t.me/angularwebdev2023/12"
  },
  {
    id: 9,
    name: "Яндекс Станция Лайт",
    price: 37464,
    description: "Яндекс.Станция Лайт — это яркая и компактная умная колонка, которая управляется голосом и сенсорными кнопками. Она здорово украсит интерьер и сможет развлечь ребенка: матовый корпус приятно держать в руках, а расцветка порадует глаз.",
    rating: 5,
    url: "https://kaspi.kz/shop/p/jandeks-stantsija-lait-birjuzovyi-101808994/?c=750000000#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h36/h98/49342279876638/yandeks-stantsiya-lait-biryuzovyi-101808994-1.jpg",
    link: "https://t.me/angularwebdev2023/13"
  },
  {
    id: 10,
    name: "Kieslect K11",
    price: 24980,
    description: "Умные часы Kieslect K11 оснащены постоянно включенным полноэкранным сенсорным дисплеем с разрешением 1.39 Ultra Amoled.",
    rating: 5,
    url: "https://kaspi.kz/shop/p/kieslect-k11-chernyi-104947291/?c=750000000#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5c/h60/51661437468702/xiaomi-kieslect-k11-cernyj-104947291-1.jpg",
    link: "https://t.me/angularwebdev2023/14"
  },
];