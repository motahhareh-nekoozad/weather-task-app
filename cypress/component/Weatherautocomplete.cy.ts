// cypress/component/Weather.spec.ts
import { mountWithVuetify } from '../support/component'
import Weather from '../../src/components/WeatherAutocomplete.vue'
import i18n from '../../src/i18n/index'

describe('Weather Component', () => {
  beforeEach(() => {
    cy.intercept('GET', /api.open-meteo.com\/v1\/forecast.*/, {
      statusCode: 200,
      body: {
        current_weather: {
          temperature: 25,
          windspeed: 10,
          winddirection: 180,
          weathercode: 0,
          time: '2025-09-24T12:00'
        }
      }
    }).as('getWeather')
  })

  it('renders placeholder initially', () => {
    mountWithVuetify(Weather, { global: { plugins: [i18n] } })
    cy.get('input').should('have.attr', 'placeholder', i18n.global.t('selectCity'))
  })

  it('shows weather info after selecting a city', () => {
    mountWithVuetify(Weather, { global: { plugins: [i18n] } })

    // Type and select a city
    cy.get('input').type('Tehran')
    cy.get('.v-list-item__title').contains('Tehran').click()

    // Wait for fetch
    cy.wait('@getWeather')

    // Check if selected city and weather info are displayed
    cy.get('h2').should('contain.text', 'Tehran')
    cy.get('p').contains('25°C').should('exist')
    cy.get('p').contains('10 km/h').should('exist')
  })

  it('updates weather when selecting a different city', () => {
    mountWithVuetify(Weather, { global: { plugins: [i18n] } })

    // Select first city
    cy.get('input').type('Tehran')
    cy.get('.v-list-item__title').contains('Tehran').click()
    cy.wait('@getWeather')
    cy.get('h2').should('contain.text', 'Tehran')

    // Select another city
    cy.get('input').clear().type('Mashhad')
    cy.get('.v-list-item__title').contains('Mashhad').click()
    cy.wait('@getWeather')
    cy.get('h2').should('contain.text', 'Mashhad')
  })
})
