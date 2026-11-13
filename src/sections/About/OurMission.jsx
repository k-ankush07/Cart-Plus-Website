import React from 'react'
import Container from '../../components/Container'

export default function OurMission({ img, heading, paragraph1, paragraph2, paragraph3, gradientImg }) {
    return (
        <section className="relative" >
            <Container className="py-[40px] max-[540px]:py-[20px] relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-[50px]">

                    {/* Left: Image */}
                    <div className="w-full">
                        <div>
                            <img
                                src={img}
                                alt="Our Mission"
                                className="w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="w-full text-center md:text-left">
                        <h2 className="heading-line-height font-semibold max-[540px]:text-[26px] text-[45px] lg:text-[55px] max-[540px]:leading-[36px] leading-[60px]">
                            {heading}
                        </h2>

                        {paragraph1 && (
                            <p className="text-[18px] max-[540px]:text-[14px] py-[15px] max-[540px]:py-[10px]">
                                {paragraph1}
                            </p>
                        )}

                        {paragraph2 && (
                            <p className="text-[18px] max-[540px]:text-[14px] py-[15px] max-[540px]:py-[10px]">
                                {paragraph2}
                            </p>
                        )}

                        {paragraph3 && (
                            <p className="text-[18px] max-[540px]:text-[14px] py-[15px] max-[540px]:py-[10px]">
                                {paragraph3}
                            </p>
                        )}
                    </div>
                </div>
            </Container>

        </section>
    )
}