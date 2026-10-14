import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api/',
})

const requestCache = new Map()

function cachedRequest(key, request) {
  if (!requestCache.has(key)) {
    const promise = request().catch((error) => {
      requestCache.delete(key)
      throw error
    })
    requestCache.set(key, promise)
  }
  return requestCache.get(key)
}

function getList(data, resourceName) {
  const items = Array.isArray(data) ? data : data?.results
  if (!Array.isArray(items)) {
    throw new Error(`The backend returned an invalid ${resourceName} response.`)
  }
  return items
}

export async function getProjects() {
  return cachedRequest('projects', async () => {
    const response = await api.get('projects/')
    return getList(response.data, 'projects').map((project) => ({
      id: project.id,
      title: project.title,
      category: project.category,
      description: project.description,
      tags: project.tech_stack.map((technology) => technology.name),
      image: project.image,
      link: project.live_url,
      github: project.github_url,
      isFeatured: project.featured,
    }))
  })
}

export async function getTechStacks() {
  return cachedRequest('tech-stacks', async () => {
    const response = await api.get('tech-stack/')
    return getList(response.data, 'tech stacks').map((stacks) => ({
      name: stacks.name,
      efficiency: stacks.experience_level,
    }))
  })
}

export async function getResume() {
  const response = await api.get('resume/')
  const downloadUrl = response.data.download_url
  if (typeof downloadUrl !== 'string' || !downloadUrl) {
    throw new Error('The backend returned an invalid resume response.')
  }

  const apiUrl = import.meta.env.VITE_API_URL
  const url = downloadUrl.startsWith('http')
    ? downloadUrl
    : apiUrl
      ? new URL(downloadUrl, new URL(apiUrl, window.location.origin)).href
      : downloadUrl

  return { url }
}

export async function getSocials() {
  return cachedRequest('socials', async () => {
    const response = await api.get('socials/')
    return getList(response.data, 'socials').map((social) => ({
      name: social.platform,
      link: social.url,
      icon: social.icon,
    }))
  })
}

export async function getServices() {
  return cachedRequest('services', async () => {
    const response = await api.get('services/')
    return getList(response.data, 'services').map((service) => ({
      title: service.title,
      desc: service.description,
      icon: service.icon,
    }))
  })
}