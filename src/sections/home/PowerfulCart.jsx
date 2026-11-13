import React from 'react'
import Container from '../../components/Container'
import Button from '../../components/Button'

const cards = [
    {
        id: 1,
        image: 'https://cartplus.io/cartplus-img/Group 17074800411.svg',
        title: 'Customize Your Cart Drawer',
        description:
            'Boost conversions with reward-driven carts, urgency timers, and frictionless checkout flows.',
    },
    {
        id: 2,
        image: 'https://cartplus.io/cartplus-img/Group 17074800441.svg',
        title: 'Personalized Upsell Offers',
        description:
            'Increase AOV with smart upsells, bundles, and timely product recommendations.',
    },
    {
        id: 3,
        image: 'https://cartplus.io/cartplus-img/Group 17074800451.svg',
        title: 'One Powerful Dashboard',
        description:
            'Manage cart customization, offers, discounts, and performance insights from one simple platform.',
    },
]

export default function PowerfulCart() {

    return (
        <section className='relative z-20'>
            <Container className='py-[40px] max-[540px]:py-[20px]'>
                <h2 className='heading-line-height font-bold max-[540px]:leading-[36px] max-[540px]:text-[28px] text-[45px] lg:text-[50px] leading-[45px] lg:leading-[60px] max-[540px]:mb-[30px] mb-[20px] text-center'>
                    Powerful Tools to Maximize Cart Performance
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-3 max-[540px]:gap-[30px] gap-[20px] lg:gap-[40px] text-[#1D1E20] text-center'>
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            style={{
                                position: 'relative',
                                borderRadius: '15px',
                                padding: '1px',
                                background: 'linear-gradient(68.16deg, rgba(255, 255, 255, 0.2) -20.25%, rgba(149, 0, 255, 0.2) 99.98%)',
                            }}
                        >
                            <div
                                className='rounded-[14px] py-[30px] px-[35px] max-[480px]:py-[20px] max-[480px]:px-[20px] h-full'
                                style={{
                                    background: '#FFFFFF',
                                    boxShadow: '0px 0px 80px 0px #9500FF14 inset',
                                }}
                            >
                                <div className='py-[15px] w-[100px] m-auto mb-[20px] max-[480px]:mb-[5px]'>
                                    <img src={card.image} alt='HubCart' loading='lazy' decoding='async' />
                                </div>
                                <h3 className='text-[24px] leading-[30px] font-bold mb-[15px]'>{card.title}</h3>
                                <p className='text-[16px] leading-[23px] max-[540px]:text-[14px]'>{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}