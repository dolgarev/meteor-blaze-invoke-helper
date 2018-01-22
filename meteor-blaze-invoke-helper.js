import { Blaze } from 'meteor/blaze'

if (!(Blaze.invokeHelper && Blaze.invokeHelper.constructor === Function)) {
  Blaze.invokeHelper = function (helper, ...args) {
    return Blaze._globalHelpers[helper].apply(this, args)
  }
}
