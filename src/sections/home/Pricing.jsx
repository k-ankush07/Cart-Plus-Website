import React, { useState, useRef } from 'react'
import Container from '../../components/Container'

const plans = [
  {
    id: 1,
    name: 'Free',
    badge: null,
    subtitle: 'Perfect for getting started',
    orders: null,
    showDivider: false,
    price: 'Free',
    period: '',
    features: [
      'Dev & Partner Only',
    ],
    cta: 'Get Started Free',
  },
  {
    id: 2,
    name: 'Starter',
    badge: 'Popular',
    subtitle: 'For growing stores',
    orders: '200 ORDERS',
    showDivider: true,
    price: '$4.99',
    period: '/month',
    features: [
      '14-day free trial',
      'Design settings',
      'Announcements module',
      'Upsells & cross-sells',
      'Reward progress bar',
      'Add-ons module',
      'Custom HTML & CSS'
    ],
    cta: 'Upgrade to Starter',
  },
  {
    id: 3,
    name: 'Growth',
    badge: 'Best value',
    subtitle: 'For Scaling businesses',
    orders: '500 ORDERS',
    showDivider: false,
    price: '$9.99',
    period: '/month',
    features: [
      '14-day free trial',
      'Design settings',
      'Announcements module',
      'Upsells & cross-sells',
      'Reward progress bar',
      'Add-ons module',
      'Custom HTML & CSS'
    ],
    cta: 'Upgrade to Growth',
  },
  {
    id: 4,
    name: 'Advanced',
    badge: 'Most value',
    subtitle: 'For high-volume businesses',
    orders: '1000 ORDERS',
    showDivider: false,
    price: '$14.99',
    period: '/month',
    features: [
      '14-day free trial',
      'Design settings',
      'Announcements module',
      'Upsells & cross-sells',
      'Reward progress bar',
      'Add-ons module',
      'Custom HTML & CSS'
    ],
    cta: 'Upgrade to Advanced',
  },
]

// Badge background when a card is NOT active (its own default tint)
const badgeIdleClass = {
  1: '',
  2: 'bg-[#9D70CC] text-[#ffffff]',
  3: 'bg-[#F1DDFF] text-[#00000]',
  4: 'bg-[#FF6B00] text-[#ffffff]',
}

export default function Pricing({ showGradient }) {
  const [hoveredId, setHoveredId] = useState(null)
  const leaveTimer = useRef(null)
  const DEFAULT_ACTIVE_ID = 2

  const handleMouseEnter = (id) => {
    clearTimeout(leaveTimer.current)
    setHoveredId(id)
  }

  const handleMouseLeave = () => {
    leaveTimer.current = setTimeout(() => {
      setHoveredId(null)
    }, 80)
  }

  return (
    <section className='relative'>
      <Container className='py-[40px] max-[540px]:py-[20px] relative z-10'>
        <div>
          <div className='text-center max-[540px]:mb-[20px] mb-[40px]'>
            <h2 className='heading-line-height font-bold max-[540px]:text-[26px] max-[540px]:leading-[36px] text-[45px] lg:text-[50px] leading-[45px] lg:leading-[60px] max-[540px]:mb-[15px] mb-[20px]'>
              Simple, Transparent Pricing
            </h2>
            <p className='max-[540px]:text-[14px] text-[18px] max-[540px]:leading-[22px] leading-[28px] mx-auto max-w-[950px]'>
              Choose the plan that best fits your store and grow with confidence.
            </p>
          </div>

          <div className='grid max-[768px]:grid-cols-1 max-[1025px]:grid-cols-2 min-[1025px]:grid-cols-3 min-[1280px]:grid-cols-4 gap-[50px] md:gap-[50px] lg:gap-[40px] xl:gap[30px] items-stretch max-[540px]:pt-[0] pt-[20px] px-[0] lg:px-[40px] py-[20px]'>
            {plans.map((plan) => {
              const isActive = hoveredId ? hoveredId === plan.id : plan.id === DEFAULT_ACTIVE_ID

              return (
                <div
                  key={plan.id}
                  onMouseEnter={() => handleMouseEnter(plan.id)}
                  onMouseLeave={handleMouseLeave}
                  className={`relative rounded-[10px] py-[15px] lg:py-[30px] px-[15px] lg:px-[20px] flex flex-col justify-between
                    transition-all duration-300 ease-out will-change-transform
                    ${plan.id === 1 ? 'max-[768px]:min-h-[540px]' : ''}
                    ${isActive
                      ? 'text-white z-10'
                      : 'bg-white text-[#1D1E20]'
                    }`}
                  style={
                    isActive
                      ? {
                        background: `
          linear-gradient(43.79deg, #703CE1 19.27%, #1E0555 115.21%), padding-box,
           border-box
        `,
                        border: '1px solid transparent',
                        borderRadius: '10px',
                        boxShadow: '6px 10px 25px 0px #B750FF4D',
                        transform: 'translateY(-20px) scale(1.02)',
                      }
                      : {
                        border: '1px solid rgba(149, 0, 255, 0.2)',
                        borderRadius: '10px',
                        boxShadow: '0px 0px 220px 0px #9500FF14 inset',
                        transform: 'translateY(0px) scale(1)',
                      }
                  }
                >
                  {/* Badge */}
                  {plan.badge && (
                    <span
                      className={`absolute -top-[14px] text-[14px] leading-[20px] font-semibold px-[16px] py-[4px] rounded-full whitespace-nowrap transition-colors duration-300
                        ${isActive ? 'bg-[#9500FF] text-white' : (badgeIdleClass[plan.id] || 'bg-[#1D1E20] text-white')}`}
                    >
                      {plan.badge}
                    </span>
                  )}

                  {/* Top Content */}
                  <div>
                    <h3 className='text-[20px] font-bold'>{plan.name}</h3>
                    <p className={`text-[14px] transition-colors duration-300 ${plan.id === 1 ? 'mb-0' : 'mb-[20px]'} ${isActive ? 'text-white/70' : 'text-[#000000]'}`}>
                      {plan.subtitle}
                    </p>

                    <hr className={`max-[540px]:mb-[10px] mb-[16px] border-t transition-colors duration-300 ${isActive ? 'border-white/20' : 'border-[#F4F4F4]'}`} />

                    {plan.orders && (
                      <p className={`text-[14px] font-semibold mb-[6px] transition-colors duration-300 ${isActive ? 'text-white/60' : 'text-gray-400'}`}>
                        {plan.orders}
                      </p>
                    )}
                    <div className='flex items-end gap-[4px] mb-[6px]'>
                      <span className='text-[36px] font-bold max-[540px]:leading-[35px] leading-[44px]'>{plan.price}</span>
                      {plan.period && (
                        <span className={`text-[14px] mb-[6px] transition-colors duration-300 ${isActive ? 'text-white/70' : 'text-gray-500'}`}>
                          {plan.period}
                        </span>
                      )}
                    </div>
                    <hr className={`max-[540px]:mb-[10px] mb-[16px] border-t transition-colors duration-300 ${isActive ? 'border-white/20' : 'border-[#F4F4F4]'}`} />
                    <ul className={`flex flex-col gap-[12px] ${plan.id === 1 ? 'my-0' : 'my-[40px]'}`}>
                      {plan.features.map((feature, index) => (
                        <li key={index} className='flex items-center gap-[10px] text-[12px]'>
                          <div style={{
                            width: '15px',
                            height: '15px',
                          }}>
                            <img
                              src={
                                isActive
                                  ? 'https://cartplus.io/cartplus-img/Frame%202121452922%20%282%29.svg'
                                  : plan.id === 1
                                    ? 'https://cartplus.io/cartplus-img/Frame 2121453070.svg'
                                    : 'https://cartplus.io/cartplus-img/Frame 2121453069.svg'
                              }
                              alt='check'
                              loading='lazy'
                              decoding='async'
                              onError={(e) => { e.target.style.display = 'none' }}
                              className='w-full'
                            />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA pinned to bottom */}
                  <a href='https://apps.shopify.com/cart-plus-3' target="_blank" rel="noopener noreferrer">
                    <button
                      className='w-full relative cursor-pointer border-none bg-transparent p-0'
                    >
                      <img
                        src={isActive
                          ? 'https://cartplus.io/cartplus-img/Frame 2121452755.svg'
                          : 'https://cartplus.io/cartplus-img/Frame 29.svg'
                        }
                        alt=''
                        className='w-full h-[56px] object-fill'
                        loading='lazy'
                        decoding='async'
                      />
                      <span className={`absolute inset-0 flex items-center justify-center text-[18px] font-semibold
                      ${isActive ? 'text-white' : 'text-[#1D1E20]'}`}>
                        {plan.cta}
                      </span>
                    </button>
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
      {showGradient && (
        <>
          <div className='absolute z-0 top-50 left-0'>
            <img src="https://cartplus.io/cartplus-img/Subtract (5).svg" alt="" loading="lazy" decoding="async" />
          </div>
        </>
      )}
    </section>
  )
}