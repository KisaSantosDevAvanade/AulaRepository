Projeto de base de dados de clientes de uma GRAVADORA.

Cliente é registrado dentro da base de dados do sistema:
Irá ser criado um objeto chamado Cliente. 
A estrutura é:
Classe Cliente: 
{
	Nome_do_agente: String,
	Banda: String,
	Ano_de_Comeco: Int,
	País: String,
	Músicas: [
	{
		Nome: String,
		Ano: Int,
		Genero: String,
		Compositor: String
	}
	],
	Discos_Vendidos: Int
}

então é salvo na base de dados.

A base de dados então lê todas as informações de musicas existentes ou inexistentes da banda.

Em seguida, é feito o update da base de dados com as músicas gravadas. Sendo enviadas Demos e músicas cruas (sem tratamento de audio) para ser movido para uma base de dados de faixas tratadas (após tratamento)

Por fim, se necessário, é feita uma função para remover as músicas indesejadas do sistema, ou em caso de quebra de contrato com o agente e o musico.
