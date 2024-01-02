// STRETCH
const cars = [
    {
        vin: '1HD1BWB122Y037934',
        make: 'toyota',
        model: 'prius',
        mileage: '22500',
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '3B7HF13Z21G761997',
        make: 'toyota',
        model: 'highlander',
        mileage: '42500',
        title: 'salvage',
    },
    {
        vin: '5J6RM4H53CL068504',
        make: 'ford',
        model: 'f150',
        mileage: '45000',
    }
]

// exports.seed = function(knex) {
//     return knex('cars')
//         .truncate().then(() => {
//             return knex('cars').insert(cars)
//         })
// }

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}

