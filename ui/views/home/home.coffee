if Meteor.isClient

  controller =
    onStartup     : ->
    onSelectScout : -> Router.go 'scouts'
    onSelectDen   : -> Router.go 'dens'
    onSelectPack  : -> Router.go 'pack'

  Meteor.startup ->
    controller.onStartup()

  Template.home.events =
    'click #home-manage-scouts' : -> controller.onSelectScout()
    'click #home-manage-den'    : -> controller.onSelectDen()
    'click #home-manage-pack'   : -> controller.onSelectPack()

