migrate((db) => {
  const collection = new Collection({
    "id": "n32dco3pq70xgmc",
    "created": "2023-07-20 13:44:22.380Z",
    "updated": "2023-07-20 13:44:22.380Z",
    "name": "Test",
    "type": "auth",
    "system": false,
    "schema": [],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("n32dco3pq70xgmc");

  return dao.deleteCollection(collection);
})
