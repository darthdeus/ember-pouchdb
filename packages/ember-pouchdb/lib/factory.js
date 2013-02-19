require("ember-pouchdb/connection");

var Connection = PouchDB.Connection;

/**
  Promise wrapper for creating a PouchDB connection
*/
PouchDB.Factory = Ember.Object.extend();
PouchDB.Factory.reopenClass({
  connect: function(url) {
    var connection = Connection.create();

    var pouch = new Pouch(url, function(err, data) {
      if (err) {
        connection.reject(err);
      } else {
        connection.resolve(data);
      }
    });

    return connection;
  }
});
