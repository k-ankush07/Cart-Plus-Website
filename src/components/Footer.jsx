import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative">
      {/* <div className='absolute z-0 bottom-0 left-0'>
        <img src="https://hubsyntax.com/cart-images/Mask group (22).svg" alt="" loading="lazy" decoding="async" />
      </div>
      <div className='absolute z-0 bottom-0 right-0'>
        <img src="https://hubsyntax.com/cart-images/Mask group (23).svg" alt="" loading="lazy" decoding="async" />
      </div> */}
      <Container className='relative pt-[40px] max-[540px]:pt-[25px]'>
        <div className="flex flex-col items-center text-center">
          <Link to="/" onClick={scrollToTop} className="flex items-center">
            <div className='max-w-[178px]'>
              <img
                src="https://cartplus.io/cartplus-img/Layer_1 (1).png"
                alt="HubCart"
                loading="lazy"
                decoding="async"
                className="w-auto"
              />
            </div>
          </Link>

          <p className="mt-[20px] text-[14px] leading-[26px] max-[540px]:leading-[22px]">
            Increase your revenue with smarter checkout, upsells, and conversion tools built for modern Shopify brands.
          </p>

          <nav className="mt-[20px] flex flex-wrap items-center justify-center gap-x-10 gap-y-3 max-[540px]:text-[14px] text-[18px]">
            <Link to="/" onClick={scrollToTop} className="text-[#000000] transition-colors font-[600]">Home</Link>
            <Link to="/about" onClick={scrollToTop} className="text-[#000000] transition-colors font-[600]">About Us</Link>
            {/* <Link to="/casestudie" onClick={scrollToTop} className="text-[#000000] transition-colors font-[600]">Case Studies</Link> */}
            {/* <Link to="/blog" onClick={scrollToTop} className="text-[#000000] transition-colors font-[600]">Blog</Link> */}
            <Link to="/contact" onClick={scrollToTop} className="text-[#000000] transition-colors font-[600]">Contact Us</Link>
            <Link to="/pricing" onClick={scrollToTop} className="text-[#000000] transition-colors font-[600]">Pricing</Link>
            <Link to="/terms-and-condition" onClick={scrollToTop} className="text-[#000000] transition-colors font-[600]">Terms & Conditions</Link>
            <Link to="/privacy-policy" onClick={scrollToTop} className="text-[#000000] transition-colors font-[600]">Privacy Policy</Link>
          </nav>
        </div>
      </Container>
      <p className="my-[20px] text-[14px] text-center border-t border-t-[#EFEFEF] pt-[20px] relative z-10 text-[#000000] font-[600]">
        © {year} Cart Plus. All rights reserved.
      </p>
    </footer>
  )
}