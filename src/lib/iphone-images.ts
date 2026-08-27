// Карта моделей iPhone -> изображение устройства.
// Источник: AppleDB CDN (https://img.appledb.dev/device@main/{deviceKey}/{Color}.png),
// deviceKey — внутренний идентификатор Apple (например, iPhone17,3).
//
// Если CDN недоступен, можно скачать все изображения локально:
//   node scripts/download-iphone-images.mjs
// и заменить тело getIPhoneImageUrl на: return `/images/iphones/${slug}.png`;

export const IPHONE_IMAGE_MAP: Record<string, string> = {
  // iPhone 17 series (released 2025-09-19)
  'iphone-17-pro-max': 'https://img.appledb.dev/device@main/iPhone18,1/Silver.png', // 18,2 not yet on CDN
  'iphone-17-pro':     'https://img.appledb.dev/device@main/iPhone18,1/Silver.png',
  'iphone-17-air':     'https://img.appledb.dev/device@main/iPhone18,4/Space%20Black.png',
  'iphone-17':         'https://img.appledb.dev/device@main/iPhone18,3/Black.png',
  // iPhone 16 series
  'iphone-16-pro-max': 'https://img.appledb.dev/device@main/iPhone17,2/Black%20Titanium.png',
  'iphone-16-pro':     'https://img.appledb.dev/device@main/iPhone17,1/Black%20Titanium.png',
  'iphone-16-plus':    'https://img.appledb.dev/device@main/iPhone17,4/Black.png',
  'iphone-16':         'https://img.appledb.dev/device@main/iPhone17,3/Black.png',
  'iphone-16e':        'https://img.appledb.dev/device@main/iPhone17,5/Black.png',
  // iPhone 15 series
  'iphone-15-pro-max': 'https://img.appledb.dev/device@main/iPhone16,2/Black%20Titanium.png',
  'iphone-15-pro':     'https://img.appledb.dev/device@main/iPhone16,1/Black%20Titanium.png',
  'iphone-15-plus':    'https://img.appledb.dev/device@main/iPhone15,5/Black.png',
  'iphone-15':         'https://img.appledb.dev/device@main/iPhone15,4/Black.png',
  // iPhone 14 series
  'iphone-14-pro-max': 'https://img.appledb.dev/device@main/iPhone15,3/Space%20Black.png',
  'iphone-14-pro':     'https://img.appledb.dev/device@main/iPhone15,2/Space%20Black.png',
  'iphone-14-plus':    'https://img.appledb.dev/device@main/iPhone14,8/Midnight.png',
  'iphone-14':         'https://img.appledb.dev/device@main/iPhone14,7/Midnight.png',
  // iPhone 13 series
  'iphone-13-pro-max': 'https://img.appledb.dev/device@main/iPhone14,3/Graphite.png',
  'iphone-13-pro':     'https://img.appledb.dev/device@main/iPhone14,2/Graphite.png',
  'iphone-13-mini':    'https://img.appledb.dev/device@main/iPhone14,4/Midnight.png',
  'iphone-13':         'https://img.appledb.dev/device@main/iPhone14,5/Midnight.png',
  // iPhone 12 series
  'iphone-12-pro-max': 'https://img.appledb.dev/device@main/iPhone13,4/Graphite.png',
  'iphone-12-pro':     'https://img.appledb.dev/device@main/iPhone13,3/Graphite.png',
  'iphone-12-mini':    'https://img.appledb.dev/device@main/iPhone13,1/Black.png',
  'iphone-12':         'https://img.appledb.dev/device@main/iPhone13,2/Black.png',
  // iPhone 11 series
  'iphone-11-pro-max': 'https://img.appledb.dev/device@main/iPhone12,5/Space%20Gray.png',
  'iphone-11-pro':     'https://img.appledb.dev/device@main/iPhone12,3/Space%20Gray.png',
  'iphone-11':         'https://img.appledb.dev/device@main/iPhone12,1/Black.png',
  // iPhone X / XS / XR
  'iphone-xs-max':     'https://img.appledb.dev/device@main/iPhone11,6/Space%20Gray.png',
  'iphone-xs':         'https://img.appledb.dev/device@main/iPhone11,2/Space%20Gray.png',
  'iphone-xr':         'https://img.appledb.dev/device@main/iPhone11,8/Black.png',
  'iphone-x':          'https://img.appledb.dev/device@main/iPhone10,3/Space%20Gray.png',
  // iPhone 8 series
  'iphone-8-plus':     'https://img.appledb.dev/device@main/iPhone10,2/Space%20Gray.png',
  'iphone-8':          'https://img.appledb.dev/device@main/iPhone10,1/Space%20Gray.png',
  // iPhone 7 series
  'iphone-7-plus':     'https://img.appledb.dev/device@main/iPhone9,2/Black.png',
  'iphone-7':          'https://img.appledb.dev/device@main/iPhone9,1/Black.png',
};

export function getIPhoneImageUrl(slug: string): string {
  return IPHONE_IMAGE_MAP[slug] ?? 'https://img.appledb.dev/device@main/iPhone17,1/Black%20Titanium.png';
}
