# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## release/first-steps

### feature/initial-configuration commands

Install mui

- npm install @mui/icons-material
- npm install @fontsource/roboto

Redux toolkit

- npm install @reduxjs/toolkit
- npm install --save @types/react-redux

React router dom

- npm install react-router-dom@6

Axios

- npm install axios

Lodash

- npm i --save lodash
- npm i --save-dev @types/lodash

Code Linter

- npm install eslint --save-dev
- npx eslint --init and write y
- npm i -D eslint-plugin-import @typescript-eslint/parser eslint-import-resolver-typescript
- npm i -D prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-hooks

Husky

- npm install husky --save-dev
- npm run husky-install after setup this line en package.json as "husky-install": "husky install"
- npx husky add .husky/pre-commit "npm run test" to create hook

# Style code write conventions React:

https://google.github.io/styleguide/jsguide.html#features-objects-enums

### Files names

-Components Directory
Components/Navbar/Navbar.tsx
Components/Navbar/Navbar.test.tsx
Components/Navbar/data.ts \* a better name

- Components State
  Components/Navbar/state/useNavbar.tsx _
  Components/Navbar/state/useNavbar.test.tsx _
  PROPOSAL
  Components/Navbar/hooks/use-navbar.tsx
  Components/Navbar/hooks/use-navbar.test.tsx
- Other files
  src/shared/enums/routes-enum.ts
  src/shared/constants/app-routes.ts
  src/shared/interfaces/global-interface.ts

for folders use only that are not in commponents use only camelCase

### Constants

- Global constants /document constants
  const API_PATH= "some/path"
  export const PATHS ={
  ONE="one"
  TWO="two"
  THREE= (hi:string)=>hi
  }
- in function constants
  const merchantID="hola" // o es constant merchant_id="hola"
  const merchantID=getMerchantID()

### Enums

src/shared/enums/countries-enum.ts or just countries

export enum Countries {
Brazil = "Brazil",
Chile ="Chile",
EstadosUnidos="Estados unidos"
}

export enum LogLevel {
ERROR,
WARN,
INFO,
DEBUG,
}

### Fuctions

function getMerchantID(){}
const getMerchanID=()=>{}

### interfaces

src/shared/interfaces/test-interface.ts
export interface Hello {
someVaule: string;
otherValue: number;
}
