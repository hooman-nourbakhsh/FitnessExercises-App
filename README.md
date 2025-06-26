# Fitness Exercises App 💪
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)](https://mui.com/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![React Horizontal Scrolling Menu](https://img.shields.io/badge/Scrolling%20Menu-4ea8de?style=for-the-badge)](https://www.npmjs.com/package/react-horizontal-scrolling-menu)
[![React Loader Spinner](https://img.shields.io/badge/Loader%20Spinner-7d3f98?style=for-the-badge)](https://www.npmjs.com/package/react-loader-spinner)

A web application designed for fitness enthusiasts to discover and learn new exercises. Browse a vast library of exercises, view detailed instructions, and watch related videos to improve your exercise technique.

## 🌐 Live Demo

Check out the live demo of the application:
👉 [Fitness Exercises App on Vercel](https://fitness-exercises-app-five.vercel.app)

---


## 🌟 Features

-   **Search Exercises**: Quickly find exercises by name or target muscle.
-   **Browse by Body Part**: Explore exercises categorized by body part (e.g., chest, back, legs).
-   **Detailed Exercise Information**: View animated GIFs, step-by-step instructions, target muscle, and equipment needed.
-   **Related YouTube Videos**: Watch curated YouTube videos for selected exercises to see them in action.
-   **Similar Exercises**: Get recommendations for exercises that target the same muscle group or use similar equipment.
-   **Responsive Design**: A seamless experience across desktop and mobile devices.

---

## 🛠️ Technologies Used

-   **Frontend**: [React.js](https://reactjs.org/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **UI Library**: [Material UI (MUI)](https://mui.com/)
-   **Routing**: [React Router](https://reactrouter.com/)
-   **Horizontal Scrolling**: [React Horizontal Scrolling Menu](https://www.npmjs.com/package/react-horizontal-scrolling-menu)
-   **API Data**: [ExerciseDB](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb) & [YouTube Search and Download](https://rapidapi.com/h0p3rwe/api/youtube-search-and-download) from RapidAPI.

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You need to have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/hooman-nourbakhsh/FitnessExercises-App.git
    cd FitnessExercises-App
    ```
2.  **Install NPM packages:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    -   Create a `.env` file in the root of your project.
    -   You will need an API key from [RapidAPI](https://rapidapi.com/hub) to use the ExerciseDB and YouTube APIs.
    -   Add your RapidAPI key to the `.env` file:
        ```
        VITE_RAPID_API_KEY=your_api_key_here
        ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

---

## 📄 License

This project is licensed under the Apache License 2.0.

You are free to use, modify, and distribute this software, but you must provide proper attribution to the original authors. For more details, see the [`Apache License`](./LICENSE) file.

---
Made with 💖 by Hooman
