import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/messages`

async function getMessages(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
    },
  })
  return res.json()
}

async function addMessage(data) {
  const res = await fetch(`${BASE_URL}/`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return res.json()
}

export {
  getMessages,
  addMessage
}