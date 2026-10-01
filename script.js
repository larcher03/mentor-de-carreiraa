document.addEventListener('DOMContentLoaded', () => {
  // Elementos do DOM
  const introScreen = document.getElementById('introScreen');
  const quizScreen = document.getElementById('quizScreen');
  const resultScreen = document.getElementById('resultScreen');

  const btnStart = document.getElementById('btnStart');
  const btnPrev = document.getElementById('btnPrev');
  const btnRestart = document.getElementById('btnRestart');

  const progressBar = document.getElementById('progressBar');
  const questionCounter = document.getElementById('questionCounter');
  const questionText = document.getElementById('questionText');
  const optionsContainer = document.getElementById('optionsContainer');

  const resultTitle = document.getElementById('resultTitle');
  const resultDescription = document.getElementById('resultDescription');
  const careersGrid = document.getElementById('careersGrid');
  const coursesList = document.getElementById('coursesList');

  // Banco de Perguntas
  const questions = [
    {
      question: "1. No seu dia a dia na escola ou em casa, qual atividade te dá mais satisfação?",
      options: [
        { text: "Resolver problemas lógicos, desafios matemáticos ou usar computador.", area: "tech" },
        { text: "Ajudar pessoas, ouvir amigos ou entender o comportamento humano.", area: "humanas" },
        { text: "Fazer experimentos, estudar biologia, corpo humano ou natureza.", area: "saude" },
        { text: "Desenhar, criar conteúdo, escrever ou inventar coisas visuais.", area: "artes" },
        { text: "Liderar equipes, organizar eventos ou pensar em formas de ganhar dinheiro.", area: "negocios" }
      ]
    },
    {
      question: "2. Em qual ambiente de trabalho você se imagina daqui a 5 anos?",
      options: [
        { text: "Em um escritório moderno ou de casa (home office), focado em tecnologia.", area: "tech" },
        { text: "Em um hospital, clínica, laboratório ou ao ar livre com meio ambiente.", area: "saude" },
        { text: "Em escolas, ONGs, tribunais ou atendendo pessoas diretamente.", area: "humanas" },
        { text: "Em estúdios criativos, agências de publicidade ou palcos.", area: "artes" },
        { text: "Em grandes empresas, gerenciando projetos ou na sua própria empresa.", area: "negocios" }
      ]
    },
    {
      question: "3. Qual a sua principal habilidade ou ponto forte?",
      options: [
        { text: "Raciocínio analítico, atenção aos detalhes e foco.", area: "tech" },
        { text: "Empatia, boa comunicação e facilidade em lidar com pessoas.", area: "humanas" },
        { text: "Curiosidade científica, cuidado com os outros e paciência.", area: "saude" },
        { text: "Criatividade, imaginação e pensamento fora da caixa.", area: "artes" },
        { text: "Visão estratégica, persuasão e boa tomada de decisão.", area: "negocios" }
      ]
    },
    {
      question: "4. Diante de um desafio difícil na escola, como você reage?",
      options: [
        { text: "Analiso os dados e busco uma solução lógica e precisa.", area: "tech" },
        { text: "Converso com colegas para trocar ideias e chegar em um consenso.", area: "humanas" },
        { text: "Pesquiso a fundo em fontes confiáveis para entender a causa raiz.", area: "saude" },
        { text: "Procuro uma maneira alternativa e inovadora de resolver.", area: "artes" },
        { text: "Monto um plano de ação e divido tarefas para resolver logo.", area: "negocios" }
      ]
    },
    {
      question: "5. O que mais te motiva na escolha de uma profissão?",
      options: [
        { text: "Estar na vanguarda da inovação e criar coisas novas.", area: "tech" },
        { text: "Gerar impacto social positivo e ajudar a transformar vidas.", area: "humanas" },
        { text: "Salvar vidas, promover saúde ou preservar a natureza.", area: "saude" },
        { text: "Expressar ideias, emoções e criar algo único.", area: "artes" },
        { text: "Alcançar independência financeira e liderar projetos importantes.", area: "negocios" }
      ]
    },
    {
      question: "6. Qual matéria você mais gosta ou tem facilidade no 3º ano?",
      options: [
        { text: "Matemática ou Física.", area: "tech" },
        { text: "História, Geografia ou Filosofia/Sociologia.", area: "humanas" },
        { text: "Biologia ou Química.", area: "saude" },
        { text: "Artes, Redação ou Literatura.", area: "artes" },
        { text: "Gosto de um pouco de tudo / Educação Financeira / Empreendedorismo.", area: "negocios" }
      ]
    }
  ];

  // Mapeamento de Resultados por Área
  const profiles = {
    tech: {
      title: "Perfil Tecnológico & Exatas",
      description: "Você tem mente analítica, gosta de resolver problemas complexos e é atraído por inovação e sistemas.",
      careers: [
        { name: "Desenvolvedor de Software", desc: "Criação de sites, aplicativos e sistemas digitais." },
        { name: "Cientista de Dados", desc: "Análise de grandes volumes de informações para tomada de decisões." },
        { name: "Engenheiro de Inteligência Artificial", desc: "Criação de modelos de aprendizado de máquina e automação." }
      ],
      courses: ["Ciência da Computação", "Análise e Des. de Sistemas (Técnico/Tecnólogo)", "Engenharia de Software", "Sistemas de Informação"]
    },
    humanas: {
      title: "Perfil Humanas & Impacto Social",
      description: "Você se destaca na comunicação, empatia e compreensão das relações humanas e da sociedade.",
      careers: [
        { name: "Psicólogo(a)", desc: "Apoio à saúde mental e compreensão do comportamento." },
        { name: "Advogado(a) / Jurista", desc: "Defesa de direitos e mediação de conflitos jurídicos." },
        { name: "Professor(a) / Educador(a)", desc: "Ensino e formação de novas gerações." }
      ],
      courses: ["Psicologia", "Direito", "Pedagogia", "Relações Internacionais", "Serviço Social"]
    },
    saude: {
      title: "Perfil Saúde & Ciências Biológicas",
      description: "Sua vocação está voltada para o cuidado com seres vivos, pesquisa científica e bem-estar.",
      careers: [
        { name: "Médico(a) ou Enfermeiro(a)", desc: "Atendimento direto e cuidado com a saúde de pacientes." },
        { name: "Biomédico(a) / Biotecnologista", desc: "Pesquisa científica e desenvolvimento de vacinas e exames." },
        { name: "Fisioterapeuta / Nutricionista", desc: "Reabilitação corporal e promoção de vida saudável." }
      ],
      courses: ["Medicina", "Enfermagem", "Biomedicina", "Nutrição", "Fisioterapia", "Medicina Veterinária"]
    },
    artes: {
      title: "Perfil Criativo & Design",
      description: "Você tem forte imaginação, sensibilidade estética e busca transmitir ideias através da arte e do design.",
      careers: [
        { name: "Designer UX/UI", desc: "Criação de interfaces visuais intuitivas para aplicativos e sites." },
        { name: "Designer Gráfico / Animador", desc: "Criação de identidade visual, ilustrações e conteúdos visuais." },
        { name: "Publicitário(a) / Criador de Conteúdo", desc: "Comunicação criativa e estratégias de marcas." }
      ],
      courses: ["Design Gráfico / Digital", "Publicidade e Propaganda", "Cinema e Audiovisual", "Arquitetura e Urbanismo"]
    },
    negocios: {
      title: "Perfil Gestão & Empreendedorismo",
      description: "Você possui visão estratégica, espírito de liderança e habilidade para organização e planejamento.",
      careers: [
        { name: "Empreendedor(a) / Gestor(a)", desc: "Criação e administração do seu próprio negócio." },
        { name: "Gerente de Projetos", desc: "Planejamento e coordenação de equipes e objetivos." },
        { name: "Especialista em Marketing Digital", desc: "Estratégias de vendas e presença de mercado." }
      ],
      courses: ["Administração de Empresas", "Marketing", "Gestão Financeira", "Comércio Exterior", "Economia"]
    }
  };

  // Estado do Teste
  let currentQuestion = 0;
  let userAnswers = [];

  // Iniciar Teste
  btnStart.addEventListener('click', () => {
    introScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    currentQuestion = 0;
    userAnswers = [];
    showQuestion();
  });

  // Exibir Pergunta Atual
  function showQuestion() {
    const q = questions[currentQuestion];
    questionCounter.innerText = `Pergunta ${currentQuestion + 1} de ${questions.length}`;
    questionText.innerText = q.question;

    // Barra de progresso
    const progressPercent = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Botão Voltar
    if (currentQuestion > 0) {
      btnPrev.classList.remove('hidden');
    } else {
      btnPrev.classList.add('hidden');
    }

    // Renderizar Opções
    optionsContainer.innerHTML = '';
    q.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `
        <span>${opt.text}</span>
        <i data-lucide="chevron-right"></i>
      `;
      btn.addEventListener('click', () => selectOption(opt.area));
      optionsContainer.appendChild(btn);
    });

    lucide.createIcons();
  }

  // Selecionar Opção
  function selectOption(area) {
    userAnswers[currentQuestion] = area;
    currentQuestion++;

    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      calculateResult();
    }
  }

  // Voltar Pergunta
  btnPrev.addEventListener('click', () => {
    if (currentQuestion > 0) {
      currentQuestion--;
      showQuestion();
    }
  });

  // Calcular Resultado
  function calculateResult() {
    const counts = { tech: 0, humanas: 0, saude: 0, artes: 0, negocios: 0 };

    userAnswers.forEach(area => {
      if (counts[area] !== undefined) {
        counts[area]++;
      }
    });

    // Encontrar a área com maior pontuação
    let topArea = 'tech';
    let maxCount = -1;

    for (const [area, count] of Object.entries(counts)) {
      if (count > maxCount) {
        maxCount = count;
        topArea = area;
      }
    }

    renderResult(topArea);
  }

  // Renderizar Tela de Resultado
  function renderResult(areaKey) {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');

    const profile = profiles[areaKey];

    resultTitle.innerText = profile.title;
    resultDescription.innerText = profile.description;

    // Renderizar Carreiras
    careersGrid.innerHTML = '';
    profile.careers.forEach(c => {
      const card = document.createElement('div');
      card.className = 'career-card';
      card.innerHTML = `
        <h4>${c.name}</h4>
        <p>${c.desc}</p>
      `;
      careersGrid.appendChild(card);
    });

    // Renderizar Cursos
    coursesList.innerHTML = '';
    profile.courses.forEach(course => {
      const li = document.createElement('li');
      li.innerText = course;
      coursesList.appendChild(li);
    });

    lucide.createIcons();
  }

  // Reiniciar Teste
  btnRestart.addEventListener('click', () => {
    resultScreen.classList.add('hidden');
    introScreen.classList.remove('hidden');
  });
});
