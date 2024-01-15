import { useTranslation as useI18NextTranslation } from 'react-i18next';

// FIXME: change i18next namespace
const i18NextNamespace = 'plugin__console-plugin-template';

export const useTranslation = () => useI18NextTranslation(i18NextNamespace);
