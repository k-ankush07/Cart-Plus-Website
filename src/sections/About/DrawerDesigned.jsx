import React from 'react'
import Container from '../../components/Container'
import Button from '../../components/Button'

const benefits = [
    'Smart upsells inside cart',
    'Faster checkout flow',
    'Sticky buying momentum',
    'Mobile-optimized experience',
    'Fully customizable design',
    'Built specifically for Shopify',
]

export default function DrawerDesigned() {
    return (
        <section className="relative ">
            <Container className="py-[40px] max-[540px]:py-[20px] relative z-10">
                <div className='hidden md:block'>
                    <img src="https://cartplus.io/cartplus-img/Group 1707480407 (2).svg" alt="" className='absolute w-full max-w-[61%] right-[165px] top-[107px]' />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-0 md:gap-[30px] lg:gap-[75px] relative">

                    {/* ── LEFT COLUMN (Text) — order-2 on mobile, order-1 on md+ ── */}
                    <div className="w-full flex flex-col justify-center order-2 md:order-1">
                        {/* Heading */}
                        <h2 className=" heading-line-height font-semibold max-w-[600px] max-[540px]:text-[28px] text-[45px] lg:text-[55px] max-[540px]:leading-[36px] leading-[60px]">
                            A Cart Drawer Designed to Increase Revenue
                        </h2>

                        {/* Benefit Bullets */}
                        <p className=" font-semibold text-[15px] my-[20px]">Benefit Bullets</p>
                        <ul className="space-y-[10px] mb-[20px]">
                            {benefits.map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    {/* Purple checkmark circle */}
                                    <span
                                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                                    >
                                        <img src="https://cartplus.io/cartplus-img/Frame 2121452926110.svg" alt="" />
                                    </span>
                                    <span
                                        className="text-[14px]">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button */}
                        <div>
                            <a href='https://apps.shopify.com/cart-plus-3' target="_blank" rel="noopener noreferrer">
                            <Button icon="https://cartplus.io/cartplus-img/Vector (6).png"> Install The App</Button>
                            </a>
                        </div>
                    </div>

                    {/* ── RIGHT COLUMN — Cart Drawer Mockups — order-1 on mobile, order-2 on md+ ── */}
                    <div className="w-full relative block  md:flex items-center justify-center min-h-[420px] order-1 md:order-2">

                        {/* Group SVG (cart drawer mockup stack) */}
                        <img
                            src="https://cartplus.io/cartplus-img/shopify-cart-drawer.svg"
                            alt='HubCart'
                            loading='lazy'
                            decoding='async'
                            className="w-full relative z-10"
                        />
                    </div>
                </div>
            </Container>
            <div className='absolute z-0 bottom-[-140%] left-0 hidden xl:block'>
                <img src="https://cartplus.io/cartplus-img/Subtract (7).svg" alt="" loading="lazy" decoding="async" />
            </div>
        </section>
    )
}