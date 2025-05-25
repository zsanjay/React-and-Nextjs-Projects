const {
  withNativeWind: withNativeWind
} = require("nativewind/metro");

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})