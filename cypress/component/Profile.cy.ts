import { mountWithVuetify } from '../support/component'
import Profile from '../../src/pages/Profile.vue'

describe('Profile Component', () => {
  it('renders Save button', () => {
    mountWithVuetify(Profile)
    cy.contains('Save', { timeout: 10000 }).should('exist')
  })
})
