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
  index.html            interface, plano e comportamento
  manifest.webmanifest instalação no celular
  icon.svg              ícone do aplicativo
  sw.js                 funcionamento offline
.github/workflows/
  pages.yml             publicação automática
```

## Alterar o plano

Os sete dias estão no array `plan`, dentro de `dist/index.html`. Cada exercício segue este formato:

```js
['Nome', 'Orientação curta', 'Séries/repetições']
```

## Próximas etapas

- ajustar o plano a partir da análise dos vídeos de treino;
- melhorar o histórico semanal;
- avaliar integração opcional com o Strava;
- manter qualquer integração com contas de trabalho, como Teams, fora do projeto.

## Executar localmente no computador

```bash
python3 -m http.server 8080 --directory dist
```

Depois, abra `http://localhost:8080` no navegador.
