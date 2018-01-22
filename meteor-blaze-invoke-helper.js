import { Blaze } from 'meteor/blaze'

if (!(Blaze.invokeHelper && Blaze.invokeHelper.constructor === Function)) {
  Blaze.invokeHelper = (helper, ...args) => Blaze._globalHelpers[helper](...args)
}
