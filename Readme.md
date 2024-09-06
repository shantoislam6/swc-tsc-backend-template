# SWC TSC BACKEND Template

This is a template project using SWC for JavaScript/TypeScript compilation and Express for building server-side applications. It includes TypeScript and React support, as well as development tools like `concurrently` and `nodemon`.

**Ongoing Project:**  
This project is still under development. There is much more to add, and the main idea is not yet fully implemented. 

## Project Structure

- **Main Entry:** `./dist/src/main.js`

## Scripts

- **`watch:dist`**  
  `node watcher.js`  
  Watches the distribution folder for changes.

- **`dev:tsc`**  
  `concurrently --raw "tsc --watch" "pnpm watch:dist"`  
  Runs TypeScript compilation and distribution folder watching concurrently.

## Module Aliases

- **`@`**  
  Points to `./dist/src`, allowing for easier module resolution.

## License

This project is licensed under the MIT License.

