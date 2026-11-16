import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deployed to GitHub Pages at https://codelady-ship.github.io/exam-task-react/
// https://vite.dev/config/
export default defineConfig({
  base: '/exam-task-react/',
  plugins: [react()],
})
