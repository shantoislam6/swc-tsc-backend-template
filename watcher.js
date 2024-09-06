const chokidar = require("chokidar");
const child_process = require("child_process");

// Path to watch (e.g., the compiled JavaScript output in the dist folder)
const watchPaths = "dist/**/*.*";
const entryPoint = "./dist/src/main.js";


// Watch for changes in the dist folder
const watcher = chokidar.watch(watchPaths, {
  persistent: true,
  ignored: /node_modules/, // Ignore unnecessary files
});

let serverProcess = null; // Store reference to the running server process

const restartServer = () => {
  // If there is an existing server process, kill it before starting a new one
  if (serverProcess) {
    console.log('Killing existing server process...');
    serverProcess.kill();
  }

  // Capture the start time in milliseconds
  const startTime = Date.now();

  // Spawn a new node process to run the compiled server
  serverProcess = child_process.spawn('node', ['./dist/src/main.js'], {
    stdio: 'inherit', // Inherit stdio (stdout, stderr, stdin) from the parent process
  });

  // Handle error events from the child process
  serverProcess.on('error', (error) => {
    console.error(`Failed to start server: ${error.message}`);
  });

  // Handle the process exiting
  serverProcess.on('exit', (code) => {
    const endTime = Date.now();
    const duration = (endTime - startTime) / 1000; // Convert milliseconds to seconds
    console.log(
      `Server process exited with code ${code} after ${duration.toFixed(2)} seconds.`
    );
  });
};

watcher.on("all", (event, path) => {
  restartServer()
});

// restartServer();
