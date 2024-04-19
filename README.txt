Projeto de base de dados de clientes de uma GRAVADORA.

Cliente é registrado dentro da base de dados do sistema:
Irá ser criado um objeto chamado compositor, musica e album.
A estrutura é:

compositor = {
    idCompositor: int,
    nomeCompleto: string,
    cpf: string	,
    cade: int
}


const artista = {
    agente: string,
    codigoArtista: 1234,
    dataGravacao: dateTime',
    pais: string,
    discografia: [album]
}


musica = {
    id_gravacao: int,
    ipi_number: string,
    id_colecao: string,
    idCompositor: int,
    nomeCompleto: string,
    numeroFaixa: int,
    tituloFaixa: string,
    nomeAlbum: string,
    album: int
}

album = {
    artistaCod: int,
    codigo: int,
    nome: string,
    genero: [string],
    faixas: int,
    copiasFisicas: int,
    musicas: [musica],
}

então é salvo na base de dados.

A base de dados então lê todas as informações de musicas existentes ou inexistentes da banda.

Em seguida, é feito o update da base de dados com as músicas gravadas. adicionando as musicas ao album, e então o album ao compositor/artista.

Por fim, se necessário, é feita uma função para listar os artistas. Checar se os albuns pertencem ao artista correto, e por fim, exportar para um arquivo no formato JSON.
