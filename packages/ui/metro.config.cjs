/**
 * This config exists to make react-strict-dom work
 */
const path = require('path');
// Learn more https://docs.expo.dev/guides/monorepos
const { getDefaultConfig } = require('expo/metro-config');

// Find the project and workspace directories
const projectRoot = __dirname;

// get project root
const monorepoRoot = path.resolve(projectRoot, '../..');

const config = getDefaultConfig(projectRoot);
// Enable Metro support for symlinks and package exports
config.resolver.unstable_enablePackageExports = true;
config.watchFolders = [monorepoRoot];

// Let Metro know where to resolve packages and in what order
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(monorepoRoot, 'node_modules'),
];

module.exports = config;
