var get = Ember.get, set = Ember.set,
    adapter;

module("EmberPouchdbAdapter", {

  setup: function() {
    adapter = Ember.PouchdbAdapter.create();
  },

  teardown: function() {
    adapter.destroy();
  }

});
