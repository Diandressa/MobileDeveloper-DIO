export interface CardModel {
    id: number;
    name: string;
    src: string;
    color: string; 
    type: string;
    effect: string;
    statistics: {
        power: number | null;
        toughness: number | null;  
        mana_cost: string;  
    }  ;
}