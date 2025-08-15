import fastify from "fastify";
import cors from "@fastify/cors"

const server = fastify({logger: true});

server.register(cors, {
    origin: "*",
    methods: ["GET", "POST"]
})

const curiosidades = [
    {
        "id": 1,
        "categoria": "Ciência",
        "titulo": "O Sol é uma estrela comum",
        "descricao": "O Sol é classificado como uma estrela anã amarela e é apenas uma entre bilhões na Via Láctea."
    },
    {
        "id": 2,
        "categoria": "História",
        "titulo": "A primeira foto da história",
        "descricao": "A primeira fotografia permanente foi tirada em 1826 por Joseph Nicéphore Niépce, na França."
    },
    {
        "id": 3,
        "categoria": "Tecnologia",
        "titulo": "O primeiro e-mail",
        "descricao": "O primeiro e-mail da história foi enviado em 1971 por Ray Tomlinson, usando o símbolo @ para separar usuário e máquina."
    },
    {
        "id": 4,
        "categoria": "Natureza",
        "titulo": "Baleias cantoras",
        "descricao": "As baleias jubarte produzem 'canções' complexas que podem durar até 20 minutos e são repetidas por horas."
    },
    {
        "id": 5,
        "categoria": "Espaço",
        "titulo": "A Lua está se afastando",
        "descricao": "A Lua se afasta da Terra cerca de 3,8 cm por ano devido à interação gravitacional."
    },
    {
        "id": 6,
        "categoria": "Animais",
        "titulo": "Polvos têm três corações",
        "descricao": "Dois bombeiam sangue para as brânquias e um para o resto do corpo."
    }
]

const biscoitosDaSorte = [
    {
        "id": 1,
        "mensagem": "Grandes oportunidades estão a caminho, esteja pronta para agarrá-las."
      },
      {
        "id": 2,
        "mensagem": "Sua bondade abrirá portas que você nem imagina."
      },
      {
        "id": 3,
        "mensagem": "Mudanças positivas virão quando você menos esperar."
      },
      {
        "id": 4,
        "mensagem": "Seja paciente, o que você deseja está se aproximando."
      },
      {
        "id": 5,
        "mensagem": "Você atrai aquilo que transmite ao mundo."
      },
      {
        "id": 6,
        "mensagem": "Acredite mais em si mesma, o universo já acredita."
      }
]

server.get("/curiosidades", async(request,response) => {
    response.type("application/json").code(200);
    
    return [curiosidades];
})

server.get("/biscoitosDaSorte", async(request, response) => {
    response.type("application/json").code(200);

    return [biscoitosDaSorte]
})

interface findParams{
    id:string
}

server.get<{Params:findParams}>("/curiosidades/:id", async (request, response)=>{
    const id = parseInt(request.params.id);
    const raffle = biscoitosDaSorte.find(item => item.id === id);

    if(!raffle){
        response.type("application/json").code(404);
        return {message: "Driver Not Found"}
    } else {
        response.type("application/json").code(200);
        return {raffle};
    }
})

server.get<{Params:findParams}>("/biscoitosDaSorte/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const findCuriosity = curiosidades.find(item => item.id === id);

    if(!findCuriosity){
        response.type("application/json").code(404);
        return {message: "Driver Not Found"}
    } else {
        response.type("application/json").code(200);
        return {findCuriosity};
    }
})

server.listen({port: 3333}, ()=> {
    console.log("Server init")
})