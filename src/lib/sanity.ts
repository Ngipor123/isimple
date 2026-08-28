import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export interface RepairPrice {
  service: string;
  originalPrice?: number;
  copyPrice?: number;
  price?: number;
  warranty: string;
  time?: string;
}

export interface IPhoneModel {
  _id: string;
  name: string;
  slug: string;
  image?: string;
  prices: RepairPrice[];
  seoTitle?: { lv?: string; ru?: string; en?: string };
  seoDescription?: { lv?: string; ru?: string; en?: string };
}

export interface Service {
  _id: string;
  title: string;
  description: string;
  icon?: string;
  slug: string;
}

const projectId = import.meta.env.SANITY_PROJECT_ID || 'placeholder';
const dataset = import.meta.env.SANITY_DATASET || 'production';

export const sanityClient = createClient({
  projectId: projectId === 'placeholder' ? 'unconfigured' : projectId,
  dataset,
  apiVersion: '2024-03-11',
  useCdn: false,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: string | object) {
  return builder.image(source);
}

// Mock Data fallbacks to make sure the app compiles and works perfectly instantly
export const MOCK_IPHONE_MODELS = [
  {
    name: 'iPhone 17 Pro Max',
    slug: 'iphone-17-pro-max',
    prices: { screen_orig: 480, screen_copy: 290, battery: 90, camera: 180, body: 220, home_button: null, charging_port: 90 },
    seoTitle: { lv: 'iPhone 17 Pro Max remonts Rīgā', ru: 'Ремонт iPhone 17 Pro Max в Риге', en: 'iPhone 17 Pro Max Repair in Riga' },
    seoDescription: { lv: 'Profesionāls iPhone 17 Pro Max remonts Dreiliņos. Ekrāna, baterijas maiņa ar garantiju.', ru: 'Профессиональный ремонт iPhone 17 Pro Max в Риге. Замена экрана, батареи с гарантией.', en: 'Professional iPhone 17 Pro Max repair. Screen, battery replacement with warranty.' }
  },
  {
    name: 'iPhone 17 Pro',
    slug: 'iphone-17-pro',
    prices: { screen_orig: 450, screen_copy: 260, battery: 90, camera: 170, body: 200, home_button: null, charging_port: 90 },
    seoTitle: { lv: 'iPhone 17 Pro remonts Rīgā', ru: 'Ремонт iPhone 17 Pro в Риге', en: 'iPhone 17 Pro Repair in Riga' },
    seoDescription: { lv: 'Profesionāls iPhone 17 Pro remonts. Ekrāna, baterijas maiņa ar garantiju.', ru: 'Профессиональный ремонт iPhone 17 Pro. Замена экрана, батареи.', en: 'Professional iPhone 17 Pro repair.' }
  },
  {
    name: 'iPhone 17 Air',
    slug: 'iphone-17-air',
    prices: { screen_orig: 390, screen_copy: 220, battery: 80, camera: 140, body: 180, home_button: null, charging_port: 80 },
    seoTitle: { lv: 'iPhone 17 Air remonts Rīgā', ru: 'Ремонт iPhone 17 Air в Риге', en: 'iPhone 17 Air Repair in Riga' },
    seoDescription: { lv: 'Profesionāls iPhone 17 Air remonts.', ru: 'Профессиональный ремонт iPhone 17 Air.', en: 'Professional iPhone 17 Air repair.' }
  },
  {
    name: 'iPhone 17',
    slug: 'iphone-17',
    prices: { screen_orig: 350, screen_copy: 190, battery: 80, camera: 130, body: 170, home_button: null, charging_port: 80 },
    seoTitle: { lv: 'iPhone 17 remonts', ru: 'Ремонт iPhone 17', en: 'iPhone 17 Repair' },
    seoDescription: { lv: 'iPhone 17 remonts Rīgā.', ru: 'Ремонт iPhone 17 в Риге.', en: 'iPhone 17 repair.' }
  },
  {
    name: 'iPhone 16 Pro Max',
    slug: 'iphone-16-pro-max',
    prices: { screen_orig: 420, screen_copy: 250, battery: 80, camera: 160, body: 190, home_button: null, charging_port: 80 },
    seoTitle: { lv: 'iPhone 16 Pro Max remonts', ru: 'Ремонт iPhone 16 Pro Max', en: 'iPhone 16 Pro Max Repair' },
    seoDescription: { lv: 'Kvalitatīvs iPhone 16 Pro Max remonts.', ru: 'Качественный ремонт iPhone 16 Pro Max.', en: 'iPhone 16 Pro Max repair.' }
  },
  {
    name: 'iPhone 16 Pro',
    slug: 'iphone-16-pro',
    prices: { screen_orig: 390, screen_copy: 230, battery: 80, camera: 150, body: 180, home_button: null, charging_port: 80 },
    seoTitle: { lv: 'iPhone 16 Pro remonts', ru: 'Ремонт iPhone 16 Pro', en: 'iPhone 16 Pro Repair' },
    seoDescription: { lv: 'Kvalitatīvs iPhone 16 Pro remonts.', ru: 'Качественный ремонт iPhone 16 Pro.', en: 'iPhone 16 Pro repair.' }
  },
  {
    name: 'iPhone 16 Plus',
    slug: 'iphone-16-plus',
    prices: { screen_orig: 320, screen_copy: 180, battery: 75, camera: 120, body: 160, home_button: null, charging_port: 75 },
    seoTitle: { lv: 'iPhone 16 Plus remonts', ru: 'Ремонт iPhone 16 Plus', en: 'iPhone 16 Plus Repair' },
    seoDescription: { lv: 'Kvalitatīvs iPhone 16 Plus remonts.', ru: 'Качественный ремонт iPhone 16 Plus.', en: 'iPhone 16 Plus repair.' }
  },
  {
    name: 'iPhone 16',
    slug: 'iphone-16',
    prices: { screen_orig: 290, screen_copy: 160, battery: 75, camera: 110, body: 150, home_button: null, charging_port: 75 },
    seoTitle: { lv: 'iPhone 16 remonts Rīgā', ru: 'Ремонт iPhone 16 в Риге', en: 'iPhone 16 Repair in Riga' },
    seoDescription: { lv: 'Remonts visiem iPhone 16.', ru: 'Ремонт всех iPhone 16.', en: 'Repair for all iPhone 16.' }
  },
  {
    name: 'iPhone 15 Pro Max',
    slug: 'iphone-15-pro-max',
    prices: { screen_orig: 380, screen_copy: 220, battery: 75, camera: 140, body: 170, home_button: null, charging_port: 75 },
    seoTitle: { lv: 'iPhone 15 Pro Max remonts', ru: 'Ремонт iPhone 15 Pro Max', en: 'iPhone 15 Pro Max Repair' },
    seoDescription: { lv: 'Remonts iPhone 15 Pro Max.', ru: 'Ремонт iPhone 15 Pro Max.', en: 'iPhone 15 Pro Max repair.' }
  },
  {
    name: 'iPhone 15 Pro',
    slug: 'iphone-15-pro',
    prices: { screen_orig: 350, screen_copy: 190, battery: 75, camera: 130, body: 165, home_button: null, charging_port: 75 },
    seoTitle: { lv: 'iPhone 15 Pro remonts Rīgā', ru: 'Ремонт iPhone 15 Pro в Риге', en: 'iPhone 15 Pro Repair' },
    seoDescription: { lv: 'Aparātu diagnostika un remonts.', ru: 'Диагностика и ремонт.', en: 'Diagnosis and repair.' }
  },
  {
    name: 'iPhone 15 Plus',
    slug: 'iphone-15-plus',
    prices: { screen_orig: 280, screen_copy: 155, battery: 70, camera: 110, body: 140, home_button: null, charging_port: 70 },
    seoTitle: { lv: 'iPhone 15 Plus remonts', ru: 'Ремонт iPhone 15 Plus', en: 'iPhone 15 Plus Repair' },
    seoDescription: { lv: 'Garantija visiem darbiem.', ru: 'Гарантия на все работы.', en: 'Warranty on all works.' }
  },
  {
    name: 'iPhone 15',
    slug: 'iphone-15',
    prices: { screen_orig: 260, screen_copy: 145, battery: 70, camera: 100, body: 130, home_button: null, charging_port: 70 },
    seoTitle: { lv: 'iPhone 15 remonts Dreiliņi', ru: 'Ремонт iPhone 15 Дрейлини', en: 'iPhone 15 Repair Dreilini' },
    seoDescription: { lv: 'Kvalitatīvas detaļas iPhone 15.', ru: 'Качественные детали iPhone 15.', en: 'Quality parts for iPhone 15.' }
  },
  {
    name: 'iPhone 14 Pro Max',
    slug: 'iphone-14-pro-max',
    prices: { screen_orig: 340, screen_copy: 190, battery: 70, camera: 120, body: 150, home_button: null, charging_port: 70 },
    seoTitle: { lv: 'iPhone 14 Pro Max remonts', ru: 'Ремонт iPhone 14 Pro Max', en: 'iPhone 14 Pro Max Repair' },
    seoDescription: { lv: 'iPhone 14 Pro Max serviss.', ru: 'Ремонт iPhone 14 Pro Max.', en: 'iPhone 14 Pro Max service.' }
  },
  {
    name: 'iPhone 14 Pro',
    slug: 'iphone-14-pro',
    prices: { screen_orig: 310, screen_copy: 170, battery: 70, camera: 115, body: 145, home_button: null, charging_port: 70 },
    seoTitle: { lv: 'iPhone 14 Pro remonts', ru: 'Ремонт iPhone 14 Pro', en: 'iPhone 14 Pro Repair' },
    seoDescription: { lv: 'iPhone 14 Pro apkope.', ru: 'Обслуживание iPhone 14 Pro.', en: 'iPhone 14 Pro maintenance.' }
  },
  {
    name: 'iPhone 14 Plus',
    slug: 'iphone-14-plus',
    prices: { screen_orig: 240, screen_copy: 135, battery: 65, camera: 95, body: 120, home_button: null, charging_port: 65 },
    seoTitle: { lv: 'iPhone 14 Plus remonts', ru: 'Ремонт iPhone 14 Plus', en: 'iPhone 14 Plus Repair' },
    seoDescription: { lv: 'Remonts iSimple servisā.', ru: 'Ремонт в сервисе iSimple.', en: 'Repair at iSimple.' }
  },
  {
    name: 'iPhone 14',
    slug: 'iphone-14',
    prices: { screen_orig: 220, screen_copy: 125, battery: 65, camera: 90, body: 110, home_button: null, charging_port: 65 },
    seoTitle: { lv: 'iPhone 14 remonts Rīgā', ru: 'Ремонт iPhone 14 в Риге', en: 'iPhone 14 Repair' },
    seoDescription: { lv: 'Detaļu nomaiņa iPhone 14.', ru: 'Замена деталей iPhone 14.', en: 'Replacement of parts.' }
  },
  {
    name: 'iPhone 13 Pro Max',
    slug: 'iphone-13-pro-max',
    prices: { screen_orig: 290, screen_copy: 160, battery: 65, camera: 110, body: 130, home_button: null, charging_port: 65 },
    seoTitle: { lv: 'iPhone 13 Pro Max remonts', ru: 'Ремонт iPhone 13 Pro Max', en: 'iPhone 13 Pro Max Repair' },
    seoDescription: { lv: 'Ātrs remonts iPhone 13 Pro Max.', ru: 'Быстрый ремонт iPhone 13 Pro Max.', en: 'Fast repair for iPhone 13 Pro Max.' }
  },
  {
    name: 'iPhone 13 Pro',
    slug: 'iphone-13-pro',
    prices: { screen_orig: 270, screen_copy: 145, battery: 65, camera: 105, body: 120, home_button: null, charging_port: 65 },
    seoTitle: { lv: 'iPhone 13 Pro remonts', ru: 'Ремонт iPhone 13 Pro', en: 'iPhone 13 Pro Repair' },
    seoDescription: { lv: 'Kvalitatīvs ekrāns iPhone 13 Pro.', ru: 'Качественный экран iPhone 13 Pro.', en: 'Quality screen iPhone 13 Pro.' }
  },
  {
    name: 'iPhone 13 mini',
    slug: 'iphone-13-mini',
    prices: { screen_orig: 210, screen_copy: 115, battery: 60, camera: 80, body: 95, home_button: null, charging_port: 60 },
    seoTitle: { lv: 'iPhone 13 mini remonts', ru: 'Ремонт iPhone 13 mini', en: 'iPhone 13 mini Repair' },
    seoDescription: { lv: 'Mazā iPhone remonts.', ru: 'Ремонт маленького iPhone.', en: 'Small iPhone repair.' }
  },
  {
    name: 'iPhone 13',
    slug: 'iphone-13',
    prices: { screen_orig: 210, screen_copy: 120, battery: 60, camera: 85, body: 100, home_button: null, charging_port: 60 },
    seoTitle: { lv: 'iPhone 13 remonts Dreiliņos', ru: 'Ремонт iPhone 13 в Дрейлини', en: 'iPhone 13 Repair Dreilini' },
    seoDescription: { lv: 'Baterijas maiņa un ekrāns.', ru: 'Замена батареи и экрана.', en: 'Battery and screen replacement.' }
  },
  {
    name: 'iPhone 12 Pro Max',
    slug: 'iphone-12-pro-max',
    prices: { screen_orig: 240, screen_copy: 130, battery: 60, camera: 95, body: 110, home_button: null, charging_port: 60 },
    seoTitle: { lv: 'iPhone 12 Pro Max remonts', ru: 'Ремонт iPhone 12 Pro Max', en: 'iPhone 12 Pro Max Repair' },
    seoDescription: { lv: 'Viss veida remonts.', ru: 'Все виды ремонта.', en: 'All types of repair.' }
  },
  {
    name: 'iPhone 12 Pro',
    slug: 'iphone-12-pro',
    prices: { screen_orig: 210, screen_copy: 115, battery: 60, camera: 90, body: 100, home_button: null, charging_port: 60 },
    seoTitle: { lv: 'iPhone 12 Pro remonts', ru: 'Ремонт iPhone 12 Pro', en: 'iPhone 12 Pro Repair' },
    seoDescription: { lv: 'Lielisks serviss iPhone 12 Pro.', ru: 'Отличный сервис iPhone 12 Pro.', en: 'Great service.' }
  },
  {
    name: 'iPhone 12 mini',
    slug: 'iphone-12-mini',
    prices: { screen_orig: 180, screen_copy: 105, battery: 55, camera: 75, body: 90, home_button: null, charging_port: 55 },
    seoTitle: { lv: 'iPhone 12 mini remonts Rīgā', ru: 'Ремонт iPhone 12 mini в Риге', en: 'iPhone 12 mini Repair' },
    seoDescription: { lv: 'Zemas cenas remontam.', ru: 'Низкие цены на ремонт.', en: 'Low prices.' }
  },
  {
    name: 'iPhone 12',
    slug: 'iphone-12',
    prices: { screen_orig: 180, screen_copy: 110, battery: 55, camera: 80, body: 95, home_button: null, charging_port: 55 },
    seoTitle: { lv: 'iPhone 12 remonts Rīgā', ru: 'Ремонт iPhone 12 в Риге', en: 'iPhone 12 Repair' },
    seoDescription: { lv: 'Populārā modeļa remonts.', ru: 'Ремонт популярной модели.', en: 'Popular model repair.' }
  },
  {
    name: 'iPhone 11 Pro Max',
    slug: 'iphone-11-pro-max',
    prices: { screen_orig: 160, screen_copy: 95, battery: 55, camera: 80, body: 90, home_button: null, charging_port: 55 },
    seoTitle: { lv: 'iPhone 11 Pro Max remonts', ru: 'Ремонт iPhone 11 Pro Max', en: 'iPhone 11 Pro Max Repair' },
    seoDescription: { lv: 'iPhone 11 Pro Max labošana.', ru: 'Починка iPhone 11 Pro Max.', en: 'iPhone 11 Pro Max fixing.' }
  },
  {
    name: 'iPhone 11 Pro',
    slug: 'iphone-11-pro',
    prices: { screen_orig: 140, screen_copy: 85, battery: 55, camera: 75, body: 85, home_button: null, charging_port: 55 },
    seoTitle: { lv: 'iPhone 11 Pro remonts Rīgā', ru: 'Ремонт iPhone 11 Pro в Риге', en: 'iPhone 11 Pro Repair' },
    seoDescription: { lv: 'Ekrāna maiņa ar garantiju.', ru: 'Замена экрана с гарантией.', en: 'Screen replacement.' }
  },
  {
    name: 'iPhone 11',
    slug: 'iphone-11',
    prices: { screen_orig: 110, screen_copy: 75, battery: 50, camera: 70, body: 80, home_button: null, charging_port: 50 },
    seoTitle: { lv: 'iPhone 11 remonts Dreiliņos', ru: 'Ремонт iPhone 11 в Дрейлини', en: 'iPhone 11 Repair' },
    seoDescription: { lv: 'Remonts 1 stundas laikā.', ru: 'Ремонт за 1 час.', en: 'Repair within 1 hour.' }
  },
  {
    name: 'iPhone XS Max',
    slug: 'iphone-xs-max',
    prices: { screen_orig: 120, screen_copy: 75, battery: 50, camera: 65, body: 80, home_button: null, charging_port: 45 },
    seoTitle: { lv: 'iPhone XS Max remonts Rīgā', ru: 'Ремонт iPhone XS Max в Риге', en: 'iPhone XS Max Repair' },
    seoDescription: { lv: 'Remontdarbi iPhone XS Max modelim.', ru: 'Ремонт для модели iPhone XS Max.', en: 'Repair for iPhone XS Max.' }
  },
  {
    name: 'iPhone XS',
    slug: 'iphone-xs',
    prices: { screen_orig: 100, screen_copy: 65, battery: 45, camera: 60, body: 75, home_button: null, charging_port: 45 },
    seoTitle: { lv: 'iPhone XS remonts', ru: 'Ремонт iPhone XS', en: 'iPhone XS Repair' },
    seoDescription: { lv: 'iSimple remontē iPhone XS.', ru: 'iSimple ремонтирует iPhone XS.', en: 'iSimple repairs iPhone XS.' }
  },
  {
    name: 'iPhone XR',
    slug: 'iphone-xr',
    prices: { screen_orig: 90, screen_copy: 60, battery: 45, camera: 55, body: 70, home_button: null, charging_port: 45 },
    seoTitle: { lv: 'iPhone XR remonts Dreiliņi', ru: 'Ремонт iPhone XR Дрейлини', en: 'iPhone XR Repair' },
    seoDescription: { lv: 'Kvalitatīvs iPhone XR remonts.', ru: 'Качественный ремонт iPhone XR.', en: 'Quality repair.' }
  },
  {
    name: 'iPhone X',
    slug: 'iphone-x',
    prices: { screen_orig: 90, screen_copy: 65, battery: 45, camera: 60, body: 70, home_button: null, charging_port: 45 },
    seoTitle: { lv: 'iPhone X remonts', ru: 'Ремонт iPhone X', en: 'iPhone X Repair' },
    seoDescription: { lv: 'Klasiskā iPhone X remonts.', ru: 'Ремонт классического iPhone X.', en: 'Classic iPhone X repair.' }
  },
  {
    name: 'iPhone 8 Plus',
    slug: 'iphone-8-plus',
    prices: { screen_orig: 75, screen_copy: 50, battery: 40, camera: 50, body: 60, home_button: 45, charging_port: 40 },
    seoTitle: { lv: 'iPhone 8 Plus remonts', ru: 'Ремонт iPhone 8 Plus', en: 'iPhone 8 Plus Repair' },
    seoDescription: { lv: 'Ekrāna maiņa ar Home pogu.', ru: 'Замена экрана и кнопки Home.', en: 'Screen repair.' }
  },
  {
    name: 'iPhone 8',
    slug: 'iphone-8',
    prices: { screen_orig: 65, screen_copy: 45, battery: 35, camera: 45, body: 55, home_button: 40, charging_port: 35 },
    seoTitle: { lv: 'iPhone 8 remonts Rīgā', ru: 'Ремонт iPhone 8 в Риге', en: 'iPhone 8 Repair' },
    seoDescription: { lv: 'Lēts iPhone 8 remonts.', ru: 'Дешевый ремонт iPhone 8.', en: 'Affordable repair.' }
  },
  {
    name: 'iPhone 7 Plus',
    slug: 'iphone-7-plus',
    prices: { screen_orig: 70, screen_copy: 45, battery: 35, camera: 45, body: 55, home_button: 40, charging_port: 35 },
    seoTitle: { lv: 'iPhone 7 Plus remonts', ru: 'Ремонт iPhone 7 Plus', en: 'iPhone 7 Plus Repair' },
    seoDescription: { lv: 'iPhone 7 Plus labošana.', ru: 'Починка iPhone 7 Plus.', en: 'iPhone 7 Plus repair.' }
  },
  {
    name: 'iPhone 7',
    slug: 'iphone-7',
    prices: { screen_orig: 60, screen_copy: 40, battery: 30, camera: 40, body: 50, home_button: 35, charging_port: 30 },
    seoTitle: { lv: 'iPhone 7 remonts Rīgā', ru: 'Ремонт iPhone 7 в Риге', en: 'iPhone 7 Repair' },
    seoDescription: { lv: 'Vecā labā iPhone 7 remonts.', ru: 'Ремонт старого доброго iPhone 7.', en: 'Old good iPhone 7 repair.' }
  }
];

export const MOCK_SERVICES = [
  {
    title: { lv: 'iPhone Remonts', ru: 'Ремонт iPhone', en: 'iPhone Repair' },
    description: { lv: 'Ekrānu, bateriju un korpusu maiņa stundas laikā.', ru: 'Замена экранов, батарей и корпусов за час.', en: 'Replacement of screens, batteries, and bodies within an hour.' },
    icon: 'phone'
  },
  {
    title: { lv: 'iPad Remonts', ru: 'Ремонт iPad', en: 'iPad Repair' },
    description: { lv: 'Stiklu maiņa, barošanas ķēžu remonts un baterijas.', ru: 'Замена стекол, ремонт цепей питания и аккумуляторов.', en: 'Glass replacement, power circuit repairs, and batteries.' },
    icon: 'tablet'
  },
  {
    title: { lv: 'Datoru Remonts', ru: 'Ремонт Компьютеров', en: 'Computer Repair' },
    description: { lv: 'MacBook un Windows portatīvo datoru remonts un tīrīšana.', ru: 'Ремонт и чистка ноутбуков MacBook и Windows.', en: 'Repair and cleaning of MacBook and Windows laptops.' },
    icon: 'laptop'
  },
  {
    title: { lv: 'Dyson ierīču remonts', ru: 'Ремонт устройств Dyson', en: 'Dyson Device Repair' },
    description: { lv: 'Matu fēnu, taisnotāju un putekļu sūcēju remonts.', ru: 'Ремонт фенов, выпрямителей и пылесосов.', en: 'Repair of hair dryers, straighteners, and vacuum cleaners.' },
    icon: 'wind'
  }
];

export const MOCK_POSTS = [
  {
    title: { lv: 'ES direktīvas maina Apple lādēšanas iekārtu nākotni', ru: 'Директивы ЕС меняют будущее зарядных устройств Apple', en: 'EU directives change the future of Apple charging devices' },
    slug: 'es-direktivas-maina-apple-ladesanas-iekartu-nakotni',
    excerpt: { lv: 'Kā jaunās ES prasības ietekmēs jūsu iPhone uzlādi un kādas lādētāju tehnoloģijas izvēlēties turpmāk.', ru: 'Как новые требования ЕС повлияют на зарядку вашего iPhone и какие технологии зарядных устройств выбирать в дальнейшем.', en: 'How the new EU requirements will affect your iPhone charging and what charger technologies to choose next.' },
    date: '2026-08-22',
    image: '/images/old-site/Belkin-70W-Dual-USB-C-Port-Charger.webp'
  },
  {
    title: { lv: 'Turpmāk nodrošināsim atlaidi 3+ Ģimenes kartes īpašniekiem', ru: 'Впредь будем предоставлять скидку владельцам Семейной карты 3+', en: 'We will provide a discount to 3+ Family Card holders in the future' },
    slug: 'turpmak-nodrosinasim-atlaidi-3-gimenes-kartes-ipasniekiem',
    excerpt: { lv: 'Esam priecīgi paziņot, ka daudzbērnu ģimenēm tagad ir pieejama īpaša atlaide visiem remonta pakalpojumiem iSimple servisā.', ru: 'Мы рады сообщить, что теперь многодетным семьям доступна специальная скидка на все услуги ремонта в сервисе iSimple.', en: 'We are happy to announce that a special discount is now available for large families on all repair services at iSimple.' },
    date: '2026-08-15',
    image: '/images/old-site/78fd7994ac1b26d191da58604536db9e.jpg.webp'
  }
];

export async function getIPhoneModels() {
  if (projectId === 'placeholder') {
    return MOCK_IPHONE_MODELS;
  }
  try {
    const query = `*[_type == "iphone_model"] | order(name desc) {
      name,
      "slug": slug.current,
      prices,
      seoTitle,
      seoDescription
    }`;
    const result = await sanityClient.fetch(query);
    return result.length > 0 ? result : MOCK_IPHONE_MODELS;
  } catch (e) {
    console.error('Sanity fetch error for iPhone models, using fallback mock data:', e);
    return MOCK_IPHONE_MODELS;
  }
}

export async function getServices() {
  if (projectId === 'placeholder') {
    return MOCK_SERVICES;
  }
  try {
    const query = `*[_type == "service"] {
      title,
      description,
      icon
    }`;
    const result = await sanityClient.fetch(query);
    return result.length > 0 ? result : MOCK_SERVICES;
  } catch (e) {
    console.error('Sanity fetch error for services, using fallback:', e);
    return MOCK_SERVICES;
  }
}

export async function getPosts() {
  if (projectId === 'placeholder') {
    return MOCK_POSTS;
  }
  try {
    const query = `*[_type == \"post\"] | order(date desc) {
      title,
      \"slug\": slug.current,
      excerpt,
      date,
      image
    }`;
    const result = await sanityClient.fetch(query);
    return result.length > 0 ? result : MOCK_POSTS;
  } catch (e) {
    console.error('Sanity fetch error for posts, using fallback:', e);
    return MOCK_POSTS;
  }
}
