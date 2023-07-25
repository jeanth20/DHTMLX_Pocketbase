migrate((db) => {
  const collection = new Collection({
    "id": "7nrcwiuqzb746hq",
    "created": "2023-07-24 12:27:13.302Z",
    "updated": "2023-07-24 12:27:13.302Z",
    "name": "access_via_token",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "p9fvkzdl",
        "name": "username",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "eunvt5vu",
        "name": "token",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "8nlgucwc",
        "name": "valid",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("7nrcwiuqzb746hq");

  return dao.deleteCollection(collection);
})
