function getAPIData() {
  return fetch ('http://localhost:3000/api/v1/tasks')
    .then((res => res.json()))
}

export default getAPIData