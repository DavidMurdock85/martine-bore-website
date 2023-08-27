import React from 'react'
import { render } from '@testing-library/react'
import { Notices } from '../../components/Notices'

describe('Notices Component', () => {
  test('renders the notices correctly', () => {
    const { getByText } = render(<Notices />)

    expect(getByText('Notices')).toBeInTheDocument()
    expect(getByText('Spring Sale')).toBeInTheDocument()
    expect(
      getByText(
        'Our Spring Sale is currently on. Find selected antiques, jewelry and fine art at up to 30% off our original asking price. Look for the red tags.'
      )
    ).toBeInTheDocument()
    expect(getByText('Its Curated')).toBeInTheDocument()
    expect(
      getByText(
        'Look for the new tags in our gallery that give a curated perspective on our unique items.'
      )
    ).toBeInTheDocument()
    expect(getByText('How to avoid being scammed')).toBeInTheDocument()
    expect(
      getByText(
        'Recently Martine Bore Antiques LTD. has been the victim of fraud. Job postings with our name and copied logo have been appearing on a number of job and social media sites. These are entirely fake and we are not currently hiring. If you see any of these posting we kindly ask you to report them to your local police or local anti fraud. Authorities are aware of their activities.'
      )
    ).toBeInTheDocument()

    // add more assertions if needed for specific styling or other elements
  })
})
