import { Blaze } from 'meteor/blaze'
import { Template } from 'meteor/templating'
import { Tinytest } from 'meteor/tinytest'

Template.registerHelper('testHelper', function (val) {
  return `${val} world!`
})

Tinytest.add('meteor-blaze-invoke-helper-html', function (test) {
  test.equal(Blaze.invokeHelper('testHelper', 'hello'), 'hello world!')
})
