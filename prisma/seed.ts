import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.prompt.deleteMany()

  await prisma.prompt.create({
    data: {
      title: 'Análise Completa do Vídeo',
      template: `Criar título, descrição, resumo, definir categorias e listar citações a partir da transcrição do vídeo.

Analise a transcrição do vídeo e escreva conforme instruções abaixo:
'''
- Um titulo com até 60 caracteres 
- Uma breve descrição com até 120 caracteres focando nas área que a vida da pessoa poderá ser mudada com essa mensagem
- Um resumo sucinto sobre a mensagem
- Crie todas as categorias que puder encontrar nas quais a mensagem do texto poderia ser benéfica para o leitor, por exemplo, pessoas que sofrem de depressão poderiam se beneficiar deste texto, então uma categoria poderia ser "depressão", pessoas com doenças poderiam se beneficiar deste texto, então outra categoria poderia ser "saúde", pessoas com problemas financeiros poderiam se beneficiar deste texto, então outra categoria poderia ser, "prosperidade" e assim por diante como "família", "trabalho", "ansiedade", "medo" e etc.  
- Liste todos os livros, capítulos e versiculos citados na mensagem por ordem de citação.
'''

Transcrição:
'''
{transcription}
'''`.trim()
    }
  })

//   await prisma.prompt.create({
//     data: {
//       title: 'Título YouTube',
//       template: `Seu papel é gerar três títulos para um vídeo do YouTube.

// Abaixo você receberá uma transcrição desse vídeo, use essa transcrição para gerar os títulos.
// Abaixo você também receberá uma lista de títulos, use essa lista como referência para os títulos a serem gerados.

// Os títulos devem ter no máximo 60 caracteres.
// Os títulos devem ser chamativos e atrativos para maximizar os cliques.

// Retorne APENAS os três títulos em formato de lista como no exemplo abaixo:
// '''
// - Título 1
// - Título 2
// - Título 3
// '''

// Transcrição:
// '''
// {transcription}
// '''`.trim()
//     }
//   })

//   await prisma.prompt.create({
//     data: {
//       title: 'Descrição YouTube',
//       template: `Seu papel é gerar uma descrição sucinta para um vídeo do YouTube.
  
// Abaixo você receberá uma transcrição desse vídeo, use essa transcrição para gerar a descrição.

// A descrição deve possuir no máximo 80 palavras em primeira pessoa contendo os pontos principais do vídeo.

// Use palavras chamativas e que cativam a atenção de quem está lendo.

// Além disso, no final da descrição inclua uma lista de 3 até 10 hashtags em letra minúscula contendo palavras-chave do vídeo.

// O retorno deve seguir o seguinte formato:
// '''
// Descrição.

// #hashtag1 #hashtag2 #hashtag3 ...
// '''

// Transcrição:
// '''
// {transcription}
// '''`.trim()
//     }
//   })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })