import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { formatPrice, customFetch, generateAmountOptions } from '../utils'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const loader = async ({ params }) => {
    const response = await customFetch(`/products/${params.id}`)

    return { product: response.data.data }
}

const SingleProduct = () => {
    const { product } = useLoaderData()
    console.log(product);
    const { image, title, price, colors, description, company } = product.attributes
    const dollarAmout = formatPrice(price)

    const [colorProduct, setColorProduct] = useState(colors[0])
    const [amount, setAmount] = useState(1)

    const handleAmount = (e) => {
        setAmount(parseInt(e.target.value))
    }

    return (
        <section>
            <div className='text-md breadcrumbs'>
                <ul>
                    <li >
                        <Link to='/'>Home</Link>
                    </li>
                    <li >
                        <Link to='/products'>Products</Link>
                    </li>
                </ul>
            </div>
            <div className='mt-6 grid lg:grid-cols-2 gap-y-8 lg:gap-x-6  '>
                {/* IMAGE */}
                <img src={image} alt={title} className='rounded-lg w-96 h-96 object-cover lg:w-full' />
                {/* PRODUCT INFO */}
                <div>
                    {/* PRODUCT */}
                    <h1 className='capitalize font-bold text-3xl'>{title}</h1>
                    <h4 className='mt-2 font-bold text-xl text-neutral-content'>{company}</h4>
                    <p className='mt-3 text-xl'>{dollarAmout}</p>
                    <p className='mt-6 text-lg leading-8'>{description}</p>
                    {/* COLORS */}
                    <div className='mt-6'>
                        <h4 className='text-md font-medium tracking-wider capitalize'>colors</h4>
                        <div className='mt-2'>
                            {colors.map((color) => {
                                return (
                                    <button key={color} type='button' className={`badge w-6 h-6 mr-2 ${color === colorProduct && 'border-2 border-secondary'} `} style={{ backgroundColor: color }} onClick={() => setColorProduct(color)} ></button>
                                )
                            })}
                        </div>
                    </div>
                    {/* AMOUNT */}
                    <div className='mt-6 form-control w-full max-w-xs'>
                        <label htmlFor="amount" className='label'>
                            <h4 className='text-md font-medium tracking-wider capitalize'>amount</h4>
                        </label>
                        <select id="amount" value={amount} onChange={handleAmount} className='select select-secondary select-bordered select-md ' >
                            {generateAmountOptions(20)}
                        </select>
                    </div>
                    {/* CART BTN */}
                    <div className="mt-10">
                        <button className='btn btn-secondary btn-md' onClick={() => console.log('add to bag')}>Add to Bag</button>
                    </div>
                </div>

            </div>
        </section >
    )
}

export default SingleProduct