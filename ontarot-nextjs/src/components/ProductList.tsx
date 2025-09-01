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
    <div className="flex flex-col mb-[10px] gap-[16px] w-full bg-white rounded-[10px]">
      <div className="w-full text-[20px] font-bold leading-[142%] tracking-[-0.2px] text-[#161741]">
        {title}
      </div>
      <div className="w-full h-auto flex flex-col justify-start items-start gap-[20px] bg-transparent m-0 p-0">
        <div className="w-full h-auto flex flex-col justify-start items-start gap-[26px] bg-transparent m-0 p-0" style={{ minHeight: '300px' }}>
          {products.map((product) => (
            <div key={product.id} className="w-full flex flex-row gap-[18px] cursor-pointer">
              <div className="w-[121px] min-w-[121px] h-[104px] rounded-[10px] overflow-hidden relative">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="absolute h-full w-full left-0 top-0 right-0 bottom-0 object-cover"
                />
              </div>
              <div className="w-full h-auto flex flex-col justify-between items-start gap-[7px] bg-transparent m-0 p-[0_0_2px]">
                <div className="w-full h-auto flex flex-col justify-start items-start gap-[7px] bg-transparent m-0 p-0">
                  <p className="flex items-center justify-center h-[21px] gap-[3px] rounded-[999px] bg-[#DDE9FF] px-[6px] py-[2px]">
                    <span className="text-[10px] tracking-[-0.2px]">{product.categoryIcon}</span>
                    <span className="text-[11px] font-bold leading-[150%] tracking-[-0.22px] text-[#5791FF]">
                      {product.category}
                    </span>
                  </p>
                  <span className="text-[16px] font-normal text-[#161741] opacity-100 font-normal leading-[142%] whitespace-pre-line text-start word-break-normal">
                    {product.title}
                  </span>
                </div>
                <div className="h-[23px] flex flex-row items-center gap-[4px] overflow-hidden">
                  <p className="text-[14px] font-normal leading-[150%] tracking-[-0.28px] text-[#454567] line-through">
                    {product.originalPrice.toLocaleString()}원
                  </p>
                  <div className="w-full h-auto flex flex-row justify-start items-start gap-[1px] bg-transparent m-0 p-0">
                    <p className="text-[18px] font-bold leading-[150%] tracking-[-0.36px] text-[#5791FF]">
                      {product.discountRate}%
                    </p>
                    <p className="text-[18px] font-bold leading-[150%] tracking-[-0.36px] text-[#161741]">
                      {product.discountPrice.toLocaleString()}원
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="relative w-full h-[48px] flex items-center justify-center rounded-[10px] leading-[150%] whitespace-nowrap cursor-pointer bg-[#5791FF] text-white font-bold text-[16px] font-semibold">
          더보기
        </button>
      </div>
    </div>
  )
}

export default ProductList
