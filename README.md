# Initial setup

- Clone repository
- Run `npm install`
- Create an actual `.env` file from `.env.example`, you can do so by running `cp .env.example .env`
- Fill in your `.env` variable values

When doing `git commit` husky should automatically lint your changes. If you see the following warning:
```
hint: The '.husky/pre-commit' hook was ignored because it's not set as executable.
hint: You can disable this warning with `git config advice.ignoredHook false`.
```
Make sure you run `chmod +x .husky/pre-commit`.

### Building API client
When it comes to integrating our API into your project, we offer you two approaches: a manual workflow and an automated process utilizing the backend's Swagger JSON file.

#### Manual Workflow:

This is the traditional method you might be familiar with, where you manually handle the integration process. You take care of the steps involved in connecting your project with the API.

#### Automated Workflow using Swagger JSON:

We've streamlined the integration process for you by introducing an automated solution. We do this by transpiling swagger's JSON schema straight into typescript client. To utilize this method, follow these steps:

- Run the command `npm run build-api` in your project's directory. This command performs the necessary tasks and generates a file called `src/api/generatedApi.ts`.

- In the `src/api/baseAxios.ts` file, uncomment the references to `generatedApi.ts`. This ensures that the generated API is properly utilized in your project.

- It's important to note that whenever there is a change in the API, you need to re-run the `npm run build-api` command. This keeps the frontend integration aligned with the backend changes.

By default, the integration process relies on the Swagger implementation located at `${VITE_API_URL}/api-docs/swagger.json`. For most cases, you won't need to modify this if you're using our default VNTRS templates.

However, if you're working with a different URL for the Swagger JSON file, you have the flexibility to define a full path using the `SWAGGER_URL` environment variable in your .env file.

This automated approach significantly simplifies the integration process, ensuring that your frontend remains in sync with any backend API changes.

### Available commands:
- `npm run dev` - start a development build
- `npm run build` - create a production build in `dist` folder

When adding new env variables, refer to: https://vitejs.dev/guide/env-and-mode.html#env-variables-and-modes.
For the styling and theme usage, refer to: https://github.com/vntrs/vntrs-boilerplates-frontend-react-nocra/tree/main/src/theme

### Libraries included:
- `react-router-dom` for routing and navigation
- `axios` for making http calls
- `zod` for validation (Please research it more, as it is very powerful library)
- `styled-components` for styling
- `storybook` for creating components in isolation

Libraries that are approved by the tech forum, but not used in this boilerplate:
- `tailwind`
- `react-query`
- `radix-ui`
- `cypress`
- `react-hook-form`

These libraries can be used in a project if there is a specific need for them. Multiple libraries with the same purpose should **NOT** be mixed. 
If you wish to use this library in the project OR you have a need for a very specific library not listed above, please contact tech forum first and state your case before doing so.


### General guidelines
- Follow atomic design principles as much as possible (https://atomicdesign.bradfrost.com/chapter-2/).
- Build in isolation! Components should have their storybook attached to them. Try to at least cover atoms & molecules with storybook.
- Always use CSS variables over theming with context based theme.
- Components should be free of any business logic, and should contain only jsx, all forms of logic should be extracted into custom hooks.
- Prefer context using context and custom hooks more extensively over adding a library such as redux.
- **Don't ignore eslint!** When pushing to git please make sure your code is in check with all the eslint rules that we have in place.
