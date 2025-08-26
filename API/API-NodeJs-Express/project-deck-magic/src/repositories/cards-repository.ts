import { CardModel } from "../models/card-model";
import { StatisticsModel } from "../models/statistics-model";

const dataBase:CardModel[] = [
   {
      "id": 1,
      "name": "Serra Angel",
      "src": "https://repositorio.sbrauble.com/arquivos/in/magic/480610/6721780436fd7-l5smn-8c3ti-e37e6557e459e605f8d4672dda00b16d.jpg",
      "color": "White",
      "type": "Creature — Angel",
      "effect": "Flying, vigilance",
      "statistics": {
        "power": 4,
        "toughness": 4,
        "mana_cost": "3WW"
      }
    },
    {
      "id": 2,
      "name": "Lightning Bolt",
      "src": "https://images.tcdn.com.br/img/img_prod/1042771/rara_carta_magic_the_gathering_lightning_bolt_modern_masters_2015_5579_1_2a88a7a51c60c96b70be02395730a238.jpg",
      "color": "Red",
      "type": "Instant",
      "effect": "Lightning Bolt deals 3 damage to any target.",
      "statistics": {
        "power": null,
        "toughness": null,
        "mana_cost": "R"
      }
    },
    {
      "id": 3,
      "name": "Llanowar Elves",
      "src": "https://cards.scryfall.io/large/front/2/c/2c069fec-9cc4-460b-be28-efb84e9a9ae7.jpg?1645599048",
      "color": "Green",
      "type": "Creature — Elf Druid",
      "effect": "Tap: Add G.",
      "statistics": {
        "power": 1,
        "toughness": 1,
        "mana_cost": "G"
      }
    },
    {
      "id": 4,
      "name": "Counterspell",
      "src": "https://repositorio.sbrauble.com/arquivos/in/magic/480575/66df474525acc-6ejt7-ag1t9-ca65a4a3e1f73cfbe1a6ad85493969f1.jpg",
      "color": "Blue",
      "type": "Instant",
      "effect": "Counter target spell.",
      "statistics": {
        "power": null,
        "toughness": null,
        "mana_cost": "UU"
      }
    },
    {
      "id": 5,
      "name": "Doom Blade",
      "src": "https://repositorio.sbrauble.com/arquivos/in/magic/229/626c0c23a9ba9-xsag6-96t0s-1786456182626c0c23a9bea.jpg",
      "color": "Black",
      "type": "Instant",
      "effect": "Destroy target nonblack creature.",
      "statistics": {
        "power": null,
        "toughness": null,
        "mana_cost": "1B"
      }
    },
    {
      "id": 6,
      "name": "Shivan Dragon",
      "src": "https://repositorio.sbrauble.com/arquivos/in/magic/332/6273e71d08bcd-vn8gw-4toki-1194276766273e71d08c16.jpg",
      "color": "Red",
      "type": "Creature — Dragon",
      "effect": "Flying. {R}: Shivan Dragon gets +1/+0 until end of turn.",
      "statistics": {
        "power": 5,
        "toughness": 5,
        "mana_cost": "4RR"
      }
    },
    {
      "id": 7,
      "name": "Darksteel Ingot",
      "src": "https://gatherer-static.wizards.com/Cards/medium/F5369D21023D3664B43F772A94D95846AE6E79C6F6FA0F4E12CFACB8110F23B2.webp",
      "color": "Colorless",
      "type": "Artifact",
      "effect": "Indestructible. Tap: Add one mana of any color.",
      "statistics": {
        "power": null,
        "toughness": null,
        "mana_cost": "3"
      }
    },
    {
      "id": 8,
      "name": "Pacifism",
      "src": "https://mox.land/cdn/shop/products/1f44e0cc-68bd-49c6-97d2-be9b353d1579.jpg?v=1684188481",
      "color": "White",
      "type": "Enchantment — Aura",
      "effect": "Enchanted creature can't attack or block.",
      "statistics": {
        "power": null,
        "toughness": null,
        "mana_cost": "1W"
      }
    },
    {
      "id": 9,
      "name": "Air Elemental",
      "src": "https://cards.scryfall.io/large/front/0/f/0fc9ba0a-2840-48cb-8cf4-ef2a5f273849.jpg?1562550802",
      "color": "Blue",
      "type": "Creature — Elemental",
      "effect": "Flying",
      "statistics": {
        "power": 4,
        "toughness": 4,
        "mana_cost": "3UU"
      }
    },
    {
      "id": 10,
      "name": "Necropotence",
      "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShB_41nWb0ovWo-1NaoJVvNHm2J_HrpUU6Xg&s",    
      "color": "Black",
      "type": "Enchantment",
      "effect": "Skip your draw step. Pay 1 life: Exile the top card of your library. At the beginning of your next end step, put that card into your hand.",
      "statistics": {
        "power": null,
        "toughness": null,
        "mana_cost": "BBB"
      }
    }
]

export const findAllCards = async ():Promise<CardModel[]> => {
    return dataBase;
}

export const findCardById = async (id:number):Promise<CardModel | undefined> => {
    return dataBase.find(card => card.id == id)
}

export const insertCard = async (card: CardModel) => {
  dataBase.push(card);
}

export const deleteOneCard = async (id:number) => {
  const index = dataBase.findIndex(card => card.id === id);
  if (index !== -1){
    // diferente de -1 significa que encontrou algo
    //deleta posição do index passado, sendo deletado 1 elemento
    dataBase.splice(index, 1);
    return true
  }

  return false
}

export const findAndModifyCard = async (id:number, statistics:StatisticsModel):Promise<CardModel> => {
  const cardIndex = dataBase.findIndex(card => card.id === id);
  if(cardIndex !== -1){
    //pega no banco, com aquele index (mesmo que o id), a chave statistics e substitui pelo valor enviado plo parâmero
    dataBase[cardIndex].statistics = statistics;
  }

  return dataBase[cardIndex]
}