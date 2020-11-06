import {
  FETCH_SHIPS_REQUEST,
  FETCH_SHIPS_SUCCESS,
  FETCH_SHIPS_ERROR
} from './constants';

export const fetchShipsReqest = (params) => ({
  type: FETCH_SHIPS_REQUEST,
  params
})

export const fetchShipsSuccess = (content) => ({
  type: FETCH_SHIPS_SUCCESS,
  content
})

export const fetchShipsError = (message) => ({
  type: FETCH_SHIPS_ERROR,
  message
})