// import { taskRouter } from "./task.routes";

const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const { connectToDatabase } = require("./database");
const getUserData = require("./dashboard");
const userRouter = require("./user.routes");
const taskRouter = require("./task.routes");
const categoryRouter = require("./category.routes");
const scheduleRouter = require("./schedule.routes");
const taskToScheduleRouter = require("./task_schedule.routes");
const notificationRouter = require("./notification.routes");

// Clear Node.js module cache
Object.keys(require.cache).forEach(function (key) {
  delete require.cache[key];
});

// Load environment variables from the .env file, where the ATLAS_URI is configured
dotenv.config();

const { ATLAS_URI } = process.env;

if (!ATLAS_URI) {
  console.error(
    "No ATLAS_URI environment variable has been defined in the .env file",
  );
  process.exit(1);
}

connectToDatabase(ATLAS_URI)
  .then(() => {
    const app = express();
    app.use(cors());
    app.get("/", (req, res) => {
      res.send("Hello, this is the root URL!");
    });
    app.use("/users", userRouter);
    app.use("/tasks", taskRouter);
    app.use("/categories", categoryRouter);
    app.use("/schedules", scheduleRouter);
    app.use("/schedules/tasks", taskToScheduleRouter);
    app.use("/notifications", notificationRouter);

    // start the Express server
    app.listen(5200, () => {
      console.log(`Server running at http://localhost:5200...`);
    });

    getUserData();
  })
  .catch((error) => console.error(error));
