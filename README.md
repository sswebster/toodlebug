# Taking Care of a Toodlebug


This project is to help streamline information for babysitters and caretakers of our young children. For being so little, they sure do have a lot of very complicated needs. 
## Getting started

Install [Yarn](https://yarnpkg.com/en/docs/install)

### Get the source code and install dependencies.

```
$ git clone https://github.com/sswebster/toodlebug.git
$ yarn install
```

Or use the [Gatsby CLI](https://www.npmjs.com/package/gatsby-cli).

```
$ gatsby new toodlebug https://github.com/sswebster/toodlebug.git
```

### Run setup

Issue `yarn run setup`.

This command will ask you for a space ID, and access tokens for the Contentful Management and Delivery API and then import the needed content model into the space you define and write a config file (`./contentful.json`).

## Crucial Commands


### `yarn run dev`

Run in the project locally.

### `yarn run build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

### `yarn run deploy`

Run a production build into `./public` and publish the site to GitHub pages.

### `yarn run cleanup-repository`

Removes all dependencies, scripts and data from the installation script.