import { AdminActionType } from "../constants/adminActionType";

export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case AdminActionType.USER_LIST_REQUEST:
      return { loading: true };
    case AdminActionType.USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case AdminActionType.USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userApprovalReducer = (state = {}, action) => {
  switch (action.type) {
    case AdminActionType.USER_APPROVAL_REQUEST:
      return { loading: true };
    case AdminActionType.USER_APPROVAL_SUCCESS:
      return { loading: false, success: action.payload };
    case AdminActionType.USER_APPROVAL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addCountryReducer = (state = {}, action) => {
  switch (action.type) {
    case AdminActionType.COUNTRY_ADD_REQUEST:
      return { loading: true };
    case AdminActionType.COUNTRY_ADD_SUCCESS:
      return { loading: false, countryInfo: action.payload };
    case AdminActionType.COUNTRY_ADD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listCountryReducer = (state = { countries: [] }, action) => {
  switch (action.type) {
    case AdminActionType.COUNTRY_LIST_REQUEST:
      return { loading: true };
    case AdminActionType.COUNTRY_LIST_SUCCESS:
      return { loading: false, countries: action.payload };
    case AdminActionType.COUNTRY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteCountryReducer = (state = {}, action) => {
  switch (action.type) {
    case AdminActionType.COUNTRY_DELETE_REQUEST:
      return { loading: true };
    case AdminActionType.COUNTRY_ADD_SUCCESS:
      return { loading: false, success: action.payload };
    case AdminActionType.COUNTRY_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateCountryReducer = (state = { cdata: [] }, action) => {
  switch (action.type) {
    case AdminActionType.COUNTRY_UPDATE_REQUEST:
      return { loading: true };
    case AdminActionType.COUNTRY_UPDATE_SUCCESS:
      return { loading: false, cdata: action.payload };
    case AdminActionType.COUNTRY_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addStateReducer = (state = {}, action) => {
  switch (action.type) {
    case AdminActionType.STATE_ADD_REQUEST:
      return { loading: true };
    case AdminActionType.STATE_ADD_SUCCESS:
      return { loading: false, stateInfo: action.payload };
    case AdminActionType.STATE_ADD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listStateReducer = (state = { states: [] }, action) => {
  switch (action.type) {
    case AdminActionType.STATE_LIST_REQUEST:
      return { loading: true };
    case AdminActionType.STATE_LIST_SUCCESS:
      return { loading: false, states: action.payload };
    case AdminActionType.STATE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteStateReducer = (state = {}, action) => {
  switch (action.type) {
    case AdminActionType.STATE_DELETE_REQUEST:
      return { loading: true };
    case AdminActionType.STATE_ADD_SUCCESS:
      return { loading: false, success: action.payload };
    case AdminActionType.STATE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateStateReducer = (state = { statedata: [] }, action) => {
  switch (action.type) {
    case AdminActionType.STATE_UPDATE_REQUEST:
      return { loading: true };
    case AdminActionType.STATE_UPDATE_SUCCESS:
      return { loading: false, statedata: action.payload };
    case AdminActionType.STATE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const changePasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case AdminActionType.CHANGE_PASSWORD_REQUEST:
      return { loading: true };
    case AdminActionType.CHANGE_PASSWORD_SUCCESS:
      return { loading: false, success: action.payload };
    case AdminActionType.CHANGE_PASSWORD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addComplainSubCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case AdminActionType.ADD_COMPLAINT_SUB_CATEGORY_REQUEST:
      return { loading: true };
    case AdminActionType.ADD_COMPLAINT_SUB_CATEGORY_SUCCESS:
      return { loading: false, success: action.payload };
    case AdminActionType.ADD_COMPLAINT_SUB_CATEGORY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const ListComplainSubCategoryReducer = (
  state = { SubcatList: [] },
  action
) => {
  switch (action.type) {
    case AdminActionType.COMPLAINT_SUB_CATEGORY_LIST_REQUEST:
      return { loading: true };
    case AdminActionType.COMPLAINT_SUB_CATEGORY_LIST_SUCCESS:
      return { loading: false, SubcatList: action.payload };
    case AdminActionType.COMPLAINT_SUB_CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const DeleteComplainSubCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case AdminActionType.COMPLAINT_SUB_CATEGORY_DELETE_REQUEST:
      return { loading: true };
    case AdminActionType.COMPLAINT_SUB_CATEGORY_DELETE_SUCCESS:
      return { loading: false, cCat: action.payload };
    case AdminActionType.COMPLAINT_SUB_CATEGORY_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const UpdateSubCategoryReducer = (state = { subcat: [] }, action) => {
  switch (action.type) {
    case AdminActionType.COMPLAINT_SUBCAT_UPDATE_REQUEST:
      return { loading: true };
    case AdminActionType.COMPLAINT_SUBCAT_UPDATE_SUCCESS:
      return { loading: false, subcat: action.payload };
    case AdminActionType.COMPLAINT_SUBCAT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addComplainCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case AdminActionType.ADD_COMPLAINT_CATEGORY_REQUEST:
      return { loading: true };
    case AdminActionType.ADD_COMPLAINT_CATEGORY_SUCCESS:
      return { loading: false, success: action.payload };
    case AdminActionType.ADD_COMPLAINT_CATEGORY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const ListComplainCategoryReducer = (
  state = { catList: [] },
  action
) => {
  switch (action.type) {
    case AdminActionType.COMPLAINT_CATEGORY_LIST_REQUEST:
      return { loading: true };
    case AdminActionType.COMPLAINT_CATEGORY_LIST_SUCCESS:
      return { loading: false, catList: action.payload };
    case AdminActionType.COMPLAINT_CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const DeleteComplainCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case AdminActionType.COMPLAINT_CATEGORY_DELETE_REQUEST:
      return { loading: true };
    case AdminActionType.COMPLAINT_CATEGORY_DELETE_SUCCESS:
      return { loading: false, cCat: action.payload };
    case AdminActionType.COMPLAINT_CATEGORY_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const UpdateCategoryReducer = (state = { cat: [] }, action) => {
  switch (action.type) {
    case AdminActionType.COMPLAINT_CATEGORY_UPDATE_REQUEST:
      return { loading: true };
    case AdminActionType.COMPLAINT_CATEGORY_UPDATE_SUCCESS:
      return { loading: false, cat: action.payload };
    case AdminActionType.COMPLAINT_CATEGORY_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const AddComplaintRemarksReducer = (state = {}, action) => {
  switch (action.type) {
    case AdminActionType.ADD_COMPLAINT_REMARKS_REQUEST:
      return { loading: true };
    case AdminActionType.ADD_COMPLAINT_REMARKS_SUCCESS:
      return { loading: false, success: action.payload };
    case AdminActionType.ADD_COMPLAINT_REMARKS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const ListComplaintRemarksReducer = (state = { lcr: [] }, action) => {
  switch (action.type) {
    case AdminActionType.LIST_COMPLAINT_REMARKS_REQUEST:
      return { loading: true };
    case AdminActionType.LIST_COMPLAINT_REMARKS_SUCCESS:
      return { loading: false, lcr: action.payload };
    case AdminActionType.LIST_COMPLAINT_REMARKS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const updateComplaintRemarksReducer = (state = {}, action) => {
  switch (action.type) {
    case AdminActionType.COMPLAINT_REMARKS_UPDATE_REQUEST:
      return { loading: true };
    case AdminActionType.COMPLAINT_REMARKS_UPDATE_SUCCESS:
      return { loading: false, success: action.payload };
    case AdminActionType.COMPLAINT_REMARKS_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
