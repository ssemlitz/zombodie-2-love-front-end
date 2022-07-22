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
  const res = await fetch(`${BASE_URL}/${profile._id}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(profile)
  })
  return res.json()
}


async function getAll() {
  const res = await fetch(BASE_URL,{
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
    },
  })
  return res.json()
}

async function getDetails(profileId) {
  const res = await fetch(`${BASE_URL}/${profileId}/`, { 
    method: "GET",
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
  })
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

async function liked(profileId, likedId) {
  const res = await fetch(`${BASE_URL}/${profileId}/likes/${likedId}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
  return await res.json()
}

async function disliked(profileId, dislikedId) {
  const res = await fetch(`${BASE_URL}/${profileId}/dislikes/${dislikedId}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
  return await res.json()
}

async function deleteOne(profileId) {
  const res = await fetch(`${BASE_URL}/${profileId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  return res.json()
}

export {
  getAllProfiles, 
  addPhoto,
  create,
  getAll,
  updateProfile as update,
  getDetails,
  liked,
  disliked,
  deleteOne
}
