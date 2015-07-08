
import app from './src';
import fs from 'fs';

fs.writeFileSync('index.html', render());

function render() {
  let html = app();
  html = `<!doctype html>${html}`;
  return html;
}

