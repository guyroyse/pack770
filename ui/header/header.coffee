if Meteor.isClient

  Template.header.packName     = -> 'Pack 770'
  Template.header.packLocation = -> 'Huber Ridge, Westerville, Ohio'

  Template.header.events =
    'click #header-pack-name' : -> Router.go 'home'

