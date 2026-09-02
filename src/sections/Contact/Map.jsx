import React from 'react'
import Container from '../../components/Container'

export default function Map() {
    return (
        <section>
            <Container className='relative z-10 py-[40px] max-[540px]:py-[25px]'>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11538.157555630338!2d76.70239091589345!3d30.709550364689292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef2405c1b6e9%3A0x1b443db51832ce92!2sHubSyntax!5e0!3m2!1sen!2sin!4v1705021605372!5m2!1sen!2sin"
                        width="100%"
                        height="484"
                        style={{ border: "0", borderRadius: "20px" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </Container>
        </section>
    )
}