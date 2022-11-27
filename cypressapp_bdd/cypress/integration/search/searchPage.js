const URL = 'http://zero.webappsecurity.com/index.html'
const SEARCH_ELEMENT = '#searchTerm'



class SearchPage{

    static visit(){
        cy.visit(URL)
    }

    static search(value){
        cy.get(SEARCH_ELEMENT).type(`${value}{enter}`)
    }

    static result(){
        cy.get('h2').contains('Search Results:')
    }
}


export default SearchPage;