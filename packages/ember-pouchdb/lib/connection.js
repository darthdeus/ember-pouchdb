require("ember-pouchdb/core");

/**
  Conneciton to a single PouchDB database
*/
PouchDB.Connection = Ember.Object.extend(Ember.DeferredMixin, {
  post: Ember.K,
  put: Ember.K,
  get: Ember.K,
  allDocs: Ember.K
});
