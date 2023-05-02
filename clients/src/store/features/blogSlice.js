import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const createTour = createAsyncThunk(
  "tour/createTour",
  async ({ updatedTourData, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.createTour(updatedTourData);
      toast.success("Tour Added Successfully");
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getblogs = createAsyncThunk(
  "tour/getblogs",
  async (page, { rejectWithValue }) => {
    try {
      const response = await api.getblogs(page);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getTour = createAsyncThunk(
  "tour/getTour",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.getTour(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const likeTour = createAsyncThunk(
  "tour/likeTour",
  async ({ _id }, { rejectWithValue }) => {
    try {
      const response = await api.likeTour(_id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getblogsByUser = createAsyncThunk(
  "tour/getblogsByUser",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await api.getblogsByUser(userId);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteTour = createAsyncThunk(
  "tour/deleteTour",
  async ({ id, toast }, { rejectWithValue }) => {
    try {
      const response = await api.deleteTour(id);
      toast.success("Tour Deleted Successfully");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateTour = createAsyncThunk(
  "tour/updateTour",
  async ({ id, updatedTourData, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.updateTour(updatedTourData, id);
      toast.success("Tour Updated Successfully");
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const searchblogs = createAsyncThunk(
  "tour/searchblogs",
  async (searchQuery, { rejectWithValue }) => {
    try {
      const response = await api.getblogsBySearch(searchQuery);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getblogsByTag = createAsyncThunk(
  "tour/getblogsByTag",
  async (tag, { rejectWithValue }) => {
    try {
      const response = await api.getTagblogs(tag);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getRelatedblogs = createAsyncThunk(
  "tour/getRelatedblogs",
  async (tags, { rejectWithValue }) => {
    try {
      const response = await api.getRelatedblogs(tags);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const blogslice = createSlice({
  name: "tour",
  initialState: {
    tour: {},
    blogs: [],
    userblogs: [],
    tagblogs: [],
    relatedblogs: [],
    currentPage: 1,
    numberOfPages: null,
    error: "",
    loading: false,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    [createTour.pending]: (state, action) => {
      state.loading = true;
    },
    [createTour.fulfilled]: (state, action) => {
      state.loading = false;
      state.blogs = [action.payload];
    },
    [createTour.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getblogs.pending]: (state, action) => {
      state.loading = true;
    },
    [getblogs.fulfilled]: (state, action) => {
      state.loading = false;
      state.blogs = action.payload.data;
      state.numberOfPages = action.payload.numberOfPages;
      state.currentPage = action.payload.currentPage;
    },
    [getblogs.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getTour.pending]: (state, action) => {
      state.loading = true;
    },
    [getTour.fulfilled]: (state, action) => {
      state.loading = false;
      state.tour = action.payload;
    },
    [getTour.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getblogsByUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getblogsByUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.userblogs = action.payload;
    },
    [getblogsByUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [deleteTour.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteTour.fulfilled]: (state, action) => {
      state.loading = false;
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.userblogs = state.userblogs.filter((item) => item._id !== id);
        state.blogs = state.blogs.filter((item) => item._id !== id);
      }
    },
    [deleteTour.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [updateTour.pending]: (state, action) => {
      state.loading = true;
    },
    [updateTour.fulfilled]: (state, action) => {
      state.loading = false;
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.userblogs = state.userblogs.map((item) =>
          item._id === id ? action.payload : item
        );
        state.blogs = state.blogs.map((item) =>
          item._id === id ? action.payload : item
        );
      }
    },
    [updateTour.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [likeTour.pending]: (state, action) => {},
    [likeTour.fulfilled]: (state, action) => {
      state.loading = false;
      const {
        arg: { _id },
      } = action.meta;
      if (_id) {
        state.blogs = state.blogs.map((item) =>
          item._id === _id ? action.payload : item
        );
      }
    },
    [likeTour.rejected]: (state, action) => {
      state.error = action.payload.message;
    },

    [searchblogs.pending]: (state, action) => {
      state.loading = true;
    },
    [searchblogs.fulfilled]: (state, action) => {
      state.loading = false;
      state.blogs = action.payload;
    },
    [searchblogs.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getblogsByTag.pending]: (state, action) => {
      state.loading = true;
    },
    [getblogsByTag.fulfilled]: (state, action) => {
      state.loading = false;
      state.tagblogs = action.payload;
    },
    [getblogsByTag.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getRelatedblogs.pending]: (state, action) => {
      state.loading = true;
    },
    [getRelatedblogs.fulfilled]: (state, action) => {
      state.loading = false;
      state.relatedblogs = action.payload;
    },
    [getRelatedblogs.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const { setCurrentPage } = blogslice.actions;

export default blogslice.reducer;
