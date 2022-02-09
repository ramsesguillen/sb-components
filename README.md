# Storybook

crrate project: npx create-react-app project-name --template=typescript
configs: yarn remove react-scripts
1. delete public directory
2. just need index.tsx
npx sb init
yarn storybook

yarn add -D rimraf
yarn add -D copyfiles
in package.json - scripts
"start": "start-storybook -p 6006",
"build": "yarn clean && tsc && yarn copy-files",
"clean": "rimraf dist/",
"copy-files": "copyfiles -u 1 src/**/*.css dist/"
yarn add -D semantic-release
in package.json
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/github",
    "@semantic-release/npm",
    "@semantic-release/git"
  ]