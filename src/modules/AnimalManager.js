const remoteURL = "http://localhost:5002"
//json-server -p 5002 -w kennel.json

export default {
  get(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(result => result.json())
  },
  getAllAnimals() {
    return fetch(`${remoteURL}/animals`).then(result => result.json())
  },deleteAnimal(id) {
    return fetch(`${remoteURL}/animals/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  },
  getAllLocations() {
    return fetch(`${remoteURL}/locations`).then(result => result.json())
  },
  getAllOwners() {
    return fetch(`${remoteURL}/Owners?_expand=animal`).then(result => result.json())
  },
  getAllEmployees() {
    return fetch(`${remoteURL}/employees?_expand=location`).then(result => result.json())
  },
}