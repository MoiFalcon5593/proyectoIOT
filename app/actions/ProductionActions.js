import { SAVE_LIST_FERTILIZANTES, SAVE_LIST_PRODUCCTION, SAVE_LIST_RIESGO } from './types'
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

export const AddRegistersFertilizantes = (encargado, tipofer, tipoabo, costofer, costoabo, foto1, foto2) => async (dispatch, getState) => {
    let { ListFertilizantes } = getState().ProductionReducer;
    console.log(ListFertilizantes);
    ListFertilizantes.push({ encargado, tipofer, tipoabo, costofer, costoabo, foto1, foto2 })
    dispatch({
        type: SAVE_LIST_FERTILIZANTES,
        payload: ListFertilizantes
    })
}

export const AddRegistersRiesgo = (encargado, costo, foto1, foto2, foto3) => async (dispatch, getState) => {
    let { ListRiesgo } = getState().ProductionReducer;
    console.log(ListRiesgo);
    console.log("aaagggr");
    ListRiesgo.push({ encargado, costo, foto1, foto2, foto3 })
    dispatch({
        type: SAVE_LIST_RIESGO,
        payload: ListRiesgo
    })
}

export const SaveListRegisters= (list) => async (dispatch, getState) => {
    dispatch({
        type: SAVE_LIST_PRODUCCTION,
        payload: list
    })
}

