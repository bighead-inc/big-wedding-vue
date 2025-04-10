#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist
cp index.html 404.html

# if you are deploying to a custom domain
echo 'www.lorenandhector.info' >CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:bighead-inc/big-wedding-vue.git main:gh-pages

cd -
