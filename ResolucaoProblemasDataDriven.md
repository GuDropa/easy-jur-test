
Primeiro podemos começar pelo **monitoramento e ferramentas para coleta de dados**. Uma das primeiras ações seria inspecionar a página e acompanhar tanto o tempo de carregamento dos arquivos chunks quanto o tempo médio de resposta das requisições para a API. Podemos tirar informações importantes logo nessa primeira abordagem e definir se provavelmente é algum problema externo ou de provedor.

Já no **DevTools**, podemos acessar o **Lighthouse**, que gera métricas detalhadas do carregamento do conteúdo na página, desde seu reconhecimento até sua total renderização. As principais métricas que utilizaremos são: **First Contentful Paint (FCP)**, **Largest Contentful Paint (LCP)** e **Time to Interactive (TTI)**.

Após elencar os principais pontos que podem causar a lentidão, podemos começar a efetuar as melhorias.

### Melhoria nos Recursos da Página:

- Carregamento e chamadas de APIs de forma assíncrona.
- Minificação de arquivos CSS e JS.
- Utilização de Lazy Loading para conteúdos.

### Melhoria na Comunicação com a API:

- Criar/otimizar camada de cache.
- Melhoria nas queries e revisão da estrutura de tabelas do banco de dados.

Após as mudanças, é necessário uma etapa de validação. Criaremos testes tanto na API quanto no front para garantir regularmente que tudo estará rodando de forma otimizada.

No front, podemos utilizar novamente o **Lighthouse** junto ao **DevTools** para comparar os dados em relação a antes das modificações.

Na API, faremos testes com as queries e checagem de hits x misses da camada de cache.