import React from 'react'
import Container from './Container'
import Button from './Button'

<<<<<<< HEAD
export default function BannerSection({ heading, paragraph, buttonText, img, link = '#' }) {
=======
export default function BannerSection({ heading, paragraph, buttonText, img }) {
>>>>>>> 82fc23400dc276e7412d8d9e4bdf35ecbf526075
    return (
        <section className='relative'>
            <div className='absolute'>
                <img src="https://cartplus.io/cartplus-img/Group 1707480310.svg" alt="" loading="lazy" decoding="async" />
            </div>
            <Container className='pt-[25px] max-[540px]:pt-[20px] max-[540px]:py-[0px] relative z-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-[20px]'>
                    <div className='flex flex-col relative z-10 text-center md:text-left'>
                        <h1 className='heading-line-height font-semibold text-[50px] lg:text-[65px] max-[540px]:text-[26px] max-[540px]:leading-[36px] leading-[55px] lg:leading-[70px] max-w-none md:max-w-[660px] '>
                            {heading}
                        </h1>
                        <p className='text-[18px] max-[540px]:text-[14px] max-w-none md:max-w-[600px] py-[20px] max-[540px]:py-[16px]'>
                            {paragraph}
                        </p>
                        <div>
<<<<<<< HEAD
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <Button icon="https://cartplus.io/cartplus-img/Vector (6).png">{buttonText}</Button>
                            </a>
=======
                            <Button icon="https://cartplus.io/cartplus-img/Vector (6).png">{buttonText}</Button>
>>>>>>> 82fc23400dc276e7412d8d9e4bdf35ecbf526075
                        </div>
                    </div>
                    <div className='w-full'>
                        <img
                            src={img}
                            alt="HubCart"
                            fetchPriority="high"
                            loading="eager"
                            decoding="async"
                            className='w-full relative z-20'
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}
