const withPlugins = require('next-compose-plugins')
const withOptimizedImages = require('next-optimized-images')
const withFonts = require('next-fonts')
const withCSS = require('@zeit/next-css')

module.exports = withPlugins([
  [
    withOptimizedImages,
    {
      mozjpeg: {
        quality: 90
      },
      webp: {
        preset: 'default',
        quality: 90
      }
    }
  ],
  withFonts,
  withCSS
])
