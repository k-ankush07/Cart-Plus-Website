import React from 'react'
import Container from '../../components/Container'
import Button from '../../components/Button'

export default function CTA() {
  return (
    <section className='relative z-20'>
      <Container className='py-[40px] max-[540px]:py-[20px]'>
        <div
          style={{
            background:
              'linear-gradient(43.79deg, #703CE1 19.27%, #1E0555 115.21%)',
          }}
          className="relative overflow-hidden rounded-[15px] max-[390px]:px-4 px-8 max-[390px]:py-4 py-[30px] md:py-[80px] text-center text-white" >
          <h2 className='heading-line-height font-bold font-bold max-[540px]:text-[26px] text-[45px] lg:text-[55px] leading-[45px] lg:leading-[60px] mb-[20px] text-center'>
            Turn More Carts Into More Revenue
          </h2>
          <p className="mx-auto max-[540px]:text-[14px] text-[18px] max-[540px]:leading-[22px] leading-[28px] max-w-[890px]">
            Boost conversions, increase average order value, and create seamless
            shopping experiences with smart cart upsells, rewards, and checkout
            optimization built for modern Shopify brands.
          </p>
          <div className="mt-[20px] max-[430px]:block  flex items-center justify-center gap-4">
            <a href='https://apps.shopify.com/cart-plus-3' target="_blank" rel="noopener noreferrer">
              <Button className='max-[430px]:mb-[20px]' variant="pill" icon="https://hubsyntax.com/cart-images/buttonIcon.png">Start Free Trial</Button>
            </a>
          </div>
        </div>
      </Container>
    </section >
  )
}
