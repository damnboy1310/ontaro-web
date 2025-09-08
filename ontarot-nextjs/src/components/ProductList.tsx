'use client'

import React from 'react'

interface Product {
  id: string
  title: string
  category: string
  categoryIcon: string
  thumbnail: string
  originalPrice: number
  discountPrice: number
  discountRate: number
}

interface ProductListProps {
  title: string
  products: Product[]
}

const ProductList: React.FC<ProductListProps> = ({ title, products }) => {
  return (
    <div className="container-mobile flex flex-col mb-[10px] gap-[var(--spacing-lg)] bg-white rounded-[var(--radius-lg)] p-[var(--spacing-xl)]">
      <div className="w-full text-heading text-[var(--font-size-2xl)] leading-[142%] tracking-[-0.2px]">
        {title}
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-[var(--spacing-xl)]">
        <div className="w-full flex flex-col justify-start items-start gap-[26px]" style={{ minHeight: '300px' }}>
          {products.map((product) => (
            <div key={product.id} className="w-full flex flex-row gap-[18px] cursor-pointer group hover:bg-[var(--color-background)] p-[var(--spacing-sm)] rounded-[var(--radius-md)] transition-all duration-[var(--transition-fast)]">
              <div className="w-[121px] min-w-[121px] h-[104px] rounded-[var(--radius-lg)] overflow-hidden relative">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="absolute h-full w-full left-0 top-0 right-0 bottom-0 object-cover group-hover:scale-105 transition-transform duration-[var(--transition-fast)]"
                />
              </div>
              <div className="w-full h-auto flex flex-col justify-between items-start gap-[7px] p-[0_0_2px]">
                <div className="w-full flex flex-col justify-start items-start gap-[7px]">
                  <p className="flex items-center justify-center h-[21px] gap-[3px] rounded-[999px] bg-[var(--color-primary-light)] px-[6px] py-[2px]">
                    <span className="text-[var(--font-size-xs)] tracking-[-0.2px]">{product.categoryIcon}</span>
                    <span className="text-[11px] font-bold leading-[150%] tracking-[-0.22px] text-[var(--color-primary)]">
                      {product.category}
                    </span>
                  </p>
                  <span className="text-[var(--font-size-lg)] text-[var(--color-text-primary)] leading-[142%] whitespace-pre-line text-start word-break-normal group-hover:text-[var(--color-primary)] transition-colors duration-[var(--transition-fast)]">
                    {product.title}
                  </span>
                </div>
                <div className="h-[23px] flex flex-row items-center gap-[var(--spacing-xs)] overflow-hidden">
                  <p className="text-[var(--font-size-base)] font-normal leading-[150%] tracking-[-0.28px] text-[var(--color-text-secondary)] line-through">
                    {product.originalPrice.toLocaleString()}원
                  </p>
                  <div className="flex flex-row justify-start items-start gap-[1px]">
                    <p className="text-[var(--font-size-xl)] font-bold leading-[150%] tracking-[-0.36px] text-[var(--color-primary)]">
                      {product.discountRate}%
                    </p>
                    <p className="text-[var(--font-size-xl)] font-bold leading-[150%] tracking-[-0.36px] text-[var(--color-text-primary)]">
                      {product.discountPrice.toLocaleString()}원
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="btn-primary w-full h-[48px] text-[var(--font-size-lg)]">
          더보기
        </button>
      </div>
    </div>
  )
}

export default ProductList
