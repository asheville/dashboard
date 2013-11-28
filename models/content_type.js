App.ContentType = DS.Model.extend({
  type:     DS.attr('string'),
  name:     DS.attr('string'),
  source:   DS.belongsTo('source')
});

if (APP_CONFIG.DATA.FIXTURES_ENABLED.CONTENT_TYPE) {
  App.ContentType.FIXTURES = [
    {
      id: 6,
      type: 'status_update',
      name: 'Status Update',
      source: 4
    },
    {
      id: 7,
      type: 'link',
      name: 'Link',
      source: 4
    },
    {
      id: 8,
      type: 'check_in',
      name: 'Check-in',
      source: 4
    },
    {
      id: 9,
      type: 'photo',
      name: 'Photo',
      source: 4
    },
    {
      id: 10,
      type: 'photo',
      name: 'Photo',
      source: 5
    },
    {
      id: 11,
      type: 'video',
      name: 'Video',
      source: 5
    },
    {
      id: 12,
      type: 'like',
      name: 'Like',
      source: 5
    }
  ];
} else {
  App.ContentType.FIXTURES = [];
}