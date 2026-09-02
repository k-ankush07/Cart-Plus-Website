import React from 'react'
import BannerSection from '../components/BannerSection'
import Features from '../sections/home/SmartFeatures'
import CustomizeCart from "../sections/home/CustomizeCart"
import PowerfulCart from '../sections/home/PowerfulCart'
import RevenueGrowth from '../sections/home/RevenueGrowth'
import HubCartFeatures from '../sections/home/HubCartFeatures'
import Pricing from '../sections/home/Pricing'
import FAQ from '../sections/home/FAQ'
import CTA from '../sections/home/CTA'
import SEO from '../components/SEO'

export default function Home() {
  return (
    <div>
      <SEO
        title="CartPlus – Shopify Cart Drawer & Upsell App"
        description="Boost Shopify sales with CartPlus, the all-in-one cart drawer app featuring upsells, free shipping bars, rewards, and checkout optimization tools."
        url="https://cartplus.io/"
      />
      <BannerSection
        heading='Boost Your Revenue with Smart Checkout & Upsell Tools'
        paragraph='Increase AOV and revenue with smart upsells, rewards, and a friction-free checkout experience.'
        buttonText='Try Demo'
        img='https://cartplus.io/cartplus-img/hero-center-aligner%20(3).svg'
        link='https://cart-plus-n5wxxnix.myshopify.com/'
      />
      <Features />
      <CustomizeCart />
      <PowerfulCart />
      <RevenueGrowth />
      <HubCartFeatures />
      <Pricing showGradient />
      <FAQ />
      <CTA />
    </div>
  )
}
