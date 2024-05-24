const Joi = require('joi');

const userSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
});

const productSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  description: Joi.string().min(10).max(500).required(),
  price: Joi.number().positive().required(),
  quantity: Joi.number().positive().integer().required(),
});

const orderSchema = Joi.object({
  user_id: Joi.number().integer().required(),
  products: Joi.array()
    .items(
      Joi.object({
        product_id: Joi.number().integer().required(),
        quantity: Joi.number().positive().integer().required(),
      })
    )
    .required(),
  total_amount: Joi.number().positive().required(),
});

const validateSchema = (schema, data) => {
  const { error } = schema.validate(data);
  if (error) {
    return { error: error.details[0].message };
  }
  return null;
};

module.exports = {
  userSchema,
  productSchema,
  orderSchema,
  validateSchema,
};