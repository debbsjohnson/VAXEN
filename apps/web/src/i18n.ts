import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Ensure locale is valid, default to 'en'
  const validLocale = ['en', 'pt-BR', 'es-ES'].includes(locale as any) ? locale : 'en';
  
  const messages = (await import(`./messages/${validLocale}.json`)).default;
  return { messages };
});
