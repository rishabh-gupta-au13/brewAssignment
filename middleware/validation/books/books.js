const Joi = require("joi");
const { clientError, serverError } = require("../../../utilities/response");

class ValidateBook {
     validateAddBook(req, res, next) {
        const schema = Joi.object().keys({
            title: Joi.string().required(),
            description: Joi.string().required(),
            author: Joi.string().required(),
        });

        try {
            const { error } =  schema.validate({...req.body,...req.query});

            if (error) {

                return clientError(req, res, error.message);

            }
            return next();
        } catch (error) {
            return serverError(req, res, error);
        }


    }
}

module.exports = new ValidateBook();