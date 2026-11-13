import React, { useRef, useState, useEffect } from 'react'
import Container from '../../components/Container'

const plans = [
    { key: 'free', name: 'FREE', price: '$0.00', period: '/month' },
    { key: 'starter', name: 'STARTER', price: '$4.99', period: '/month' },
    { key: 'growth', name: 'GROWTH', price: '$14.99', period: '/month' },
]

const features = [
    { name: 'Monthly Order', free: '0-50 orders', starter: '51-250 orders', growth: 'Unlimited orders' },
    { name: 'Market visibility & Scheduling', free: true, starter: true, growth: true },
    { name: 'One-tick upsell', free: true, starter: true, growth: true },
    { name: 'Upsells & cross-sell', free: true, starter: true, growth: true },
    { name: 'Announcements module', free: true, starter: true, growth: true },
    { name: 'Progress bar', free: true, starter: true, growth: true },
    { name: 'Add-ons module', free: true, starter: true, growth: true },
    { name: 'Subscription upgrades', free: true, starter: true, growth: true },
    { name: 'Age verification', free: true, starter: true, growth: true },
    { name: 'A/B testing', free: true, starter: true, growth: true },
    { name: 'Cart Activity', free: true, starter: true, growth: true },
    { name: 'Full analytics', free: true, starter: true, growth: true },
    { name: '24/7 email and chat support', free: true, starter: true, growth: true },
    { name: 'Video call support', free: true, starter: true, growth: true },
]

const CHECK = 'https://cartplus.io/cartplus-img/Frame 2121452922 (3).svg'
const CROSS = 'https://cartplus.io/cartplus-img/Frame 2121452953 (1).svg'
const checkBlack = 'https://cartplus.io/cartplus-img/Frame%202121452954.svg'

function Cell({ value, isStarter }) {
    if (typeof value === 'string') {
        return (
            <span className={`text-[14px] lg:text-[16px] font-medium ${isStarter ? 'text-white' : 'text-black'}`}>
                {value}
            </span>
        )
    }
    if (value === true) {
        const src = isStarter ? CHECK : checkBlack
        return <img src={src} alt="Included" width={25} height={25} className="mx-auto w-[25px] h-[25px]" />
    }
    return <img src={CROSS} alt="Not included" width={25} height={25} className="mx-auto w-[25px] h-[25px]" />
}

export default function EverythingPlan() {
    const scrollRef = useRef(null)
    const [thumb, setThumb] = useState({ width: 100, left: 0 })

    const updateThumb = () => {
        const el = scrollRef.current
        if (!el) return
        const { scrollLeft, scrollWidth, clientWidth } = el

        if (scrollWidth <= clientWidth) {
            setThumb({ width: 100, left: 0 })
            return
        }

        const maxScroll = scrollWidth - clientWidth
        const scrolledPercent = (scrollLeft / maxScroll) * 100

        const minWidth = (clientWidth / scrollWidth) * 100
        const fillWidth = minWidth + (scrolledPercent / 100) * (100 - minWidth)

        setThumb({ width: fillWidth, left: 0 })
    }

    useEffect(() => {
        updateThumb()

        // Recalculate shortly after mount, once images/icons have painted
        const timeout = setTimeout(updateThumb, 300)

        // Recalculate whenever the scroll container's size changes
        const resizeObserver = new ResizeObserver(updateThumb)
        if (scrollRef.current) resizeObserver.observe(scrollRef.current)

        window.addEventListener('resize', updateThumb)
        window.addEventListener('load', updateThumb)

        return () => {
            clearTimeout(timeout)
            resizeObserver.disconnect()
            window.removeEventListener('resize', updateThumb)
            window.removeEventListener('load', updateThumb)
        }
    }, [])

    return (
        <section className='relative'>
            <div className='absolute z-0 top-[-80%] right-0 hidden xl:block'>
                <img src="https://cartplus.io/cartplus-img/Subtract (6).svg" alt="" loading="lazy" decoding="async" />
            </div>
            <Container className='py-[40px] max-[540px]:py-[20px] relative z-10'>

                {/* Heading */}
                <div className='text-center max-[540px]:mb-[10px] mb-[20px]'>
                    <h2 className='font-bold max-[540px]:text-[26px] text-[45px] lg:text-[50px] leading-[45px] lg:leading-[60px] mb-[10px]'>
                        See Everything Included In Each Plan
                    </h2>
                    <p className='max-[540px]:text-[14px] text-[18px] max-[540px]:leading-[22px] leading-[28px] mx-auto max-w-[950px]'>
                        Compare features across all plans and choose the perfect cart drawer solution for your Shopify store.
                    </p>
                </div>

                {/* Table + scrollbar wrapper — same width so the progress bar matches exactly */}
                <div className='w-full'>
                    <div
                        ref={scrollRef}
                        onScroll={updateThumb}
                        className='overflow-x-auto rounded-[12px] border border-[#E8C8FF] hide-native-scrollbar'
                    >
                        <div className='relative min-w-[1000px]'>
                            {/* Starter column background — single full-height div */}
                            <div
                                className='absolute top-0 bottom-0 z-0'
                                style={{
                                    left: 'calc(100% / 4 * 2)',
                                    width: 'calc(100% / 4)',
                                    background: 'linear-gradient(43.79deg, #703CE1 19.27%, #1E0555 115.21%)',
                                    boxShadow: 'inset 0 0 0 1px rgba(222,175,255,0.5)',
                                }}
                            />

                            {/* Header Row 1: names, full-width divider below */}
                            <div className='grid grid-cols-4 relative z-10 border-b border-[rgba(149,0,255,0.2)]'>
                                <p className='py-[10px] lg:py-[14px] px-[20px] text-left max-[540px]:text-[16px] text-[20px] lg:text-[24px] tracking-widest font-semibold'>
                                    From Feature
                                </p>
                                {plans.map((plan) => (
                                    <p
                                        key={plan.key}
                                        className={`text-center font-bold text-[20px] lg:text-[25px] py-[10px] lg:py-[14px] px-[20px] ${plan.key === 'starter' ? 'text-white' : ''}`}
                                    >
                                        {plan.name}
                                    </p>
                                ))}
                            </div>
                            {/* Header Row 2: prices, full-width divider below */}
                            <div className='grid grid-cols-4 relative z-10 border-b border-[rgba(149,0,255,0.2)]'>
                                <p className='py-[15px] lg:py-[20px] text-[20px] leading-none' aria-hidden='true'>&nbsp;</p>
                                {plans.map((plan) => (
                                    <p
                                        key={plan.key}
                                        className={`font-[600] text-[20px] leading-none flex items-end justify-center py-[15px] lg:py-[20px] px-[20px] ${plan.key === 'starter' ? 'text-white' : ''}`}
                                    >
                                        {plan.price}{' '}
                                        <span className='text-[14px] lg:text-[20px] font-normal opacity-70'>{plan.period}</span>
                                    </p>
                                ))}
                            </div>

                            {/* Feature Rows */}
                            {features.map((feature, i) => (
                                <div
                                    key={feature.name}
                                    className='grid grid-cols-4 relative'
                                >
                                    <div className={`px-[20px] lg:px-[20px] py-[15px] lg:py-[20px] text-[15px] lg:text-[20px] font-medium z-10 ${i !== features.length - 1 ? 'border-b border-[#E8C8FF]' : ''}`}>
                                        {feature.name}
                                    </div>
                                    {plans.map((plan) => (
                                        <div
                                            key={plan.key}
                                            className={`px-[20px] lg:px-[20px] py-[15px] lg:py-[20px] flex items-center justify-center z-10 ${i !== features.length - 1 && plan.key !== 'starter' ? 'border-b border-[#E8C8FF]' : ''}`}
                                        >
                                            <Cell
                                                value={feature[plan.key]}
                                                isStarter={plan.key === 'starter'}
                                            />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Custom scroll progress bar — visible only from md (768px) and up */}
                    <div className='block md:hidden relative w-full h-[4px] bg-[#000000] rounded-full mt-[20px]'>
                        <div
                            className='absolute top-0 h-full rounded-full transition-all duration-150'
                            style={{
                                width: `${thumb.width}%`,
                                left: `${thumb.left}%`,
                                background: '#6C4DFF',
                            }}
                        />
                    </div>
                </div>

            </Container>
            <div className='absolute z-0 bottom-[-100%] left-0 hidden xl:block'>
                <img src="https://cartplus.io/cartplus-img/Subtract (7).svg" alt="" loading="lazy" decoding="async" />
            </div>
        </section>
    )
}