import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/chats`

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

export {
  userChats
}