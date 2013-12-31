if Meteor.isClient
  Template.home.events =
    'click #home-manage-scouts' : -> Router.go 'scouts'
    'click #home-manage-den'    : -> Router.go 'dens'
    'click #home-manage-pack'   : -> Router.go 'pack'

