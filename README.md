<h1 align="center">Welcome to ERC20 Token Transfer Project 👋</h1>

This is an ERC20 Token Transfer built using the following stack:

<table >
    <tr>
        <td align="center" margin= "0 20px 0 20px">
            <a href="https://www.typescriptlang.org/">
                <img src="https://raw.githubusercontent.com/R4Y-repo/blockchain-app/master/img/nextjs.png" alt="Next JS logo" width="100">
                <br>
                Next JS
            </a>
        </td>
        <td align="center" margin= "0 20px 0 20px">
            <a href="https://www.fastify.io/">
                <img src="https://raw.githubusercontent.com/R4Y-repo/blockchain-app/master/img/react.png" alt="React logo" width="100">
                <br>
                React
            </a>
        </td>
        <td align="center" margin= "0 20px 0 20px">
            <a href="https://www.prisma.io/">
                <img src="https://raw.githubusercontent.com/R4Y-repo/blockchain-app/master/img/tailwindcss.png" alt="Prisma logo" width="100">
                <br>
                Tailwind CSS
            </a>
        </td>
        <td align="center"  margin=" 0 20px 0 20px">
            <a href="https://www.postgresql.org/">
                <img src="https://raw.githubusercontent.com/R4Y-repo/blockchain-app/master/img/wagmi" width="100">
                <br>
                Wagmi
            </a>
        </td>
    </tr>
</table>

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/R4Y-repo/web_services_project#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/R4Y-repo/web_services_project/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
</p>


### 🏠 [Homepage](https://github.com/R4Y-repo/web_services_project#readme)

## Install

```sh
npm install
```

## Start Application

```sh
npm run start
```

## Dev mode

```sh
npm run dev
```

## Available Scripts

- `start`: Start the production server
- `dev`: Start the development server
- `build`: Build web application
- `gen`: Generate Wagmi ERC20 hooks
- `lint`: Run code analysis


## Wagmi features used


I have used the Wagmi CLI to create custom hooks from the ERC20 ABI so that the main functions can be easily accessible (name, symbol, transfer)

in this example i have used the command `npx run gen` to generate the ERC20 hooks to communicate with ERC20 Token's Smart contracts (check `src/utils/erc20.ts` for the hooks)

## DApp features

The user can sign in with their Metamask wallet and check for the tokens in his wallet

The user can also transfer to other wallets some of their tokens

## Routes:

- Home page: `/`
<img src="https://raw.githubusercontent.com/R4Y-repo/web_services_project/master/img/home.png" alt="Home Page">

- Token page: `/token`
<img src="https://raw.githubusercontent.com/R4Y-repo/web_services_project/master/img/token.png" alt="Token Page">

- Transfer page: `/transfer`
<img src="https://raw.githubusercontent.com/R4Y-repo/web_services_project/master/img/transfer.png" alt="Transfer Page">


## Author

👤 **Rayen Nasraoui**

* [Website](https://r4y-r4y.github.io/)
* [Github](https://github.com/R4Y-R4Y)
* [LinkedIn](https://linkedin.com/in/https:\/\/www.linkedin.com\/in\/rayen-nasraoui-603b22203\/)

## Show your support

Give a ⭐️ if this project helped you!

***
