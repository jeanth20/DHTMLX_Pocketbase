migrate((db) => {
  const collection = new Collection({
    "id": "r45odbngw4b2tu8",
    "created": "2023-07-20 13:52:00.201Z",
    "updated": "2023-07-20 13:52:00.201Z",
    "name": "Who_Are_You",
    "type": "view",
    "system": false,
    "schema": [
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT users.id, users.username FROM users where users.username"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("r45odbngw4b2tu8");

  return dao.deleteCollection(collection);
})
