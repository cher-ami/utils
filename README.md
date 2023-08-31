# @cher-ami/utils

Browser & node utils for cher-ami projects.

## Installation

```shell
npm i @cher-ami/utils
```

## Usage

Import all utils from @cher-ami/utils
```js
import { modulo } from '@cher-ami/utils';

modulo(5, 2); // 1
```

## Util categories

- [array](src/array)
- [dom](src/dom)
- [envs](src/envs)
- [math](src/math)
- [social](src/social)
- [string](src/string)


## Development

```shell
# install dependencies
pnpm i

# run tests
pnpm test

# run tests in watch mode
pnpm test:watch

# build in watch mode
pnpm build:watch

# build for production
pnpm build
```

## Publish a new version

```shell
# build and tests
pnpm pre-publish

# increment version in package.json
npm verion {patch|minor|major}

# push to github with tags
git push --follow-tags

# publish to npm (you need to be logged in)
npm publish

# then create a release on github
```

## Licence

MIT

## Credits

© cher-ami
