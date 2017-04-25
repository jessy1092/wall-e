import { addMethod, addMethods, connect, template } from './core';

import isEmail from './validators/isEmail';
import contains from './validators/contains';
import equals from './validators/equals';
import isBoolean from './validators/isBoolean';
import isFloat from './validators/isFloat';

export function createValle() {
  let validators = {};

  return {
    addMethod(name, method, message) {
      validators = addMethod(validators, name, method, message);
    },
    addMethods(appendValidators) {
      validators = addMethods(validators, appendValidators);
    },
    connect(Component) {
      return connect(validators, Component);
    },
    template,
  };
}

const valle = createValle();

valle.addMethods(isEmail);
valle.addMethods(contains);
valle.addMethods(equals);
valle.addMethods(isBoolean);
valle.addMethods(isFloat);

export default valle;
