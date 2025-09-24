// cypress/component/TodoItem.spec.ts
import { mountWithVuetify } from '../support/component'
import TodoItem from '../../src/components/TodoItem.vue'

describe('TodoItem Component', () => {
  const todo = { id: 1, text: 'Test Task' }

  it('renders todo text', () => {
    mountWithVuetify(TodoItem, { props: { todo } })
    cy.contains('Test Task').should('exist')
  })

  it('enters edit mode on pencil click', () => {
    mountWithVuetify(TodoItem, { props: { todo } })
    cy.get('button').first().click() // pencil button
    cy.get('input').should('have.value', 'Test Task')
  })

  it('saves edit on check click', () => {
    mountWithVuetify(TodoItem, { props: { todo } }).then((wrapper) => {
      cy.get('button').first().click() // pencil
      cy.get('input').clear().type('Updated Task')
      cy.get('button').contains('').eq(1).click() // check button
      cy.wrap(wrapper).should('emit', 'update', { id: 1, text: 'Updated Task' })
    })
  })

  it('saves edit on Enter key', () => {
    mountWithVuetify(TodoItem, { props: { todo } }).then((wrapper) => {
      cy.get('button').first().click() // pencil
      cy.get('input').clear().type('Enter Task{enter}')
      cy.wrap(wrapper).should('emit', 'update', { id: 1, text: 'Enter Task' })
    })
  })

  it('cancels edit on blur', () => {
    mountWithVuetify(TodoItem, { props: { todo } }).then((wrapper) => {
      cy.get('button').first().click() // pencil
      cy.get('input').clear().type('Cancelled Task')
      cy.get('input').blur()
      cy.contains('Test Task').should('exist') // value reverted
    })
  })

  it('emits remove when delete clicked', () => {
    mountWithVuetify(TodoItem, { props: { todo } }).then((wrapper) => {
      cy.get('button').last().click() // delete button
      cy.wrap(wrapper).should('emit', 'remove', 1)
    })
  })

  it('updates editText when props.todo.text changes', () => {
    const newTodo = { ...todo }
    mountWithVuetify(TodoItem, { props: { todo: newTodo } }).then((wrapper) => {
      cy.get('span').should('contain.text', 'Test Task')
      // Update prop
      newTodo.text = 'Prop Updated'
      wrapper.setProps({ todo: newTodo })
      cy.get('span').should('contain.text', 'Prop Updated')
    })
  })
})
