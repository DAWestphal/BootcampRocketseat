import { Router } from 'express';

import { celebrate, Segments, Joi } from 'celebrate';
import ProfileController from '../controllers/ProfileController';
import ensureAthenticated from '../middlewares/ensureAuthenticated';

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.use(ensureAthenticated);

profileRouter.get('/', profileController.show);
profileRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      old_password: Joi.string(),
      password: Joi.string(),
      password_confirmation: Joi.string().valid(Joi.ref('password')),
    },
  }),
  profileController.create,
);

export default profileRouter;