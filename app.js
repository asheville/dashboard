App = Ember.Application.create({
  LOG_TRANSITIONS: APP_CONFIGURATION.initialization.logTransitions,
  LOG_TRANSITIONS_INTERNAL: APP_CONFIGURATION.initialization.logTransitionsInternal,
});

App.Config = Ember.Object.create();

App.TemplateNames = [
  'application',
  'index',
  'sources',
  'sources_source',
  'sync',
  'sync_storage',
  'sync_source'
];

for (var i = 0; i < App.TemplateNames.length; i++) {
  $.ajax({
    url: 'templates/' + App.TemplateNames[i] + '.hbs',         
    async: false,
    success: function (response) {
      Ember.TEMPLATES[App.TemplateNames[i]] = Ember.Handlebars.compile(response);
    }
  });
}

App.Router.map(function() {
  this.route('index', { path: '/' });
  this.route('sources', { path: '/sources' });
  this.route('sync', { path: '/sync' });
});