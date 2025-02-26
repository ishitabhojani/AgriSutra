"use client";

import React from "react";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <div className="bg-white p-6 shadow-sm mb-4">
        <h1 className="text-2xl font-bold text-gray-900">Terms of Service</h1>
      </div>

      <div className="max-w-9xl mx-auto bg-white p-6 rounded-lg shadow-sm space-y-6">
        {/* Introduction */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            1. Introduction
          </h2>
          <p className="text-gray-600">
            Welcome to AgriSutra. By using our website, mobile application, or
            any related services (collectively, the “Services”), you agree to be
            bound by these Terms of Service (“Terms”). Please read them
            carefully before using our Services.
          </p>
        </section>

        {/* Eligibility */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            2. Eligibility
          </h2>
          <p className="text-gray-600">
            You must be at least 18 years old to use our Services. By using our
            Services, you represent that you have the legal capacity to enter
            into a binding contract and are not barred from doing so under any
            applicable laws.
          </p>
        </section>

        {/* Account Registration */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            3. Account Registration
          </h2>
          <p className="text-gray-600">
            You may be required to create an account to access certain features.
            You agree to provide accurate, current, and complete information and
            to keep such information updated. You are responsible for
            maintaining the confidentiality of your account credentials and for
            all activities that occur under your account.
          </p>
        </section>

        {/* Use of Services */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            4. Use of Services
          </h2>
          <p className="text-gray-600">
            You agree to use the Services only for lawful purposes and in
            compliance with these Terms. You will not use our platform to post
            or transmit any material that is illegal, harassing, threatening, or
            otherwise objectionable.
          </p>
        </section>

        {/* Intellectual Property */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            5. Intellectual Property
          </h2>
          <p className="text-gray-600">
            All content, trademarks, and data on our Services, including
            software, databases, text, graphics, icons, and hyperlinks are the
            property of AgriSutra or its licensors. You may not reproduce,
            modify, or distribute any part of the Services without our prior
            written permission.
          </p>
        </section>

        {/* Disclaimers */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            6. Disclaimers
          </h2>
          <p className="text-gray-600">
            Our Services are provided on an “as is” basis. We do not warrant the
            accuracy, reliability, or completeness of any information provided.
            AgriSutra disclaims all warranties, whether express or implied,
            including the implied warranties of merchantability, fitness for a
            particular purpose, and non-infringement.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            7. Limitation of Liability
          </h2>
          <p className="text-gray-600">
            In no event shall AgriSutra or its affiliates be liable for any
            indirect, incidental, special, or consequential damages arising out
            of or in connection with the use of our Services. Our total
            liability for any claim arising from or relating to these Terms
            shall not exceed the amount you paid, if any, for accessing the
            Services.
          </p>
        </section>

        {/* Changes to Terms */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            8. Changes to These Terms
          </h2>
          <p className="text-gray-600">
            We reserve the right to modify or replace these Terms at any time.
            Any changes will be posted on our website or communicated to you via
            email. Your continued use of the Services after such modifications
            indicates your acceptance of the new Terms.
          </p>
        </section>

        {/* Governing Law */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            9. Governing Law
          </h2>
          <p className="text-gray-600">
            These Terms shall be governed by and construed in accordance with
            the laws of your jurisdiction. Any dispute arising from or related
            to these Terms shall be resolved in the courts of that jurisdiction.
          </p>
        </section>

        {/* Contact Us */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            10. Contact Us
          </h2>
          <p className="text-gray-600">
            If you have any questions about these Terms, please contact us at
            <a
              href="mailto:agrisutra@gmail.com"
              className="text-blue-600 hover:underline ml-1"
            >
              agrisutra@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
