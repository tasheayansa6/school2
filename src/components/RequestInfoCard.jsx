import { useState } from 'react'
import { BRAND } from '../brand'

const inputClass =
  'w-full rounded border border-[#cfd8e3] bg-white px-3.5 py-3 text-sm text-ink outline-none placeholder:text-[#98a2b3] focus:border-navy'

export default function RequestInfoCard() {
  const [sent, setSent] = useState(false)

  return (
    <div
      id="request-info"
      className="rounded-[18px] border border-white/60 bg-white p-6 shadow-[0_22px_50px_rgba(16,48,72,0.14)] md:p-10 lg:p-12"
    >
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14">
        <div>
          <h3 className="font-serif text-[28px] leading-tight font-bold text-red md:text-[34px]">
            Not Ready to Enroll?
          </h3>
          <div className="mt-3 h-[3px] w-14 bg-red" aria-hidden />
          <p className="mt-5 text-[15px] leading-7 text-body">
            To get more information about {BRAND.name} and how we can support
            your educational journey, fill out the form and one of our team
            members will contact you with all the details you need.
          </p>
          <p className="mt-4 text-[15px] leading-7 text-body">
            You can also view our Student Handbook —{' '}
            <a href="#overview" className="font-semibold text-red hover:underline">
              Click Here
            </a>
            .
          </p>
        </div>

        <div>
          {sent ? (
            <p className="rounded border border-navy/10 bg-[#f3f8fa] px-4 py-5 text-sm text-navy">
              Thanks! Check your inbox for next steps from {BRAND.name}.
            </p>
          ) : (
            <form
              className="space-y-3.5"
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <input
                  required
                  name="firstName"
                  type="text"
                  placeholder="First Name*"
                  className={inputClass}
                />
                <input
                  required
                  name="lastName"
                  type="text"
                  placeholder="Last Name*"
                  className={inputClass}
                />
              </div>
              <input
                required
                name="email"
                type="email"
                placeholder="Email*"
                className={inputClass}
              />
              <input
                name="phone"
                type="tel"
                placeholder="Mobile phone number"
                className={inputClass}
              />
              <div className="relative">
                <select
                  required
                  name="role"
                  defaultValue=""
                  className={`${inputClass} appearance-none pr-9 text-[#667085]`}
                >
                  <option value="" disabled>
                    I am a...
                  </option>
                  <option value="parent">Parent / Guardian</option>
                  <option value="student">Student</option>
                  <option value="counselor">Counselor</option>
                  <option value="other">Other</option>
                </select>
                <span
                  className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[#667085]"
                  aria-hidden
                >
                  ▾
                </span>
              </div>

              <p className="pt-1 text-[11px] leading-4 text-[#667085]">
                By submitting this form, you agree to receive communications
                from {BRAND.name} about programs and enrollment. See our privacy
                policy for details.
              </p>

              <label className="flex items-start gap-2 text-[12px] leading-5 text-[#475467]">
                <input
                  type="checkbox"
                  name="marketing"
                  className="mt-0.5 h-4 w-4 shrink-0 accent-red"
                />
                <span>
                  I agree to receive information about {BRAND.name} programs by
                  email and phone.
                </span>
              </label>
              <label className="flex items-start gap-2 text-[12px] leading-5 text-[#475467]">
                <input
                  type="checkbox"
                  name="sms"
                  className="mt-0.5 h-4 w-4 shrink-0 accent-red"
                />
                <span>
                  I agree to receive SMS/text messages from {BRAND.name}.
                  Message and data rates may apply.
                </span>
              </label>

              <button
                type="submit"
                className="mt-1 w-full rounded bg-[#8f0a0a] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-red-deep"
              >
                Submit
              </button>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <a
                  href="#courses"
                  className="inline-flex flex-1 items-center justify-center rounded-full border-2 border-[#333] bg-white px-4 py-2.5 text-center text-[13px] font-semibold text-ink transition hover:bg-ink hover:text-white"
                >
                  What Programs Do You Offer
                </a>
                <a
                  href="#info"
                  className="inline-flex flex-1 items-center justify-center rounded-full border-2 border-[#333] bg-white px-4 py-2.5 text-center text-[13px] font-semibold text-ink transition hover:bg-ink hover:text-white"
                >
                  What is Tuition
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
