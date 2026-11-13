import React from 'react'
import BannerSection from '../components/BannerSection'
import PricingSection from '../sections/home/Pricing'
import EverythingPlan from '../sections/Pricing/EverythingPlanS'
import FAQ from '../sections/home/FAQ'
import CTA from '../sections/home/CTA'
import SEO from '../components/SEO'

const pricingFaqs = [
  {
    q: 'Which plan should I choose?',
    a: "Pick the plan that matches your store's size and growth goals.",
  },
  {
    q: 'Can I upgrade anytime?',
    a: 'Yes, you can switch plans whenever you need.',
  },
  {
    q: "What's included in the Free plan?",
    a: 'Core cart features, customization, and email support.',
  },
  {
    q: "What's the difference between Starter and Growth?",
    a: 'Growth unlocks advanced features, greater customization, and priority support for scaling stores.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes, you can cancel your subscription at any time.',
  },
]

export default function Pricing() {
  return (
    <div>
      <SEO
        title="CartPlus Pricing – Affordable Shopify Cart Drawer"
        description="Choose the perfect CartPlus plan for your Shopify store and unlock advanced cart drawer features that help increase conversions and average order value."
        url="https://cartplus.io/pricing"
      />
      {/* <BannerSection
        heading='Build to Turn More Carts Into Sales'
        paragraph='We created Cart Plus after seeing thousands of Shopify stores lose sales because of outdated cart experiences. Our goal is simple help merchants increase conversions, drive more upsells, and boost average order value with a faster, smarter cart experience.'
        buttonText='Try Demo'
        img='https://cartplus.io/cartplus-img/Frame 2121453067 (1).svg'
      /> */}
      <PricingSection showGradient={false} />
      <EverythingPlan />
      <FAQ faqs={pricingFaqs} />
      <CTA />
    </div>
  )
}
