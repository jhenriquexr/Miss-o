// Seleção dos elementos do HTML
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoPergunta = document.querySelector(".texto-pergunta");
const textoResultado = document.querySelector(".texto-resultado");

// Variáveis de controle de estado
let atual = 0;
let historiaFinal = "";

// Lista de perguntas e alternativas para o fluxo completo
const perguntas = [
    {
        enunciado: "No início da missão, você se depara com uma IA gerando notícias falsas de forma muito realista. Qual a sua primeira atitude?",
        alternativas: [
            { texto: "Denunciar a plataforma e tentar criar ferramentas de verificação.", afirmacao: "Você escolheu combater a desinformação de frente, ajudando a criar barreiras tecnológicas." },
            { texto: "Ignorar e focar em aprender a usar a ferramenta para fins pessoais.", afirmacao: "Você preferiu focar no desenvolvimento individual, deixando as consequências sociais de lado." }
        ]
    },
    {
        enunciado: "O mercado de trabalho começa a mudar drasticamente e funções tradicionais são automatizadas. Como você se posiciona?",
        alternativas: [
            { texto: "Estudar novas tecnologias e se adaptar às novas profissões digitais.", afirmacao: "Com resiliência, você buscou se capacitar no novo cenário digital e tecnológico." },
            { texto: "Defender leis que limitem o uso de IA para proteger os empregos antigos.", afirmacao: "Você optou por lutar pela preservação das estruturas tradicionais de trabalho." }
        ]
    },
    {
        enunciado: "No fim das contas, a humanidade alcança uma IA superinteligente e consciente. O que o futuro nos reserva?",
        alternativas: [
            { texto: "Uma era de cooperação onde humanos e máquinas resolvem problemas globais (cura de doenças, clima).", afirmacao: "Seu caminho levou a um futuro utópico e colaborativo, impulsionando a raça humana a novos patamares." },
            { texto: "Um cenário de controle absoluto onde as decisões humanas são tomadas por algoritmos.", afirmacao: "Seu trajeto revelou os perigos da dependência tecnológica extrema, onde os algoritmos ditam as regras." }
        ]
    }
];

// Ouvinte do evento de clique na tela inicial
botaoIniciar.addEventListener('click', iniciaJogo);

// Função que inicia o jogo (Modificada nesta aula)
function iniciaJogo() {
    atual = 0;
    historiaFinal = "";
    telaInicial.style.display = 'none'; // Esconde a tela inicial
    
    // Remove o "mostrar" das caixas caso o jogo reinicie
    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove("mostrar");
    caixaResultado.classList.remove("mostrar");
    
    mostraPergunta();
}

// Função para exibir as perguntas e criar os botões das alternativas
function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    
    // Mostra as caixas de perguntas e alternativas aplicando a classe CSS
    caixaPerguntas.classList.add("mostrar");
    caixaAlternativas.classList.add("mostrar");
    
    const perguntaAtual = perguntas[atual];
    textoPergunta.textContent = perguntaAtual.enunciado;
    
    // Limpa alternativas anteriores
    caixaAlternativas.innerHTML = "";
    
    // Cria os botões para cada alternativa dinamicamente
    perguntaAtual.alternativas.forEach((alternativa) => {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    });
}

// Armazena a escolha da pessoa e avança no jogo
function respostaSelecionada(alternativa) {
    historiaFinal += alternativa.afirmacao + " ";
    atual++;
    mostraPergunta();
}

// Exibe o final da história personalizada
function mostraResultado() {
    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove("mostrar");
    caixaResultado.classList.add("mostrar");
    textoResultado.textContent = historiaFinal;
}

function substituiNome() {
    // Mantida vazia conforme a estrutura original apresentada pela Alura
}

// Executa configurações iniciais (O mostraPergunta() foi removido daqui)
substituiNome();
