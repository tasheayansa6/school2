import { useState } from 'react'
import { BRAND } from '../brand'

const inputClass =
  'w-full rounded border border-[#d0d5dd] bg-white px-3 py-2.5 text-sm text-ink outline-none placeholder:text-[#98a2b3] focus:border-navy'

export default function LeadForm() {
  const [sent, setSent] = useState(false)

  return (
    <aside
      id="info"
      className="rounded border border-[#e4e7ec] bg-white p-6 shadow-[0_8px_24px_rgba(16,24,40,0.08)] md:p-8"
    >
      <h2 className="font-serif text-[26px] font-bold leading-tight text-navy md:text-[28px]">
        Starting is Easy
      </h2>
      <p className="mt-3 text-[14px] leading-6 text-body">
        Want to learn more about our secondary school (grades 9–12)? Just enter
        your name and email below, and we&apos;ll send you a series of helpful
        emails to guide you through the process.
      </p>

      {sent ? (
        <p className="mt-6 rounded border border-navy/10 bg-soft px-4 py-5 text-sm text-navy">
          Thanks! Check your inbox for next steps from {BRAND.name}.
        </p>
      ) : (
        <form
          className="mt-5 space-y-3"
          onSubmit={(e) => {
            e.preventDefault()
            setSent(true)
          }}
        >
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
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
            By submitting this form, you agree to receive communications from{' '}
            {BRAND.name} about programs and enrollment.
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
              I agree to receive SMS/text messages from {BRAND.name}. Message
              and data rates may apply.
            </span>
          </label>
          <button
            type="submit"
            className="mt-2 w-full rounded bg-red-btn px-5 py-3 text-sm font-bold text-white transition hover:bg-red-deep"
          >
            Get Started
          </button>
        </form>
      )}
    </aside>
  )
}
