# Instalar Axios

Preciso usar o axios(dependência) para consumir API: https://axios-http.com/ptbr/docs/intro

Comando no terminal:

`npm install axios`

importa ele:

`import axios from "axios";`

chama a API com o fetch:

```
import axios from "axios";
import { DrawModel } from "../components/CardView/props";
import { DRAW_API_BASE } from "../constants/draw";

interface ApiResponse {
galeria: DrawModel[]
}

export const fetchGetDrawData = async(id:number) => {
    try{
        //traz toda a lista da pasta data/samji.json
        const response = await axios.get<ApiResponse>(DRAW_API_BASE)

        //pega os dados de um objeto só
        const drawData = response.data.galeria.find((draw) => draw.id === id || null)
        return drawData;

    } catch(error){
        console.log("Erro ao buscar dados da api", error);
    }
}
```

# Actions API

Precisamos usar um arquivo intermediário para conversar com a API e o component (mais prático a manutenção assim), os actions:

![Actions API](./assets/actions.png)

Precisamos criar o estado que recebe essa API

importa o use state, cria a constante que vai receber a api:

`const [drawData, setDrawData] = useState<DrawModel | null>(null);`

Cria assim que a tela iniciar, usando o useEffect:

```
// () -> significa que a função é auto invocável (executa assim que é lida)
useEffect(()=>{
    (async()=>{})();
})
```

Passa a função do action que carrega os dados, com id a o set como parâmetros: 

```
useEffect(()=>{
    (async()=>{
        await loadDrawData(1, setDrawData)
    })();
})
```

No actions.ts:

```
import { fetchGetDrawData } from "../../api/getDraws"
import { DrawModel } from "./props"

export const loadDrawData = async(id:number, setDrawData:React.Dispatch<React.SetStateAction<DrawModel | null>>) => {
    //solicita para API
    const response = await fetchGetDrawData(id)

    try{
        if(response){
            setDrawData(response)
        }
    }catch(error){
        console.log("Error ao buscar a api", error)
        setDrawData(null)
    }
}
```

# Processo consumir API com axios

![Processos Consumir API](./assets/processo_consumir_api.png)