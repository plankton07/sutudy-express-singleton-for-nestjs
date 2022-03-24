"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCat = exports.readCat = exports.readAllcat = void 0;
var cats_model_1 = require("./cats.model");
var readAllcat = function (req, res) {
    try {
        var cats = cats_model_1.Cat;
        res.status(200).send({
            success: true,
            data: {
                cats: cats,
            }
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message
        });
    }
};
exports.readAllcat = readAllcat;
var readCat = function (req, res) {
    try {
        var id_1 = req.params.id;
        var cats = cats_model_1.Cat.find(function (cat) {
            return cat.id === id_1;
        });
        res.status(200).send({
            success: true,
            data: {
                cats: cats,
            }
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message
        });
    }
};
exports.readCat = readCat;
var addCat = function (req, res) {
    try {
        var data = req.body;
        console.log(data);
        cats_model_1.Cat.push(data);
        res.status(200).send({
            success: true,
            data: { data: data }
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message
        });
    }
};
exports.addCat = addCat;
//# sourceMappingURL=cats.service.js.map