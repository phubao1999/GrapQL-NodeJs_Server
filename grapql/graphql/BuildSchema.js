const person = require('./Type/Person');
const query = require('./Query/index');
const mutation = require('./Mutation/index');

const buildSchema = query.query
    .concat(',')
    .concat(mutation.mutation)
    .concat(',')
    .concat(person.personType)

module.exports = {
    buildSchema
};