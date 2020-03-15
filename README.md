# WANTED-BOOKS

[![typescript](https://img.shields.io/badge/typescript-v.3.7.2-blue)](https://www.typescriptlang.org/)
[![react](https://img.shields.io/badge/react-v.16.13.0-blue)](https://reactjs.org/)
[![redux](https://img.shields.io/badge/redux-v.4.0.5-purple)](https://redux.js.org/)
[![redux-saga](https://img.shields.io/badge/redux--saga-v.1.1.3-brightgreen)](https://redux-saga.js.org/)

## Prerequisites

- [Node.js](https://nodejs.org/ko/)
- [Yarn](https://yarnpkg.com/)

## Installation

### 1. Clone the project

```bash
$ git clone https://github.com/Shindongri/wanted-book.git
```

### 2. Install Packages

```bash
$ yarn (install)
```

### 3. Start Application

```bash
$ yarn start
```

### 구조 설계

- 해당 어플리케이션은 기본적으로 [create-react-app](https://create-react-app.dev/) 으로 구성했습니다.

```
src
├── components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── CardList.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── InputGroup.tsx
│   ├── InputPrintType.tsx
│   ├── InputSearch.tsx
│   ├── InputSorting.tsx
│   ├── Loading.tsx
│   ├── SearchBox.tsx
│   └── Select.tsx
├── containers
│   └── IndexPage.tsx
├── hooks
│   ├── useSearch.ts
│   └── useInput.ts
├── modules
│   ├── index.ts
│   ├── books
│   │   ├── actions.ts
│   │   ├── index.ts
│   │   ├── reducer.ts
│   │   └── types.ts
│   └── search
│       ├── actions.ts
│       ├── index.ts
│       ├── reducer.ts
│       └── types.ts
├── sagas
│   ├── books.ts
│   └── index.ts
├── index.tsx
└── App.tsx
```

1.  `components`
    : Presentational Components

2.  `containers`
    : Container Components

3.  `hooks`
    : Custom made hooks

4.  `modules`
    : Redux Actions & Action Types & Reducers

5.  `sagas`
    : Redux Middleware ( Side Effects )

## Main Dependencies

- **react |** https://reactjs.org/

- **react-redux |** https://redux.js.org/
  : A Predictable State Container for JS Apps
- **redux-saga |** https://redux-saga.js.org/
  : a library that aims to make application side effects
- **styled-components |** https://styled-components.com/
  : Visual primitives for the component age.
