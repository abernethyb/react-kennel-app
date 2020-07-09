const remoteURL = "http://localhost:5002"
//json-server -p 5002 -w kennel.json

export default {
  get(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/animals`).then(result => result.json())
  }
}