migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7nrcwiuqzb746hq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ugiowzpp",
    "name": "type",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7nrcwiuqzb746hq")

  // remove
  collection.schema.removeField("ugiowzpp")

  return dao.saveCollection(collection)
})
