import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

function renderApp() {
  const user = userEvent.setup()
  render(<App />)
  return user
}

function currentCount() {
  return screen.getByText(/Current count:/)
}

describe('App counter', () => {
  it('starts at zero', () => {
    renderApp()
    expect(currentCount()).toHaveTextContent('Current count: 0')
  })

  it('increases the count', async () => {
    const user = renderApp()
    await user.click(screen.getByRole('button', { name: 'Increase' }))
    expect(currentCount()).toHaveTextContent('Current count: 1')
  })

  it('decreases the count', async () => {
    const user = renderApp()
    await user.click(screen.getByRole('button', { name: 'Decrease' }))
    expect(currentCount()).toHaveTextContent('Current count: -1')
  })

  it('resets the count back to zero', async () => {
    const user = renderApp()
    await user.click(screen.getByRole('button', { name: 'Increase' }))
    await user.click(screen.getByRole('button', { name: 'Increase' }))
    expect(currentCount()).toHaveTextContent('Current count: 2')

    await user.click(screen.getByRole('button', { name: 'Reset' }))
    expect(currentCount()).toHaveTextContent('Current count: 0')
  })

  it('accumulates across repeated clicks', async () => {
    const user = renderApp()
    const increase = screen.getByRole('button', { name: 'Increase' })

    await user.click(increase)
    await user.click(increase)
    await user.click(increase)

    expect(currentCount()).toHaveTextContent('Current count: 3')
  })
})