import React from 'react'
import { ContainerShopGrid } from '../Basic/ContainerShopGrid';
import { ProductCard } from './ProductCard';

export const ProductGrid = (props) => {
    const {products}=props;
    
  return (
        <ContainerShopGrid>
            {products && products.map((prod,index)=>(
                prod.attributes.image?.data &&
                <ProductCard 
                    product={{
                        id:prod.id,
                        url: prod.attributes.image.data[0].attributes.url,
                        title:prod.attributes.title,
                        price:prod.attributes.price
                    }}
                    key={index}
                />
                )
            )}
        </ContainerShopGrid>
  )
}
