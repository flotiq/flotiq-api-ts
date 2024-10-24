# Flotiq API TypeScript SDK

`flotiq-api-ts` is a package that installs a personalized SDK for Flotiq based on `flotiq-codegen-ts`. This package includes all the necessary TypeScript bindings to interact with the Flotiq API directly from your project.

For more details on the underlying SDK, visit the repository: [flotiq-codegen-ts](https://github.com/flotiq/flotiq-codegen-ts).

## Requirements

In order to install and use this package, the project must have an environment variable defined for the Flotiq API key. This can be provided in one of the following ways:
- Define `FLOTIQ_API_KEY` in a `.env` or `.env.local` file in the project root.
- Set the `FLOTIQ_API_KEY` environment variable in your system.

The API key is necessary for installing SDK package related to your Content Type Definitions in Flotiq.

## Installation

To install the package, run the following command in your project:

```bash
yarn add flotiq-api-ts
```

## Usage

Once installed, you can import and use the `FlotiqApi` to interact with the Flotiq API:

```typescript
import { FlotiqApi } from "flotiq-api-ts";

// Example of usage
const flotiq = new FlotiqApi();
```

Make sure that you have your `FLOTIQ_API_KEY` correctly set before making any requests.


## Development

To develop package, install dependencies and run yarn install

1. Create `.env` file with `FLOTIQ_API_KEY=__YOUR_FLOTIQ_API_KEY__`
2. Run `npm install` command, this will fire postinstall script
3. In root directory there is `./flotiqApi` sdk