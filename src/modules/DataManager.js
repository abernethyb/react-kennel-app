const remoteURL = "http://localhost:5002"
//json-server -p 5002 -w kennel.json

export default {
  getAny(table, id) {
    return fetch(`${remoteURL}/${table}/${id}`).then(result => result.json())
  },
  getAll (table, expand) {
    return fetch(`${remoteURL}/${table}?_expand=${expand}`).then(result => result.json())
  },
  delete(table, id) {
    return fetch(`${remoteURL}/${table}/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }
}