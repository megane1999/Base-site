const os = require('os');

/*
 *  Fichier de configuration
 */

// Navigateurs pour BrowserSync
export const browsers =
  os.platform() == 'darwin'
    ? ['google chrome' /*, 'firefox'*/] // osx
    : ['chrome' /*, 'firefox'*/]; // windows

// Paths (ne pas toucher)
export const paths = {
  src: './src',
  dest: './dist',
  deploy: './dist/**/*',
  styles: {
    src: 'src/styles/main.scss',
    watch: 'src/styles/**/*.scss',
    dest: 'dist/styles',
  },
  scripts: {
    src: './src/scripts/Main.js',
    watch: 'src/scripts/**/*.js',
    dest: 'dist/scripts',
  },
  templates: {
    src: 'src/*.html',
    watch: 'src/*.html',
    dest: 'dist/',
  },
  assets: {
    src: 'src/assets/**/*',
    dest: 'dist/assets',
  },
};
