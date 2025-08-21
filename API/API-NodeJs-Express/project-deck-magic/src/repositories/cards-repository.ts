interface CardModel {
    id: number,
    name: string,
}

const dataBase:CardModel[] = [
    {
        id: 1,
        name: "Serra Angel"
    },
    {
        id: 2,
        name:  "Lightning Bolt"
    }
]

export const findAllCards = async ():Promise<CardModel[]> => {
    return dataBase;
}

export const findCardById = async (id:number):Promise<CardModel | undefined> => {
    return dataBase.find(card => card.id == id)
}