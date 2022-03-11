it('ルートパスに訪問できるか', () => {
  cy.visit('/')
  cy.findByTestId('hoge-button').click()
})
