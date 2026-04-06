import { lazy } from 'react'
import { Helmet } from 'react-helmet-async'

const Footer = lazy(() => import('../components/Footer.jsx'))
const ScrollToTop = lazy(() => import('../components/ScrollToTop.jsx'))

const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | CodeWeave</title>
        <meta name="description" content="Read the Terms and Conditions of CodeWeave to understand the rules, policies, and guidelines for using our SaaS development and web application services." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codeweave.in/terms-and-conditions" />
        <meta property="og:title" content="Terms & Conditions | CodeWeave" />
        <meta property="og:description" content="Understand the terms and policies for using CodeWeave services." />
        <meta property="og:url" content="https://codeweave.in/terms-and-conditions" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms & Conditions | CodeWeave" />
        <meta name="twitter:description" content="Read CodeWeave terms for using SaaS and web development services." />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "TermsOfService",
            "name": "Terms and Conditions",
            "url": "https://codeweave.in/terms-and-conditions",
            "publisher": {
              "@type": "Organization",
              "name": "CodeWeave"
            }
          }`}
        </script>
      </Helmet>

      <ScrollToTop />

      <div className='px-4 md:px-8 py-12 lg:py-24 max-w-6xl mx-auto flex flex-col gap-8 text-black'>
        <div className='flex flex-col items-center gap-2'>
          <h1 className='text-2xl md:text-4xl font-bold'>Terms & Conditions</h1>
          <p className='md:text-lg text-gray-500'>Last Updated: 22 Mar, 2026</p>
        </div>

        <p className="leading-relaxed">Welcome to <span className="font-semibold">CodeWeave</span>. By accessing or using our website and services, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.</p>

        {/* Services */}
        <section className='flex flex-col gap-6'>
          <h2 className="text-xl font-semibold">1. Services</h2>
          <p className="text-gray-700">We do not sell your personal data. We may share your data with trusted third-party service providers (such as payment gateways, hosting, analytics) or legal authorities if required by law.</p>
        </section>

        {/* Eligibility */}
        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">2. User Eligibility</h2>
          <p className="text-gray-700">By using our services, you confirm that you are at least 18 years old and capable of entering into a legally binding agreement.</p>
        </section>

        {/* Accounts */}
        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">3. User Accounts</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>You are responsible for maintaining account confidentiality</li>
            <li>You agree to provide accurate information</li>
            <li>We reserve the right to suspend accounts for misuse</li>
          </ul>
        </section>

        {/* Payments */}
        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">4. Payments & Billing</h2>
          <p className="text-gray-700">All payments are processed securely through third-party providers like Razorpay. We do not store your payment details. Pricing may change at any time with prior notice.</p>
        </section>

        {/* Refund */}
        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">5. Refund Policy</h2>
          <p className="text-gray-700">Payments made for our services are generally non-refundable unless explicitly stated otherwise. For subscription services, cancellation will stop future billing but does not guarantee refunds for past payments.</p>
        </section>

        {/* Acceptable Use */}
        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">6. Acceptable Use</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Do not use our services for illegal activities</li>
            <li>Do not attempt to hack, disrupt, or misuse the platform</li>
            <li>Do not upload harmful or malicious content</li>
          </ul>
        </section>

        {/* Intellectual Property */}
        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">7. Intellectual Property</h2>
          <p className="text-gray-700">All content, branding, and software on this website are the property of CodeWeave and are protected by applicable intellectual property laws.</p>
        </section>

        {/* Limitation */}
        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">8. Limitation of Liability</h2>
          <p className="text-gray-700">CodeWeave shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>
        </section>

        {/* Termination */}
        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">9. Termination</h2>
          <p className="text-gray-700">We reserve the right to suspend or terminate access to our services at our discretion, without prior notice, for violations of these terms.</p>
        </section>

        {/* Changes */}
        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">10. Changes to Terms</h2>
          <p className="text-gray-700">We may update these Terms & Conditions at any time. Continued use of the service after updates means you accept the revised terms.</p>
        </section>

        {/* Governing Law */}
        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">11. Governing Law</h2>
          <p className="text-gray-700">These terms shall be governed by and interpreted in accordance with the laws of India.</p>
        </section>

        {/* Contact */}
        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">12. Contact Us</h2>
          <p className="text-gray-700">If you have any questions about these Terms, contact us:</p>
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

export default TermsAndConditions