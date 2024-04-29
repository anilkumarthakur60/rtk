export interface CommonState {
  data: Record<string, any>[];
  formData: Record<string, any>;
  showModal: boolean;
  loading: boolean;
  error: Record<string, any>;
  pagination: {
    page: number;
    rowsPerPage: number;
    sortBy: string;
    descending: boolean;
    total: number;
  };
  filters: Record<string, any>;
  progress: number;
  paginationComponentOptions: {
    rowsPerPageText: string;
    rangeSeparatorText: string;
    selectAllRowsItem: true;
    selectAllRowsItemText: string;
  };
  url: "";
}

export interface UserState extends CommonState {}

export interface PostState extends CommonState {}

export interface StoresType {
  users: UserState;
  posts: PostState;
}

export type RootState = {
  [K in keyof StoresType]: StoresType[K];
};
