import axios from "axios";

const API = axios.create({
  baseURL: `http://localhost:3000/`,
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const login = (formData) => API.post("/user/signin", formData);
export const register = (formData) => API.post("/user/signup", formData);
export const googleSignIn = (result) => API.post("/user/googleSignIn", result);

export const createTour = (tourData) => API.post("/tour", tourData);
export const getTours = (page) => API.get(`/tour?page=${page}`);
export const getTour = (id) => API.get(`/tour/${id}`);
export const deleteTour = (id) => API.delete(`/tour/${id}`);
export const updateTour = (updatedTourData, id) =>
  API.patch(`/tour/${id}`, updatedTourData);
export const getToursByUser = (userId) => API.get(`/tour/userTours/${userId}`);

export const getToursBySearch = (searchQuery) =>
  API.get(`/tour/search?searchQuery=${searchQuery}`);

export const getTagTours = (tag) => API.get(`/tour/tag/${tag}`);
export const getRelatedTours = (tags) => API.post(`/tour/relatedTours`, tags);
export const likeTour = (id) => API.patch(`/tour/like/${id}`);

export const createblog = (blogData) => API.post("/blog", blogData);
export const getblogs = (page) => API.get(`/blog?page=${page}`);
export const getblog = (id) => API.get(`/blog/${id}`);
export const deleteblog = (id) => API.delete(`/blog/${id}`);
export const updateblog = (updatedblogData, id) =>
  API.patch(`/blog/${id}`, updatedblogData);
export const getblogsByUser = (userId) => API.get(`/tour/userblogs/${userId}`);

export const getblogsBySearch = (searchQuery) =>
  API.get(`/blog/search?searchQuery=${searchQuery}`);

export const getTagblogs = (tag) => API.get(`/blog/tag/${tag}`);
export const getRelatedblogs = (tags) => API.post(`/blog/relatedblogs`, tags);
export const likeblog = (id) => API.patch(`/blog/like/${id}`);
