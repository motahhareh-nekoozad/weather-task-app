# Personalized Home & Weather App

A user-friendly web application built with **Vue.js 3**, **Vuetify**, and **TypeScript**, providing a personalized home page, to-do list functionality, city-based weather information, and customizable user settings. The application supports bilingual functionality (English and Farsi) and is fully responsive for all device sizes.

---

## Features

### Home Page

- Displays the **current time**.
- Shows a **personalized greeting** based on the time of day.
- Prompts first-time users to enter their **name**, which is stored in **localStorage** for future visits.

### To-Do List

- Add, remove, and manage tasks.
- Tasks are persisted in **localStorage**, ensuring they remain after page refresh or reload.

### Autocomplete Weather Page

- Users can input their **city name**.
- Fetches **current weather data** using the [Open-Meteo API](https://open-meteo.com/).
- Autocomplete helps users quickly find cities in Iran.

### Profile Page

- Update user **name**.
- Customize **theme** (light/dark) and **language settings**.
- All settings are persisted in **localStorage**.

---

## Technologies Used

- **Vue.js 3** with **Composition API**
- **Vuetify** for UI components
- **TypeScript** for type safety
- **Vue i18n** for bilingual support (English and Farsi)
- **Cypress** for unit and end-to-end testing
- **Open-Meteo API** for weather data
- **LocalStorage** for persistent user data

---

### Install Dependencies

````bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install


## Development Server

Start the development server on `http://localhost:5173`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev


## Production

Build the application for production:

# npm
npm run build
npm run preview

# pnpm
pnpm build
pnpm preview

# yarn
yarn build
yarn preview

# bun
bun run build
bun run preview


Locally preview production build:

```bash
# npm

npm run build
npm run preview

# pnpm

pnpm build
pnpm preview

# yarn

yarn build
yarn preview



## Run tests

npx cypress open



## Project Structure

src/
├─ assets/
├─ components/
├─ views/
│  ├─ Home.vue
│  ├─ TodoList.vue
│  ├─ Weather.vue
│  └─ Profile.vue
├─ router/
├─ store/
└─ i18n/


## Responsiveness

-- The app is fully responsive and adapts to a variety of devices, from mobile phones to desktop screens. The design aligns closely with the provided wireframes.



## Languages
-- English
-- Farsi (فارسی)


## Notes

-- On the first visit, the user will be prompted to enter their name.
-- All user settings and tasks are saved in localStorage.
-- Default settings are applied if none are found.



# Git Workflow

## Follows git-flow principles:

main: for production-ready code
develop: for integration
Feature: branches for new functionalities
