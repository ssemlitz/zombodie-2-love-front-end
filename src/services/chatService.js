import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/chat`

async function userChats(id) {
  console.log(id)
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
    },
  })
  return res.json()
}

async function createChat(formData) {
  const res = await fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  return res.json()
}

export {
  userChats,
  createChat
}