export function handleFetch({ url, method, token }, data) {
  return fetch(`${url}`, {
    method: `${method}`,
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(data)
  })
    .then(res => checkResponse(res));
}

export function checkResponse(res) {
  if (res.ok) {
    return res.json()
  }
  return res.json().then((res) => {
    throw new Error(res.message);
  });
}