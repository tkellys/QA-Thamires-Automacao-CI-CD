import { ALFABETO } from "../locators/alfabeto_locators";
import { PAGINA_HOME } from "../locators/homepage_locators";
import { MENU } from "../locators/menu_locators";
import { RODAPE } from "../locators/rodape_locators";

Cypress.Commands.add('homePage', () => {
    const baseUrl = Cypress.config('baseUrl');
    cy.visit(baseUrl);
    cy.get(PAGINA_HOME.LOGO_SITE).should('be.visible');
})
Cypress.Commands.add('pesquisarGiria', () => {
    cy.get(PAGINA_HOME.INPUT_PESQUISA)
    .click();
})
Cypress.Commands.add('paginaLogin', () => {
    cy.get(PAGINA_HOME.BOTAO_LOGIN)
    .first()    
    .click();
})
Cypress.Commands.add('paginaCriarConta', () => {
    cy.get(PAGINA_HOME.BOTAO_CRIAR_CONTA)   
    .should('be.visible')
    .click({ force: true });
})
Cypress.Commands.add('itensNavegacao', (item) => {
    cy.get(MENU[item])
    .first()
    .click();
})
Cypress.Commands.add('adicionarGiria', () => {
    cy.get(PAGINA_HOME.BOTAO_ADD_GIRIA)
    .click();

})
Cypress.Commands.add('paginaPodio', () => {
    cy.get(PAGINA_HOME.BOTAO_PODIO, { timeout: 10000 })
    .first()
    .click();

})
Cypress.Commands.add('giriasPopulares', () => {
    cy.get(PAGINA_HOME.LISTA_GIRIAS, { timeout: 10000 }).each((element)=>{
        const texto = element.text();
        const href = element.attr('href');
        cy.visit(href);
        cy.contains(texto).should('exist')
        cy.visit('/');
    })
})
Cypress.Commands.add('visitarBlog', () => {
    cy.get(PAGINA_HOME.NOTICIA_BLOG, { timeout: 10000 })
    .first()
    .click({force:true})
    .should('have.attr', 'href')
    .then((href) => {
    cy.origin('https://popquest.news', { args: { href } }, ({ href }) => {
        cy.visit(href);

        cy.get('img[alt*="Pop Quest"]', { timeout: 10000 }).should('be.visible');
    })
})
})

Cypress.Commands.add('letraDicionario', (item) => {
    cy.get(ALFABETO[item])
    .first()
    .click();
})

Cypress.Commands.add('acessarRodape', (pagina) => {
    cy.get(RODAPE[pagina.toUpperCase()]).click();
});

Cypress.Commands.add('voltarAoTopo', () => {
    cy.get('.cookie-popup button').click({ force: true }); 
    cy.scrollTo('bottom',{ timeout: 10000 })
    cy.get(PAGINA_HOME.BOTAO_VOLTAR_TOPO).should('be.visible').click()
    cy.get(PAGINA_HOME.DESCRICAO_SITE).should('be.visible')
        .and('contain.text', 'Exemplos de Gírias');
});










