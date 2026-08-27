import lv from '../i18n/lv.json';
import ru from '../i18n/ru.json';
import en from '../i18n/en.json';

const translations: Record<string, Record<string, unknown>> = { lv, ru, en };

export function useTranslations(lang: string) {
  const currentLang = translations[lang] ? lang : 'lv';
  return (key: string) => {
    const keys = key.split('.');
    let value = translations[currentLang];
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }
    return typeof value === 'string' ? value : key;
  };
}

export function getLocalizedPath(path: string, lang: string): string {
  // Убедимся что путь начинается со слэша
  let cleanPath = path.startsWith('/') ? path : `/${path}`;
  // Убираем языковой префикс если есть
  cleanPath = cleanPath.replace(/^\/(ru|en)(\/|$)/, '/');
  // Нормализуем — всегда trailing slash
  if (!cleanPath.endsWith('/')) cleanPath += '/';
  // Защита от двойных слэшей
  cleanPath = cleanPath.replace(/\/+/g, '/');

  if (lang === 'lv') return cleanPath;
  return `/${lang}${cleanPath === '/' ? '/' : cleanPath}`;
}
