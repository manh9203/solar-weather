# Setting Up the Tests
I just spent way too long configuring Jest and now I want to share my pain so you do not need to suffer as I as.

## Relevant Documentation
- [https://jestjs.io/docs/tutorial-react](https://jestjs.io/docs/tutorial-react) gives sample instructions on how to setup snapshotting and DOM render testing.
- [https://testing-library.com/docs/react-testing-library/migrate-from-enzyme](https://testing-library.com/docs/react-testing-library/migrate-from-enzyme) is a guide to move away from enzyme (since it's gone now?)
- [https://testing-library.com/docs/queries/about/](https://testing-library.com/docs/queries/about/) Queries with this new system (put these in the expect)
- [https://testing-library.com/docs/user-event/intro/](https://testing-library.com/docs/user-event/intro/) info for summoning a user event
- [https://github.com/testing-library/jest-dom](https://github.com/testing-library/jest-dom) info for the toBe, toEqual etc.

## Setting up a Test
- Instead of enzyme shallows, they recommend the `render` function. This thing does something similar to shallow, but i think renders every component all the way down?
- Render internally apparently creates a fake copy of the browser, so we need to have
  ```
    /**
    * @jest-environment jsdom
    */
  ```
  at the top of the test to make it know that hey this is the supposed to be the browser and not node's server thing (I think?)

- Here is how you would use `render` as a sample
  ```
  it("should display the date right", function () {
  const date = new Date("1995-12-17T03:24:00");
  const { queryByTestId } = render(<DateHeader time={date} />);
  expect(queryByTestId("dateHead")).toHaveTextContent("17 Dec 1995");
  }); 
  ```
  the object that you assign it to can have any number of attributes. Each thing you destructure should be a query from [here](https://testing-library.com/docs/queries/about/)

## Honestly I don't know either
I spent like 2 hours trying to wrangle this together and it finally works
Here is what I had to do (if in the future this needs undoing):
(and also I think I need to fix this problem in some project of my own so I want to remember)
1. Installed jest, @babel/preset-env, @babel/preset-react, @testing-library/jest-dom @testing-library/react, @testing-library/user-event, babel-jest, jest-environment-jsdom, react-test-renderer (over time, but yeah)
2. Edited eslint config to add more environments so it would shut up about the test files
3. Added babel config so jest works (while not breaking vite)
4. Added jest config so jest wouldn't try to read css files and then scream about how that is NOT javascript. (Stack Overflow also said to do the same for gifs and images so I did)
5. Added the styleMock and fileMock files as part of step 4.
6. Changed es config and babel (and maybe jest) config to .cjs files. For some reason that was really important.
