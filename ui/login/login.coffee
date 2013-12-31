if Meteor.isClient

  session = do ->
    self = Object.create Pack770.Common.Session
    self.loginFailed = (failed) ->
      self.sessionValue 'loginFailed', failed
    self

  view = do ->
    self = Object.create Pack770.Common.PassiveView
    self.email = self.fieldFn 'sign-in-email'
    self.password = self.fieldFn 'sign-in-password'
    self

  controller =

    onStartup: -> session.loginFailed(false)
    onSignIn: ->
      Meteor.loginWithPassword view.email(), view.password(), (error) ->
        session.loginFailed error?
        unless error?
          view.password ''
          view.email ''

    onSignUp: -> Router.go('signup')
    onSignOut: -> Meteor.logout()

  Meteor.startup -> controller.onStartup()

  Template.login.loginFailed = ->
    session.loginFailed()

  Template.login.events =
    'click .sign-up'       : -> controller.onSignUp()
    'click #sign-out'      : -> controller.onSignOut()
    'submit #sign-in-form' : ->
      controller.onSignIn()
      false

