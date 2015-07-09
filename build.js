
import app from './src';
import fs from 'fs';

fs.writeFileSync('index.html', () => {
  return `<!doctype html>${app()}`;
}());

