/*
File Name : index.js
Developers:  
Piraveen Udayakumar – 301102696
Yonas Berhane       – 301165447
Kyeongbin Noh       – 301130132
Ulkar Zakaryayeva   – 301107604 
Halim Yoo           – 301155567
Syeda Maria         - 301184173
 
Date: November 8, 2021
Description: Survey web application that has full CRUD functionality using Express, Node.JS, MongoDB and EJS templating engine.
*/

let mongoose = require("mongoose");

// create a model class
let answerModel = mongoose.Schema(
  {
    surveyId: { type: Schema.Types.ObjectId, ref: "Survey" },
    q1ans: String,
    q2ans: String,
    q3ans: String,
    q4ans: String,
    q5ans: String,
  },
  {
    collection: "answers",
  }
);

module.exports = mongoose.model("answers", answerModel);
