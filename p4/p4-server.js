const fastify = require("fastify")();

const { data } = require("./p4-data.js");
const { getQuestions, getAnswers, getQuestionAnswer,
    getQuestion, getAnswer, getQuestionsAnswers } = require('./p4-module.js')

fastify.get("/cit/question", (request, reply) => {
    console.log(getQuestions())
    
    reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(getQuestions());
});

fastify.get("/cit/answer", (request, reply) => {
    reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(getAnswers());
});

fastify.get("/cit/questionanswer", (request, reply) => {
    reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(getQuestionsAnswers());
});

fastify.get("/cit/question/:number", (request, reply) => {
    console.log(request);
    let questionID = request.params.number;
    let aquestionID = questionID.split('');
    //request.params.number;
    console.log(aquestionID);


    reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(getQuestion(aquestionID[1]));
    
});

fastify.get("/cit/answer/:number", (request, reply) => {
    console.log(request);
    let answerID = request.params.number;
    let aanswerID = answerID.split('');
    //request.params.number;
    console.log(aanswerID);


    reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(getAnswer(aanswerID[1]));
    
});

fastify.get("/cit/questionanswer/:number", (request, reply) => {
    console.log(request);
    let questAnswerID = request.params.number;
    let aQuestAnswerID = questAnswerID.split('');
    let finalQuestAnswerID = aQuestAnswerID[1];
    //request.params.number;
    console.log(finalQuestAnswerID);


    reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(getQuestionAnswer(finalQuestAnswerID));
    
});

fastify.get("*", (request, reply) => {
    reply
      .code(404)
      .header("Content-Type", "text/html; charset=utf-8")
      .send("Route not found");
  });


const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});