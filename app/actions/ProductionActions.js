import { SAVE_LIST_PRODUCCTION } from './types'
import React, { useEffect, useState } from 'react'
import { check, PERMISSIONS, RESULTS } from 'react-native-permissions';

export const AddRegisters = (cantidad, precio, foto, tipoPalta, persona, avatarSource) => async (dispatch, getState) => {
    let { ListProduction } = getState().ProductionReducer;
    console.log(ListProduction);
    ListProduction.push({ cantidad, precio, foto, tipoPalta, persona, avatarSource })
    dispatch({
        type: SAVE_LIST_PRODUCCTION,
        payload: ListProduction
    })
}

export const SaveListRegisters= (list) => async (dispatch, getState) => {
    dispatch({
        type: SAVE_LIST_PRODUCCTION,
        payload: list
    })
}

