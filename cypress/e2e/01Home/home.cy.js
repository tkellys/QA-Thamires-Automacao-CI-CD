
describe.only('Validações na Página Home - Usuário Não Logado', () => {
      beforeEach(() => {
      cy.homePage();
      cy.viewport(1280, 720);
  })
  it("Validar que é a página home", () => {
    cy.homePage();
  });
  it("Buscar por uma gíria cadastrada", () => {
    cy.pesquisarGiria()
    .type('mangar{enter}')
    cy.contains('Mangar significa').should('be.visible');
  });
    it("Buscar por uma gíria não cadastrada", () => {
    cy.pesquisarGiria()
    .type('teste')
    cy.contains('Não achou o que procurava?').should('be.visible');
  });
    it("Acessar tela login", () => {
    cy.paginaLogin()
    cy.contains('Entrar com sua conta').should('be.visible');
    cy.get('form').should('exist').and('be.visible');
  });

    it("Acessar item 'Hashtags' no menu do cabeçalho", () => {
    cy.itensNavegacao('HASHTAGS')
    cy.url().should('include','/hashtags')
    cy.contains('Lista de Hashtags').should('be.visible')

  });  

    it("Acessar item 'Galera' no menu do cabeçalho", () => {
    cy.itensNavegacao('GALERA')
    cy.url().should('include','/galera')
    cy.contains('Galera').should('be.visible')
  }); 
    it("Acessar tela criar conta", () => {
    cy.paginaCriarConta()
    cy.contains('Criar nova conta').should('be.visible');
    cy.get('form').should('exist').and('be.visible');

  });
    it("Adicionar uma nova gíria", () => {
    cy.adicionarGiria()
    cy.contains('Entre com a sua conta para adicionar sua gíria!')
    cy.get('form').should('exist').and('be.visible');
  });
    it("Ver classificação do pódio da comunidade", () => {
    cy.paginaPodio()
    cy.contains('Pódio da Comunidade').should('be.visible')
  });
    it("Visualizar detalhes de uma 'Gíria que está na boca do povo'", () => {
    cy.giriasPopulares()
  });
    it("Acessar noticia do blog PopQuest!", () => {
    cy.visitarBlog()
  });
    it("Acessar letra 'M' no Dicionário de Gírias", () => {
    cy.letraDicionario('M')
    cy.url().should('include','/letra-m')
    cy.contains('Gírias com a letra: M').should('be.visible')
  });
    it("Acessar item 'Contato' do rodapé", () => {
    cy.acessarRodape('contato')
    cy.url().should('include','/contato')
    cy.contains('Entre em contato').should('be.visible')

  });
    it("Validar funcionamento do botão de voltar pro topo da página", () => {
    cy.voltarAoTopo()
    
  });
});