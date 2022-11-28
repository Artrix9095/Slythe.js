# Contributing

Every contribution, from opening an issue for a documentation suggestion to making a pull request, is valued and welcomed. Please never hesitate to open a PR or issue

# Setup

To start, make sure you have the following tools installed:

- [Nodejs](https://nodejs.org) _node 17+ is recommended_
- [pnpm](https://pnpm.io)

Once you have them installed run the following to download the source code

`git clone https://github.com/<your-username-here>/Slythe.js && cd Slythe.js`

Then you need to install all the dependencies

`pnpm install && pnpm build`

# Coding

We **require** that you use [prettier](https://prettier.io) and follow our [styling config](../.prettierrc), we recommend that you use the [extension for your IDE](https://prettier.io/docs/en/editors). but if that isn't possible/your preferred IDE doesn't have an extension you can run `pnpm format` before you commit to format the code.

# Committing

We also use [Gitmoji](https://gitmoji.dev) for our commit messages to establish and structured way to understand understand what a commit does, and its purpose. To commit, run the following
`pnpm gitmoji -c`
Select a gitmoji that best describes what you did in your commit. Select one of the following scopes based on you did

- [packages/core](../packages/core) - Anything changes the core package
- [packages/cli](../packages/cli) - Anything changes the cli package
- [apps/docs](../apps/docs) - Anything that changes the docs
- [root](../) - Anything that changes the root directory _(package.json, CONTRIBUTING.md, .eslint.js, etc)_
- [\*](../) - Anything that may apply to **all** packages, this isn't recommended, if you're commit applies to all packages more than likely it can be split up into multiple commits

And then add a title for your commit that is **under** 48 characters, if you need something longer, try making the title vague and explaining what you did in depth in the description field that comes next
