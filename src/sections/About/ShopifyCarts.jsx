import React from 'react'
import Container from '../../components/Container'

const cards = [
    {
        icon: "https://cartplus.io/cartplus-img/newLayer_1.svg",
        title: "Powerful Innovation",
        description:
            "We continuously develop practical features that help Shopify merchants create a smarter and more effective cart experience.",
    },
    {
        icon: "https://cartplus.io/cartplus-img/11Layer_1.svg",
        title: "Merchant-First Approach",
        description:
            "We design every feature around real merchant needs, making CartPlus simple to use and easy to customize.",
    },
    {
        icon: "https://cartplus.io/cartplus-img/Layer_1-11.svg",
        title: "Proven Performance",
        description:
            "We focus on speed, stability, and reliability so your cart performs smoothly during every customer journey.",
    },
]

export default function ShopifyCarts() {
    return (
        <section className="relative">

            <Container className="py-[40px] max-[540px]:py-[20px] relative z-10">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="heading-line-height font-semibold max-[540px]:text-[26px] text-[45px] lg:text-[55px] max-[540px]:leading-[34px] leading-[60px]">
                        Helping Stores Sell More With Every Cart
                    </h2>
                    <p className="text-[18px] max-[540px]:text-[14px] py-[20px] max-[540px]:py-[16px]">
                        CartPlus helps Shopify merchants turn that opportunity into results with powerful cart customization tools that improve the customer experience and encourage larger purchases. From small businesses to growing brands, we build features that make every cart more valuable.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] lg:gap-[45px] xl:gap-[89px]">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="rounded-[30px] p-[20px] lg:p-[50px] max-[540px]:p-[30px] flex flex-col justify-center text-center relative"

                        >
                            {/* Gradient border */}
                            <div
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    borderRadius: '30px',
                                    padding: '2px',
                                    background: 'linear-gradient(58.09deg, rgba(255, 255, 255, 0.2) -15.68%, rgba(149, 0, 255, 0.2) 126.6%)',
                                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                    WebkitMaskComposite: 'xor',
                                    maskComposite: 'exclude',
                                    pointerEvents: 'none',
                                }}
                            />

                            <div className="bg-[#6C4DFF] max-[540px]:h-[60px] h-[120px] max-[540px]:w-[60px] w-[120px] rounded-full flex items-center justify-center max-[540px]:p-[10px] p-[20px] mb-[30px] mx-auto">
                                <img src={card.icon} alt={card.title} />
                            </div>

                            <h3 className="text-[24px] font-[700] leading-[30px] mb-[15px]">
                                {card.title}
                            </h3>

                            <p className="text-[16px] leading-[23px] ">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
            <div className='absolute z-0 top-[-10%] right-0 hidden xl:block'>
                <img src="https://cartplus.io/cartplus-img/Subtract (6).svg" alt="" loading="lazy" decoding="async" />
            </div>
        </section>
    )
}