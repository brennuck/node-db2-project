
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .then(function () {
      // Inserts seed entries
      const cars = [
        {
          VIN: '123123123123123se',
          make: 'honda',
          model: 'civic',
          mileage: 100000,
        },
        {
          VIN: '123123123123123se',
          make: 'honda',
          model: 'civic',
          mileage: 100000,
        },
        {
          VIN: '1231223423423123se',
          make: 'honda',
          model: 'civic',
          mileage: 100000,
        },
        {
          VIN: '123123123123123se',
          make: 'honda',
          model: 'si',
          mileage: 150000,
        },
      ]
      return knex('cars').insert(cars)
    });
};
