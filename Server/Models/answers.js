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
    surveyIds: [{ type: Schema.Types.ObjectId, ref: "Survey" }],
    q1ans1: String,
    q1ans2: String,
    q1ans3: String,
    q2ans1: String,
    q2ans2: String,
    q2ans3: String,
    q3ans1: String,
    q3ans2: String,
    q3ans3: String,
  },
  {
    collection: "answers",
  }
);

module.exports = mongoose.model("answers", answerModel);
