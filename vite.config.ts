import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config kept minimal to keep focus on MobX usage
export default defineConfig({
  plugins: [react()],
});
