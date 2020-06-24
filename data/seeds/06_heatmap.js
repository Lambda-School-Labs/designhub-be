const moment = require('moment');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('heatmap')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('heatmap').insert([
        {
          id: 1,
          userId: 'auth0|5d83b8d3d8e1cf0df49647e3',
          projectId: 1,
          imageId: 1,
          count: 2,
          date: '2020-06-23T19:53:58-04:00',
          contribution: 'A lot... Like... A lot, a lot...',
        },
      ]);
    });
};