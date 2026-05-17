/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repoName = process.env.NEXT_PUBLIC_REPO_NAME || ''

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Set to your GitHub repo name: e.g. '/itapoa-vision'
  // Leave empty for custom domain or Vercel
  basePath: repoName ? `/${repoName}` : '',
  assetPrefix: repoName ? `/${repoName}/` : '',
}

module.exports = nextConfig
