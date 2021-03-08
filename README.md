# The Game of Life

A library containing all the logic to implement any type of frontend application showing <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank">Conway’s Game of Life </a>

<hr />

## Description

The library accepts two inputs and returns one output.
The first input is an array of sets of coordinates, that either a frontend user can click, store and send to the library, or use the predefined coordinates set.
The second input is the grid format to use. It can be set as an object with number of rows and columns. There is a default number set, too.

Once coordinates and grid size are set, the library will initialize the grid and fill it with the given coordinates. Following that, it will compute the state of the generation of cells and return their transformation.

The output is the same grid that was input but with the updated cells state.

## To install

#### Run
 - npm install
 - npm run prepare (will install husky hooks for commitlint and pre-push tests)
 - npm run start (to test it locally): it will run a simple test JS file outputting in console the updated grid.

<hr />

### Versioning

In order to keep the versioning and update the CHANGELOG, once you have a patch, a minor or a feature it's possible on the master branch to run 'npm run release'. It will create a new version, as well as a tag, and push it to Github. Automatically it will update the CHANGELOG, with the version and commits or PRs.

<hr />

### Implementation

The library comes with two transpiling options:
- build: it will create a lib dir with the transpiled code from JS using TSC, with all the definition files.
- build-prod: using webpack, it will bundle all the code in one minified file in the bin directory.

To use it in a React project, it's enough to import it this way:

` import { init } from '..path/src/index' `

and then initialize it:

` const result = init(coordinates, gridFormat);`

<hr />


### Notes

The library runs only one transformation, or generation, of cells. The implementation of many (or continuous) generations has to be set on the frontend, for example with a while loop including a setInterval for spacing the time.

Every loop the grid will be passed to the library and it will return the new states in the same grid.
The reason behind it is about Node that will wait for the output. It will wait for the loop to be completed, and will return the final results only.

## Tests

The test command is:

`npm run test`

and it's possible to check the coverage with:

`npm run test:coverage`

which will create a report in the coverage directory.
I've created 5 tests that check the flow end to end with input/missing inputs and errors. 
As there is no call to external parties it was not necessary to create mocks.
More tests which will cover all specific functions can be created.
