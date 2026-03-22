import { lazy } from 'react'

const Footer = lazy(() => import('../components/Footer.jsx'))
const ScrollToTop = lazy(() => import('../components/ScrollToTop.jsx'))

const PrivacyPolicy = () => {
  return (
    <>
      <ScrollToTop />

      <div className='px-4 md:px-8 py-12 lg:py-24 max-w-6xl mx-auto flex flex-col gap-8 text-black'>
        <div className='flex flex-col items-center gap-2'>
          <h1 className='text-2xl md:text-4xl font-bold'>Privacy Policy</h1>
          <p className='md:text-lg text-gray-500'>Last Updated: 22 Mar, 2026</p>
        </div>

        <p className="leading-relaxed">Welcome to <span className="font-semibold">CodeWeave</span> ("we", "our", or "us"). Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services.</p>

        {/* Info Collection */}
        <section className='flex flex-col gap-6'>
          <h2 className="text-xl font-semibold">1. Information We Collect</h2>

          <div className="flex flex-col gap-3">
            <h3 className="font-medium">a. Personal Information</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business details (if applicable)</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-medium">b. Usage Data</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Pages visited</li>
              <li>Time spent on website</li>
            </ul>
          </div>

          <div className='flex flex-col gap-3'>
            <h3 className="font-medium">c. Payment Information</h3>
            <p className="text-gray-700">We do not store payment details. Payments are securely processed through third-party providers like Razorpay.</p>
          </div>
        </section>

        {/* Usage */}
        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Provide and manage our services</li>
            <li>Respond to inquiries and support requests</li>
            <li>Process transactions</li>
            <li>Improve our website and services</li>
            <li>Send updates, offers, or important notifications</li>
          </ul>
        </section>

        {/* Sharing */}
        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">3. Sharing of Information</h2>
          <p className="text-gray-700">We do not sell your personal data. We may share your data with trusted third-party service providers (such as payment gateways, hosting, analytics) or legal authorities if required by law.</p>
        </section>

        {/* Security */}
        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">4. Data Security</h2>
          <p className="text-gray-700">We implement appropriate security measures to protect your data. However, no method of transmission over the internet is 100% secure.</p>
        </section>

        {/* Cookies */}
        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">5. Cookies</h2>
          <p className="text-gray-700">We may use cookies to improve user experience and analyze website traffic. You can disable cookies through your browser settings.</p>
        </section>

        {/* Third Party */}
        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">6. Third-Party Links</h2>
          <p className="text-gray-700">Our website may contain links to third-party websites. We are not responsible for their privacy practices.</p>
        </section>

        {/* Rights */}
        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">7. Your Rights</h2>
          <div className='flex flex-col gap-1'>
            <p className="text-gray-700">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Access your data</li>
              <li>Request correction or deletion</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </div>
        </section>

        {/* Updates */}
        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">8. Changes to This Policy</h2>
          <p className="text-gray-700">We may update this Privacy Policy from time to time. Updates will be posted on this page.</p>
        </section>

        {/* Contact */}
        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">9. Contact Us</h2>
          <p className="text-gray-700">If you have any questions about this Privacy Policy, you can contact us:</p>
          <div className="text-gray-700">
            <p>📧 Email:{" "}
              <a href="mailto:codeweave1327@gmail.com" className="text-blue-600" >codeweave1327@gmail.com</a>
            </p>
            <p>
              📞 Phone:{" "}
              <a href="tel:+918595994381" className="text-blue-600">+91 8595994381</a>
              ,{" "}
              <a href="tel:+919311201990" className="text-blue-600">+91 9311201990</a>
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default PrivacyPolicy