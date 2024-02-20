import { View, Text } from 'react-native'
import React from 'react'
import apiSW from '../ApiSW'
import IMovieInterface from '../../interfaces/IMovieInterface';

export async function getDetailMovie(id: number): Promise<IMovieInterface> {
    const response = await apiSW.get(`films/${id}/`);

    if (response.status !== 200) 
        throw new Error('Não foi possível buscar os detalhes do filme');

    return response.data;
}