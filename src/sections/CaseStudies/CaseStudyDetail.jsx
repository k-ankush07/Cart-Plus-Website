import React from 'react'
import Container from '../../components/Container'
import Button from '../../components/Button'

export default function CaseStudyDetail() {
    
    return (
        <section className='relative'>
            <Container className="relative z-10 py-[40px] max-[540px]:py-[25px]">
                <div>
                    <div>
                        <img src="https://hubsyntax.com/cart-images/Rectangle 240648569.svg" alt="" className='mb-[20px]' />
                        <div className='mb-[20px]'>
                            <h1 className="font-bold text-[50px] max-[540px]:text-[34px] leading-[1.2] mb-[20px]">
                                How a Shopify Cart App Increased Conversions by 32% and Average Order Value by 24%
                            </h1>
                            <p className="text-[16px] leading-[26px] mb-[20px]">
                                The client is a DTC fashion and accessories brand selling women apparel,
                                handbags, and lifestyle products through its Shopify store.
                            </p>
                        </div>
                        {/* Challenges */}
                        <div className='mb-[20px]'>
                            <h2 className='text-[35px] font-[600] leading-[40px] mb-[20px]'>Challenges</h2>
                            <ul className="list-disc pl-5 space-y-1 text-[16px] leading-[26px]">
                                <li>High cart abandonment rate (72%)</li>
                                <li>Low average order value (AOV) of $58</li>
                                <li>Customers frequently purchased only a single item</li>
                                <li>Limited upselling opportunities before checkout</li>
                                <li>Mobile checkout experience created friction</li>
                            </ul>
                        </div>

                        {/* Solution */}
                        <div className='mb-[20px]'>
                            <h2 className='text-[35px] font-[600] leading-[40px] mb-[20px]'>Solution</h2>
                            <p className='text-[16px] leading-[26px]'>
                                The store implemented a cart optimization app with the following features:
                            </p>
                        </div>

                        {/* 1. Smart Cart Drawer */}
                        <div className='mb-[20px]'>
                            <h2 className='text-[35px] font-[600] leading-[40px] mb-[20px]'>1. Smart Cart Drawer</h2>
                            <p className='text-[16px] leading-[26px]'>
                                A slide-out cart allowed customers to review products without leaving the shopping experience.
                            </p>
                        </div>

                        {/* 2. AI-Powered Product Recommendations */}
                        <div className='mb-[20px]'>
                            <h2 className='text-[35px] font-[600] leading-[40px] mb-[20px]'>2. AI-Powered Product Recommendations</h2>
                            <p className='text-[16px] leading-[26px] mb-[10px]'>
                                Relevant complementary products were displayed directly inside the cart.
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-[16px] leading-[26px]">
                                <li>Dress → Matching handbag</li>
                                <li>Sneakers → Shoe care kit</li>
                                <li>T-shirt → Bundle discount offer</li>
                            </ul>
                        </div>

                        {/* 3. Free Shipping Progress Bar */}
                        <div className='mb-[20px]'>
                            <h2 className='text-[35px] font-[600] leading-[40px] mb-[20px]'>3. Free Shipping Progress Bar</h2>
                            <p className='text-[16px] leading-[26px]'>
                                Customers could see exactly how much more they needed to spend to qualify for free shipping.
                            </p>
                        </div>

                        {/* 4. One-Click Upsells */}
                        <div className='mb-[20px]'>
                            <h2 className='text-[35px] font-[600] leading-[40px] mb-[20px]'>4. One-Click Upsells</h2>
                            <p className='text-[16px] leading-[26px]'>
                                Customers could add recommended products without returning to product pages.
                            </p>
                        </div>

                        {/* 5. Trust Badges and Shipping Information */}
                        <div className='mb-[20px]'>
                            <h2 className='text-[35px] font-[600] leading-[40px] mb-[20px]'>5. Trust Badges and Shipping Information</h2>
                            <p className='text-[16px] leading-[26px] mb-[10px]'>The cart displayed:</p>
                            <ul className="list-disc pl-5 space-y-1 text-[16px] leading-[26px]">
                                <li>Secure Checkout badges</li>
                                <li>Fast Shipping guarantees</li>
                                <li>Easy Returns information</li>
                            </ul>
                        </div>

                        {/* Implementation Process */}
                        <div className='mb-[20px]'>
                            <h2 className='text-[35px] font-[600] leading-[40px] mb-[20px]'>Implementation Process</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full text-[16px] leading-[26px] border-collapse">
                                    <thead>
                                        <tr className="bg-[#512B6C]">
                                            <th className="text-left p-[14px] border border-[#FFFFFF33]">Phase</th>
                                            <th className="text-left p-[14px] border border-[#FFFFFF33]">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-[14px] border border-[#FFFFFF33]">Week 1</td>
                                            <td className="p-[14px] border border-[#FFFFFF33]">Cart behavior analysis</td>
                                        </tr>
                                        <tr>
                                            <td className="p-[14px] border border-[#FFFFFF33]">Week 2</td>
                                            <td className="p-[14px] border border-[#FFFFFF33]">Cart app installation and customization</td>
                                        </tr>
                                        <tr>
                                            <td className="p-[14px] border border-[#FFFFFF33]">Week 3</td>
                                            <td className="p-[14px] border border-[#FFFFFF33]">Upsell offer testing</td>
                                        </tr>
                                        <tr>
                                            <td className="p-[14px] border border-[#FFFFFF33]">Week 4</td>
                                            <td className="p-[14px] border border-[#FFFFFF33]">Mobile UX optimization</td>
                                        </tr>
                                        <tr>
                                            <td className="p-[14px] border border-[#FFFFFF33]">Week 5</td>
                                            <td className="p-[14px] border border-[#FFFFFF33]">A/B testing and conversion tracking</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Results After 90 Days */}
                        <div className='mb-[20px]'>
                            <h2 className='text-[35px] font-[600] leading-[40px] mb-[20px]'>Results After 90 Days</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full text-[16px] leading-[26px] border-collapse">
                                    <thead>
                                        <tr className="bg-[#512B6C]">
                                            <th className="text-left p-[14px] border border-[#FFFFFF33]">Metric</th>
                                            <th className="text-left p-[14px] border border-[#FFFFFF33]">Before</th>
                                            <th className="text-left p-[14px] border border-[#FFFFFF33]">After</th>
                                            <th className="text-left p-[14px] border border-[#FFFFFF33]">Improvement</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-[14px] border border-[#FFFFFF33]">Conversion Rate</td>
                                            <td className="p-[14px] border border-[#FFFFFF33]">2.2%</td>
                                            <td className="p-[14px] border border-[#FFFFFF33]">2.9%</td>
                                            <td className="p-[14px] border border-[#FFFFFF33]">+32%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-[14px] border border-[#FFFFFF33]">Average Order Value</td>
                                            <td className="p-[14px] border border-[#FFFFFF33]">$58</td>
                                            <td className="p-[14px] border border-[#FFFFFF33]">$72</td>
                                            <td className="p-[14px] border border-[#FFFFFF33]">+24%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-[14px] border border-[#FFFFFF33]">Cart Abandonment</td>
                                            <td className="p-[14px] border border-[#FFFFFF33]">72%</td>
                                            <td className="p-[14px] border border-[#FFFFFF33]">58%</td>
                                            <td className="p-[14px] border border-[#FFFFFF33]">-14 percentage points</td>
                                        </tr>
                                        <tr>
                                            <td className="p-[14px] border border-[#FFFFFF33]">Revenue Per Visitor</td>
                                            <td className="p-[14px] border border-[#FFFFFF33]">$1.28</td>
                                            <td className="p-[14px] border border-[#FFFFFF33]">$1.86</td>
                                            <td className="p-[14px] border border-[#FFFFFF33]">+45%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-[14px] border border-[#FFFFFF33]">Upsell Acceptance Rate</td>
                                            <td className="p-[14px] border border-[#FFFFFF33]">N/A</td>
                                            <td className="p-[14px] border border-[#FFFFFF33]">18%</td>
                                            <td className="p-[14px] border border-[#FFFFFF33]">New Revenue Stream</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Key Wins */}
                        <div className='mb-[20px]'>
                            <h2 className='text-[35px] font-[600] leading-[40px] mb-[20px]'>Key Wins</h2>

                            <h3 className='text-[20px] font-[600] mb-[5px]'>Increased Revenue Without More Traffic</h3>
                            <p className='text-[16px] leading-[26px] mb-[15px]'>
                                Instead of spending additional budget on advertising, the business generated more revenue from existing visitors.
                            </p>

                            <h3 className='text-[20px] font-[600] mb-[5px]'>Better Mobile Experience</h3>
                            <p className='text-[16px] leading-[26px] mb-[15px]'>
                                The cart drawer reduced unnecessary page loads and simplified checkout navigation.
                            </p>

                            <h3 className='text-[20px] font-[600] mb-[5px]'>Higher Customer Confidence</h3>
                            <p className='text-[16px] leading-[26px] mb-[15px]'>
                                Trust badges and clear shipping information helped reduce purchase hesitation.
                            </p>

                            <h3 className='text-[20px] font-[600] mb-[5px]'>More Products Per Order</h3>
                            <p className='text-[16px] leading-[26px]'>
                                Customers frequently added recommended products and bundle offers before checkout.
                            </p>
                        </div>

                        {/* Client Testimonial */}
                        <div className='mb-[20px]'>
                            <h2 className='text-[35px] font-[600] leading-[40px] mb-[20px]'>Client Testimonial</h2>
                            <blockquote className="border-l-4 border-[#512B6C] pl-[20px] italic text-[16px] leading-[26px]">
                                "The cart optimization strategy completely changed how customers interacted with our store. We saw higher order values within the first month and a significant reduction in abandoned carts. The increase in revenue came without increasing our advertising spend."
                            </blockquote>
                        </div>

                        {/* Conclusion */}
                        <div className='mb-[20px]'>
                            <h2 className='text-[35px] font-[600] leading-[40px] mb-[20px]'>Conclusion</h2>
                            <p className='text-[16px] leading-[26px] mb-[10px]'>
                                By optimizing the cart experience with upsells, free-shipping incentives, trust signals, and a frictionless checkout process, the Shopify store achieved:
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-[16px] leading-[26px] mb-[10px]">
                                <li>32% higher conversion rates</li>
                                <li>24% increase in average order value</li>
                                <li>45% increase in revenue per visitor</li>
                            </ul>
                            <p className='text-[16px] leading-[26px]'>
                                The project demonstrated that small improvements in the shopping cart experience can have a significant impact on overall eCommerce profitability.
                            </p>
                        </div>

                        {/* CTA */}
                        <div>
                            <h2 className='text-[35px] font-[600] leading-[40px] mb-[20px]'>Need Similar Results for Your Shopify Store?</h2>
                            <p className='text-[16px] leading-[26px]'>
                                Our cart optimization solutions help Shopify brands increase conversions, reduce cart abandonment, and maximize revenue from existing traffic through strategic upsells, cross-sells, and checkout optimization.
                            </p>
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
