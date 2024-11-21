import { createRemixStub } from '@remix-run/testing'
import { render, screen, waitFor } from '@testing-library/react'
import { test } from 'vitest'
// biome-ignore lint/nursery/useImportRestrictions: might move tests inside source files..
import Index from '../../app/routes/_index.js'

test('renders loader data', async () => {
  const RemixStub = createRemixStub([
    {
      path: '/',
      Component: Index,
    },
  ])

  render(<RemixStub />)

  await waitFor(() => screen.findByText('Hello there,'))
})
