# Uproszczona wersja klienta sklepu internetowego - zadanie rekrutacyjne

### Opis

Aplikacja została zbudowana w oparciu o React i TypeScript, zgodnie z wymaganiami zadania.

Dodatkowo użyta została biblioteka `react-router-dom` do obsługi routingu w ramach SPA.

Stan koszyka zarządzany jest za pomocą `useContext` i `useReducer` – pozwoliło to uniknąć zewnętrznych menedżerów stanu (np. Redux, Zustand) równocześnie spełniając wymogi zadania.

Dane zamówienia po kliknięciu przycisku „Złóż zamówienie” są zapisywane w `sessionStorage`, a następnie odczytywane i wyświetlane na stronie potwierdzenia za pomocą prostego skryptu w pliku HTML.

### Technologie

- React
- React Router
- TypeScript
- Vite
- CSS Modules

### Instalacja i uruchomienie

```bash
npm install
```

```bash
npm run dev
```
