import React, { useState } from 'react';

const initialNews = [
  {
    id: 1,
    title: 'Dicas Infalíveis para a Redação do ENEM',
    summary: 'Aprenda a estruturar sua dissertação-argumentativa e garanta a nota mil.',
    content: 'A redação do ENEM exige o domínio da norma-padrão da língua portuguesa e a estruturação de um texto dissertativo-argumentativo. É fundamental apresentar uma tese clara logo na introdução, desenvolvê-la com argumentos sólidos e repertório sociocultural nos parágrafos seguintes, e finalizar com uma proposta de intervenção detalhada que respeite os direitos humanos. Praticar a escrita semanalmente e ler redações nota 1000 de anos anteriores são estratégias essenciais.',
    date: '2026-10-20',
    image: 'https://placehold.co/600x400/990000/FFFFFF?text=Redacao+ENEM'
  },
  {
    id: 2,
    title: 'A Importância da Literatura Brasileira Clássica',
    summary: 'Por que ler Machado de Assis e Clarice Lispector ainda é fundamental?',
    content: 'A literatura clássica brasileira não é apenas um registro histórico, mas uma lente profunda sobre a psicologia humana e a formação da sociedade nacional. Autores como Machado de Assis, com sua ironia e crítica social, e Clarice Lispector, com sua prosa intimista e existencial, oferecem ferramentas para compreendermos as complexidades do mundo contemporâneo. Além de enriquecer o vocabulário, essas leituras desenvolvem o senso crítico.',
    date: '2026-10-15',
    image: 'https://placehold.co/600x400/990000/FFFFFF?text=Literatura+Brasileira'
  },
  {
    id: 3,
    title: 'Novo Acordo Ortográfico: Você já domina?',
    summary: 'Revise as principais mudanças que ainda geram dúvidas nos estudantes.',
    content: 'O Novo Acordo Ortográfico, apesar de já estar em vigor há algum tempo, ainda causa confusões. As principais mudanças envolvem o fim do trema (exceto em nomes próprios estrangeiros), novas regras para o uso do hífen (como em palavras onde o prefixo termina com a mesma vogal que inicia a segunda palavra: micro-ondas, anti-inflamatório) e a queda dos acentos diferenciais em palavras paroxítonas (como ideia e jiboia).',
    date: '2026-10-10',
    image: 'https://placehold.co/600x400/990000/FFFFFF?text=Acordo+Ortografico'
  }
];

const videosData = [
  { id: 1, title: 'Figuras de Linguagem Explicadas', url: 'https://www.youtube.com/embed/8-9-oV8sDQE' },
  { id: 2, title: 'Como fazer uma Introdução Perfeita', url: 'https://www.youtube.com/embed/3vM-t0aG-8A' },
  { id: 3, title: 'Resumo: Modernismo no Brasil', url: 'https://www.youtube.com/embed/fW4C5mBv9R4' }
];

const quizQuestions = [
  {
    question: 'Assinale a alternativa em que a concordância verbal está correta:',
    options: [
      'Fazia muitos anos que não se publicavam artigos sobre linguística.',
      'Faziam muitos anos que não se publicavam artigos sobre linguística.',
      'Fazia muitos anos que não se publicava artigos sobre linguística.',
      'Faziam muitos anos que não se publicava artigos sobre linguística.'
    ],
    correctAnswer: 0
  },
  {
    question: 'A crase é o fenômeno da fusão de duas vogais idênticas. Assinale a opção correta:',
    options: [
      'O portal fornece informações relativas a formação.',
      'O portal fornece informações relativas à formação.',
      'O portal fornece informações relativas á formação.',
      'O portal fornece informações relativas a à formação.'
    ],
    correctAnswer: 1
  },
  {
    question: "Qual figura de linguagem está presente na frase: 'O domínio da palavra é uma ferramenta'?",
    options: ['Metonímia', 'Eufemismo', 'Metáfora', 'Pleonasmo'],
    correctAnswer: 2
  }
];

const Icons = {
  Menu: () => <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>,
  Close: () => <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>,
  Lock: () => <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
  Book: () => <svg className="mb-4 h-12 w-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
};

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedNewsId, setSelectedNewsId] = useState(null);
  const [news, setNews] = useState(initialNews);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  const navigateTo = (view, id = null) => {
    setCurrentView(view);
    setSelectedNewsId(id);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'news', label: 'Notícias' },
    { id: 'careers', label: 'Carreiras' },
    { id: 'tips', label: 'Dicas' },
    { id: 'internship', label: 'Estágio' },
    { id: 'quiz', label: 'Simulado' },
    { id: 'videos', label: 'Vídeos' },
    { id: 'about', label: 'Sobre Nós' }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 font-sans text-gray-800">
      <header className="sticky top-0 z-50 bg-red-700 text-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex cursor-pointer items-center space-x-2" onClick={() => navigateTo('home')}>
            <span className="text-2xl font-bold tracking-tighter">PORTAL<span className="text-red-200">PORTUGUÊS</span></span>
            <span className="ml-2 rounded-full bg-red-900 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em]">SESI/SENAI</span>
          </div>

          <nav className="hidden items-center space-x-6 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={`text-sm font-medium transition-colors hover:text-red-200 ${currentView === item.id ? 'border-b-2 border-white pb-1' : ''}`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => navigateTo('admin')}
              className="flex items-center rounded bg-red-800 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-red-900"
            >
              <Icons.Lock /> <span className="ml-1">Admin</span>
            </button>
          </nav>

          <button className="p-2 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <Icons.Close /> : <Icons.Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="space-y-3 bg-red-800 p-4 md:hidden">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className="w-full rounded p-2 text-left font-medium hover:bg-red-700"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => navigateTo('admin')}
              className="flex w-full items-center rounded p-2 text-left font-medium hover:bg-red-700"
            >
              <Icons.Lock /> <span className="ml-2">Painel Administrativo</span>
            </button>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {currentView === 'home' && <HomeView navigateTo={navigateTo} news={news} />}
        {currentView === 'news' && <NewsView navigateTo={navigateTo} news={news} />}
        {currentView === 'newsDetail' && <NewsDetailView news={news.find((n) => n.id === selectedNewsId)} navigateTo={navigateTo} />}
        {currentView === 'careers' && <CareersView />}
        {currentView === 'tips' && <TipsView />}
        {currentView === 'internship' && <InternshipView />}
        {currentView === 'quiz' && <QuizView />}
        {currentView === 'videos' && <VideosView />}
        {currentView === 'about' && <AboutView />}
        {currentView === 'admin' && (
          <AdminView
            news={news}
            setNews={setNews}
            isAuthenticated={isAdminAuthenticated}
            setIsAuthenticated={setIsAdminAuthenticated}
          />
        )}
      </main>

      <footer className="bg-gray-900 py-8 text-center text-sm text-gray-400">
        <div className="container mx-auto px-4">
          <p className="mb-2">© 2026 Portal de Português - Projeto Integrador Final</p>
          <p>Curso Técnico em Desenvolvimento de Sistemas - SESI/SENAI Valinhos</p>
        </div>
      </footer>
    </div>
  );
}

function HomeView({ navigateTo, news }) {
  const recentNews = [...news].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);

  return (
    <div className="animate-fadeIn">
      <section className="bg-red-600 px-4 py-20 text-center text-white">
        <div className="container mx-auto max-w-4xl">
          <Icons.Book />
          <h1 className="mb-6 text-4xl font-extrabold md:text-5xl">Domine a Língua, Conquiste o Mundo.</h1>
          <p className="mb-10 text-xl font-light md:text-2xl">O portal definitivo para estudantes do Ensino Médio aprenderem gramática, literatura, redação e se prepararem para o mercado de trabalho.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => navigateTo('quiz')} className="rounded-full bg-white px-8 py-3 font-bold text-red-700 shadow-lg transition-transform hover:scale-105 hover:bg-gray-100">
              Fazer Simulado
            </button>
            <button onClick={() => navigateTo('tips')} className="rounded-full border border-red-500 bg-red-800 px-8 py-3 font-bold text-white transition-colors hover:bg-red-900">
              Ver Dicas de Estudo
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="inline-block border-b-4 border-red-600 pb-2 text-3xl font-bold text-gray-800">Últimas Notícias</h2>
            <button onClick={() => navigateTo('news')} className="font-semibold text-red-600 hover:underline">Ver todas &rarr;</button>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {recentNews.map((item) => (
              <div key={item.id} className="cursor-pointer overflow-hidden rounded-xl border border-gray-100 bg-gray-50 shadow-sm transition-shadow hover:shadow-xl" onClick={() => navigateTo('newsDetail', item.id)}>
                <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-red-600">{new Date(item.date).toLocaleDateString('pt-BR')}</span>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="mb-4 text-gray-600 line-clamp-3">{item.summary}</p>
                  <span className="font-medium text-red-600 hover:text-red-800">Ler mais</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function NewsView({ navigateTo, news }) {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 inline-block border-b-4 border-red-600 pb-2 text-4xl font-bold text-gray-900">Mural de Notícias</h1>
      <p className="mb-10 text-lg text-gray-600">Acompanhe as últimas atualizações sobre vestibulares, regras gramaticais, literatura e eventos educacionais.</p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {news.map((item) => (
          <div key={item.id} className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow">
            <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
            <div className="flex flex-grow flex-col p-6">
              <span className="mb-2 text-sm font-semibold text-red-600">{new Date(item.date).toLocaleDateString('pt-BR')}</span>
              <h2 className="mb-3 text-2xl font-bold text-gray-800">{item.title}</h2>
              <p className="mb-6 flex-grow text-gray-600">{item.summary}</p>
              <button
                onClick={() => navigateTo('newsDetail', item.id)}
                className="mt-auto self-start rounded bg-gray-100 px-4 py-2 font-semibold text-gray-800 transition-colors hover:bg-gray-200"
              >
                Ler conteúdo completo
              </button>
            </div>
          </div>
        ))}
      </div>
      {news.length === 0 && <div className="py-20 text-center text-gray-500">Nenhuma notícia cadastrada no momento.</div>}
    </div>
  );
}

function NewsDetailView({ news, navigateTo }) {
  if (!news) return <div className="py-20 text-center">Notícia não encontrada.</div>;

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <button onClick={() => navigateTo('news')} className="mb-6 flex items-center font-medium text-red-600 hover:underline">&larr; Voltar para notícias</button>
      <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
        <img src={news.image} alt={news.title} className="h-64 w-full object-cover md:h-96" />
        <div className="p-8 md:p-12">
          <span className="mb-4 inline-block rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-800">
            Publicado em {new Date(news.date).toLocaleDateString('pt-BR')}
          </span>
          <h1 className="mb-6 text-3xl font-extrabold leading-tight text-gray-900 md:text-5xl">{news.title}</h1>
          <p className="mb-8 border-l-4 border-red-500 pl-4 text-xl font-light italic text-gray-500">{news.summary}</p>

          <div className="prose prose-lg max-w-none whitespace-pre-wrap leading-relaxed text-gray-700">
            {news.content}
          </div>
        </div>
      </article>
    </div>
  );
}

function CareersView() {
  const careers = [
    { title: 'Letras (Licenciatura/Bacharelado)', desc: 'Professores, revisores, tradutores e pesquisadores. Fundamentais para a educação e o mercado editorial.' },
    { title: 'Jornalismo', desc: 'Profissionais que apuram e redigem notícias. Exige excelente domínio da língua e capacidade de síntese.' },
    { title: 'Publicidade e Copywriting', desc: 'Criadores de textos persuasivos para campanhas e vendas. A criatividade com as palavras é o diferencial.' },
    { title: 'Desenvolvimento de Sistemas (Tech Writer)', desc: 'Quem programa também escreve! Redatores técnicos criam documentações, manuais e guias para softwares.' }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-6 inline-block border-b-4 border-red-600 pb-2 text-4xl font-bold text-gray-900">Carreiras na Área</h1>
      <p className="mb-10 max-w-3xl text-lg text-gray-700">O domínio da língua portuguesa abre portas não apenas nas áreas de humanas, mas é uma soft skill (e hard skill) crucial em qualquer ambiente corporativo, inclusive na tecnologia ensinada no SENAI.</p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {careers.map((career, idx) => (
          <div key={idx} className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-8 shadow">
            <div className="rounded-lg bg-red-100 p-3 text-red-600"><Icons.Book /></div>
            <div>
              <h3 className="mb-2 text-2xl font-bold text-gray-800">{career.title}</h3>
              <p className="text-gray-600">{career.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TipsView() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-6 inline-block border-b-4 border-red-600 pb-2 text-4xl font-bold text-gray-900">Dicas de Estudo</h1>

      <div className="mt-10 space-y-8">
        <div className="rounded-xl border-l-8 border-red-500 bg-white p-8 shadow-sm">
          <h3 className="mb-3 text-2xl font-bold">1. Leia todos os dias</h3>
          <p className="text-gray-700">A leitura constante é a melhor forma de internalizar as regras gramaticais e expandir o vocabulário organicamente. Alterne entre notícias, literatura clássica e artigos de opinião.</p>
        </div>
        <div className="rounded-xl border-l-8 border-red-500 bg-white p-8 shadow-sm">
          <h3 className="mb-3 text-2xl font-bold">2. Pratique Redação (Escreva, reescreva)</h3>
          <p className="text-gray-700">Não basta saber a teoria; o ato de escrever constrói conexões lógicas. Para vestibulares, treine ao menos uma redação por semana, cronometrando o tempo.</p>
        </div>
        <div className="rounded-xl border-l-8 border-red-500 bg-white p-8 shadow-sm">
          <h3 className="mb-3 text-2xl font-bold">3. Entenda, não decore</h3>
          <p className="text-gray-700">A sintaxe faz sentido lógico. Em vez de decorar regência e concordância cegamente, entenda a função de cada palavra na frase (sujeito, objeto, adjunto).</p>
        </div>
      </div>
    </div>
  );
}

function InternshipView() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12 text-center">
      <h1 className="mb-6 text-4xl font-bold text-gray-900">Estágio e Mercado de Trabalho</h1>
      <img src="https://placehold.co/800x400/990000/FFFFFF?text=Oportunidades" alt="Estágios" className="mx-auto mb-8 w-full rounded-xl shadow-lg" />
      <p className="mb-6 text-left text-lg text-gray-700">
        Para os alunos dos cursos do <strong>SENAI Valinhos</strong>, a comunicação eficaz é essencial na hora de buscar um estágio. Uma das maiores queixas de recrutadores na área de tecnologia e indústria é a dificuldade de alguns candidatos em redigir e-mails profissionais, relatórios técnicos ou documentações claras.
      </p>
      <div className="rounded-lg border border-red-100 bg-red-50 p-6 text-left">
        <h4 className="mb-4 text-xl font-bold text-red-800">Dicas para Entrevistas e Currículos:</h4>
        <ul className="list-disc space-y-2 pl-6 text-gray-800">
          <li>Revise seu currículo minunciosamente. Um erro ortográfico pode ser critério de eliminação.</li>
          <li>Em e-mails corporativos, seja claro, conciso e utilize a norma-padrão.</li>
          <li>Na entrevista, evite gírias em excesso e demonstre coesão e coerência em suas respostas.</li>
        </ul>
      </div>
    </div>
  );
}

function QuizView() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerOptionClick = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === quizQuestions[currentQuestion].correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  return (
    <div className="container mx-auto flex justify-center px-4 py-12">
      <div className="w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 shadow-xl md:p-12">
        <h1 className="mb-8 text-center text-3xl font-bold">Simulado de Português</h1>

        {showScore ? (
          <div className="animate-fadeIn text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">Resultado Final</h2>
            <div className="mb-6 text-6xl font-extrabold text-red-600">{score} / {quizQuestions.length}</div>
            <p className="mb-8 text-lg text-gray-600">
              {score === quizQuestions.length ? 'Excelente! Você domina a norma-padrão.' : 'Continue estudando e praticando!'}
            </p>
            <button onClick={restartQuiz} className="rounded-full bg-gray-900 px-8 py-3 font-bold text-white transition-colors hover:bg-gray-800">
              Tentar Novamente
            </button>
          </div>
        ) : (
          <div className="animate-fadeIn">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-wider text-gray-500">Questão {currentQuestion + 1} de {quizQuestions.length}</span>
              <div className="h-2 w-1/2 rounded-full bg-gray-200">
                <div className="h-2 rounded-full bg-red-600" style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }} />
              </div>
            </div>

            <h2 className="mb-8 text-xl font-semibold text-gray-800 md:text-2xl">{quizQuestions[currentQuestion].question}</h2>

            <div className="space-y-3">
              {quizQuestions[currentQuestion].options.map((option, index) => {
                let buttonClass = 'w-full rounded-xl border-2 p-4 text-left font-medium text-gray-700 transition-all ';

                if (isAnswered) {
                  if (index === quizQuestions[currentQuestion].correctAnswer) {
                    buttonClass += 'border-green-500 bg-green-50 text-green-800';
                  } else if (index === selectedOption) {
                    buttonClass += 'border-red-500 bg-red-50 text-red-800';
                  } else {
                    buttonClass += 'border-gray-200 opacity-50';
                  }
                } else {
                  buttonClass += 'border-gray-200 hover:border-red-400 hover:bg-red-50';
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerOptionClick(index)}
                    className={buttonClass}
                    disabled={isAnswered}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <div className="mt-8 flex justify-end">
                <button
                  onClick={handleNextQuestion}
                  className="rounded-lg bg-red-600 px-6 py-3 font-bold text-white shadow-md transition-colors hover:bg-red-700"
                >
                  {currentQuestion + 1 === quizQuestions.length ? 'Ver Resultado' : 'Próxima Questão'}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function VideosView() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-6 inline-block border-b-4 border-red-600 pb-2 text-4xl font-bold text-gray-900">Vídeos Educativos</h1>
      <p className="mb-10 text-lg text-gray-600">Complemente seus estudos com conteúdos audiovisuais de alta qualidade.</p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {videosData.map((video) => (
          <div key={video.id} className="rounded-xl border border-gray-200 bg-white p-4 shadow">
            <div className="group relative mb-4 flex h-48 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gray-900">
              <img src="https://placehold.co/600x400/111111/FFFFFF?text=Video+Player" alt="Video" className="absolute inset-0 h-full w-full object-cover opacity-50 transition-opacity group-hover:opacity-30" />
              <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-red-600 shadow-lg transition-transform group-hover:scale-110">
                <svg className="ml-1 h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-800">{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutView() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-8 inline-block border-b-4 border-red-600 pb-2 text-4xl font-bold text-gray-900">Sobre o Projeto</h1>

      <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg md:p-12">
        <h2 className="mb-4 text-2xl font-bold text-red-700">Missão Formatura!</h2>
        <p className="mb-6 leading-relaxed text-gray-700">
          Este portal foi desenvolvido como parte do <strong>Projeto Integrador Final</strong> do curso Técnico em Desenvolvimento de Sistemas do SESI/SENAI Valinhos.
        </p>
        <p className="mb-6 leading-relaxed text-gray-700">
          O objetivo desta plataforma é centralizar recursos de estudo da disciplina de <strong>Português</strong> para alunos do Ensino Médio, demonstrando a aplicação prática de tecnologias web modernas, como React, navegação por estado, componentização e design responsivo com Tailwind CSS.
        </p>

        <h3 className="mt-10 border-b pb-2 text-xl font-bold">Equipe de Desenvolvimento</h3>
        <ul className="list-disc space-y-2 pl-6 text-gray-700">
          <li>Desenvolvedor(a) Front-end</li>
          <li>Desenvolvedor(a) Back-end (Simulado na UI)</li>
          <li>Designer UX/UI</li>
          <li>QA e Testes</li>
        </ul>

        <div className="mt-10 rounded-lg bg-gray-50 p-4 text-center text-sm italic text-gray-500">
          "A missão final está lançada! Que venham os últimos commits, os últimos bugs e as grandes conquistas!" - Profs. Thiago & Marcelo.
        </div>
      </div>
    </div>
  );
}

function AdminView({ news, setNews, isAuthenticated, setIsAuthenticated }) {
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({ id: null, title: '', summary: '', content: '', image: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Senha incorreta. Dica: admin123');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setFormData({ id: null, title: '', summary: '', content: '', image: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content) return;

    if (isEditing) {
      setNews((currentNews) => currentNews.map((n) => (n.id === formData.id ? { ...n, ...formData, date: n.date } : n)));
      showToast('Notícia atualizada com sucesso!');
    } else {
      const newId = news.length > 0 ? Math.max(...news.map((n) => n.id)) + 1 : 1;
      const newArticle = {
        ...formData,
        id: newId,
        date: new Date().toISOString().split('T')[0]
      };
      setNews((currentNews) => [newArticle, ...currentNews]);
      showToast('Notícia cadastrada com sucesso!');
    }

    setFormData({ id: null, title: '', summary: '', content: '', image: '' });
    setIsEditing(false);
  };

  const handleEdit = (item) => {
    setFormData(item);
    setIsEditing(true);
    window.scrollTo(0, 0);
  };

  const safeDelete = (id) => {
    setNews((currentNews) => currentNews.filter((n) => n.id !== id));
    showToast('Notícia excluída com sucesso!');
    if (formData.id === id) {
      setFormData({ id: null, title: '', summary: '', content: '', image: '' });
      setIsEditing(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center px-4 py-32">
        <div className="w-full max-w-md rounded-xl border-t-8 border-gray-900 bg-white p-8 shadow-xl">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-gray-100 p-4"><Icons.Lock /></div>
          </div>
          <h2 className="mb-2 text-center text-2xl font-bold">Painel Administrativo</h2>
          <p className="mb-8 text-center text-sm text-gray-500">Simulação de Autenticação (Clerk)</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Senha de Acesso</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Insira a senha (admin123)"
              />
            </div>
            {errorMsg && <p className="text-sm font-semibold text-red-500">{errorMsg}</p>}
            <button type="submit" className="w-full rounded-lg bg-gray-900 py-3 font-bold text-white transition-colors hover:bg-gray-800">
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {toastMsg && (
        <div className="fixed right-4 top-20 z-50 rounded bg-green-500 px-6 py-3 text-white shadow-lg animate-fadeIn">
          {toastMsg}
        </div>
      )}

      <div className="mb-8 flex items-center justify-between border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gerenciamento de Notícias</h1>
          <p className="text-gray-500">CRUD Simulado (Prisma + PostgreSQL)</p>
        </div>
        <button onClick={handleLogout} className="rounded border px-4 py-2 text-sm font-semibold text-gray-600 transition-colors hover:text-red-600">
          Sair do Painel
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-xl border border-gray-200 bg-white p-6 shadow">
            <h2 className="mb-4 text-xl font-bold">{isEditing ? 'Editar Notícia' : 'Nova Notícia'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Título</label>
                <input required type="text" name="title" value={formData.title} onChange={handleInputChange} className="w-full rounded border border-gray-300 p-2 text-sm focus:ring-1 focus:ring-red-500" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Resumo</label>
                <textarea required name="summary" value={formData.summary} onChange={handleInputChange} rows="2" className="w-full rounded border border-gray-300 p-2 text-sm focus:ring-1 focus:ring-red-500" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">URL da Imagem</label>
                <input required type="url" name="image" value={formData.image} onChange={handleInputChange} placeholder="https://..." className="w-full rounded border border-gray-300 p-2 text-sm focus:ring-1 focus:ring-red-500" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Conteúdo Completo</label>
                <textarea required name="content" value={formData.content} onChange={handleInputChange} rows="6" className="w-full rounded border border-gray-300 p-2 text-sm focus:ring-1 focus:ring-red-500" />
              </div>

              <div className="flex gap-2 pt-2">
                <button type="submit" className="flex-1 rounded bg-green-600 py-2 font-bold text-white transition-colors hover:bg-green-700">
                  {isEditing ? 'Atualizar' : 'Salvar'}
                </button>
                {isEditing && (
                  <button type="button" onClick={() => { setIsEditing(false); setFormData({ id: null, title: '', summary: '', content: '', image: '' }); }} className="flex-1 rounded bg-gray-200 py-2 font-bold text-gray-800 transition-colors hover:bg-gray-300">
                    Cancelar
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        <div className="space-y-4 lg:col-span-2">
          <h2 className="mb-4 text-xl font-bold">Notícias Cadastradas ({news.length})</h2>
          {news.map((item) => (
            <div key={item.id} className="flex flex-col items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm md:flex-row">
              <img src={item.image} alt="thumb" className="h-24 w-24 rounded object-cover" />
              <div className="flex-grow text-center md:text-left">
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{new Date(item.date).toLocaleDateString('pt-BR')}</p>
              </div>
              <div className="flex w-full gap-2 md:w-auto">
                <button onClick={() => handleEdit(item)} className="flex-1 rounded bg-blue-100 px-4 py-2 font-medium text-blue-700 transition-colors hover:bg-blue-200 md:flex-none">
                  Editar
                </button>
                <button onClick={() => safeDelete(item.id)} className="flex-1 rounded bg-red-100 px-4 py-2 font-medium text-red-700 transition-colors hover:bg-red-200 md:flex-none">
                  Excluir
                </button>
              </div>
            </div>
          ))}
          {news.length === 0 && <p className="italic text-gray-500">Nenhum registro encontrado no banco de dados.</p>}
        </div>
      </div>
    </div>
  );
}
