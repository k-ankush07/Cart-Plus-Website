import React, { useState } from 'react'
import Container from '../../components/Container'

const features = [
  {
    id: 1,
    title: 'High-Converting Carts',
    description: 'Reduce cart abandonment and turn more shoppers into customers.',
    linkText: 'Explore Cart Features',
    href: '#',
  },
  {
    id: 2,
    title: 'Smart Checkout Experience',
    description: 'Turn more shoppers into buyers with a smoother, hassle-free checkout.',
    linkText: 'Explore Cart Features',
    href: '#',
  },
  {
    id: 3,
    title: 'Post-Purchase Upsells & Cross-Sells',
    description: 'Increase AOV with targeted offers after checkout.',
    linkText: 'Explore Cart Features',
    href: '#',
  },
  {
    id: 4,
    title: 'Revenue-Boosting Rewards',
    description: 'Motivate customers to spend more with discounts, gifts, and special offers.',
    linkText: 'Explore Cart Features',
    href: '#',
  },
]

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className='py-[25px] max-[540px]:py-[0px] max-[540px]:pb-[20px]  relative'>
      <div className='absolute right-0 top-[-150px] z-0'>
        <img src="https://cartplus.io/cartplus-img/Subtract (1).svg" alt="cart plus" className='w-full' />
      </div>
      <Container className='relative'>
        <div className='text-center'>
          <h2 className='heading-line-height font-semibold max-[540px]:text-[28px] text-[45px] lg:text-[55px] max-[540px]:leading-[45px] leading-[60px]'>
            Why Merchants Choose Cart Plus
          </h2>
          <p className='text-[18px] max-[540px]:text-[14px] py-[20px] max-[540px]:py-[16px]'>
            Cart Plus works behind the scenes to increase your revenue automatically — from cart to checkout.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-[25px] pt-[20px] max-[540px]:pt-[0]'>
          <div className='pt-[0px] md:pt-[30px] lg:pt-[75px]'>
            {features.map((feature, index) => {
              const isActive = activeIndex === index

              return (
                <div
                  key={feature.id}
                  className='border-b border-white/20'
                >
                  {/* Header — clickable */}
                  <button
                    onClick={() => handleToggle(index)}
                    className='w-full flex items-center justify-between py-[10px] text-left group cursor-pointer'
                  >
                    <h3
                      className={`heading-line-height font-semibold text-[28px] max-[540px]:text-[22px] leading-[32px] transition-colors duration-200 ${isActive ? 'text-[#000000]' : 'text-[#000000]'
                        }`}
                    >
                      {feature.title}
                    </h3>
                    <span
                      className={`ml-4 flex items-center justify-center transition-transform duration-300 ${isActive ? 'rotate-180' : ''
                        }`}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke={isActive ? 'black' : 'black'}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>

                  {/* Collapsible body */}
                  <div
                    className={`overflow-hidden transition-all duration-350 ease-in-out ${isActive ? 'max-h-[200px] pb-[15px]' : 'max-h-0'
                      }`}
                  >
                    <p className='text-[18px] max-[540px]:text-[16px] my-[5px] leading-[28px] max-[540px]:leading-[22px] max-w-full md:max-w-[415px] text-black'>
                      {feature.description}
                    </p>
                    {/* <a href={feature.href} className='inline-block text-[16px] underline'>
                      {feature.linkText}
                    </a>*/}
                  </div>
                </div>
              )
            })}
          </div>

          <div className='w-full'>
            <img
              src='https://cartplus.io/cartplus-img/Group 1707480373.webp'
              alt='Cart Plus features'
              loading='lazy'
              decoding='async'
              className='w-full h-auto'
            />
          </div>
        </div>
      </Container>
    </section>
  )
}