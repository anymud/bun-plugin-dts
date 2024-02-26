# @anymud/bun-plugin-dts

This Bun.build plugin leverages `dts-bundle-generator` to automatically generate TypeScript definition files (`.d.ts`) for projects. It's designed to make your development process smoother by ensuring your project is strongly typed with TypeScript support.

## Features

- **Automatic `.d.ts` File Generation**: Generates definition files for your project automatically.
- **Seamless Bun Integration**: Works effortlessly within the Bun ecosystem.
- **Custom Configuration**: Offers customizable settings to fit your project's needs.

## Installation

Install the plugin in your project directory:

```sh
bun add -D @anymud/bun-plugin-dts
```

## Usage

To use `@anymud/bun-plugin-dts` in your project, you need to configure it as part of your build process in Bun. Below is an example configuration that demonstrates how to use this plugin within the `Bun.build()` API.

```js
import dts from '@anymud/bun-plugin-dts';

const distPath = './dist'; // Define your distribution path

const result = await Bun.build({
    entrypoints: ['./src/index.ts'],
    outdir: distPath,
    external: ['*'], // Specify external modules to be excluded from the bundle
    plugins: [dts()], // Use the dts plugin
    root: './src', // Set the root directory
});
```

### Configuration Options

When configuring `@anymud/bun-plugin-dts`, you can pass options to customize the behavior of the plugin. Here's a basic template you can modify according to your needs:

```js
dts({
  // Configuration options for dts-bundle-generator
});
```

**Note:** Currently, `dts-bundle-generator` specific options can be used here. Please refer to the `dts-bundle-generator` documentation for a complete list of available options.

## Contributing

We welcome contributions of all kinds from the community! If you're interested in helping improve `@anymud/bun-plugin-dts`, please fork the repository and submit a pull request with your changes. For substantial changes, please open an issue first to discuss what you'd like to contribute.

## License

[MIT](LICENSE) © AnyMud