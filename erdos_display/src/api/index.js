import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertAuthor = payload => api.post(`/author`, payload)
export const getAllAuthors = () => api.get(`/authors`)
export const updateAuthorById = (id, payload) => api.put(`/author/${id}`, payload)
export const deleteAuthorById = id => api.delete(`/author/${id}`)
export const getAuthorById = id => api.get(`/author/${id}`)

const apis = {
    insertAuthor,
    getAllAuthors,
    updateAuthorById,
    deleteAuthorById,
    getAuthorById,
}

export default apis