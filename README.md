# Sonarworks | Homework

### `yarn start`
Runs the app in the development mode.


## Tasks
1. Get familiar with the [Figma design](https://www.figma.com/file/P0Pw4VZo9xaXVULeNYw2x5/Frontend-engineer-task?node-id=0%3A1);
2. Based on the design, choose technology stack (if possible use React + TypeScript) and be ready to justify your choice;

    Actually I've chosen the proposed stack(React + typescript) because React is passing well for that kind of application. I've bootstrapped the app with CRA script. Here we don't need any complicated services(quite simple client app). I've decided to add react bootstrap(just not to invent bicycle to keep the same styling for the app) and react router dom (in order the app to be full state).

3. Create git repository (for example, on github.com or gitlab.com);

    [Link to the project](https://github.com/stepkraft/sw_legal) 

4. Create the solution in a manner which is usable in other projects;

    In regards of creating reusable components I've put the components layout, header and footer to shared folder. Actually if we like to share these components between other React based projects we can create separate repo and import these components from there. If we like to reuse these components not in React applications such as Angular or Vue, I suppose we could create custom web elements(actually haven't touched it yet)

5. Prepare a list of suggestion (can be both for the solution and for API, design, or
other)

    Suggestions:

      - I'd add redux store in order to keep business logic in one place. For the API communication I'd use redux-thunk or sagas having in mind the complexity.
      - throw out the legacy page related code from the main bundle and fetch this part on demand.
      - From the design perspective I'd redefine css variables to keep colors, fonts config in one place.
      - I'd consider server-side rendering in order to get the app be SEO optimized and more faster.

6. Share the source code with us (link to git repository), along with the guidelines of how to run it;

    - [Link to the project](https://github.com/stepkraft/sw_legal)
    - git clone
    - yarn install
    - yarn start

7. Share your answers to (2) and (4), as well as other comments in a form of document and/or presentation.

    Actually I've put the answers here in readme file (;