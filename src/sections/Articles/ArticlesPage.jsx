import React from 'react'
import Container from '../../components/Container'
import Button from '../../components/Button'

export default function ArticlesPage() {
    return (
        <section className='relative'>
            <Container className="relative z-10 py-[40px] max-[540px]:py-[25px]">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start">
                    <div>
                        <img src="https://hubsyntax.com/cart-images/Rectangle 240648569.svg" alt="" className='mb-[20px]' />
                        <div className='mb-[20px]'>
                            <h3 className='text-[30px] font-[600] leading-[40px] mb-[20px]'>Introduction</h3>
                            <p className='text-[18px]'>
                                Many Shopify stores focus heavily on product pages and advertising but overlook one of the most important parts of the customer journey — the cart experience.
                                Traditional cart pages often interrupt shopping momentum, create unnecessary friction, and reduce opportunities for upsells. Customers expect a fast, seamless, and mobile-friendly checkout experience, and even small delays or distractions can lead to abandoned carts.
                                Modern cart drawer experiences are designed to keep customers engaged while making the buying process faster and more conversion-focused.
                            </p>
                        </div>
                        <div className='mb-[20px]'>
                            <h3 className='text-[30px] font-[600] leading-[40px] mb-[20px]'>Why Cart Experience Matters</h3>
                            <p className='text-[18px]'>
                                The cart is one of the final steps before purchase. A poorly optimized cart can reduce conversions, while a smart cart experience can encourage customers to complete checkout faster and add more products to their order.
                            </p>
                        </div>
                        <div className='mb-[20px]'>
                            <h4 className='text-[20px] font-[500] leading-[20px] mb-[20px]'>Common issues with traditional Shopify carts include:</h4>
                            <ul className="list-disc pl-5 space-y-1 text-[18px]">
                                <li>Slow checkout flow</li>
                                <li>Poor mobile experience</li>
                                <li>No upsell opportunities</li>
                                <li>Lack of urgency or incentives</li>
                                <li>Extra page redirects</li>
                                <li>Limited customization</li>
                                <li>Higher cart abandonment</li>
                                <li>Friction during checkout</li>
                            </ul>
                            <p>Improving these areas can have a significant impact on store revenue and customer satisfaction.</p>
                        </div>
                        <div className='mb-[20px]'>
                            <h3 className='text-[30px] font-[600] leading-[40px] mb-[20px]'>How Cart Drawers Improve Shopify Stores</h3>
                            <p className='text-[18px]'>
                                Cart drawers create a smoother shopping experience by allowing customers to view and edit their cart without leaving the current page. This helps maintain buying momentum and reduces interruptions during the checkout process.
                                Features like smart upsells, product recommendations, and free shipping progress bars can also encourage larger purchases naturally.
                            </p>
                        </div>
                        <div>
                            <h4 className='text-[20px] font-[500] leading-[20px] mb-[20px]'>Many Shopify brands use cart drawers to:</h4>
                            <ul className="list-disc pl-5 space-y-1 text-[18px]">
                                <li>Increase average order value</li>
                                <li>Improve mobile conversions</li>
                                <li>Reduce checkout friction</li>
                                <li>Create faster buying experiences</li>
                                <li>Encourage additional product purchases</li>
                                <li>Improve overall customer experience</li>
                            </ul>
                            <p>Improving these areas can have a significant impact on store revenue and customer satisfaction.</p>
                        </div>
                    </div>
                    <div className="space-y-10">
                        <div className='bg-[#512B6C] rounded-[10px] p-[30px] mb-[20px]'>
                            <h3 className='text-[20px] font-[600] mb-[15px]'>Increase Conversions With a Better Cart Experience</h3>
                            <p className='mb-[15px] text-[16px]'>Install the #1 rated cart drawer app for Shopify and start increasing conversions, upsells, and average order value.</p>
                            <div className='flex'>
                                <Button variant='pill' className='mx-auto' icon="https://hubsyntax.com/cart-images/buttonIcon.png">Start Free Trial</Button>
                            </div>                        </div>
                        <div className='block md:flex justify-between gap-[20px] lg:block'>
                            <div className=' mb-[20px]'>
                                <h3 className='text-[30px] font-[600] leading-[40px] mb-[10px]'>Latest Articles</h3>
                                <img src="https://hubsyntax.com/cart-images/Rectangle 240648383.svg" alt="" className=' mb-[15px] w-full' />
                                <h3 className='text-[20px] font-[600] mb-[5px]'>Best Cart Drawer Features for Higher Conversions</h3>
                                <p className='text-[14px]'>5 min read</p>
                            </div>
                            <div>
                                <h3 className='text-[30px] font-[600] leading-[40px] mb-[10px]'>Latest Articles</h3>
                                <img src="https://hubsyntax.com/cart-images/Rectangle 240648383 (1).svg" alt="" className=' mb-[15px]  w-full' />
                                <h3 className='text-[20px] font-[600] mb-[5px]'>Shopify Upsell Strategies That Actually Work</h3>
                                <p className='text-[14px]'>5 min read</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className='absolute z-0 bottom-100 left-0 hidden xl:block'>
                <img src="https://hubsyntax.com/cart-images/Mask group (121).svg" alt="" loading="lazy" decoding="async" />
            </div>
            <div className='absolute z-0 bottom-30 right-0 hidden xl:block'>
                <img src="https://hubsyntax.com/cart-images/Mask group (008).svg" alt="" loading="lazy" decoding="async" />
            </div>
        </section>
    )
}