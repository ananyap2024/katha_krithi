# 🎭 Folkverse – AI-Powered Folk Tale Animator

---

## 📖 Overview

**Folkverse** is a hackathon-ready web platform that transforms **traditional oral or written folk tales** into **beautiful, interactive shadow puppet animations**.

By leveraging **AI-powered narrative generation** and **context-aware visual styling**, it delivers a seamless storytelling journey — from **capturing stories via voice, text, or file upload** to **watching dynamically generated, culturally authentic animations**.

---

## ✨ Features

### 📜 Multi-Modal Story Input

* **Voice Recording** – In-browser audio recorder to capture oral stories
* **File Upload** – Support for MP3, WAV, and other common audio formats
* **Text Input** – Simple, dedicated text area for written stories

### 🖋 AI-Simulated Poem Generation

* Converts user-submitted stories into poetic folk-tale narratives
* Provides **2–3 dynamically generated alternative endings**

### 🖼 Context-Aware Image Generation

* Extracts keywords from stories and fetches high-quality images using the **Unsplash API**

### 🎭 Dynamic Shadow Puppet Animation

* Automatically styles images with CSS filters for a **consistent fire-lit shadow puppet aesthetic**
* Interactive, auto-playing animation with smooth scene transitions

### 🎮 Interactive Player

* **Controls**: Play / Pause / Next / Previous / Restart / Volume
* Fully responsive for both **desktop** and **mobile**

---

## 🛠 Tech Stack

* **Frontend**: React 18 + Vite
* **Styling**: Tailwind CSS with a custom folk-inspired theme
* **State Management**: React Hooks (`useState`, `useEffect`, `useCallback`)
* **Routing**: React Router v6
* **Animations**: CSS Transitions & Keyframe Animations

---

## 📋 Prerequisites

- Node.js (v14.x or higher)
- npm or yarn

## 🛠️ Installation

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
   
2. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

## 📁 Project Structure

```
react_app/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── styles/         # Global styles and Tailwind configuration
│   ├── App.jsx         # Main application component
│   ├── Routes.jsx      # Application routes
│   └── index.jsx       # Application entry point
├── .env                # Environment variables
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.js      # Vite configuration
```

## 🎨 Styling

This project uses Tailwind CSS for styling. The configuration includes:

- Forms plugin for form styling
- Typography plugin for text styling
- Aspect ratio plugin for responsive elements
- Container queries for component-specific responsive design
- Fluid typography for responsive text
- Animation utilities

## 📱 Responsive Design

The app is built with responsive design using Tailwind CSS breakpoints.


## 📦 Deployment

Build the application for production:

```bash
npm run build
```

## 🙏 Acknowledgments

- Built with [Rocket.new](https://rocket.new)
- Powered by React and Vite
- Styled with Tailwind CSS

