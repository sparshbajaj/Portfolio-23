import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { Plugin } from 'vite'
import vitePluginSitemap from 'vite-plugin-sitemap'

// Validate required environment variables at build/dev start
const validateEnv = () => {
  if (process.env.VITEST || process.env.NODE_ENV === 'test') return

  const required = ['VITE_APP_OPENWEATHER_API_KEY', 'VITE_GHOST_CONTENT_API_KEY']
  const missing: string[] = []

  for (const varName of required) {
    if (!process.env[varName]) {
      missing.push(varName)
    }
  }

  if (missing.length > 0) {
    console.error(`\n❌ Missing required environment variables:\n  ${missing.join('\n  ')}\n`)
    process.exit(1)
  }
}

validateEnv()

const webpConverter = (): Plugin => {
  return {
    name: 'webp-converter',
    apply: 'build',
    
    buildStart() {
      const getImageFiles = (dir: string): string[] => {
        const results: string[] = []
        const files = fs.readdirSync(dir, { withFileTypes: true })
        
        for (const file of files) {
          const fullPath = path.join(dir, file.name)
          if (file.isDirectory()) {
            results.push(...getImageFiles(fullPath))
          } else if (/\.(png|jpg|jpeg)$/i.test(file.name)) {
            results.push(fullPath)
          }
        }
        return results
      }

      const images = getImageFiles(path.join(process.cwd(), 'public/assets'))
      
      images.forEach(imgPath => {
        const outputPath = imgPath.replace(/\.(png|jpg|jpeg)$/i, '.webp')
        sharp(imgPath)
          .webp({ quality: 80, lossless: false })
          .toFile(outputPath)
          .catch(err => {})
      })
    },

    transform(code, id) {
      if (/\.[tj]sx?$/.test(id)) {
        return code.replace(/['"]([^'"]+\.(png|jpg|jpeg))['"]/g, (match, p1) => {
          const webpPath = p1.replace(/\.(png|jpg|jpeg)$/i, '.webp')
          return match.replace(p1, webpPath)
        })
      }
      
      return code
    },

    transformIndexHtml(html) {
      return html.replace(/(?:src|content|href)="([^"]+\.(png|jpg|jpeg))"/gi, (match, p1) => {
        const webpPath = p1.replace(/\.(png|jpg|jpeg)$/i, '.webp')
        return match.replace(p1, webpPath)
      })
    },

    generateBundle(options, bundle) {
      for (const fileName in bundle) {
        if (fileName.endsWith('.html') || fileName.endsWith('.js') || fileName.endsWith('.css')) {
          const file = bundle[fileName]
          
          if ('source' in file) {
            let content = file.source.toString()
            
            const replacedContent = content.replace(/(\.|\/|\/assets\/|['"])([^"'/]+\.(png|jpg|jpeg))(['"])?/gi, (match, p1, p2, p3) => {
              const webpPath = p2.replace(/\.(png|jpg|jpeg)$/i, '.webp')
              return match.replace(p2, webpPath)
            })
            
            file.source = replacedContent
          }
        }
      }
    }
  }
}

export default defineConfig({
  plugins: [
    react(),
    webpConverter(),
    vitePluginSitemap({
      // siteUrl should be the base URL of your site
      siteUrl: 'https://sparshbajaj.me',
      // exclude routes that you don't want in the sitemap
      exclude: ['/404'],
      // change the default priority and changefreq if needed
      changefreq: 'daily',
      priority: 0.7,
      // generate a compressed sitemap.xml.gz
      serializeXML: (sitemap) => {
        return sitemap
          .replace(/>\\s+</g, '><') // remove whitespace between tags
          .replace(/\\"{2,}/g, '"') // remove duplicate quotes
      }
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    css: true,
  },
  build: {
    assetsInlineLimit: 0
  }
})