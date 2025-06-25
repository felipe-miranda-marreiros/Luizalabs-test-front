import '@testing-library/jest-dom'

import {
  ProductContainer,
  ProductHeader,
  ProductImage,
  ProductContent
} from './Product'
import { render } from '@/shared/test/test-utils'
import { screen } from '@testing-library/dom'

describe('<Product />', () => {
  it('Should render a ProductContainer child content correctly', () => {
    render(
      <ProductContainer>
        <p>Child content</p>
      </ProductContainer>
    )
    expect(screen.getByText('Child content')).toBeInTheDocument()
  })

  it('Should render a ProductHeader child content correctly', () => {
    render(
      <ProductHeader>
        <span>Header Item</span>
      </ProductHeader>
    )
    expect(screen.getByText('Header Item')).toBeInTheDocument()
  })

  it('Should render a ProductImage with correct src and alt', () => {
    render(<ProductImage image="/img/test.png" title="Test Image" />)
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('src', '/img/test.png')
    expect(img).toHaveAttribute('alt', 'Test Image')
  })

  it('Should render ProductContent with title, formatted amount, and description', () => {
    render(
      <ProductContent
        title="Test Product"
        amount={99.99}
        description="A sample description"
      />
    )
    expect(screen.getByText('Test Product')).toBeInTheDocument()
    expect(screen.getByText('R$ 99,99')).toBeInTheDocument()
    expect(screen.getByText('A sample description')).toBeInTheDocument()
  })
})
