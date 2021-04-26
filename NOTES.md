## 2021-04-24

### Starting a new project

expo init project-name

### info about import module aliasing

https://medium.com/@justintulk/solve-module-import-aliasing-for-webpack-jest-and-vscode-74007ce4adc9

The settings in `babel.config.js` alias the imports for building the project.  

```
plugins: [
  [
    'module-resolver',
    {
      alias: {
        assets: './assets',
        components: './src/components',
        constants: './src/constants',
        lib: './src/lib',
        navigation: './src/navigation',
        screens: './src/screens',
        services: './src/services',
        types: './src/types',
        
      },
    },
  ]
]
```

The `tsconfig.json` settings are only for vscode intellisense.

```
"compilerOptions": {
  "baseUrl": "./",
  "paths": {
    "assets/*": ["./assets/*"],
    "components/*": ["./src/components/*"],
    "constants/*": ["./src/constants/*"],
    "lib/*": ["./src/lib/*"],
    "navigation/*": ["./src/navigation/*"],
    "screens/*": ["./src/screens/*"],
    "services/*": ["./src/services/*"],
    "types/*": ["./src/types/*"],
  }
}
```

### jest with expo

https://docs.expo.io/guides/testing-with-jest/

Attempting to unit test the ListItems component.  I verified that testing a simple component does give a passing test.  However ListItems uses the useNavigation hook and there was an error about a missing navigator.  I made a fake navigation component that called ListItems.  That solved that, but listItems is also supposed to be passed a prop from the MoviesListScreen.  I attempted to wrap the listItem in another component which provided the title prop.  Then I got the error: `Unable to find node on an unmounted component.`.

Reflecting on this, it might be better to do the test by placing the component in its real wrapper, rather than the mock wrapper.  This is because for the mock wrapper there is an additional set of code to maintain and there is also the extra complication from working the mock wrapper so it plugs into the component tha way the real wrapper does.  I'm not sure if I have the right approach there but it's something to consider.  

I wanted to get some tests working, but considering the deadline I'm going to leave this aside and continue development without testing.

## 2021-04-25

### tutorial on fetching data with React

https://www.robinwieruch.de/react-fetching-data
https://www.robinwieruch.de/react-hooks-fetch-data

### for vscode intellisense, difficulty setting an alias for a file in tsconfig (alias works for a folder but not for a file)

https://stackoverflow.com/questions/58930156/vs-code-jsconfig-advance-alias-glob-paths


### lodash with typescript

https://www.npmjs.com/package/@types/lodash

## 2021-04-26

