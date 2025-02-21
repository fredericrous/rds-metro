import Metro from 'metro';
import path from 'path';

const config = await Metro.loadConfig();

await Metro.runBuild(config, {
  entry: path.resolve(process.cwd(), 'dist/index.js'),
  out: path.resolve(process.cwd(), 'dist/ui.js'),
});
