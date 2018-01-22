import { Blaze } from 'meteor/blaze'
import { Template } from 'meteor/templating'
import { Tinytest } from 'meteor/tinytest'

Template.registerHelper('testHelper', function (val) {
  return `${val} world!`
})

Template.registerHelper('propHelper', function (prop) {
  return this[prop]
})

Tinytest.add('meteor-blaze-invoke-helper - in default context', function (test) {
  test.equal(Blaze.invokeHelper('testHelper', 'hello'), 'hello world!')
})

Tinytest.add('meteor-blaze-invoke-helper - in custom context', function (test) {
  test.equal(Blaze.invokeHelper.call({ x: 123 }, 'propHelper', 'x'), 123)
})
