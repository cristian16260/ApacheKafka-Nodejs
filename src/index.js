import bodyParser from "body-parser";
import express from "express";
import router from "./router/router.js";
import kafkaConfig from "./config/config-kafka.js";

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use("/api/send", router);

//consume from topic "test-topic"
const kafkaconfig = new kafkaConfig();
kafkaconfig.consume("my-topic", (value) => {
  console.log("Recive message: ",value);
});

app.listen(port, () => {
  console.log(`connect on port: ${port}`);
});
