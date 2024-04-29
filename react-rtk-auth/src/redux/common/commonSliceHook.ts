import { CommonState } from "../../types/store-types";

const initialCommonState: CommonState = {
  data: [],
  formData: {},
  showModal: false,
  loading: false,
  error: {},
  pagination: {
    page: 1,
    rowsPerPage: 20,
    sortBy: "id",
    descending: true,
    total: 0,
  },
  filters: {},
  progress: 0,
  paginationComponentOptions: {
    rowsPerPageText: "Rows per page:",
    rangeSeparatorText: "of",
    selectAllRowsItem: true,
    selectAllRowsItemText: "All",
  },
  url: "",
};

const setCommonPage = (
  state: CommonState,
  { payload }: { payload: number }
) => {
  state.pagination.page = payload;
};
const setCommonRowsPerPage = (
  state: CommonState,
  { payload }: { payload: number }
) => {
  state.pagination.rowsPerPage = payload;
};
const setCommonSortBy = (
  state: CommonState,
  { payload }: { payload: string }
) => {
  state.pagination.sortBy = payload;
};
const setCommonDescending = (
  state: CommonState,
  { payload }: { payload: boolean }
) => {
  state.pagination.descending = payload;
};
const setCommonFilters = (
  state: CommonState,
  { payload }: { payload: { name: string; value: any } }
) => {
  const { name, value } = payload;
  state.filters = {
    ...state.filters,
    [name]: value,
  };
};

const clearCommonError = (
  state: CommonState,
  { payload }: { payload: any }
) => {
  const { fieldName } = payload;
  delete state.error[fieldName];
};

const setCommonProgress = (
  state: CommonState,
  { payload }: { payload: any }
) => {
  state.progress = payload;
};

const deleteFilterKeys = (
  state: CommonState,
  { payload }: { payload: any }
) => {
  delete state.filters[payload.keyName];
};

const allReset = (state: any) => {
  state = initialCommonState;
  return state;
};

const setCommonData = (state: CommonState, { payload }: { payload: any[] }) => {
  state.data = payload;
};

const setCommonFormData = (
  state: CommonState,
  { payload }: { payload: any }
) => {
  const { name, value } = payload;
  state.formData = {
    ...state.formData,
    [name]: value,
  };
};

const setCommonShowModalFalse = (state: CommonState) => {
  state.showModal = false;
};
const setCommonShowModalTrue = (state: CommonState) => {
  state.showModal = true;
};
const setCommonShowModal = (
  state: CommonState,
  { payload }: { payload: boolean }
) => {
  state.showModal = payload;
};

const setCommonEditFormData = (
  state: CommonState,
  { payload }: { payload: any }
) => {
  state.formData = payload;
};

const setCommonFilterNull = (state: CommonState) => {
  state.filters = {};
};
const setCommonFormDataNull = (state: CommonState) => {
  state.formData = {};
};

export {
  initialCommonState,
  setCommonPage,
  setCommonRowsPerPage,
  setCommonSortBy,
  setCommonDescending,
  setCommonFilters,
  setCommonFormData,
  clearCommonError,
  setCommonProgress,
  deleteFilterKeys,
  allReset,
  setCommonData,
  setCommonShowModalFalse,
  setCommonShowModalTrue,
  setCommonShowModal,
  setCommonEditFormData,
  setCommonFilterNull,
  setCommonFormDataNull,
};
