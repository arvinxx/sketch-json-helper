# Sketch JSON Helper


[![NPM version][version-image]][version-url] [![Release CI][release-ci]][deploy-ci-url] [![Gitmoji][gitmoji]][gitmoji-url] [![semantic-release][semantic-release]][semantic-release-repo] ![][license-url]


a Sketch JSON helper to convert between Sketch JSON and Sketch Native Object


<!-- badge -->

[gitmoji]: https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg
[gitmoji-url]: https://gitmoji.carloscuesta.me/
[semantic-release]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-repo]: https://github.com/semantic-release/semantic-release
[license-url]: https://img.shields.io/github/license/arvinxx/sketch-json-helper

<!-- Github CI -->

[release-ci]: https://github.com/arvinxx/sketch-json-helper/workflows/Release%20CI/badge.svg
[deploy-ci-url]: https://github.com/arvinxx/sketch-json-helper/actions?query=workflow%3A%22Release+CI%22

## Usage


### From Sketch JSON to Sketch Native Object

```typescript
import { fromSJSON } from 'from-sketch-json';

const sketchObject = fromSJSON(sketchJSON); // sketchJSON should be a legal sketch json
```

### From Sketch Native Object to Sketch JSON

```typescript
import { toSJSON } from 'from-sketch-json';

const sketchJSON = toSJSON(sketchObject); // sketchObject should be a sketchObject
```

## License

[MIT](./LICENSE) ® Arvin Xu

[version-image]: http://img.shields.io/npm/v/sketch-json-helper.svg?color=deepgreen&label=latest
[next-version-image]: https://img.shields.io/npm/v/sketch-json-helper/next?color=deepgreen&label=next
[alpha-version-image]: https://img.shields.io/npm/v/sketch-json-helper/alpha?color=deepgreen&label=alpha
[beta-version-image]: https://img.shields.io/npm/v/sketch-json-helper/beta?color=deepgreen&label=beta
[version-url]: http://npmjs.org/package/sketch-json-helper
