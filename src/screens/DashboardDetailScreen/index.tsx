import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Background from '../../components/Background'
import { INavigationInterface } from '../../modules/INavigationInterface'
import { useMovie } from '../../context/MovieContext'
import { Image, SvgXml } from 'react-native-svg'
import { arrowLeft } from '../../assets/icons/arrow-left'
import { AuthorNameText, BackButton, BannerContainer, Container, ContainerInfoHeader, DetailsMovie, OpeningCrawlText, Title, YearText } from './styles'
import { getImage } from '../../utils/Banners'
import IMovieInterface from '../../interfaces/IMovieInterface'

export default function DashboardDetailScreen({ navigation }: INavigationInterface) {
    const { movie } = useMovie() as { movie: IMovieInterface };

    useEffect(() => {
        if (!movie)
            navigation.goBack()
    }, [movie])

    const imageSource = getImage(movie.id);
    return (
        <Background logoutOption={true}>
            <Container>
                <BannerContainer source={imageSource} resizeMode='stretch' />
                <ContainerInfoHeader>
                    <Title numberOfLines={2} ellipsizeMode='tail'>{movie.title}</Title>
                    <DetailsMovie>
                        <AuthorNameText numberOfLines={2} ellipsizeMode='tail'>{movie.director}</AuthorNameText>
                        <YearText>{typeof movie.release_date === 'string' ? '' : movie.release_date?.getFullYear()}</YearText>
                    </DetailsMovie>
                </ContainerInfoHeader>
                <OpeningCrawlText>{movie.opening_crawl}</OpeningCrawlText>
            </Container>
            <BackButton onPress={navigation.goBack}>
                <SvgXml xml={arrowLeft} height="24px" width="24px" />
            </BackButton>
        </Background>
    )
}