import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function EmailForm() {
  const [display, setDisplay] = useState('none')

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_q1plabm',
        'template_yejdewr',
        form.current,
        'XgrmG1fdI59ZO5GIi'
      )
      .then(
        (result) => {
          console.log(result.text)
          console.log('sent')
          if (display === 'none') {
            setDisplay('block')
            setTimeout(() => {
              setDisplay('none')
            }, 5000)
          }
          e.target.reset()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <>
      <div className="flex items-start p-5 justify-center">
        <div className="w-[550px] max-lg:mx-[0px]">
          <div
            className="email-sent-notification"
            style={{ display: `${display}` }}
            id="sent-notification"
          >
            email sent!
          </div>
          <form ref={form} id="contact-form" onSubmit={sendEmail}>
            <div className="mb-5">
              <label
                form="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
            </div>
            <div className="mb-5">
              <label
                form="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@domain.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
            </div>
            <div className="mb-5">
              <label
                form="message"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Message/Inquiry:
              </label>
              <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Type your message"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              ></textarea>
            </div>
            <div>
              <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
