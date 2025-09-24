// cypress/component/Sidebar.spec.ts
import { mountWithVuetify } from '../support/component'
import Sidebar from '../../src/components/Sidebar.vue'

describe('Sidebar Component', () => {
  it('renders all menu items', () => {
    mountWithVuetify(Sidebar)

    // Check sidebar exists
    cy.get('aside').should('exist')

    // Check menu items text
    const items = ['Dashboard', 'Todos', 'Weather', 'Profile']
    items.forEach((text) => {
      cy.get('li').contains(text).should('be.visible')
    })
  })

  it('applies correct background class for light theme', () => {
    mountWithVuetify(Sidebar, {
      vuetify: { theme: { defaultTheme: 'light' } },
    })

    cy.get('aside').should('have.class', 'bg-gray-200')
  })

  it('applies correct background class for dark theme', () => {
    mountWithVuetify(Sidebar, {
      vuetify: { theme: { defaultTheme: 'dark' } },
    })

    cy.get('aside').should('have.class', 'bg-gray-800')
  })

  it('links have correct classes based on theme', () => {
    mountWithVuetify(Sidebar, {
      vuetify: { theme: { defaultTheme: 'light' } },
    })

    cy.get('li a').each(($link) => {
      cy.wrap($link).should('have.class', 'text-gray-800')
    })

    mountWithVuetify(Sidebar, {
      vuetify: { theme: { defaultTheme: 'dark' } },
    })

    cy.get('li a').each(($link) => {
      cy.wrap($link).should('have.class', 'text-gray-200')
    })
  })
})
