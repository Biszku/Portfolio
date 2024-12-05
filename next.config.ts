/**
 * @type {import('next').NextConfig}
 */
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: [{ loader: "@svgr/webpack", options: { icon: true } }],
  //   });

  //   return config;
  // },
};

module.exports = nextConfig;
