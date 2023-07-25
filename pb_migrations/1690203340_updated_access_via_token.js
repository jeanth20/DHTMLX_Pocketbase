migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7nrcwiuqzb746hq")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7nrcwiuqzb746hq")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
