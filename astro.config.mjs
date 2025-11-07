// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Generar sitio estático para GitHub Pages
	output: 'static',
	// URL pública del sitio (usada para generar rutas absolutas)
	site: 'https://AlexChuquipoma.github.io/icc-ppw-u2-02Fundamentos/',
	// Base path cuando se sirve desde https://<user>.github.io/<repo>/
	base: '/icc-ppw-u2-02Fundamentos/',
});
