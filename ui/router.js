Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notfound'
});

Router.map(function () {

  this.route('home', {
    path: '/'
  });

  this.route('scouts');
  this.route('signup');

});
