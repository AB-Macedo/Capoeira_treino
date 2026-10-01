const defaultKit={plates:{'1.25':4,'1.5':4,'2':4},barWeight:null};
const technicalSkills=[
 ['au','Au trançado','Educativo conhecido; registre a correção do mestre.'],
 ['macaquinho','Macaquinho','Priorize execução assistida e os educativos já ensinados.'],
 ['chibata','Chibata · educativo no chão','Mantenha a progressão atual, sem acrescentar a fase aérea sozinha.'],
 ['gancho','Anzol / gancho','Coordene apoio, giro do quadril e retorno à base.'],
 ['martelo','Martelo','Giro controlado do apoio, quadril acompanha e retorno equilibrado.'],
 ['martelo2','Martelo de dois tempos','Trabalhe a sequência já ensinada, devagar antes de acelerar.'],
 ['sequencias','Sequências com giro de quadril','Conecte golpes conhecidos sem perder a ginga e a saída.'],
 ['rasteiras','Rasteiras','Aplicação com parceiro somente em contexto orientado.'],
 ['ponte','Ponte · força e controle','Já consigo circular pela ponte e entrar a partir de pé. Metas: voltar a ficar em pé e passar da parada de mão à ponte. Praticar essas transições com assistência do mestre; não se lançar para trás.']
];
const exerciseInfo={
 'Agachamento goblet':{art:'squat',handles:1,start:2.5,steps:['Segure um halter junto ao peito e mantenha os pés apoiados.','Flexione quadris e joelhos na amplitude que controla, com joelhos acompanhando os pés.','Empurre o chão para subir, mantendo o peso perto do corpo.']},
 'Terra romeno com halteres':{art:'hinge',handles:2,start:2.5,steps:['Comece em pé, halteres junto às coxas e joelhos levemente flexionados.','Leve o quadril para trás, mantendo a coluna estável e os pesos próximos das pernas.','Pare antes de perder a posição e volte estendendo o quadril.']},
 'Remada unilateral':{art:'row',handles:1,start:2.5,steps:['Apoie a mão livre em uma superfície firme e incline o tronco com controle.','Puxe o cotovelo em direção ao quadril sem girar o corpo.','Baixe o halter devagar; repita dos dois lados.']},
 'Supino no chão':{art:'floorpress',handles:2,start:2.5,steps:['Deite com joelhos dobrados e pés no chão; punhos alinhados.','Parta com a parte de trás dos braços apoiada suavemente no chão.','Empurre os halteres para cima e retorne sem bater os cotovelos.']},
 'Desenvolvimento unilateral':{art:'press',handles:1,start:2.5,steps:['Comece com o peso junto ao ombro e o tronco firme.','Eleve o braço sem arquear a lombar nem inclinar o corpo.','Retorne devagar. Reduza a carga se precisar compensar.']},
 'Flexão de braço':{art:'pushup',handles:0,steps:['Comece com as mãos em apoio firme; use uma parede ou bancada estável se o chão estiver pesado.','Mantenha cabeça, tronco e quadril alinhados ao dobrar os cotovelos.','Empurre o apoio para voltar; pare antes de perder a linha do corpo.']},
 'Prancha lateral':{art:'sideplank',handles:0,steps:['Apoie o antebraço com cotovelo abaixo do ombro.','Eleve o quadril e mantenha o corpo alinhado, respirando.','Use os joelhos apoiados para reduzir a dificuldade; faça ambos os lados.']},
 'Terra romeno unilateral':{art:'singlehinge',handles:0,steps:['Comece sem carga e use apoio leve da mão se necessário.','Incline o tronco ao levar uma perna para trás, mantendo o quadril nivelado.','Retorne sem impulso. Acrescente carga só depois de dominar o equilíbrio.']},
 'Agachamento búlgaro ou avanço':{art:'lunge',handles:0,steps:['A ilustração mostra o avanço estacionário, opção inicial sem carga.','Separe os pés à frente e atrás, dobrando os joelhos com o tronco firme.','Empurre o chão para subir. Para o búlgaro, use apenas a variação já corrigida pelo professor.']},
 'Farmer carry':{art:'carry',handles:2,start:2.5,steps:['Segure um halter em cada mão, braços junto ao corpo.','Caminhe com passos curtos, ombros estáveis e tronco alto.','Respire continuamente; apoie os pesos com controle ao terminar.']}
};
function infoFor(name){
 if(exerciseInfo[name])return exerciseInfo[name];
 if(/pedal|bicicleta/i.test(name))return{art:'bike',handles:0,steps:['Use ritmo confortável e ajuste o percurso às condições do dia.']};
 if(/punhos|ombros|Mobilidade|Alongamento|Desacelerar|calma/i.test(name))return{art:'mobility',handles:0,steps:['Movimente as articulações de forma lenta e confortável, sem forçar amplitude.','Use os exercícios de mobilidade que você já conhece.']};
 if(/Registro|Decidir/i.test(name))return{art:'journal',handles:0,steps:['Use as observações desta data para guardar sua decisão e o que aprendeu.']};
 if(/Queda de rins/i.test(name))return{art:'supervised',handles:0,steps:['Faça apenas o educativo que o professor já corrigiu.','A imagem indica treino assistido; não é uma demonstração da queda de rins.']};
 return{art:'ginga',handles:0,steps:['A imagem ilustra a ginga como base; não representa todos os golpes desta sessão.','Escolha movimentos conhecidos, pratique devagar e registre o lado e a correção nos focos técnicos.']};
}
const musicPatterns=[
 {id:'angola',name:'Angola',pattern:'X X ○ ●',hint:'Duas notas chiadas, uma solta e uma presa. Ouça as durações na referência.',url:'https://musica.xara-capoeira.com/capoeira-toques/'},
 {id:'pequeno',name:'São Bento Pequeno de Angola',pattern:'X X ● ○',hint:'Inverta a ordem das notas solta e presa em relação à base de Angola.',url:'https://musica.xara-capoeira.com/capoeira-toques/'},
 {id:'grande',name:'São Bento Grande de Angola',pattern:'X X ● ○ ○',hint:'Base de Angola com a segunda nota solta. Não é o toque de São Bento Grande de Bimba.',url:'https://alexisdinno.com/portfolio/capoeiramusic.html'},
 {id:'benguela',name:'Benguela',pattern:'○ ● ● X X',hint:'Uma solta, duas presas e dois chiados. Memorize a ordem e acompanhe a referência para a cadência.',url:'https://musica.xara-capoeira.com/capoeira-toques/'},
 {id:'cavalaria',name:'Cavalaria · versão de estudo',pattern:'○ X X ○ X X ○ ●',hint:'Versão com dois chiados entre notas soltas, demonstrada por Alexis Dinno. Há outras versões; confirme a do seu mestre.',url:'https://alexisdinno.com/portfolio/capoeiramusic.html'}
];
// O plano original é preservado durante a migração; estes textos valem para novos registros.
function enrichPlan(){
 plan[2].focus='Técnica conhecida: fluidez, giro de quadril e transições. Se for à UFES, a aula é o treino.';
 plan[2].note='Escolha 1–2 focos: anzol/gancho, martelo, martelo de dois tempos ou sequências giradas. Para au trançado, macaquinho e chibata, use somente os educativos já corrigidos pelo mestre. Transições de ponte e parada de mão: com assistência presencial.';
 plan[2].items[0][1]='Ginga → esquiva → anzol/gancho ou martelo conhecido → recuperação da base.';
 plan[2].items[1][1]='Conecte golpes conhecidos, alternando lados e mantendo o giro do apoio confortável.';
 plan[6].focus='Surf ou técnica conhecida. Trabalhe fluidez antes de velocidade.';
 plan[6].note='Priorize controle do quadril e retorno à base. Au trançado, macaquinho, chibata e transições de ponte ficam nos educativos orientados pelo mestre. Não use fadiga para treinar uma inversão nova.';
}

const lightPlan={title:'Hoje, só o essencial',focus:'Mobilidade confortável para um dia de pouca energia, sem febre, tosse forte ou mal-estar importante. Tudo é opcional.',badges:['4–6 min','sem carga'],note:'Não é um treino para fazer durante febre ou doença importante. Se piorar a tosse, vier tontura ou aumentar o mal-estar, pare e descanse. Sem ponte profunda, inversões ou alongamento intenso.',items:[['Mobilidade de ombros e punhos','Sentada ou em pé: movimentos pequenos, lentos e confortáveis.','1 min'],['Mobilidade de tornozelos','Sentada: alterne flexão e extensão dos pés, sem forçar.','1 min'],['Mobilidade de quadril leve','Em pé com apoio estável: pequenos movimentos confortáveis, sem buscar amplitude máxima.','1–2 min'],['Alongamento confortável','Escolha um alongamento conhecido e suave, sem dor e sem insistir.','1–2 min']]};
const restPlan={title:'Descansar conta.',focus:'Hoje não há meta de exercício. Descanse e registre como se sentiu, se quiser.',badges:['descanso','sem cobrança'],note:'Com febre ou mal-estar importante, fique no descanso. Você não precisa compensar este dia depois.',items:[]};

const artDescriptions={"squat":"Em pé → Descer com controle","hinge":"Peso junto ao corpo → Quadril para trás","row":"Braço alongado → Cotovelo ao quadril","floorpress":"Braços no chão → Empurrar acima do peito","press":"Junto ao ombro → Elevar sem arquear","pushup":"Corpo alinhado → Flexionar os cotovelos","sideplank":"Apoio no antebraço → Sustentar e respirar","singlehinge":"Equilíbrio sem carga → Quadril nivelado","lunge":"Base afastada → Dobrar os joelhos","carry":"Pegada firme → Passos controlados","ginga":"Um lado → Alternar a base","mobility":"Movimentos leves → Amplitude confortável","bike":"Ritmo confortável → Percurso seguro","journal":"Observar → Registrar","supervised":"Educativo conhecido → Correção presencial"};
