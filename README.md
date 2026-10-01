# Meu Treino de Corda

Aplicativo pessoal para acompanhar treinos de capoeira, força, mobilidade e condicionamento durante a preparação para a troca de corda — e continuar evoluindo depois dela.

Ele foi pensado primeiro para celular: abre no treino do dia, funciona offline e pode ser instalado na tela inicial como um aplicativo.

## O que já funciona

- plano automático de domingo a sábado;
- sessões de capoeira, força, técnica, surf e recuperação;
- escolha entre o núcleo próximo e o mais distante;
- marcação dos exercícios concluídos;
- registro local de cargas, golpes-alvo e observações;
- funcionamento offline após a primeira abertura;
- publicação automática pelo GitHub Pages.

Os registros pessoais ficam somente no navegador do aparelho. Eles não são enviados para o GitHub.

## Instalar no celular

1. Abra `https://ab-macedo.github.io/Capoeira_treino/` no Chrome.
2. Toque no menu de três pontos.
3. Escolha **Instalar app** ou **Adicionar à tela inicial**.
4. Confirme. O ícone aparecerá junto aos demais aplicativos.

Depois da primeira abertura completa, o aplicativo pode ser usado sem internet. Para receber uma versão nova, conecte-se à internet e abra o aplicativo novamente.

## Publicação

O arquivo `.github/workflows/pages.yml` publica automaticamente a pasta `dist` sempre que houver uma alteração na branch `main`.

Na primeira publicação, pode ser necessário abrir **Settings → Pages** no repositório e selecionar **GitHub Actions** em **Source**. Depois disso, cada atualização será publicada automaticamente.

## Organização

```text
dist/
  index.html            estrutura da interface
  plan.js               plano semanal
  core.js               datas, migração e montagem de cargas
  content.js            orientações e referências
  app.js                comportamento e histórico
  illustrations/        esquemas locais dos exercícios
  manifest.webmanifest instalação no celular
  icon.svg              ícone do aplicativo
  sw.js                 funcionamento offline
.github/workflows/
  pages.yml             publicação automática
```

## Alterar o plano

Os sete dias estão no array `plan`, dentro de `dist/plan.js`. Cada exercício segue este formato:

```js
['Nome', 'Orientação curta', 'Séries/repetições']
```

## Próximas etapas

- ajustar o plano a partir da análise dos vídeos de treino;
- refinar as referências de execução com as correções do mestre;
- avaliar integração opcional com o Strava;
- manter qualquer integração com contas de trabalho, como Teams, fora do projeto.

## Executar localmente no computador

```bash
python3 -m http.server 8080 --directory dist
```

Depois, abra `http://localhost:8080` no navegador.

## Histórico, musicalidade e cargas (versão 3)

- Toque na data para abrir o calendário. Cada data guarda o plano, marcações, cargas, notas, focos técnicos e musicalidade.
- “Plano normal”, “Mobilidade leve” e “Descanso” podem ser escolhidos em qualquer dia. As marcações do plano normal e do leve ficam separadas; mudar de modo não as apaga. L e R no calendário indicam leve e repouso.
- As antigas marcações por semana são migradas para datas. A nota única anterior fica em Ajustes, sem data inventada. Notas já sobrescritas na versão anterior não são recuperáveis.
- Em Ajustes, exporte e importe o histórico em JSON. Não há sincronização entre aparelhos; não limpe os dados do navegador sem guardar um backup.
- Todos os cartões abrem orientações e esquemas SVG locais. São desenhos simplificados, não análises individuais de execução. As imagens de sessões técnicas representam a ginga; acrobacias exigem os educativos do professor.
- O kit cadastrado tem 4 anilhas de cada massa: 1,25, 1,5 e 2 kg. A montagem respeita estoque e simetria, inclusive para dois halteres. Peso das barras/travas deve ser informado em Ajustes; nunca é inferido a partir do anúncio de 20 kg.
- O primeiro teste com carga usa 2,5 kg de anilhas por halter (1,25 de cada lado), mais a barra. É uma sugestão conservadora de experimentação, não avaliação individual de capacidade. Registre a carga efetivamente usada.
- Musicalidade: Angola, São Bento Pequeno e Grande de Angola, Benguela e uma versão de Cavalaria. X = chiado, ○ = solta, ● = presa. A notação mostra ordem, não duração; os links trazem referências de escuta e as versões podem variar entre escolas.
- Uma atualização mostra “Atualizar agora” e preserva o armazenamento local. Após baixar os arquivos, ilustrações e histórico funcionam offline. Referências externas de escuta exigem internet.

### Referências utilizadas

- Aquecimento e desempenho: https://pubmed.ncbi.nlm.nih.gov/19996770/ (a sequência de capoeira é uma adaptação prática, não um protocolo validado especificamente).
- Treinamento de força: https://pubmed.ncbi.nlm.nih.gov/41843416/
- Toques: https://musica.xara-capoeira.com/capoeira-toques/ e https://alexisdinno.com/portfolio/capoeiramusic.html

### Desenvolvimento e testes

O projeto é estático, sem dependências em produção. `plan.js` guarda o plano, `core.js` as datas/migração/montagens, `content.js` as orientações e `app.js` a interface. Os estilos estão em `base.css` e `app.css`. Ao publicar uma próxima versão, altere o nome do cache em `sw.js` e inclua novos arquivos no precache.

- `node --test tests/core.test.cjs`: datas, migração e estoque de anilhas.
- `node tests/browser.cjs`: precisa de Playwright no ambiente e Microsoft Edge. Testa histórico, notas, cargas, modos, backup, musicalidade, offline e atualização. Use `NODE_PATH` se o Playwright estiver em uma instalação compartilhada.
- `node scripts/build-illustrations.cjs`: regenera os esquemas SVG originais.

### Semana e histórico (versão 3.1)

A aba **Semana** mostra a semana atual de segunda a domingo, com as datas, objetivos e listas dos modos normal, leve e descanso. A consulta não grava nem modifica o histórico. “Abrir registro desta data” leva à sessão salva daquele dia. O calendário mensal de histórico permanece acessível exclusivamente pelo botão da data no topo.
