const  express = require("express");
const  mongoose = require("mongoose");
const logger = require("morgan");



const  app = express();
const  PORT = process.env.PORT || 3001;

// enable compression middleware

app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));
console.log(process.env.MONGODB_URI)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessTracker", {
  useNewUrlParser: true,
  useUnifiedTopology: true 
});

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});