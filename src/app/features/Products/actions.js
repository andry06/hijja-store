import { SET_CATEGORY, SET_SEARCH } from "./constants";

export const actSetCategory = (payload) => ({
    type: SET_CATEGORY,
    payload
});

export const actSetSearch = (payload) => ({
    type: SET_SEARCH,
    payload
});



