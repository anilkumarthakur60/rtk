const initialCommonState = {
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

const setCommonPage = (state, action) => {
  state.pagination.page = action.payload;
};
const setCommonRowsPerPage = (state, action) => {
  state.pagination.rowsPerPage = action.payload;
};
const setCommonSortBy = (state, action) => {
  state.pagination.sortBy = action.payload;
};
const setCommonDescending = (state, action) => {
  state.pagination.descending = action.payload;
};
const setCommonFilters = (state, action) => {
  const { name, value } = action.payload;rowsPerPageOptions
  const updatedFilters = {
    ...state.filters,
    [name]: value,
  };

  // return {
  //   ...state,
  //   filters: updatedFilters,
  // };
  state.filters = {
    ...state.filters,
    [name]: value,
  };
};

const clearCommonError = (state, action) => {
  const { fieldName } = action.payload;
  delete state.error[fieldName];
};

const setCommonProgress = (state, action) => {
  state.progress = action.payload;
};

const deleteFilterKeys = (state, action) => {
  delete state.filters[action.payload.keyName];
};

const allReset = (state) => {
  state = initialCommonState;
  return state;
};

const setCommonData = (state, action) => {
  state.data = action.payload;
};

const setCommonFormData = (state, action) => {
  const { name, value } = action.payload;
  state.formData = {
    ...state.formData,
    [name]: value,
  };
};

const setCommonShowModalFalse = (state) => {
  state.showModal = false;
};
const setCommonShowModalTrue = (state) => {
  state.showModal = true;
};
const setCommonShowModal = (state, action) => {
  state.showModal = action.payload;
};

const setCommonEditFormData = (state, action) => {
  state.formData = action.payload;
};


const  setCommonFilterNull = (state) => {
    state.filters = {};
}
const setCommonFormDataNull = (state) => {
    state.formData = {};
}

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
  setCommonFormDataNull
};
