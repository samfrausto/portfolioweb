import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
export default defineConfig({resolve:{alias:[{find:/^three\/addons\//,replacement:fileURLToPath(new URL('../../vendor/addons/',import.meta.url))},{find:'three',replacement:fileURLToPath(new URL('../../vendor/three.module.js',import.meta.url))}]}});
