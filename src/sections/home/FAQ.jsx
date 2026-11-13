import React, { useState } from 'react'
import Container from '../../components/Container'

const faqs = [
  {
    q: 'What is Cart Plus?',
    a: 'Cart Plus is designed to help Shopify brands increase sales with smarter upsells, rewards, and a better checkout experience.',
  },
  {
    q: 'How does Cart Plus increase average order value?',
    a: 'Cart Plus increases average order value with upsells, cross-sells, bundles, and cart rewards that encourage customers to add more items before checkout.',
  },
  {
    q: 'Can I customize the cart drawer design?',
    a: 'Absolutely. You can tailor the cart drawer to reflect your brand by adjusting its layout, content, and styling to create a consistent shopping experience.',
  },
  {
    q: 'What types of upsells can I create?',
    a: 'You can create product recommendations, frequently bought together offers, free gift promotions, and cart-based incentives designed to drive additional sales.',
  },
  {
    q: 'Do I need coding experience to use Cart Plus?',
    a: 'No. Cart Plus is designed to be simple and intuitive, so you can get up and running without any coding experience. If you need more advanced functionality, developers have the flexibility to customize it further.',
  },
];

const plusImg = 'https://hubsyntax.com/cart-images/CartPluss.png'
const minusImg = 'https://hubsyntax.com/cart-images/CartMinus.png'

export default function FAQ({ faqs: faqsProp = faqs }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className='relative z-10'>
      <Container className="py-[40px] max-[540px]:py-[20px]">
       <div>
          <div className="text-center">
            <h2 className="heading-line-height font-bold max-[540px]:text-[26px] text-[45px] lg:text-[50px] leading-[45px] lg:leading-[60px]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mx-auto mt-[20px] space-y-5">
            {faqsProp.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={i}
                  className="rounded-[15px] border border-[#E8C8FF] bg-white "
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between  px-6 py-4 text-left cursor-pointer"
                  >
                    <span className="max-[540px]:text-[16px] text-[20px] font-[600] text-[#000000] max-[540px]:leading-[22px] leading-[32px]">{faq.q}</span>
                    <img
                      src={isOpen ? minusImg : plusImg}
                      alt={isOpen ? 'collapse' : 'expand'}
                      loading="lazy"
                      decoding="async"
                      className="w-5 sm:w-7 h-5 sm:h-7 flex-shrink-0"
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-4 max-[540px]:text-[14px] text-[18px] max-[540px]:text-[16px] max-[540px]:leading-[22px] leading-[28px] text-[#000000]">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
