import Joi from 'joi';

export const LoginValidator = Joi.object({
    username: Joi
        .string()
        .min(5)
        .max(30)
        .pattern(new RegExp('[a-zA-Z0-9]'))
        .required()
        .trim()
        .messages({
            'string.empty': 'Обов\'язкове поле',
            'string.min': 'Мінімальна кількість символів: 5',
            'string.max': 'Максимальна кількість символів: 30',
            'string.pattern.base': 'Формат: англійські великі й малі літери, а також цифри'
        }),

    password: Joi
        .string()
        .min(8)
        .max(20)
        .pattern(new RegExp('[a-zA-Z0-9]'))
        .trim()
        .required()
        .messages({
            'string.empty': 'Обов\'язкове поле',
            'string.min': 'Мінімальна кількість символів 8',
            'string.max': 'Максимальна кількість символів 20',
            'string.pattern.base': 'Формат: англійські великі й малі літери, а також цифри'
        }),
});