// cypress/component/Header.spec.ts
import { mountWithVuetify } from '../support/component'
import Header from '../../src/components/Header.vue'
import i18n from '../../src/i18n/index'

describe('Header Component', () => {
  it('renders header with correct text and classes', () => {
    mountWithVuetify(Header, {
      global: {
        plugins: [i18n],
      },
    })

    // Check header element
    cy.get('header')
      .should('exist')
      .and('have.class', 'bg-primary')
      .and('have.class', 'text-white')

    // Check h1 text matches i18n translation
    cy.get('h1').should('contain.text', i18n.global.t('appName'))
  })
})
