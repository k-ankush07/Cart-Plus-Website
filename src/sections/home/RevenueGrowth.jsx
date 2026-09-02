import React, { useEffect, useRef, useState } from 'react'
import Container from '../../components/Container'

const stats = [
    {
        id: 1,
        image: 'https://cartplus.io/cartplus-img/Vector.svg',
        target: 500,
        prefix: '',
        suffix: '+',
        decimal: 0,
        label: 'Brands Using Cart Plus',
    },
    {
        id: 2,
        image: 'https://cartplus.io/cartplus-img/Group 1707480300.svg',
        target: 1.4,
        prefix: '$',
        suffix: 'B+',
        decimal: 1,
        label: 'Additional Revenue Generated',
    },
    {
        id: 3,
        image: 'https://cartplus.io/cartplus-img/Vector (1).svg',
        target: 300,
        prefix: '',
        suffix: '+',
        decimal: 0,
        label: '5-Star Reviews',
    },
]

function StatItem({ stat, animate }) {
    const [value, setValue] = useState(0)

    useEffect(() => {
        if (!animate) return   

        const duration = 2000
        const startTime = performance.now()

        const update = (now) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(parseFloat((eased * stat.target).toFixed(stat.decimal)))
            if (progress < 1) requestAnimationFrame(update)
        }

        requestAnimationFrame(update)
    }, [animate])   

    return (
        <div className="flex flex-col items-center">
            <div className="max-[540px]:h-[60px] max-[540px]:w-[60px] h-[100px] w-[100px] rounded-full  max-[540px]:p-[12px] p-[20px] flex items-center justify-center bg-[#6C4DFF]">
                <img src={stat.image} alt="CartPlus" loading="lazy" decoding="async" />
            </div>

            <p className="max-[540px]:text-[31px] text-[55px] max-[540px]:leading-[45px] leading-[55px] font-[500] my-[15px]">
                {stat.prefix}{value}{stat.suffix}
            </p>

            <p className="text-[16px] leading-[20px]">
                {stat.label}
            </p>
        </div>
    )
}

export default function RevenueGrowth() {
    const sectionRef = useRef(null)
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        const node = sectionRef.current
        if (!node) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true)
                    observer.disconnect() 
                }
            },
            { threshold: 0.3 }
        )

        observer.observe(node)
        return () => observer.disconnect()
    }, [])   

    return (
        <section>
            <Container className='py-[40px] max-[540px]:py-[25px] relative'>
                <h2 className='heading-line-height font-bold max-[540px]:text-[28px] text-[45px] lg:text-[50px] leading-[45px] lg:leading-[60px] max-[540px]:mb-[10px] mb-[20px] text-center'>
                    Trusted by Shopify Merchants Worldwide
                </h2>
                <p className='max-[540px]:text-[14px] text-[18px] max-[540px]:leading-[22px] leading-[28px] text-center max-[540px]:max-w-full max-w-[930px] m-auto max-[540px]:mb-[30px] mb-[20px]'>
                     Thousands of Shopify brands using Cart Plus to increase conversions, grow average order
                    value, and drive more revenue automatically.
                </p>
                <div className="p-[1px] rounded-[15px] bg-[linear-gradient(264.46deg,rgba(255,255,255,0)_-14.65%,rgba(149,0,255,0.2)_32.08%)]">
                    <div
                        ref={sectionRef}
                        className="p-[70px] md:p-[80px] bg-[#FEFDFF] rounded-[14px] flex flex-col md:flex-row items-center text-center justify-center max-[540px]:gap-[30px] gap-[50px] lg:gap-[150px] shadow-[inset_0px_0px_250px_0px_#9500FF14]"
                    >
                        {stats.map((stat) => (
                            <StatItem key={stat.id} stat={stat} animate={animate} />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}