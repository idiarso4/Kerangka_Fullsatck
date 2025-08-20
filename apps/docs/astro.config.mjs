// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Dokumentasi Stack Indonesia',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Panduan',
					items: [
						// Setiap item di sini adalah satu entri dalam menu navigasi.
						{ label: 'Panduan Contoh', slug: 'guides/example' },
					],
				},
				{
					label: 'Referensi',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
