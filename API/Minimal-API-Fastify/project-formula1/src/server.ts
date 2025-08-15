import fastify from "fastify";

const server = fastify({logger: true});

const teams = [
    {id: 1, name: "McLaren", base: "Woking, UK"},
    {id: 2, name: "Mercedes", base: "Brackley, UK"},
    {id: 2, name: "Red Bull Racing", base: "Milton Keynes, UK"},
]

const drivers = [
    {id: 1, name: "Mas Verstappen", team: "Red Bull Racing"},
    {id: 1, name: "Lewis Hamilton", team: "Ferrari"},
    {id: 1, name: "Lando Norris", team: "McLaren"},
]

server.get("/teams", async(request,response) => {
    response.type("application/json").code(200);
    
    return [teams];
})

server.get("/drivers", async(request, response) => {
    response.type("application/json").code(200);

    return [drivers]
})

server.listen({port: 3333}, ()=> {
    console.log("Server init")
})