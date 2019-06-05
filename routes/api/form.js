
const create = (Model) => (newItem, res) => {
  const temp = new Model(newItem)
  temp.save()
    .then(website => res.send({ success: true, item: website }))
    .catch(errs => res.send({ success: false, info: errs.errors }))
}

const read = (Model) => (res) => {
  Model.find().sort({ date: -1 }).then(websites => res.send(websites))
}

const update = (Model) => (item, res) => {
  Model.findById(item._id)
    .then(website => {
      website.link = item.link
      website.description = item.description
      website.save()
        .then(() => res.send({ success: true }))
        .catch(errs => res.send({ success: false, info: errs.errors }))
    })
    .catch(errs => res.status(404).send({ success: false }))
}

const destroy = (Model) => (_id, res) => {
  Model.findById(_id)
    .then(website => {
      website.delete()
        .then(() => res.send({ success: true }))
        .catch(() => res.send({ success: false }))
    })
    .catch(() => res.send({ success: false }))
}

module.exports = { create, read, update, destroy }