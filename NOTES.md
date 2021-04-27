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

### reorganizing the models and types

I now have three files in the types folder.

#### StarWarsTypes

StarWarsTypes specifies the types for the star wars items.  
* StarWarsItem is the data type for any of the star wars items returned by the SWAPI service functions.
* StarWarsItemType is the type of a star wars item.  It can be Film, Person, etc...
* ID is the id of a star wars item.  This is taken from the url field returned by the api, I strip off the base url and leave the parts specifying the type of star wars item and the number.  i.e. 'films/1/', 'people/2/' etc...

So far I have found that in the app, the typescript doesn't always catch on to the the type I intend and I get code highlight error messages.  This is especially true when accessing an attribute of and object.  When I'm not able to do the typing properly in a certain area, I can make the typescript assume the type I intend by `item[key as IntendedType]` or if I have to `item[key as typeof keyof item]`.  Seeing this in the code can be a reminder of the intended type, and also indicates an area that can be improved with more knowledge of typing.

One of the reasons the typescript has been a bit more difficult is because I made the details view general, for displaying any of the six star wars types, but because of this, typing in a way that encompasses all of those types is more complicated. 

I wrote out all six of the star wars item types, and I find that there can be redundant work, as they are described as types, and again in the view model (discussed later), and if there is client side validation they would be described again as schemas.  Of course all three descriptions are somewhat different, nevertheless, making a change to the data requires editing two (or three) different files.

#### StarWarsModelTypes

The star wars model discussed in the section after next has it's own typpes, this is where they are kept.

#### SWAPITyes

I had to make a type for the return type of getListAsync in the SWAPI service.  Since this needed to be accessed there and in the component it was called in, I made a seperate types file for it.

#### StarWarsViewModel

Because the details view is multi-purpose for displaying any of the star wars types, to support it I made an object that specified the data to display, labels, etc... for each of the types.

I used the name view model which is reminiscent of the .net view model, although it's not completely analogous.

This model is also used in the SWAPI service.  the data fetching functions use it as a guide for how to process the api data into the data that they return.  

I created a models folder to store these files in.  Currently the app doesn't build. For some reason it's not recognizing the alias for the models folder in the babel.config.js file.

## 2021-04-27

Today the plan is to simplify the service functions.  The API returns full url's for references to other items and other pages.  I have been pulling out just the 'films/1/' part of the url and calling it the id, and for pagination it returns the full url and next, and I was pulling out the page number from the '/?page=1" part.  Now I think this is overly complicated for this project and I'm going to switch to returning the url's etc unchanged.  For following a link I'll make a function that takes a url.  I'll make these functions:

* getListAync
* getListByUrlAsync
* getItemByUrlAync

Making this change will also require changing the star wars types, and when I do this I'll also remove most of the detail from these types, as the detail hasn't been helpful for the way the star wars are used in multi-purpose components.

### getting the models alias working

I reinstalled node modules.  ran `npm start --reset-cache`.  ran `rm -rf /tmp/metro-*`.  After this nom one a different error message appeared when building. That was an actual in the error in the code, and after fixing that it built. 

### the screens

there are three screens:

* HomeScreen
* ListScreen
* DetailsScreen

HomeScreen will have six buttons, one for each type of list

ListScreen will receive the star wars type from navigation and display the list for that type.  

DetailsScreen receives the item from nave and displays the data and links to other details screens.

Update: These screens now work.  The next task is to display the list of items the details screen links to.

Update: Tried to create a higher order component for fetching data for a single item.  This lead to mucking around with typescript for the react types.  Due to time, I decided to not use a hoc.

Update: linking between the details screens now works.

