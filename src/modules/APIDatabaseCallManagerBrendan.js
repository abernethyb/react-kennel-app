const remoteURL = "http://localhost:5002"
//json-server -p 5002 -w kennel.json

export default {
  getAny(table, id) {
    return fetch(`${remoteURL}/${table}/${id}`).then(result => result.json())
  },
  getAll(table, expand) {
    return fetch(`${remoteURL}/${table}?_expand=${expand}`).then(result => result.json())
  },
  addObject(table, newObject) {
    return fetch(`${remoteURL}/${table}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newObject)
    }).then(data => data.json())
  },
  delete(table, id) {
    return fetch(`${remoteURL}/${table}/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  },
  update(editedAnimal) {
    return fetch(`${remoteURL}/animals/${editedAnimal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedAnimal)
    }).then(data => data.json());
  },
  getRandomId(table) {
    return fetch(`${remoteURL}/${table}`)
      .then(result => result.json())
      .then(objects => {
        const randomIndex = Math.floor(Math.random() * objects.length);
        const randomObject = objects[randomIndex];
        return randomObject.id;
      });
  },
  embededGet(table, id, embed) {
    return fetch(`${remoteURL}/${table}/${id}?_embed=${embed}`)
      .then(result => result.json())
  }
}