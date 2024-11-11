import {
	defineConfig,
	presetAttributify,
	presetUno,
	transformerAttributifyJsx,
} from "unocss";

export default defineConfig({
	content: {
		filesystem: ["**/*.{html,js,ts,jsx,tsx}"],
	},
	presets: [presetUno(), presetAttributify()],
	transformers: [transformerAttributifyJsx()],
});
