migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r45odbngw4b2tu8")

  collection.options = {
    "query": "SELECT users.avatar, users.created, users.email, users.id, users.name, users.username, users.verified FROM users"
  }

  // remove
  collection.schema.removeField("lecmnuyx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ojsbbpvm",
    "name": "avatar",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/gif",
        "image/webp"
      ],
      "thumbs": null,
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ajg1kevt",
    "name": "email",
    "type": "email",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xby7ip9h",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "haoemk2o",
    "name": "username",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nfqcbp8l",
    "name": "verified",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r45odbngw4b2tu8")

  collection.options = {
    "query": "SELECT users.id, users.username FROM users where users.username"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lecmnuyx",
    "name": "username",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("ojsbbpvm")

  // remove
  collection.schema.removeField("ajg1kevt")

  // remove
  collection.schema.removeField("xby7ip9h")

  // remove
  collection.schema.removeField("haoemk2o")

  // remove
  collection.schema.removeField("nfqcbp8l")

  return dao.saveCollection(collection)
})
