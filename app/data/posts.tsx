import React from "react";

const posts = [
  {
    "id": "1",
    "title": "Pequenos Ajustes no Celular, Grandes Mudanças na Sua Rotina",
    "image": "/images/1.jpg",
    "content": (
      <div className="post-content">
        <p>O celular pode ser uma ferramenta incrível de produtividade e bem-estar, mas, quando usado sem controle, pode se tornar um grande vilão da nossa rotina. Aqui estão algumas dicas para equilibrar o uso e tornar seu dispositivo um aliado na sua vida diária:</p>
        <h2>1. Controle as Notificações</h2>
        <p>Desative notificações desnecessárias para evitar distrações constantes. No iOS, vá em Ajustes → Notificações e no Android, em Configurações → Apps e notificações. Priorize apenas o essencial!</p>
        <h2>2. Use o Modo "Não Perturbe"</h2>
        <p>Configure horários específicos para evitar interrupções, especialmente antes de dormir e durante momentos de foco.</p>
        <h2>3. Organize a Tela Inicial</h2>
        <p>Deixe na tela principal apenas os apps que ajudam na sua rotina (calendário, notas, produtividade). Redes sociais e entretenimento podem ficar em pastas separadas para reduzir o uso impulsivo.</p>
        <h2>4. Monitore Seu Tempo de Tela</h2>
        <p>No iPhone, o Screen Time (Tempo de Uso) e no Android, o Bem-estar Digital ajudam a visualizar e limitar o tempo gasto em cada app.</p>
        <h2>5. Adote o "Modo Preto & Branco"</h2>
        <p>Ativar essa configuração reduz o apelo visual dos apps e pode diminuir o uso compulsivo. Teste e veja a diferença!</p>
        <h2>6. Substitua Hábitos Digitais por Alternativas</h2>
        <p>Troque o hábito de checar redes sociais antes de dormir por um livro digital ou app de meditação. Apps como One Sec ajudam a repensar o uso impulsivo.</p>
        <p>Seu celular deve trabalhar a seu favor, não contra você. Pequenas mudanças podem fazer uma grande diferença no seu bem-estar digital!</p>
      </div>
    ),
    "refs": [
      {
        "id": "1",
        "title": "Como Reduzir o Uso de Celular e Melhorar a Saúde",
        "description": "Artigo sobre como reduzir o uso de celular e melhorar a saúde."
      },
      {
        "id": "2",
        "title": "Telas e Sono: Como a Luz Azul Afeta Seu Descanso e o Que Fazer Para Melhorar",
        "description": "Artigo sobre como a luz azul afeta o sono e como melhorar a qualidade do sono."
      }
    ]
  },
  {
    "id": "2",
    "title": "Telas e Sono: Como a Luz Azul Afeta Seu Descanso e o Que Fazer Para Melhorar",
    "image": "/images/2.jpg",
    "content": (
      <>
        <p>O uso de celular, e aparelhos digitais no geral, é amplamente difundido nos dias de hoje. Os impactos das telas na saúde e bem-estar das pessoas são inúmeros e abrangem diversas sub-áreas que podem ser afetadas na vida diária da população. O sono, portanto, é um dos pilares básicos de uma vida equilibrada e saudável, contudo é sabido que o uso cada vez mais sem controle de aparelhos com telas digitais, especialmente perto do horário de dormir, pode causar impacto direto na qualidade e duração do sono do indivíduo, mas por qual motivo exatamente? Existem meios de reduzir esse impacto e melhorar a qualidade do sono? A finalidade deste artigo é, além de tentar responder essas perguntas, simplificar ao máximo tais questões, a fim de elucidar as relações entre tempo de tela e o sono.</p>
        <h2>O ciclo circadiano</h2>
        <p>O ciclo circadiano é o ritmo biológico que regula as funções do corpo em um período de 24 horas, funcionando como um "relógio interno". Ele controla o ciclo sono-vigília, ajustando-se à luminosidade ambiental: quando há luz (dia), o corpo aumenta o estado de alerta e a atividade cerebral; já no escuro (noite), reduz a temperatura corporal e induz o sono, preparando o organismo para descansar.</p>
        <h2>A luz azul e a melatonina</h2>
        <p>O ciclo circadiano depende da luz captada pelos olhos para regular o sono. A luz azul (de alta energia e curto comprimento de onda) é natural durante o dia, mantendo-nos alertas. Ao anoitecer, a escuridão estimula a produção de melatonina – hormônio que induz o sono, reduz a temperatura corporal e aumenta o relaxamento.</p>
        <p>O problema é que telas de celulares, computadores e TVs emitem luz azul artificial, enganando o cérebro. Ao usá-las à noite, o corpo interpreta como se ainda fosse dia, suprimindo a melatonina e atrasando o sono. Sem o contraste entre luz e escuridão, o ritmo circadiano se desregula, prejudicando a qualidade do descanso.</p>
        <h2>Consequências</h2>
        <ul>
          <li>
            <h3>Público Infantil</h3>
            <p>Nas crianças, especialmente nos primeiros cinco anos de vida – fase crucial do neurodesenvolvimento –, a má qualidade do sono devido ao uso de telas pode afetar:</p>
            <ul>
              <li>Comportamento (aumento de irritabilidade)</li>
              <li>Linguagem e aprendizagem</li>
              <li>Regulação emocional e atenção</li>
            </ul>
          </li>
          <li>
            <h3>Adolescentes</h3>
            <p>Estudos com adolescentes associam o uso noturno de telas (≥4h/dia) a:</p>
            <ul>
              <li>Sono fragmentado e insatisfatório</li>
              <li>Fadiga diurna e falta de motivação</li>
              <li>Alterações de humor, estresse e dificuldade de concentração</li>
              <p>Como o cérebro ainda está em desenvolvimento (até ~25 anos), esses efeitos podem ser mais severos.</p>
            </ul>
          </li>
          <li>
            <h3>Sono</h3>
            {/* <p>Mesmo com o cérebro já desenvolvido, adultos sofrem com:</p> */}
            <ul>
              <li>Redução do sono profundo (sono menos reparador)</li>
              <li>Insônia ou acordar cansado</li>
              <li>Fragmentação do sono (devido a notificações e interrupções)</li>
            </ul>
          </li>
        </ul>
        <h2>Como reduzir os efeitos?</h2>
        <p>Embora a única solução definitiva seja não se expor a fontes de luz durante a noite, sabemos que nos dias de hoje isso é quase impossível de se atingir, por isso recomendamos algumas estratégias intermediárias, tais como:</p>
        <ul>
          <li>
            <h3>Filtro de luz azul</h3>
            <p>A maioria dos celulares e até mesmo computadores hoje, vem com a função de luz noturna ou proteção para conforto ocular, o nome varia, mas quando ativado é possível perceber que a luz do dispositivo fica em um tom mais amarelado, tendo em vista que está reduzindo a quantidade de luz azul emitida. Caso seu aparelho não tenha essa opção nativamente, existem aplicativos que aplicam esse tipo de filtro, alguns deles possuem até configuração para ligar automaticamente quando anoitece ou ser ajustado de acordo com a hora do dia. Para quem precisa utilizar telas a noite ou às vezes o dia todo no trabalho, essa opção além de reduzir os impactos no ciclo circadiano, também confere maior conforto ocular.</p>
          </li>
          <li>
            <h3>Higiene do sono</h3>
            <p>Embora reduzir a luz azul dos aparelhos reduza os impactos no sono, não adianta muita coisa se a pessoa continuar se hiperestimulado logo antes de dormir, como jogar videogame, assistir a vídeos ou rolar o “feed” de uma rede social. A higiene do sono consiste basicamente em um “ritual de desconexão”, em que se recomenda:</p>
            <ul>
              <li>Utilizar lâmpadas com luzes mais próximas do amarelo;</li> 
              <li>Evitar ao máximo utilizar aparelhos com telas pelo menos 1h antes de deitar;</li> 
              <li>Evitar ficar deitado na cama antes da hora de dormir: seu cérebro costuma associar que aquele lugar é para onde você vai quando quer dormir, se essa associação deixa de existir pode se tornar mais difícil pegar no sono;</li> 
              <li>Evitar deixar o celular com notificações ligadas ao dormir: a emissão desses sons durante a noite pode interferir nas fases de sono profundo;</li> 
              <li>Mantenha o quarto o mais escuro possível quando for realmente dormir;</li> 
              <li>Caso esteja sem sono, prefira atividades que não precisem do celular, como ler um livro, desenhar, escrever, meditar, etc.</li>
            </ul>
          </li>
        </ul>
      </>
    ),
    "refs": [
      {
        "id": "1",
        "title": "Exposição às telas e impactos na qualidade do sono do público infantil: Uma revisão sistemática (Research, Society and Development)",
        "link": "https://rsdjournal.org/index.php/rsd/article/view/45194"
      },
      {
        "id": "2",
        "title": "Associação entre qualidade do sono e o tempo de tela em adolescentes (Research, Society and Development)",
        "link": "https://rsdjournal.org/index.php/rsd/article/view/16714/14995"
      },
      {
        "id": "3",
        "title": "Tempo de tela, sintomas depressivos e sono: o ensino superior remoto na Covid-19 (Revista Eletrônica Acervo Saúde)",
        "link": "https://acervomais.com.br/index.php/saude/article/view/9686/5824"
      },
      {
        "id": "4",
        "title": "INFLUÊNCIA DA LUZ AZUL SOBRE O SONO (Universidade Tecnológica Federal do Paraná, UTFPR)",
        "link": "https://riut.utfpr.edu.br/jspui/bitstream/1/17548/1/CT_CEEST_XXXVII_2019_15.pdf"
      },
      {
        "id": "5",
        "title": "O que é a 'famosa' luz azul presente nos dispositivos eletrônicos?",
        "link": "https://www.tecmundo.com.br/ciencia/259584-famosa-luz-azul-presente-dispositivos-eletronicos.htm"
      },
      {
        "id": "6",
        "title": "Neurociência: entenda como funciona o cérebro do adolescente",
        "link": "https://edifyeducation.com.br/blog/neurociencia-entenda-como-funciona-o-cerebro-do-adolescente/"
      },
      {
        "id": "7",
        "title": "Higiene do sono: conheça 11 dicas para dormir melhor",
        "link": "https://drauziovarella.uol.com.br/neurologia/higiene-do-sono-conheca-11-dicas-para-dormir-melhor/"
      }
    ]
  },
  {
    "id": "3",
    "title": "Foco e Produtividade: Apps que Podem Transformar Sua Rotina",
    "image": "/images/2.jpg",
    "content": (
      <>
        <p>React Router helps manage navigation in React apps...</p>
      </>
    )
  }
]

export function getPosts() {
  return posts;
}

export function getPostById(id: string) {
  const post = posts.find(post => post.id === id);
  return post ? { ...post } : null; 
}