import React from 'react'
import CartStudio from '../sections/CaseStudies/CartStudio'
import CartBlogPage from '../sections/CaseStudies/CartBlogPage'
import FAQ from '../sections/home/FAQ'
import CTA from '../sections/home/CTA'

export default function CaseStudies() {
    return (
        <div>
            <CartStudio />
            <CartBlogPage />
            <FAQ />
            <CTA />
        </div>
    )
}