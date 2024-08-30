
# Uso do Fluxo GitFlow

## Estrutura de Organização: Epic -> Story -> Task

### Planejamento
Primeiro, você define as **epics** (grandes objetivos) e as divide em **stories** (partes menores). Cada story é dividida em **tasks** (trabalhos específicos).

### Criação de Branches
- Para cada **task**, crie uma **feature branch** a partir da `develop`.

### Desenvolvimento
O desenvolvedor deve trabalhar na **task** utilizando a **feature branch**. Ao finalizar, devem ser feitos testes e se estiver tudo certo, a **feature** será mergeada na branch `develop`.

### Preparação para Lançamento
É interessante que **releases** sejam criadas quando **stories** ou até **epics** forem finalizadas, mas podemos criar releases para features menores também. Para isso, devemos criar uma **release branch** a partir da `develop` e fazer os ajustes finais junto aos testes.

### Lançamento
- Fazemos o **Merge** da release na `main` e o deploy para produção.
- A release deve ser mergeada de volta na `develop` para manter tudo atualizado.

### Correções Rápidas
Em casos que um bug crítico vá para produção, deve se criar uma **hotfix branch** a partir da `main`, depois corrijimos e efetuamos o merge, tanto na `main` quanto na `develop`.

---

## Branches

### Master
- **Descrição:** Contém o código de produção estável mais recente. Todo o código nesta branch deve estar pronto para ser lançado em produção, ou seja, revisado e testado. Apenas branches de release com tags criadas serão mergeadas aqui.
- **Nomenclatura:** `master`

### Release
- **Descrição:** As branches de release terão o código testado originado da `develop`. Nas releases, serão atualizadas informações como log de mudanças e versão do sistema. Após alterações, uma tag é criada para essa release, que reflete a versão do sistema (ex: v4.1, v4.2.1). Para não causar conflitos, essas branches serão mergeadas tanto na `master` quanto na `develop`.
- **Nomenclatura:** `release/{{version}}`

### Develop
- **Descrição:** A branch `develop` será utilizada para centralizar os merges de pull requests diretos do desenvolvedor. Aqui, as branches de feature serão mergeadas e testadas. É a branch que mais será atualizada e servirá de base para todas as features, sendo assim a mais atualizada.
- **Nomenclatura:** `develop`

### Feature
- **Descrição:** Branches de `feature` serão criadas a partir da branch `develop`. São utilizadas para que os desenvolvedores criem seus códigos e tenham um ambiente de commits controlado. Cada nova funcionalidade ou melhoria é implementada nessas branches. Quando o desenvolvimento é finalizado, a branch é mergeada na `develop` e excluída (na maioria dos casos).
- **Nomenclatura:** `feature-@{{task-id}}/{{feature-name}}`

### Hotfix
- **Descrição:** Branches de hotfix são criadas para atualizações mínimas. O objetivo principal é permitir que o desenvolvedor faça a resolução de qualquer problema crítico que foi subido para produção. São criadas a partir da `master` e, após a alteração, mergeadas na `master` e em `develop`.
- **Nomenclatura:** `hotfix-@{{task-id}}/{{version-to-be-updated}}`
