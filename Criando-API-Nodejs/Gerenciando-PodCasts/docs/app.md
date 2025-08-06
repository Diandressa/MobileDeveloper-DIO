# Podcast Menager

### Descrição
Um app ao estilo Netflix, onde posso centralizar diferentes episódios de podcasts separados por categoria

### Domínio
Podcasts feitos em vídeo

### Features (funcionalidades)
* Listar os episódios de podcasts em sessões de categorias (saúde, fitness, mentalidade, humor)
* Filtrar episódios por nome de podcasts

### Feature listar
Listar os episódios de podcasts em sessões de categorias

> **Como vou implementar:**
Vou retornar em uma api rest(json) o nome podcast, nome do episódio, imagem de capa, link do vídeo, categoria do episódio

```js
[
    {
        podcastName: "flow",
        episode: "MEIO BRASILEIRA E PEDRO - Extra Flow",
        videoId: "exUYInNk58I",
        cover: "https://i.ytimg.com/vi/exUYInNk58I/hq720.jpg",
        link: "https://www.youtube.com/watch?v=exUYInNk58I",
        category: ["internacional", "influenciador"]
    },
    {
        podcastName: "flow",
        episode: "LUANA ZUCOLOTO - Flow #404",
        videoId: "jf5NoJhMyDw",
        cover: "https://i.ytimg.com/vi/jf5NoJhMyDw/hq720.jpg",
        link: "https://www.youtube.com/watch?v=jf5NoJhMyDw",
        category: ["humor", "influenciador"]
    }
]

```

### Feature filtrar
Listar os episódios de podcasts em sessões de categorias

> **Como vou implementar:**
Vou retornar em uma api rest(json) o nome podcast, nome do episódio, imagem de capa, link do vídeo, categoria do episódio

### Anotações
Zoom-out => definir cada parte, e depois olhar o todo