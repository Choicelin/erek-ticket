/**
 * @Author: PDK
 * @Date:   2019-04-24
 * @desc 汽车票模块redux
 * @Last modified by:   PDK
 * @Last modified time:  2019-04-24
 */
import { PlaneList } from '@utils/app'

const types = {
  SET_BUS_LIST: 'bus/SET_BUS_LIST',
  SET_FROM_CITYNAME: 'bus/SET_FROM_CITYNAME',
  SET_TO_CITYNAME: 'bus/SET_TO_CITYNAME',
  SET_START_TIME: 'bus/SET_START_TIME',
  CLEAR_DATA: 'bus/CLEAR_DATA'
}

export const actions = {
  setPlaneList() {
    // 发送请求获取数据
    return {
      type: types.SET_BUS_LIST,
      payload: {
        list: [...PlaneList],
        pageNum: 1,
        pageSize: 20
      }
    }
  },
  setFromCity(jsondata) {
    return { type: types.SET_FROM_CITYNAME, payload: jsondata }
  },
  setToCity(jsondata) {
    return { type: types.SET_TO_CITYNAME, payload: jsondata }
  },
  setStartTime(jsondata) {
    return { type: types.SET_START_TIME, payload: jsondata }
  },
  clearData() {
    return { type: types.CLEAR_DATA }
  }
}

const initialState = {
  list: [],
  fromCityName: '西安',
  toCityName: '昆明',
  startTime: '2019-04-20',
  pageNum: 1,
  pageSize: 10
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case types.SET_BUS_LIST:
      return {
        ...state,
        list: [...payload.list],
        pageNum: payload.pageNum,
        pageSize: payload.pageSize
      }
    case types.SET_FROM_CITYNAME:
      return {
        ...state,
        fromCityName: payload
      }
    case types.SET_TO_CITYNAME:
      return {
        ...state,
        toCityName: payload
      }
    case types.SET_START_TIME:
      return {
        ...state,
        startTime: payload
      }
    case types.CLEAR_DATA:
      return {
        ...state,
        list: []
      }
    default:
      return state
  }
}