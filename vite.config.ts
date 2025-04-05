import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/mobile-wedding-invitation/', // 예시: 저장소 이름이 my-react-app 이면 /my-react-app/
  plugins: [react(), tsconfigPaths(), svgr()],
});
