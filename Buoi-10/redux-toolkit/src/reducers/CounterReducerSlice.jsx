import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const CounterReducerSlice =createSlice(
  {
    name:"conter",
    initialState:{
      value:0
    },


    reducers:{
      increment:(state,action)=>{
return state
      }
    }
  }

)

export const {increment}=CounterReducerSlice.action

export default CounterReducerSlice.reducer
