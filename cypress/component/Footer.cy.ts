// cypress/component/Footer.spec.ts
import { mountWithVuetify } from '../support/component'
import Footer from '../../src/components/Footer.vue'

describe('Footer Component', () => {
  it('renders the footer with correct text and classes', () => {
    mountWithVuetify(Footer)

    cy.get('footer')
      .should('exist')
      .and('contain.text', '© 2025 My App')
      .and('have.class', 'bg-primary')
      .and('have.class', 'text-white')
  })
})
