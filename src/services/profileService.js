import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/profiles`

async function create(profile) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(profile)

  })
  return res.json()
}

async function updateProfile(profile) {
  const res = await fetch(BASE_URL, {
    method: "PUT",
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(profile)

  })
  return res.json()
}


async function getAll() {
  const res = await fetch(BASE_URL)
  return res.json()
}

async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

async function addPhoto(photoData, profileId) {
  const res = await fetch(`${BASE_URL}/${profileId}/add-photo`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: photoData
  })
  return await res.json()
}

export {
  getAllProfiles, 
  addPhoto,
  create,
  getAll,
  updateProfile as update
}
