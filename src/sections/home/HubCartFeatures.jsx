import React, { useState } from 'react'
import Container from '../../components/Container'

const features = [
    {
        id: 1,
        title: 'Buy More Save More',
        description:
            'Automatically apply volume discounts that give customers more value when they buy more.',
        defaultOpen: false,
    },
    {
        id: 2,
        title: 'One Click Upsell',
        description:
            'Recommend relevant products in the cart and let shoppers add them instantly with a single click.',
        defaultOpen: false,
    },
    {
        id: 3,
        title: 'Frequently Bought Together',
        description:
            'Suggest complementary products that customers are likely to purchase together to increase basket size.',
        defaultOpen: false,
    },
    {
        id: 4,
        title: 'Cart Designer',
        description:
            'Customize your cart to match your brand with flexible design options and a seamless shopping experience.',
        defaultOpen: false,
    },
    {
        id: 5,
        title: 'Powerful Analytics',
        description:
            'Track cart activity, monitor performance, and uncover insights that help you improve conversions.',
        defaultOpen: false,
    },
];

export default function HubCartFeatures() {
    const [openId, setOpenId] = useState(1)

    const handleToggle = (id) => {
        setOpenId(openId === id ? null : id)
    }

    return (
        <section className='relative'>
            <div className='absolute z-0 top-0 right-0'>
                <img src="https://cartplus.io/cartplus-img/Group 1707480314.svg" alt="" loading="lazy" decoding="async" />
            </div>

            <Container className='relative z-10 py-[20px] max-[540px]:py-[20px]'>
                <div className='grid grid-cols-1 md:grid-cols-2 max-[540px]:gap-[20px] gap-[40px] lg:gap-[80px] items-center'>

                    {/* Left - Accordion */}
                    <div className='w-full'>
                        <h2 className='font-bold  max-[540px]:text-[26px] text-[45px] lg:text-[50px] leading-[45px] lg:leading-[60px] max-[540px]:mb-[10px] mb-[20px] text-center md:text-left'>Cart Plus Features</h2>
                        <div className='flex flex-col'>
                            {features.map((feature) => (
                                <div key={feature.id} className='max-[540px]:py-[8px] py-[15px]'>
                                    <button
                                        onClick={() => handleToggle(feature.id)}
                                        className='w-full flex items-center justify-between text-left cursor-pointer'
                                    >
                                        <span className='max-[540px]:text-[16px] text-[24px] leading-[30px] font-semibold'>{feature.title}</span>
                                        <span className='flex items-center justify-center'>
                                            <img
                                                src='https://cartplus.io/cartplus-img/Vector (2).svg'
                                                alt='toggle'
                                                loading='lazy'
                                                decoding='async'
                                                className={`w-[15px] h-[8px] transition-transform duration-300 ${openId === feature.id ? 'rotate-180' : 'rotate-0'
                                                    }`}
                                            />
                                        </span>
                                    </button>
                                    {openId === feature.id && (
                                        <p className='max-[540px]:text-[14px] max-[540px]:leading-[18px]  text-[16px] leading-[26px]  pt-[10px]'>
                                            {feature.description}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Image */}
                    <div className='flex justify-end items-start w-[80%] max-[430px]:w-[100%] max-[540px]:w-[90%] mx-auto md:w-[100%]'>
                        <div>
                            <img
                                src='https://cartplus.io/cartplus-img/cart-drawer-card (2).svg'
                                alt='HubCart Features'
                                loading='lazy'
                                decoding='async'
                                className='w-[100%] h-auto ml-auto'
                            />
                        </div>
                    </div>
                </div>
            </Container>
            {/* <div className='absolute z-0 right-25 top-0 hidden xl:block'>
                <img src="https://hubsyntax.com/cart-images/Mask group (16).svg" alt="" loading="lazy" decoding="async" />
            </div> */}
        </section>
    )
}