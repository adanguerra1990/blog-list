import axios from "axios";
const baseUrl = "api/blogs";

function getAll() {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
}

function create(newObject) {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data)
}

function deleteEntry(id) {
  const url = `${baseUrl}/${id}`
  const request = axios.delete(url)
  return request.then((response) => response.data)
}

export default { getAll, create, deleteEntry };
