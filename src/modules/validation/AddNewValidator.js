import Joi from 'joi';

export const AddNewValidator = Joi.object({
    url: Joi
        .string()
        .required()
        .trim()
        .messages({
            'string.empty': 'Обов\'язкове поле'
        }),

    caption: Joi
        .string()
        .max(30)
        .trim()
        .required()
        .messages({
            'string.empty': 'Обов\'язкове поле',
            'string.max': 'Максимальна кількість символів 30',
        }),

    description: Joi
        .string()
        .required()
        .messages({
            'string.empty': 'Обов\'язкове поле'
        }),
});