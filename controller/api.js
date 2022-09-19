const demo = require("../models/demomodel");

exports.insert = async function (req, res, next) {
  try {
    //dynamic
    // const fild = {
    //   name: req.body.name,
    //   email: req.body.email,
    // }

    //static
    const fild = {
      name: "parthu11",
      email: "parthu11@gmail.com",
    };

    //postman
    //data inser in postman -> body-row-json
    //const data = await demo.create(req.body);

    const data = await demo.create(req.body , req.file);

    console.log(data);
    res.status(201).json({ status: "success", data: data });
  } catch (error) {}
};

exports.get = async function (req, res, next) {
  try {
    const data = await demo.find();
    res.status(201).json({ status: "success", data: data });
  } catch (error) {}
};

exports.get_id = async function (req, res, next) {
  try {
    const data = await demo.findById(req.params.id);
    res.status(200).json({ status: "success", data: data });
  } catch (error) {}
};

exports.delete = async function (req, res, next) {
  try {
    const data = await demo.findByIdAndDelete(req.params.id);
    res.status(404).json({ status: "delete data" });
  } catch (error) {}
};

exports.update = async function (req, res, next) {
  try {
    const data = await demo.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json({ status: "sucess", data: data });
  } catch (error) {}
};
