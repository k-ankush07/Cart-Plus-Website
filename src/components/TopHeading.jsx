import React from 'react'
import Container from './Container'

export default function TopHeading({ heading, paragraph, showGradient }) {
    return (
        <section >
            <Container className='relative z-10 py-[40px] max-[540px]:py-[20px]'>
                <div className='text-center'>
                    <h1 className='heading-line-height font-bold max-[540px]:text-[28px] text-[45px] lg:text-[65px] max-w-[1000px] mx-auto leading-[40px] lg:leading-[70px] mb-[20px]'>
                        {heading}
                    </h1>
                    {/* <p className='max-[540px]:text-[14px] text-[18px] max-[540px]:leading-[22px] leading-[28px] mx-auto max-w-[1000px]'>
                        {paragraph}
                    </p> */}
                </div>
            </Container>
            {showGradient && (<div className='absolute z-0 top-0 left-0 hidden xl:block'>
                <img src="https://cartplus.io/cartplus-img/Subtract (8).svg" alt="" loading="lazy" decoding="async" />
            </div>)}
        </section>
    )
}
