document.getElementById('copyEmailBtn').addEventListener('click', function (event) {
    event.preventDefault();

    const email = "luizmiguelsouzasouza79@gmail.com";

    navigator.clipboard.writeText(email).then(() => {
        const aviso = document.createElement('div');

        aviso.textContent = "Email copiado!";
        aviso.style.position = "fixed";
        aviso.style.bottom = "30px";
        aviso.style.left = "50%";
        aviso.style.transform = "translateX(-50%)";
        aviso.style.background = "#b300ff";
        aviso.style.color = "#fff";
        aviso.style.padding = "10px 20px";
        aviso.style.borderRadius = "8px";
        aviso.style.fontFamily = "Poppins, sans-serif";
        aviso.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
        aviso.style.zIndex = "9999";

        document.body.appendChild(aviso);

        setTimeout(() => aviso.remove(), 2000);
    });
});


/* =========================
   SOBRE MIM
========================= */

function sobre() {
    document.getElementById("conteiner").innerHTML = `
        <div class="card">
            <h2>Sobre Mim</h2>

            <p>
                Olá! Meu nome é <strong>Luiz Miguel Souza</strong>, tenho ${idade()} anos
                e sou estudante da <strong>Etec de Praia Grande</strong>, onde
                curso <strong>Informática para Internet</strong>.
            </p>

            <p>
                Tenho interesse em <strong>tecnologia, programação e desenvolvimento
                de sistemas</strong>. Estudo programação há cerca de
                <strong>5 anos</strong>, começando com Python e posteriormente
                me aprofundando no desenvolvimento web.
            </p>

            <p>
                Durante minha formação, desenvolvi conhecimentos em
                <strong>HTML, CSS, JavaScript, TypeScript, PHP, Node.js, C#, C++,
                Angular e Ionic</strong>, bancos de dados como
                <strong>MySQL, PostgreSQL, SQL Server e Supabase</strong>, além de
                ferramentas como <strong>Git, GitHub e Vercel</strong>.
            </p>

            <p>
                Tenho experiência acadêmica no desenvolvimento de projetos,
                trabalhando com <strong>front-end, back-end, bancos de dados,
                APIs e integração de sistemas</strong>. Também já atuei como
                <strong>freelancer</strong>, desenvolvendo sistemas web sob demanda
                em PHP e MySQL.
            </p>

            <p>
                Fui <strong>aluno destaque na Seletiva Azul</strong> com o
                <strong>DelayTrack</strong>, um sistema web que identifica a causa raiz
                dos atrasos de voos.
            </p>

            <p>
                Também possuo conhecimentos em <strong>Cloud Computing, Firebase,
                redes de computadores, infraestrutura e segurança da informação</strong>,
                buscando compreender não apenas o desenvolvimento, mas também
                como os sistemas funcionam como um todo.
            </p>

            <p>
                Sou uma pessoa <strong>proativa, curiosa e dedicada</strong>.
                Gosto de aprender novas tecnologias, resolver problemas e
                transformar ideias em projetos funcionais.
            </p>

            <p>
                Atualmente, meu objetivo é continuar evoluindo na área de
                tecnologia e me preparar para atuar profissionalmente como
                <strong>desenvolvedor Full Stack</strong>.
            </p>
        </div>
    `;
}


/* =========================
   SOFT SKILLS
========================= */

function soft() {
    document.getElementById("conteiner").innerHTML = `
        <div class="card">
            <h2>Soft Skills</h2>

            <div class="soft-grid">

                <div class="soft-item">
                    <h3>Proatividade</h3>
                    <p>
                        Iniciativa para resolver problemas e buscar soluções.
                    </p>
                </div>

                <div class="soft-item">
                    <h3>Olhar Técnico</h3>
                    <p>
                        Análise lógica para identificar problemas e soluções.
                    </p>
                </div>

                <div class="soft-item">
                    <h3>Resiliência</h3>
                    <p>
                        Capacidade de lidar com desafios e pressão.
                    </p>
                </div>

                <div class="soft-item">
                    <h3>Gestão de Tempo</h3>
                    <p>
                        Organização de tarefas e cumprimento de prazos.
                    </p>
                </div>

                <div class="soft-item">
                    <h3>Comunicação Eficaz</h3>
                    <p>
                        Comunicação clara e objetiva.
                    </p>
                </div>

                <div class="soft-item">
                    <h3>Trabalho em Equipe</h3>
                    <p>
                        Colaboração e respeito a diferentes ideias.
                    </p>
                </div>

            </div>
        </div>
    `;
}


/* =========================
   HARD SKILLS
========================= */

function hard() {
    document.getElementById("conteiner").innerHTML = `
        <div class="card">
            <h2>Hard Skills</h2>

            <div class="hard-grid">

                <!-- DESENVOLVIMENTO WEB -->
                <div class="hard-column">
                    <h3>Desenvolvimento Web</h3>

                    <div class="hard-item">
                        <p>
                            <strong>HTML:</strong>
                            Estrutura de páginas web.
                        </p>
                    </div>

                    <div class="hard-item">
                        <p>
                            <strong>CSS:</strong>
                            Estilização, layouts e responsividade.
                        </p>
                    </div>

                    <div class="hard-item">
                        <p>
                            <strong>JavaScript:</strong>
                            Interatividade e funcionalidades.
                        </p>
                    </div>

                    <div class="hard-item">
                        <p>
                            <strong>Bootstrap:</strong>
                            Desenvolvimento de interfaces responsivas.
                        </p>
                    </div>

                    <div class="hard-item">
                        <p>
                            <strong>Angular:</strong>
                            Desenvolvimento de aplicações web.
                        </p>
                    </div>

                    <div class="hard-item">
                        <p>
                            <strong>TypeScript:</strong>
                            Desenvolvimento de aplicações estruturadas.
                        </p>
                    </div>

                    <div class="hard-item">
                        <p>
                            <strong>Ionic:</strong>
                            Desenvolvimento de aplicações híbridas.
                        </p>
                    </div>
                </div>


                <!-- BACK-END E BANCO DE DADOS -->
                <div class="hard-column">
                    <h3>Back-End & Banco de Dados</h3>

                    <div class="hard-item">
                        <p>
                            <strong>PHP:</strong>
                            Desenvolvimento de aplicações web.
                        </p>
                    </div>

                    <div class="hard-item">
                        <p>
                            <strong>Node.js:</strong>
                            Desenvolvimento back-end com JavaScript.
                        </p>
                    </div>

                    <div class="hard-item">
                        <p>
                            <strong>C#:</strong>
                            Desenvolvimento de aplicações.
                        </p>
                    </div>

                    <div class="hard-item">
                        <p>
                            <strong>C++:</strong>
                            Programação e desenvolvimento de sistemas.
                        </p>
                    </div>

                    <div class="hard-item">
                        <p>
                            <strong>MySQL:</strong>
                            Banco de dados relacional.
                        </p>
                    </div>

                    <div class="hard-item">
                        <p>
                            <strong>PostgreSQL:</strong>
                            Banco de dados relacional com funções e consultas avançadas.
                        </p>
                    </div>

                    <div class="hard-item">
                        <p>
                            <strong>SQL Server:</strong>
                            Banco de dados relacional e procedures em T-SQL.
                        </p>
                    </div>

                    <div class="hard-item">
                        <p>
                            <strong>Firestore:</strong>
                            Banco de dados NoSQL em nuvem.
                        </p>
                    </div>
                </div>


                <!-- CLOUD E SERVIÇOS -->
                <div class="hard-column">
                    <h3>Cloud & Serviços</h3>

                    <div class="hard-item">
                        <p>
                            <strong>Firebase:</strong>
                            Plataforma para desenvolvimento de aplicações.
                        </p>
                    </div>

                    <div class="hard-item">
                        <p>
                            <strong>Supabase:</strong>
                            Back-end em nuvem com PostgreSQL e controle de acesso.
                        </p>
                    </div>

                    <div class="hard-item">
                        <p>
                            <strong>Firebase Authentication:</strong>
                            Autenticação e gerenciamento de usuários.
                        </p>
                    </div>

                    <div class="hard-item">
                        <p>
                            <strong>Cloud Computing:</strong>
                            Conceitos de computação e armazenamento em nuvem.
                        </p>
                    </div>

                    <div class="hard-item">
                        <p>
                            <strong>BaaS:</strong>
                            Utilização de serviços de back-end em nuvem.
                        </p>
                    </div>

                    <div class="hard-item">
                        <p>
                            <strong>PaaS:</strong>
                            Conceitos de plataformas para desenvolvimento e hospedagem.
                        </p>
                    </div>

                    <div class="hard-item">
                        <p>
                            <strong>SaaS:</strong>
                            Conceitos de softwares disponibilizados como serviço.
                        </p>
                    </div>
                </div>


                <!-- REDES E FERRAMENTAS -->
                <div class="hard-column">
                    <h3>Redes & Ferramentas</h3>

                    <div class="hard-item">
                        <p>
                            <strong>Redes de Computadores:</strong>
                            Comunicação e infraestrutura de redes.
                        </p>
                    </div>

                    <div class="hard-item">
                        <p>
                            <strong>TCP/IP:</strong>
                            Fundamentos de comunicação em redes.
                        </p>
                    </div>

                    <div class="hard-item">
                        <p>
                            <strong>HTTP & DNS:</strong>
                            Conceitos de comunicação web.
                        </p>
                    </div>

                    <div class="hard-item">
                        <p>
                            <strong>Git:</strong>
                            Controle de versão.
                        </p>
                    </div>

                    <div class="hard-item">
                        <p>
                            <strong>GitHub:</strong>
                            Hospedagem e gerenciamento de projetos.
                        </p>
                    </div>

                    <div class="hard-item">
                        <p>
                            <strong>Vercel:</strong>
                            Hospedagem e publicação de projetos web.
                        </p>
                    </div>

                    <div class="hard-item">
                        <p>
                            <strong>Hardware:</strong>
                            Componentes e manutenção de computadores.
                        </p>
                    </div>

                    <div class="hard-item">
                        <p>
                            <strong>Cybersecurity:</strong>
                            Fundamentos de segurança da informação.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    `;
}

function idade() {
    const hoje = new Date();
    let anos = hoje.getFullYear() - 2009;
    if (hoje.getMonth() < 2 || (hoje.getMonth() === 2 && hoje.getDate() < 29)) anos--;
    return anos;
}

function mostrarSecao(id) {
    document.querySelectorAll('nav a').forEach((a) => a.classList.toggle('ativo', a.id === id));
    const alvo = document.getElementById('conteiner');
    const movimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    alvo.scrollIntoView({ behavior: movimento, block: 'start' });
}

['sobre', 'soft', 'hard'].forEach((id) => {
    const original = window[id];
    window[id] = function () {
        original();
        mostrarSecao(id);
    };
});

document.querySelectorAll('.ano').forEach((el) => { el.textContent = new Date().getFullYear(); });
