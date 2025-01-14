import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'InnovaraShopix',
        short_name: 'InnovaraShopix',
        description: 'Make InnovaraShopix as a PWA',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/innovarashopix/',
        icons: [
          {
            src: "/innovarashopix/pwa-logo/logo-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/innovarashopix/pwa-logo/logo-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/innovarashopix/pwa-logo/logo-144.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "any"
          }
        ],
        screenshots: [
          {
            src: "/innovarashopix/pwa-logo/WelcomePage-1024.png",
            type: "image/png",
            sizes: "1024x768",
            form_factor: "wide"
          },
          {
            src: "/innovarashopix/pwa-logo/WelcomePage-320.png",
            type: "image/png",
            sizes: "320x320",
            form_factor: "narrow"
          }
        ],
      },
      devOptions: {
        enabled: false, // Enable PWA in development mode
      },
    }),
  ],
  base: '/innovarashopix/',
  resolve: {
    alias: {
      // Provide polyfills for Node.js built-in modules
      buffer: 'buffer/',
      process: 'process/browser',
    },
  },
  define: {
    'process.env': {},
  },
})