import React from 'react'
import Container from '../../components/Container'

export default function PrivacyPolicy() {
    return (
        <section className="relative">
            <div className='absolute hidden lg:block'>
                <img src="https://cartplus.io/cartplus-img/Group 1707480310.svg" alt="" loading="lazy" decoding="async" />
            </div>
            <Container className="relative z-10 py-[50px] max-[540px]:py-[28px] ">
                <div>

                    {/* Page Heading */}
                    <h1 className="font-bold text-[50px] text-center max-[540px]:text-[34px] leading-[1.2] mb-[20px]">
                        Privacy Policy
                    </h1>
                    <p className="max-[540px]:text-[14px] text-[18px] leading-[26px] text-gray-600 mb-[20px]">
                        Last Updated: 15/06/2026
                    </p>

                    <p className="max-[540px]:text-[14px] text-[18px] leading-[26px] mb-[16px]">
                        This Privacy Policy describes how Cart Plus ("we," "our," or "us") collects,
                        uses, and protects information when merchants install and use the Cart Plus
                        Shopify application ("App").
                    </p>
                    <p className="max-[540px]:text-[14px] text-[18px] leading-[26px] mb-[40px]">
                        By installing and using the App, you agree to the collection and use of
                        information in accordance with this Privacy Policy.
                    </p>

                    {/* Information We Collect */}
                    <h2 className="font-semibold text-[35px] max-[540px]:text-[28px] leading-[1.3] mb-[20px] mt-[40px]">
                        Information We Collect
                    </h2>
                    <p className="max-[540px]:text-[14px] text-[18px] leading-[26px] mb-[16px]">
                        To provide and improve the App, we may collect the following information:
                    </p>

                    <h3 className="font-semibold text-[20px] leading-[1.4] mb-[12px] mt-[24px]">
                        Merchant Information
                    </h3>
                    <ul className="list-disc pl-[22px] max-[540px]:text-[14px] text-[18px] leading-[26px] mb-[16px] space-y-[8px]">
                        <li>Store name</li>
                        <li>Store URL</li>
                        <li>Shopify store ID</li>
                        <li>Store owner's contact information provided through Shopify</li>
                        <li>Shopify plan information</li>
                    </ul>

                    <h3 className="font-semibold text-[20px] leading-[1.4] mb-[12px] mt-[24px]">
                        Store Data
                    </h3>
                    <p className="max-[540px]:text-[14px] text-[18px] leading-[26px] mb-[16px]">
                        The App may access certain store information that merchants authorize through
                        Shopify, including:
                    </p>
                    <ul className="list-disc pl-[22px] max-[540px]:text-[14px] text-[18px] leading-[26px] mb-[16px] space-y-[8px]">
                        <li>Product information</li>
                        <li>Product collections</li>
                        <li>Cart and checkout-related settings</li>
                        <li>Theme settings and configurations</li>
                        <li>App settings configured by the merchant</li>
                    </ul>

                    <h3 className="font-semibold text-[20px] leading-[1.4] mb-[12px] mt-[24px]">
                        Usage Data
                    </h3>
                    <p className="max-[540px]:text-[14px] text-[18px] leading-[26px] mb-[16px]">
                        We may automatically collect information such as:
                    </p>
                    <ul className="list-disc pl-[22px] max-[540px]:text-[14px] text-[18px] leading-[26px] mb-[16px] space-y-[8px]">
                        <li>App usage statistics</li>
                        <li>Feature interactions</li>
                        <li>Error logs and diagnostic data</li>
                        <li>Device and browser information</li>
                    </ul>

                    {/* How We Use Information */}
                    <h2 className="font-semibold text-[35px] max-[540px]:text-[28px] leading-[1.3] mb-[20px] mt-[40px]">
                        How We Use Information
                    </h2>
                    <p className="max-[540px]:text-[14px] text-[18px] leading-[26px] mb-[16px]">
                        We use collected information to:
                    </p>
                    <ul className="list-disc pl-[22px] max-[540px]:text-[14px] text-[18px] leading-[26px] mb-[16px] space-y-[8px]">
                        <li>Provide and maintain the App's functionality</li>
                        <li>Enable cart drawer and cart enhancement features</li>
                        <li>Customize merchant settings</li>
                        <li>Improve performance and user experience</li>
                        <li>Troubleshoot technical issues</li>
                        <li>Monitor security and prevent unauthorized access</li>
                        <li>Communicate with merchants regarding support, updates, and service-related matters</li>
                    </ul>

                    {/* Shopify Data */}
                    <h2 className="font-semibold text-[35px] max-[540px]:text-[28px] leading-[1.3] mb-[20px] mt-[40px]">
                        Shopify Data
                    </h2>
                    <p className="max-[540px]:text-[14px] text-[18px] leading-[26px] mb-[16px]">
                        Cart Plus accesses Shopify store data only as necessary to provide the services
                        requested by merchants.
                    </p>
                    <p className="max-[540px]:text-[14px] text-[18px] leading-[26px] mb-[16px]">
                        We do not sell, rent, or trade Shopify store data to third parties.
                    </p>
                    <p className="max-[540px]:text-[14px] text-[18px] leading-[26px] mb-[16px]">
                        All Shopify data is processed in accordance with Shopify's Partner Program
                        Agreement and API Terms.
                    </p>

                    {/* Data Sharing and Disclosure */}
                    <h2 className="font-semibold text-[35px] max-[540px]:text-[28px] leading-[1.3] mb-[20px] mt-[40px]">
                        Data Sharing and Disclosure
                    </h2>
                    {/* <p className="max-[540px]:text-[14px] text-[18px] leading-[26px] mb-[16px]">
                        We may share information only in the following situations:
                    </p>

                    <h3 className="font-semibold text-[20px] leading-[1.4] mb-[12px] mt-[24px]">
                        Service Providers
                    </h3>
                    <p className="max-[540px]:text-[14px] text-[18px] leading-[26px] mb-[16px]">
                        We may use trusted third-party service providers for:
                    </p>
                    <ul className="list-disc pl-[22px] max-[540px]:text-[14px] text-[18px] leading-[26px] mb-[16px] space-y-[8px]">
                        <li>Cloud hosting</li>
                        <li>Analytics</li>
                        <li>Error monitoring</li>
                        <li>Customer support</li>
                    </ul>
                    <p className="max-[540px]:text-[14px] text-[18px] leading-[26px] mb-[16px]">
                        These providers are contractually obligated to protect your information.
                    </p>

                    <h3 className="font-semibold text-[20px] leading-[1.4] mb-[12px] mt-[24px]">
                        Legal Requirements
                    </h3> */}
                    <p className="max-[540px]:text-[14px] text-[18px] leading-[26px] mb-[16px]">
                        We may disclose information if required by law or if we believe disclosure is
                        necessary to:
                    </p>
                    <ul className="list-disc pl-[22px] max-[540px]:text-[14px] text-[18px] leading-[26px] mb-[16px] space-y-[8px]">
                        <li>Comply with legal obligations</li>
                        <li>Protect our rights</li>
                        <li>Investigate fraud or security issues</li>
                        <li>Respond to lawful requests from public authorities</li>
                    </ul>

                    {/* Data Retention */}
                    <h2 className="font-semibold text-[35px] max-[540px]:text-[28px] leading-[1.3] mb-[20px] mt-[40px]">
                        Data Retention
                    </h2>
                    <p className="max-[540px]:text-[14px] text-[18px] leading-[26px] mb-[16px]">
                        We retain merchant and store data only for as long as necessary to provide the
                        App and comply with legal obligations.
                    </p>
                    <p className="max-[540px]:text-[14px] text-[18px] leading-[26px] mb-[16px]">
                        When a merchant uninstalls Cart Plus, we will delete data in 48 hours.
                    </p>

                    {/* Data Security */}
                    <h2 className="font-semibold text-[35px] max-[540px]:text-[28px] leading-[1.3] mb-[20px] mt-[40px]">
                        Data Security
                    </h2>
                    <p className="max-[540px]:text-[14px] text-[18px] leading-[26px] mb-[16px]">
                        We implement reasonable administrative, technical, and organizational
                        safeguards designed to protect information against unauthorized access,
                        alteration, disclosure, or destruction.
                    </p>
                    {/* <p className="max-[540px]:text-[14px] text-[18px] leading-[26px] mb-[16px]">
                        However, no method of electronic storage or internet transmission is completely
                        secure, and we cannot guarantee absolute security.
                    </p> */}

                    {/* Merchant Rights */}
                    <h2 className="font-semibold text-[35px] max-[540px]:text-[28px] leading-[1.3] mb-[20px] mt-[40px]">
                        Merchant Rights
                    </h2>
                    <p className="max-[540px]:text-[14px] text-[18px] leading-[26px] mb-[16px]">
                        Depending on applicable laws, merchants may have rights to:
                    </p>
                    <ul className="list-disc pl-[22px] max-[540px]:text-[14px] text-[18px] leading-[26px] mb-[16px] space-y-[8px]">
                        <li>Access their personal information</li>
                        <li>Correct inaccurate information</li>
                        <li>Request deletion of personal information</li>
                        <li>Object to certain processing activities</li>
                    </ul>
                    <p className="max-[540px]:text-[14px] text-[18px] leading-[26px] mb-[16px]">
                        Requests may be submitted using the contact details provided below.
                    </p>

                    {/* Third-Party Services */}
                    <h2 className="font-semibold text-[35px] max-[540px]:text-[28px] leading-[1.3] mb-[20px] mt-[40px]">
                        Third-Party Services
                    </h2>
                    <p className="max-[540px]:text-[14px] text-[18px] leading-[26px] mb-[16px]">
                        The App may utilize third-party services to support functionality and
                        performance. These services may have their own privacy policies governing the
                        handling of information.
                    </p>
                    <p className="max-[540px]:text-[14px] text-[18px] leading-[26px] mb-[16px]">
                        We encourage merchants to review the privacy policies of any third-party
                        services they use.
                    </p>

                    {/* International Data Transfers */}
                    <h2 className="font-semibold text-[35px] max-[540px]:text-[28px] leading-[1.3] mb-[20px] mt-[40px]">
                        International Data Transfers
                    </h2>
                    <p className="max-[540px]:text-[14px] text-[18px] leading-[26px] mb-[16px]">
                        Information may be processed and stored in countries other than the merchant's
                        country of residence. We take reasonable steps to ensure appropriate safeguards
                        are in place when transferring data internationally.
                    </p>

                    {/* Children's Privacy */}
                    <h2 className="font-semibold text-[35px] max-[540px]:text-[28px] leading-[1.3] mb-[20px] mt-[40px]">
                        Children's Privacy
                    </h2>
                    <p className="max-[540px]:text-[14px] text-[18px] leading-[26px] mb-[16px]">
                        The App is intended for business use by Shopify merchants and is not directed
                        toward children under the age of 13. We do not knowingly collect personal
                        information from children.
                    </p>

                    {/* Changes to This Privacy Policy */}
                    <h2 className="font-semibold text-[35px] max-[540px]:text-[28px] leading-[1.3] mb-[20px] mt-[40px]">
                        Changes to This Privacy Policy
                    </h2>
                    <p className="max-[540px]:text-[14px] text-[18px] leading-[26px] mb-[16px]">
                        We may update this Privacy Policy from time to time. Any changes will be posted
                        on this page with an updated "Last Updated" date.
                    </p>
                

                    {/* Contact Us */}
                    <h2 className="font-semibold text-[35px] max-[540px]:text-[28px] leading-[1.3] mb-[20px] mt-[40px]">
                        Contact Us
                    </h2>
                    <p className="max-[540px]:text-[14px] text-[18px] leading-[26px] mb-[16px]">
                        If you have any questions about this Privacy Policy or our data practices,
                        please contact us:
                    </p>
                    <ul className="list-none max-[540px]:text-[14px] text-[18px] leading-[26px] space-y-[8px]">
                       Email: support@cartplus.io
                    </ul>

                </div>
            </Container>
              <div className='absolute z-0 top-[20%] right-0 hidden xl:block'>
                <img src="https://cartplus.io/cartplus-img/Subtract (6).svg" alt="" loading="lazy" decoding="async" />
            </div>
            <div className='absolute z-0 bottom-[0%] left-0 hidden xl:block'>
                <img src="https://cartplus.io/cartplus-img/Subtract (7).svg" alt="" loading="lazy" decoding="async" />
            </div>
        </section>
    )
}
