import { useAppContext } from '@/hooks/use-app-context';
import { useTranslation as useI18nTranslation } from '@/lib/i18n';

export function useTranslation() {
  const { language } = useAppContext();
  return useI18nTranslation(language);
}

export default useTranslation;
