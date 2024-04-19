const fs = require('fs');

const dbCompositor = [];

const compositor1 = {
    idCompositor: 1234,
    nomeCompleto: "B'z",
    cpf: '123.456.789-00',
    cade: 1234
}

const compositor2 = {
    idCompositor: 1001,
    nomeCompleto: "BOOWY",
    cpf: '111.444.555.-66',
    cade: 4444
}


dbCompositor.push(compositor1);
dbCompositor.push(compositor2);

const musica1 = {
    id_gravacao: 12345,
    ipi_number: 'aaaabbbbcccc',
    id_colecao: 'abcd1234',
    idCompositor: 1234,
    nomeCompleto: "B'z",
    numeroFaixa: 1,
    tituloFaixa: 'GiriGiri Chop',
    nomeAlbum: 'BROTHERHOOD',
    album: 1111
}

const musica2 = {
    id_gravacao: 12346,
    ipi_number: 'aaaabbbbcccc',
    id_colecao: 'abcd1234',
    idCompositor: 1234,
    nomeCompleto: "B'z",
    numeroFaixa: 2,
    tituloFaixa: 'Ikasete Okure',
    nomeAlbum: 'BROTHERHOOD',
    album: 1111
}

const musica3 = {
    id_gravacao: 4444,
    ipi_number: 'qqqqwwwweeee',
    id_colecao: 'qwertyui',
    idCompositor: 1001,
    nomeCompleto: "BOOWY",
    numeroFaixa: 1,
    tituloFaixa: 'B. Blue',
    nomeAlbum: 'BEAT EMOTION',
    album: 44445
}

const album1 = {
    artistaCod: 1234,
    codigo: 1111,
    nome: 'Brotherhood',
    genero: ['J-rock'],
    faixas: 2,
    copiasFisicas: 2500,
    musicas: []
};
const album2 = {
    artistaCod: 1001,
    codigo: 44445,
    nome: 'BEAT EMOTION',
    genero: ['Punk Pop', 'J-Pop'],
    faixas: 1,
    copiasFisicas: 1500,
    musicas: [],
};

const artista1 = {
    agente: 'SAKURAI',
    codigoArtista: 1234,
    dataGravacao: '11/12/1999',
    pais: 'JAPÃO',
    discografia: []
}

const artista2 = {
    agente: 'AGATHA',
    codigoArtista: 1001,
    dataGravacao: '21/10/1986',
    pais: 'JAPÃO',
    discografia: []
}

function adicionaMusicaAlbum(musica, album){
    if (musica.album === album.codigo){
        album.musicas.push(musica);
    } else {
        console.log("Esta faixa não pertence a esse album");
    }
}

// Adicionam-se as musicas nos reespectivos albuns
adicionaMusicaAlbum(musica1, album1);
adicionaMusicaAlbum(musica2, album1);
adicionaMusicaAlbum(musica3, album2);

console.log(album1); // Imprime o album 1
console.log(album2); // Imprime o album 2

// Essa função checa se o album pertence ao artista
function checaAlbumArtista(album, artista){
    if (album.artistaCod === artista.codigoArtista) {
        console.log("Este album pertence a esse artista");
    } else {
        console.log("Esse album NÃO pertence a esse artista");
    }
}

// Faz a checagem
checaAlbumArtista(album1, artista1);
checaAlbumArtista(album2, artista2);

// Salva a base de dados dos compositores para json
const dbCompositorJson = JSON.stringify(dbCompositor);

// Salva a base de dados dos albuns para json
const album1Json = JSON.stringify(album1);
const album2Json = JSON.stringify(album2);

//especificar o nome do arquivo
const nomeDoArquivo1 = 'compositores.json';
 
fs.writeFile(nomeDoArquivo1,dbCompositorJson,(err)=> {
    if(err) { console.error('ocoreu um erro na gravação', err);
    return;
    }
        console.log("Arquivo json criado");
    }
)

const nomeDoArquivo2 = 'album1.json';
 
fs.writeFile(nomeDoArquivo2,album1Json,(err)=> {
    if(err) { console.error('ocoreu um erro na gravação', err);
    return;
    }
        console.log("Arquivo json criado");
    }
)

const nomeDoArquivo3 = 'album2.json';
 
fs.writeFile(nomeDoArquivo3,album2Json,(err)=> {
    if(err) { console.error('ocoreu um erro na gravação', err);
    return;
    }
        console.log("Arquivo json criado");
    }
)