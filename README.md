# An alternative OpenShift Console plugin template

## Why?

* To learn
* To have a playground to build mono-repo projects with more then one frontend or with an backend
* To use less dependencies in the origin template (that's a difficult goal and is more a tradeoff when supprting less features)

## Frontend

Features:

* [x] TypeScript (similar to the official template, this template contains some stricter rules)
* [x] Reuse the official `dynamic-plugin-sdk` and `dynamic-plugin-sdk-webpack` dependencies
* [x] PatternFly components (for the demo, you can remove or replace this if needed)
* [x] i18n support (script to extract localization from TSX into JSON files)
* [ ] Linter (ESLint)
* [ ] Auto formatter (Prettier)
* [ ] Unit tests

## Backend

TODO

## Backlog

* [ ] `Dockerfile` that builds frontend or frontend and backend
* [ ] CI that uploads a demo image to Docker/Quay
* [ ] e2e tests
* [ ] Deployment via `kubectl`?
* [ ] Deployment via `helm`?

## More information about Dynamic Plugins

* Introduction about [Dynamic Plugins for OpenShift Console](https://github.com/openshift/enhancements/blob/master/enhancements/console/dynamic-plugins.md)
* [OpenShift Console repository](https://github.com/openshift/console)
* [OpenShift Console Dynamic Plugin SDK](https://github.com/openshift/console/tree/master/frontend/packages/console-dynamic-plugin-sdk)
* Official [OpenShift Console Plugin template](https://github.com/openshift/console-plugin-template)
