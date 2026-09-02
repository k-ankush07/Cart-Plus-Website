import React from 'react'
import Container from '../components/Container'
import BannerSection from '../components/BannerSection'
import ShopifyCarts from '../sections/About/ShopifyCarts'
import OurMission from '../sections/About/OurMission'
import DrawerDesigned from '../sections/About/DrawerDesigned'
import CartRevenue from '../sections/About/CartRevenue'
import CTA from '../sections/home/CTA'
import SEO from '../components/SEO'

export default function About() {
  return (
    <div>
      <SEO
        title="About CartPlus – Shopify Cart Optimization Experts"
        description="CartPlus empowers Shopify merchants with high-converting cart drawer experiences designed to drive revenue, customer engagement, and long-term growth."
        url="https://cartplus.io/about-us"
      />
      <BannerSection
        heading='Built for merchants who want to turn more carts into revenue.'
        paragraph='We built Cart Plus to help Shopify merchants turn more carts into revenue with a smoother, more modern shopping experience. Our goal is simple: increase conversions, raise average order value, and make checkout feel effortless for every customer.'
        buttonText='Try Demo'
        img='https://cartplus.io/cartplus-img/Group 1707480398.svg'
         link='https://cart-plus-n5wxxnix.myshopify.com/'
      />
      <ShopifyCarts />
      <OurMission
        img='https://cartplus.io/cartplus-img/Group 1707480405.svg'
        heading='Our Mission'
        paragraph1='Our mission is to help merchants create faster, smarter, and more engaging cart experiences that drive higher conversions.'
        paragraph2='We believe ecommerce brands should have access to simple, effective tools that help increase revenue, improve customer satisfaction, and boost average order value—without the need for complex software or custom development.'
        paragraph3="That's why we build cart optimization solutions that streamline the path to purchase, reduce cart abandonment, and encourage customers to complete their orders with confidence. From upsells and cross-sells to personalized cart experiences, our tools help brands maximize every shopping session."
        gradientImg='https://hubsyntax.com/cart-images/Mask group (30).svg'
      />
      <DrawerDesigned />
      <CartRevenue />
      <OurMission
        img='https://hubsyntax.com/cart-images/cartRevenues.svg'
        heading='A Cart Drawer Built to Recover Lost Revenue '
        paragraph1='Many Shopify stores focus on acquiring traffic, but the cart experience is often an afterthought.'
        paragraph2='Our cart drawer helps increase average order value and reduce cart abandonment with targeted upsells, cross-sells, free shipping incentives, and a streamlined checkout experience—all designed to help you get more from the traffic you already have. '
        gradientImg='https://hubsyntax.com/cart-images/Mask group (30).svg'
      />
      <CTA />
    </div>
  )
}
