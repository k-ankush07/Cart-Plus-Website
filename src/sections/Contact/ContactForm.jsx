import React, { useState, useEffect } from 'react'
import Container from '../../components/Container'
import Button from '../../components/Button'

// ── icon URLs ──────────────────────────────────────────────────────────────
const ICONS = {
  phone: 'https://cartplus.io/cartplus-img/Icon001.svg',
  mail: 'https://cartplus.io/cartplus-img/Group 1707480408.svg',
  location: 'https://cartplus.io/cartplus-img/Vector001.svg',
  linkedin: 'https://cartplus.io/cartplus-img/cib_linkedin-in.svg',
  facebook: 'https://cartplus.io/cartplus-img/Vector%20(6).svg',
  twitter: 'https://cartplus.io/cartplus-img/akar-icons_twitter-fill.svg',
  instagram: 'https://cartplus.io/cartplus-img/ri_instagram-fill.svg',
}

const SOCIAL = [
  { key: 'linkedin', href: 'https://www.linkedin.com/in/cart-plus-2375a5422/', label: 'LinkedIn' },
  { key: 'facebook', href: 'https://www.facebook.com/profile.php?id=61591767910161', label: 'Facebook' },
  // { key: 'twitter', href: '#', label: 'Twitter/X' },
  { key: 'instagram', href: 'https://www.instagram.com/cart__plus/', label: 'Instagram' },
]

const CONTACT_INFO = [
  { icon: 'phone', label: 'Phone Number', value: '+91-86792 27771' },
  { icon: 'mail', label: 'Email Address', value: 'support@cartplus.io' },
  {
    icon: 'location',
    label: 'Our Location',
    value: 'Plot No D133C, Manchanda  Tower, Phase 7, Industrial Area, Sector 73, Sahibzada Ajit Singh Nagar, Punjab 160055',
  },
]

// ── API config ───────────────────────────────────────────────────────────
const API_ENDPOINT = import.meta.env.VITE_CONTACT_API_URL

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', address: '',
  })
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [fieldErrors, setFieldErrors] = useState({})

  const set = (field) => (e) => {
    let value = e.target.value
    if (field === 'firstName' || field === 'lastName') {
      value = value.replace(/[^A-Za-z]/g, '')
    } else if (field === 'phone') {
      value = value.replace(/[^\d+]/g, '');

      if (!value.startsWith('+')) {
        value = value.replace(/\+/g, '');
      }

      if (value.startsWith('+')) {
        value = '+' + value.slice(1).replace(/\+/g, '');
      }
    }
    setForm((prev) => ({ ...prev, [field]: value }))
    // clear that field's error as soon as the user edits it
    setFieldErrors((prev) => (prev[field] ? { ...prev, [field]: '' } : prev))
  }

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  // const PHONE_REGEX = /^[0-9]{7,15}$/
  const PHONE_REGEX = /^(\+91)?[0-9]{10}$/;
  const NAME_REGEX = /^[A-Za-z]+$/
  const NAME_MIN = 2
  const NAME_MAX = 30
  const PHONE_MIN = 7
  const PHONE_MAX = 15

  const validate = (values) => {
    const errors = {}
    const first = values.firstName.trim()
    const last = values.lastName.trim()
    const email = values.email.trim()
    const phone = values.phone.trim()

    // First name — required
    if (!first) {
      errors.firstName = 'First name is required.'
    } else if (!NAME_REGEX.test(first)) {
      errors.firstName = 'First name must contain letters only.'
    } else if (first.length < NAME_MIN || first.length > NAME_MAX) {
      errors.firstName = `First name must be ${NAME_MIN}-${NAME_MAX} characters.`
    }

    // Last name — optional, but validated if filled in
    if (last) {
      if (!NAME_REGEX.test(last)) {
        errors.lastName = 'Last name must contain letters only.'
      } else if (last.length < NAME_MIN || last.length > NAME_MAX) {
        errors.lastName = `Last name must be ${NAME_MIN}-${NAME_MAX} characters.`
      }
    }

    // Email — required
    if (!email) {
      errors.email = 'Email is required.'
    } else if (!EMAIL_REGEX.test(email)) {
      errors.email = 'Enter a valid email address.'
    }

    // Phone — optional, but validated if filled in
    if (phone) {
      if (!PHONE_REGEX.test(phone)) {
        errors.phone = 'Phone number must contain digits only.'
      } else if (phone.length < PHONE_MIN || phone.length > PHONE_MAX) {
        errors.phone = `Phone number must be ${PHONE_MIN}-${PHONE_MAX} digits.`
      }
    }

    return errors
  }

  // auto-hide success/error messages after 4s
  useEffect(() => {
    if (status !== 'success' && status !== 'error') return
    const timer = setTimeout(() => {
      setStatus('idle')
      setErrorMsg('')
    }, 4000)
    return () => clearTimeout(timer)
  }, [status])

  // const handleSend = async (e) => {
  //   e.preventDefault()

  //   const errors = validate(form)
  //   if (Object.keys(errors).length > 0) {
  //     setFieldErrors(errors)
  //     setStatus('error')
  //     setErrorMsg('Please fix the highlighted fields.')
  //     return
  //   }
  //   setFieldErrors({})

  //   setStatus('submitting')
  //   setErrorMsg('')

  //   try {
  //     const res = await fetch(API_ENDPOINT, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         // NOTE: shipped to the browser bundle — visible to anyone via dev tools.
  //         // Not a real secret in production; see comment above API_ENDPOINT.
  //         'X-API-Key': import.meta.env.VITE_API_SECRET_KEY,
  //       },
  //       body: JSON.stringify(form),
  //     })

  //     if (!res.ok) {
  //       const data = await res.json().catch(() => ({}))
  //       throw new Error(data.message || `Request failed with status ${res.status}`)
  //     }

  //     setStatus('success')
  //     setForm({ firstName: '', lastName: '', email: '', phone: '', address: '' })
  //     setFieldErrors({})
  //   } catch (err) {
  //     setStatus('error')
  //     setErrorMsg(err.message || 'Something went wrong. Please try again.')
  //   }
  // }
  const handleSend = async (e) => {
    e.preventDefault()

    const errors = validate(form)
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      setStatus('error')
      setErrorMsg('Please fix the highlighted fields.')
      return
    }
    setFieldErrors({})

    setStatus('submitting')
    setErrorMsg('')

    const submittedForm = { ...form }

    // fire the actual request in the background
    const requestPromise = fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // NOTE: shipped to the browser bundle — visible to anyone via dev tools.
        // Not a real secret in production; see comment above API_ENDPOINT.
        'X-API-Key': import.meta.env.VITE_API_SECRET_KEY,
      },
      body: JSON.stringify(submittedForm),
    })

    // a timer that always "resolves" the UI within 2 seconds
    const uiTimeout = new Promise((resolve) => setTimeout(() => resolve('timeout'), 1000))

    const winner = await Promise.race([requestPromise, uiTimeout])

    if (winner === 'timeout') {
      // 2 seconds passed — show success right away, let the real request
      // keep running in the background and just log if it eventually fails
      setStatus('success')
      setForm({ firstName: '', lastName: '', email: '', phone: '', address: '' })
      setFieldErrors({})

      requestPromise
        .then(async (res) => {
          if (!res.ok) {
            const data = await res.json().catch(() => ({}))
            console.error('Background submit failed:', data.message || res.status)
          }
        })
        .catch((err) => console.error('Background submit error:', err))

      return
    }

    // request itself finished within 2 seconds — handle normally
    try {
      const res = winner
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.message || `Request failed with status ${res.status}`)
      }
      setStatus('success')
      setForm({ firstName: '', lastName: '', email: '', phone: '', address: '' })
      setFieldErrors({})
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <section className='relative'>

      <Container className="relative z-10 py-[40px] max-[540px]:py-[20px]">
        {/* card */}
        <div>
          <div className="grid gap-6 lg:gap-12 lg:grid-cols-2">
            {/* ── LEFT: info ───────────────────────────────────── */}
            <div className="flex flex-col gap-[30px] lg:gap-[50px]">
              <div>
                <h2 className='heading-line-height font-bold max-[540px]:text-[28px] text-[45px] lg:text-[50px] leading-[45px] lg:leading-[60px]'>
                  Let's Discuss Your Goals
                </h2>

                <div className='mt-3 flex flex-col gap-4'>
                  <div>
                    {/* <h3 className='heading-line-height font-semibold text-[20px] lg:text-[20px]'>Improve Your Cart Experience</h3> */}
                    <p className='text-[16px] mt-1'>
                      Tell us about the challenges you're facing, and we'll help you create a smoother shopping journey for your customers.
                    </p>
                  </div>

                  {/* <div>
                    <h3 className='font-semibold text-[18px] lg:text-[20px]'>Boost Conversions & Revenue</h3>
                    <p className='text-[16px] mt-1'>
                      Discover how Cart Plus can reduce cart abandonment, increase average order value, and help turn more visitors into customers.
                    </p>
                  </div> */}
                </div>
              </div>

              {/* contact details */}
              <ul className="flex flex-col gap-[10px] sm:gap-[30px]">
                {CONTACT_INFO.map(({ icon, label, value }) => (
                  <li key={label} className="flex items-start gap-[20px]">
                    <span className="mt-0.5 flex  h-[30px]  w-[30px]  shrink-0 items-center justify-center">
                      <img src={ICONS[icon]} alt={label} className="w-full" />
                    </span>
                    <div>
                      <p className="text-[16px] sm:text-[18px] font-semibold ">{label}</p>
                      <p className="mt-0.5 text-[14px] sm:text-[18px]">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* social */}
              <div className='mt-[-5px] sm:mt-[-20px]'>
                <p className="mb-[10px] sm:mb-[20px] text-[20px] font-bold uppercase tracking-widest">
                  Follow Us
                </p>
                <div className="flex gap-3 mt-[10px]">
                  {SOCIAL.map(({ key, href, label }) => (
                    <a
                      key={key}
                      href={href}
                      aria-label={label}
                      target='_blank'
                      className="flex h-[38px] sm:h-[50px] w-[38px] sm:w-[50px] items-center justify-center rounded-full bg-[#6C4DFF] "

                    >
                      <img src={ICONS[key]} alt={label} className="h-[20px] sm:h-[24px] w-[20px] sm:w-[24px]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT: form ──────────────────────────────────── */}
            <form onSubmit={handleSend} className="flex flex-col gap-4">

              {/* First / Last name row */}
               <div className="grid max-[540px]:grid-cols-1 grid-cols-2 gap-4">
                {['firstName', 'lastName'].map((field) => (
                  <div key={field}>
                    <div
                      className="relative rounded-[10px] border border-[#6C4DFF]"
                      style={{
                        padding: '1px', boxShadow: '0px 0px 60px 0px #9500FF14 inset'
                      }}
                    >
                      <input
                        type="text"
                        placeholder={field === 'firstName' ? 'First Name *' : 'Last Name'}
                        value={form[field]}
                        onChange={set(field)}
                        disabled={status === 'submitting'}
                        required={field === 'firstName'}
                        minLength={2}
                        maxLength={30}
                        aria-invalid={Boolean(fieldErrors[field])}
                        className="w-full rounded-[10px]  py-2 px-4 sm:py-3 text-[16px] text-[#6C4DFF] outline-none transition  placeholder-[#6C4DFF] disabled:opacity-60"
                      />
                    </div>
                    {fieldErrors[field] && (
                      <p className="mt-1 text-[13px] text-red-600">{fieldErrors[field]}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Email / Phone row */}
              <div className="grid max-[540px]:grid-cols-1 grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <div
                    className="relative rounded-[10px] border border-[#6C4DFF]"
                    style={{
                      padding: '1px', boxShadow: '0px 0px 60px 0px #9500FF14 inset'
                    }}
                  >
                    <input
                      type="email"
                      placeholder="Email Address *"
                      value={form.email}
                      onChange={set('email')}
                      disabled={status === 'submitting'}
                      required
                      aria-invalid={Boolean(fieldErrors.email)}
                      className="w-full rounded-[10px]  py-2 px-4 sm:py-3 text-[16px] text-[#6C4DFF] outline-none transition  placeholder-[#6C4DFF] disabled:opacity-60"
                    />
                  </div>
                  {fieldErrors.email && (
                    <p className="mt-1 text-[13px] text-red-600">{fieldErrors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <div
                    className="relative rounded-[10px] border border-[#6C4DFF]"
                    style={{
                      padding: '1px', boxShadow: '0px 0px 60px 0px #9500FF14 inset'
                    }}
                  >
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={set('phone')}
                      disabled={status === 'submitting'}
                      maxLength={15}
                      aria-invalid={Boolean(fieldErrors.phone)}
                      className="w-full rounded-[10px]  py-2 px-4 sm:py-3 text-[16px] text-[#6C4DFF] outline-none transition  placeholder-[#6C4DFF] disabled:opacity-60"
                    />
                  </div>
                  {fieldErrors.phone && (
                    <p className="mt-1 text-[13px] text-red-600">{fieldErrors.phone}</p>
                  )}
                </div>
              </div>

              {/* Address */}
              <div className="relative rounded-[10px] border border-[#6C4DFF]" style={{
                padding: '1px',
                lineHeight: 0,
                display: 'block',
                boxShadow: '0px 0px 60px 0px #9500FF14 inset'
              }}>
                <textarea
                  rows={7}
                  placeholder="Message"
                  value={form.address}
                  onChange={set('address')}
                  disabled={status === 'submitting'}
                  className="resize-none w-full rounded-[10px] text-[#6C4DFF] py-2 px-4 sm:py-3 text-[16px] outline-none transition  placeholder-[#6C4DFF] h-[120px] sm:h-[196px] disabled:opacity-60"
                  style={{ display: 'block', lineHeight: '1.5' }}
                />
              </div>

              {/* Status messages */}
              {status === 'error' && (
                <p className="text-[14px] text-red-600">{errorMsg}</p>
              )}
              {status === 'success' && (
                <p className="text-[14px] text-green-600">Thanks! We've received your message and will be in touch soon.</p>
              )}

              <Button
                icon={
                  status === 'submitting'
                    ? undefined
                    : "https://cartplus.io/cartplus-img/Vector%20(6).png"
                }
                className='text-center justify-center mx-auto disabled:opacity-60'
                type="submit"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <span className="flex items-center gap-2">
                    Sending...
                    <svg
                      className="animate-spin h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="opacity-25"
                        cx="12" cy="12" r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                  </span>
                ) : (
                  'Submit Now'
                )}
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}