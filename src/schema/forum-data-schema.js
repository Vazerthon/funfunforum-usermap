import Joi from 'joi-browser';

export const usermapLocationSchema = Joi.object().keys({
  lat: Joi.number().required(),
  lng: Joi.number().required(),
  caption: Joi.string().required()
});

export const hackableJsonSchema = Joi.object().keys({
  usermap_location: usermapLocationSchema.required(),
});

export const userDataSchema = Joi.object().keys({
  username: Joi.string().required(),
  hackable_json: hackableJsonSchema.required(),
});

export const isValidUserData = (obj) => {
  const { error } = Joi.validate(obj, userDataSchema, { allowUnknown: true });
  return !error;
};
