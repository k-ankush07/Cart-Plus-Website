import React from 'react'
import Blog from '../sections/Blog/Blog'
import TopHeading from '../components/TopHeading'
import CTA from '../sections/home/CTA'
import SEO from '../components/SEO'

export default function BlogPage() {
    return (
        <div>
            <SEO
                title="CartPlus Blog – Shopify Conversion & Growth Tips"
                description="Learn proven Shopify growth tactics, cart optimization strategies, upselling techniques, and eCommerce best practices from CartPlus experts."
                url="https://hubsyntax.com/blog"
            />
            <TopHeading
                heading='Your Hub for Shopify Growth & Conversion Tips'
                paragraph='Stay ahead with ecommerce insights, CRO strategies, and cart optimization techniques built for Shopify merchants.'
                showGradient
            />
            <Blog />
            <CTA />
        </div>
    )
}
