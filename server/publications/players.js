Meteor.publish('players', function () {
  let items = Players.find();
  if (items) {
    return items;
  };

  return this.ready();
});
