Players = new Mongo.Collection('players');

Players.allow({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let Player = new SimpleSchema({
    name: {
      type: String,
      label: 'Name'
    },
    score: {
      type: Number,
      label: 'Score'
    }
});

Players.attachSchema(Player);
