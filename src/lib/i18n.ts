import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "dashboard": {
        "title": "Overview",
        "subtitle": "Monitor orchestration flows and bulk transactions.",
        "metrics": {
          "total_transactions": "Total Transactions (24h)",
          "active_vouchers": "Active Vouchers",
          "failure_rate": "Failure Rate",
          "pending_batches": "Pending G2P Batches"
        }
      },
      "sidebar": {
        "dashboard": "Dashboard",
        "batches": "Batches",
        "transfers": "Transfers",
        "vouchers": "Vouchers",
        "settings": "Settings"
      },
      "common": {
        "loading": "Loading...",
        "error": "An error occurred",
        "close": "Close",
        "search": "Search"
      }
    }
  },
  fr: {
    translation: {
      "dashboard": {
        "title": "Aperçu",
        "subtitle": "Surveiller les flux d'orchestration et les transactions groupées.",
        "metrics": {
          "total_transactions": "Transactions Totales (24h)",
          "active_vouchers": "Bons Actifs",
          "failure_rate": "Taux d'Échec",
          "pending_batches": "Lots G2P en Attente"
        }
      },
      "sidebar": {
        "dashboard": "Tableau de Bord",
        "batches": "Lots",
        "transfers": "Transferts",
        "vouchers": "Bons",
        "settings": "Paramètres"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
