import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
	resolve: {
		alias: {
			'~': path.resolve(__dirname, './src'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@components': path.resolve(__dirname, './src/components'),
			'@ui': path.resolve(__dirname, './src/components/ui'),
			'@api': path.resolve(__dirname, './src/api'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@scripts': path.resolve(__dirname, './src/scripts'),
			'@store': path.resolve(__dirname, './src/store'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@styles': path.resolve(__dirname, './src/styles'),
		},
	},
	plugins: [react(), svgr({})],
	server: {
		port: 3000,
	},
	build: {
		rollupOptions: {
			external: [/^node:\w+/],
		},
	},
});
