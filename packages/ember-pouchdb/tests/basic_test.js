module("EmberPouchdb");

test("it's an Ember namespace", function() {
  ok(Ember.PouchdbAdapter instanceof Ember.Namespace, 'should be a namespace');
});
