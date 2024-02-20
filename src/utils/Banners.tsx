//Criado apenas para teste tecnico, o correto é a utilização de URL no retorno da API para imagens
interface IImages {
    [key: number]: number;
}

export const images: IImages = {
    1: require('../assets/ep4.png'),
    2: require('../assets/ep5.png'),
    3: require('../assets/ep6.png'),
    4: require('../assets/ep1.png'),
    5: require('../assets/ep2.png'),
    6: require('../assets/ep3.png'),
};

export function getImage(id: number) {
    return images[id];
}