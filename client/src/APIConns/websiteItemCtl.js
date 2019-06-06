import ApiConnection from 'hiep294-apiconnection'

const websiteAPIConnection = ApiConnection({
  url: '/api/websites',
  actions: ['index', 'create', 'update', 'delete']
})

export default websiteAPIConnection