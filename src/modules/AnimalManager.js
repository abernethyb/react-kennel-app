const remoteURL = "http://localhost:5002"
//json-server -p 5002 -w kennel.json

export default {
  get(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(result => result.json())
  },
  getAllAnimals() {
    return fetch(`${remoteURL}/animals`).then(result => result.json())
  },
  getAllLocations() {
    return fetch(`${remoteURL}/locations`).then(result => result.json())
  },
  getAllOwners() {
    return fetch(`${remoteURL}/Owners`).then(result => result.json())
  },
  getAllEmployees() {
    return fetch(`${remoteURL}/employees`).then(result => result.json())
  },
}