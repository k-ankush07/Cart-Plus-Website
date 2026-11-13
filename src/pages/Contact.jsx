import React from 'react'
import ContactForm from '../sections/Contact/ContactForm'
import Map from '../sections/Contact/Map'
import CTA from '../sections/home/CTA'
import TopHeading from '../components/TopHeading'
import SEO from '../components/SEO'

export default function Contact() {

  return (
    <div>
      <SEO
        title="CartPlus – Shopify App Support & Sales"
        description="Need help with CartPlus? Contact our team for product support, feature questions, partnership opportunities, and expert guidance."
        url="https://cartplus.io/contact"
      />
      <TopHeading
        heading="We'd love to hear from you"
        paragraph="Have questions about Cart Plus or need help improving your Shopify cart and checkout experience? Our team is here to help. Tell us a little about your store and goals, and we'll get back to you as soon as possible."
        showGradient
      />
      <ContactForm />
      {/* <Map /> */}
      <CTA />
    </div>
  )
}
