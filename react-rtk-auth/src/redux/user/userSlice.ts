import { createSlice } from "@reduxjs/toolkit";
import {
  allReset,
  clearCommonError,
  deleteFilterKeys,
  initialCommonState,
  setCommonData,
  setCommonDescending,
  setCommonEditFormData,
  setCommonFilterNull,
  setCommonFilters,
  setCommonFormData,
  setCommonFormDataNull,
  setCommonPage,
  setCommonProgress,
  setCommonRowsPerPage,
  setCommonShowModal,
  setCommonShowModalFalse,
  setCommonShowModalTrue,
  setCommonSortBy,
} from "../common/commonSliceHook";
import { RootState } from "../../types/store-types";

const userSlice = createSlice({
  name: "users",
  initialState: {
    ...initialCommonState,
    formData: {
      email: "admin@gmail.com",
      password: "password",
    },
    userDetail: {},
  },
  reducers: {
    setPage: setCommonPage,
    setRowsPerPage: setCommonRowsPerPage,
    setSortBy: setCommonSortBy,
    setDescending: setCommonDescending,
    setFilters: setCommonFilters,
    setFormData: setCommonFormData,
    clearError: clearCommonError,
    setProgress: setCommonProgress,
    deleteFilterKeys: deleteFilterKeys,
    allReset: allReset,
    setData: setCommonData,
    setModalFalse: setCommonShowModalFalse,
    setModalTrue: setCommonShowModalTrue,
    setShowModal: setCommonShowModal,
    setEditFormData: setCommonEditFormData,
    setFormDataNull: setCommonFormDataNull,
    setFilterNull: setCommonFilterNull,
    setUserDetail: (state, action) => {
      state.userDetail = action.payload;
    },
  },
});

const userReducer = userSlice.reducer;

export default userReducer;
export const {
  setPage,
  setRowsPerPage,
  setSortBy,
  setDescending,
  setFilters,
  setFormData,
  clearError,
  setProgress,
  setData,
  setModalFalse,
  setModalTrue,
  setShowModal,
  setEditFormData,
  setFormDataNull,
  setUserDetail,
} = userSlice.actions;

export const selectUserFormData = (state: RootState) => state.users.formData;
export const selectUserData = (state: RootState) => state.users.data;
export const selectUserLoading = (state: RootState) => state.users.loading;
export const selectUserError = (state: RootState) => state.users.error;
export const selectUserPagination = (state: RootState) =>
  state.users.pagination;
export const selectUserFilters = (state: RootState) => state.users.filters;
export const selectUserSortBy = (state: RootState) =>
  state.users.pagination.sortBy;
export const selectUserDescending = (state: RootState) =>
  state.users.pagination.sortBy;
export const selectUserPage = (state: RootState) => state.users.pagination.page;
export const selectUserRowsPerPage = (state: RootState) =>
  state.users.pagination.rowsPerPage;
export const selectUserTotal = (state: RootState) =>
  state.users.pagination.total;
export const selectUserPostStore = (state: RootState) => state.posts;
export const selectUserProgress = (state: RootState) => state.users.progress;
export const selectUserRowsPerPageOptions = (state: RootState) =>
  state.users.paginationComponentOptions;