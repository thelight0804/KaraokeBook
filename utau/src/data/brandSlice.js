import { createSlice } from '@reduxjs/toolkit'

// 노래방 브랜드 선택
let brand = createSlice({
  name : "brand",
  initialState : "kumyoung",
  reducers : {
    /**
     * 노래방 브랜드 선택 변경
     * @param {any} state 
     * @param {number} action 
     * @returns 
     */
    setBrand(state, action){
      return state = action.payload;
    },
  }
})

export let {setBrand} = brand.actions;
export default brand