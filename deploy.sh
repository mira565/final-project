#!/usr/bin/env sh

set -e

npm run build 

cd dist

git init
git add -Ach
git commit -m 'New Deployment'
git push -f git@github.com:mira565/mira-project.git master:gh-pages

cd-

