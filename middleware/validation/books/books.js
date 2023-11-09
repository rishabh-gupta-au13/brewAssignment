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

                return clientError(req, res, error.message,400);

            }
            return next();
        } catch (error) {
            return serverError(req, res, error);
        }


    };
    async validateGetBook(req,res,next){
        const schema = Joi.object().keys({
            title: Joi.string(),

        });

        try {
            const { error } =  schema.validate({...req.query});

            if (error) {

                return clientError(req, res, error.message,400);

            }
            return next();
        } catch (error) {
            return serverError(req, res, error);
        }

    }
    async validateUpdateBook(req,res,next){
        const schema = Joi.object().keys({
            title: Joi.string().required(),
            description: Joi.string(),
            author: Joi.string(),


        });

        try {
            const { error } =  schema.validate({...req.query,...req.body});

            if (error) {

                return clientError(req, res, error.message,400);

            }
            return next();
        } catch (error) {
            return serverError(req, res, error);
        }


    }

    async validateDeleteBook(req,res,next){
        const schema = Joi.object().keys({
            title: Joi.string().required(),
            


        });

        try {
            const { error } =  schema.validate({...req.query});

            if (error) {

                return clientError(req, res, error.message,400);

            }
            return next();
        } catch (error) {
            return serverError(req, res, error);
        }

    }
    
}

module.exports = new ValidateBook();