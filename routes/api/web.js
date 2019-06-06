const Route = require('hiep294-route')

itemRoute = Route({
  Model: require('../../models/Website'),
  actions: ['index', 'create', 'update', 'destroy']
})

module.exports = itemRoute
