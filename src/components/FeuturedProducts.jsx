import React from 'react'
import SectionTitle from './SectionTitle'
import ProductsGrid from './ProductsGrid'

const FeuturedProducts = () => {
    return (
        <div className='pt-24'>
            <SectionTitle text='Feutured Products' />
            <ProductsGrid />
        </div>
    )
}

export default FeuturedProducts