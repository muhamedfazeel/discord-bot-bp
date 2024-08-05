import * as Joi from 'joi';
import * as K from '@common/constants';

export default Joi.object({
  NODE_ENV: Joi.string()
    .valid(...K.NODE_ENVIRONMENTS)
    .default(K.NODE_ENVIRONMENTS[0]),
  LOGGER_LEVEL: Joi.string()
    .valid(...K.LOGGER_LEVELS)
    .default(K.LOGGER_LEVELS[0]),
  LOG_PRETTY_PRINT: Joi.string().default('false'),
  BOT_TOKEN: Joi.string().required(),
});
