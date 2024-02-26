# @anymud/bun-plugin-dts

This plugin for Bun.build leverages `dts-bundle-generator` to automatically generate TypeScript definition files (`.d.ts`) for your Bun projects. It simplifies the process of creating and managing TypeScript definitions, ensuring your Bun-based applications are strongly typed and easier to develop with TypeScript support.

## Features

- **Automatic `.d.ts` File Generation**: Easily generate definition files for your entire project.
- **Custom Configuration Support**: Tailor the plugin settings to fit your project's needs.
- **Seamless Integration with Bun**: Designed to work effortlessly with Bun.build, providing a smooth development experience.

## Installation

To install `@anymud/bun-plugin-dts`, run the following command in your project directory:

```sh
bun add @anymud/bun-plugin-dts
```

## Usage

After installation, configure the plugin in your `bun.config.js` or `bun.config.ts` file. Here's a basic example to get you started:

```js
// bun.config.js
export default {
  plugins: [
    require('@anymud/bun-plugin-dts')({
      // Configuration options here
    }),
  ],
};
```

### Configuration Options

Here are some of the configuration options you can use to customize the behavior of the `@anymud/bun-plugin-dts` plugin:

- `entry`: Specify the entry file(s) of your project from which to generate definition files.
- `outDir`: Define the output directory for the generated `.d.ts` files.
- Additional options as supported by `dts-bundle-generator` can be specified here.

## Examples

Provide an example of how to set up a basic configuration, highlighting any project-specific considerations.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and create a pull request with your changes. For major changes, please open an issue first to discuss what you would like to change.

## License

Specify the license under which your plugin is released, typically MIT.