### Steps to create tailwind and vite server
* Create a folder and open it at terminal then run "npm init"
* then run "npm install vite tailwindcss postcss autoprefixer" to install necessary dependency
* generate tailwind.config.js and postcss.config.js by the command "npm install -D tailwindcss postcss autoprefixer" and 
"npx tailwindcss init -p"

* add the code into tailwind.config.js 
    /** @type {import('tailwindcss').Config} */
    export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }
* create 'postcss.config.js' file at root folder and code 
    // postcss.config.js
    module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ],
    }
* create 'src' folder and create 'style.css' file in 'src' folder
* create index.html file into root folder and link 'src/style.css'  file like  <link rel="stylesheet" href="/src/styles.css">
* add tailwindcss code into style.css 
    /* src/styles.css */
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

* create "vite.config.js" file at root folder and add the code 

    // vite.config.js
    import { defineConfig } from 'vite'
    import postcss from 'rollup-plugin-postcss'

    export default defineConfig({
    plugins: [
        postcss({
        extract: true,
        minimize: true,
        }),
    ],
    build: {
        outDir: 'dist',
        rollupOptions: {
        input: 'index.html',
        },
    },
    server: {
        open: true,
    },
    })

* add scripts into package.json 
    "scripts": {
    "dev": "vite",
    "build": "vite build"
    },
* reinstall 'rollup-plugin-postcss' if get error using command
    "npm install rollup-plugin-postcss --save-dev"
* Now finally run 'npm run dev' see the localhost server opened in browser like - 'http://localhost:5173' or 'http://localhost:3000'

