import KafkaConfig from "../config/config-kafka.js";

const sendMessagekafka = async (req, res) => {
  try {
    const { message } = req.body;
    const kafkaconfig = new KafkaConfig();
    const messages = [
      {
        key: "key1",
        value: message,
      },
    ];

    kafkaconfig.produce("my-topic", messages);

    res.status(200).json({
      status: "success",
      message: "Message successfully send!",
    });
  } catch (err) {
    console.log(err);
  }
};

const controllers = { sendMessagekafka };

export default controllers;
