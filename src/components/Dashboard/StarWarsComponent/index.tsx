import { View, Text, Image } from 'react-native'
import React from 'react'
import { AuthorNameText, Banner, Container, ContainerData, DetailsMovie, Title, YearText } from './styles'
import { IMovieReducedInterface } from '../../../interfaces/IMovieReducedInterface'
import { getImage, images } from '../../../utils/Banners'

interface IStarWarsComponentProps {
    movie: IMovieReducedInterface
    itemSelected: (id: number) => void
}

export default function StarWarsComponent(props: IStarWarsComponentProps) {
    const imageSource = getImage(props.movie.id);

    return (
        <Container onPress={() => props.itemSelected(props.movie.id)}>
            {props.movie.image && <Banner source={imageSource} resizeMode='cover'/>}
            <ContainerData existsImage={Boolean(props.movie.image)}>
                <Title numberOfLines={1} ellipsizeMode='tail'>{props.movie.title}</Title>
                <DetailsMovie>
                    <AuthorNameText numberOfLines={2} ellipsizeMode='tail'>{props.movie.director}</AuthorNameText>
                    <YearText>{props.movie.release_date.getFullYear()}</YearText>
                </DetailsMovie>
            </ContainerData>
        </Container>
    )
}