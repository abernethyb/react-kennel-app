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
  }
}