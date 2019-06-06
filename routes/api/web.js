const Route = require('hiep294-route')

webRoute = Route({
  Model: require('../../models/Website'),
  actions: ['index', 'create', 'update', 'destroy']
})

module.exports = webRoute
