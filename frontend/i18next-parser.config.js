const EventEmitter = require('events');
const jsonc = require('comment-json');
const packageJSON = require('./package.json'); 

const pluginName = packageJSON.consolePlugin.name;
const defaultNamespace = `plugin__${pluginName}`;

console.log('pluginName', pluginName);

/**
 * Custom JSON parser for localizing keys matching format: /%.+%/
 */
class CustomJSONLexer extends EventEmitter {
  extract(content, filename) {
    let keys = [];
    console.log(1);
    try {
      jsonc.parse(
        content,
        (key, value) => {
          if (typeof value === 'string') {
            const match = value.match(/^%(.+)%$/);
            if (match?.[1]) {
              keys.push({ key: match[1] });
            }
          }
          return value;
        },
        true,
      );
    } catch (e) {
      throw new Error(`Failed to parse file "${filename}"`, e);
    }
    return keys;
  }
};

const config = {
  defaultNamespace,
  input: [
    'console-extensions.json',
    "src/*/*.{js,jsx,ts,tsx}"
  ],
  output: "locales/$LOCALE/$NAMESPACE.json",
  namespaceSeparator: '~',
  createOldCatalogs: false,
  locales: ["en"],
  verbose: true,
  failOnWarnings: true,

  lexers: {
    json: [CustomJSONLexer],
  }
}

module.exports = config;
