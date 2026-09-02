import React from 'react'
import Container from '../../components/Container'
import Button from '../../components/Button'

const steps = [
    {
        id: 1,
        title: 'Customize Your Cart',
        description:
            'Build a branded cart experience with rewards, progress bars, and checkout features that fit your store.',
    },
    {
        id: 2,
        title: 'Add Smart Upsells to Your Cart',
        description:
            'Show personalized upsells, bundles, and product recommendations right in the cart to help increase order value.',
    },
    {
        id: 3,
        title: 'Increase Revenue Automatically',
        description:
            'Drive more conversions with a faster, optimized checkout experience that helps turn more carts into completed purchases.',
    },
];

export default function CustomizeCart() {
    return (
        <section className='relative'>
            <div className='absolute left-0 top-0 z-0'>
                <img src="https://cartplus.io/cartplus-img/Subtract (3).svg" alt="cart plus" className='w-full' />
            </div>
            <Container className='py-[40px] max-[540px]:py-[20px] relative z-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[20px] lg:gap-[80px] items-center px-[0]'>

                    {/* IMAGE — mobile pe pehle, md pe doosre number pe */}
                    <div className='w-full order-2 md:order-1'>
                        <img
                            src='https://cartplus.io/cartplus-img/Group 1707480348.svg'
                            alt='HubCart'
                            loading='lazy'
                            decoding='async'
                            className='w-full h-auto'
                        />
                    </div>

                    {/* TEXT — mobile pe doosre number pe, md pe pehle */}
                    <div className='order-1 md:order-2 text-center md:text-left'>
                        <h2 className='font-bold max-[540px]:text-[28px] text-[45px] lg:text-[50px] leading-[45px] lg:leading-[60px] max-[540px]:mb-[10px] mb-[20px]'>
                            How It Works
                        </h2>
                        {steps.map((step) => (
                            <div key={step.id} className='max-[540px]:mb-[10px] mb-[20px]'>
                                <p className='text-[24px] max-[540px]:text-[16px] leading-[30px] font-bold max-[540px]:mb-[8px] mb-[15px]'>{step.title}</p>
                                <p className='max-[540px]:text-[14px] text-[16px] max-[540px]:leading-[20px] leading-[23px]'>{step.description}</p>
                            </div>
                        ))}
                        <div className='max-[540px]:mt-[20px]'>
<<<<<<< HEAD
                             <a href='https://apps.shopify.com/cart-plus-3' target="_blank" rel="noopener noreferrer">
                            <Button icon="https://cartplus.io/cartplus-img/buttonIcon.png">Start Free Trial</Button>
                            </a>
=======
                            <Button icon="https://cartplus.io/cartplus-img/buttonIcon.png">Start Free Trial</Button>
>>>>>>> 82fc23400dc276e7412d8d9e4bdf35ecbf526075
                        </div>
                    </div>
                </div>
            </Container>

        </section>
    )
}