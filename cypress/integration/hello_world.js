let win

describe('Hello World', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Say hello', async () => {
    cy.window().then(win => {
      expect(win.hello().startsWith('Hello')).to.be.true
    })
  })
})
