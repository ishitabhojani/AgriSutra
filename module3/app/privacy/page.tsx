"use client";

import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <div className="bg-white p-6 shadow-sm mb-4">
        <h1 className="text-2xl font-bold text-gray-900">Privacy Policy</h1>
      </div>

      <div className="max-w-9xl mx-auto bg-white p-6 rounded-lg shadow-sm space-y-6">
        {/* Introduction */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            1. Introduction
          </h2>
          <p className="text-gray-600">
            This Privacy Policy explains how AgriSutra collects, uses, and
            shares information about you when you use our Services. By using our
            Services, you agree to the collection and use of information in
            accordance with this policy.
          </p>
        </section>

        {/* Information We Collect */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            2. Information We Collect
          </h2>
          <p className="text-gray-600">
            We may collect personal information that you provide to us, such as
            your name, email address, phone number, and location data. We also
            automatically collect certain technical information when you use our
            Services, including your IP address, browser type, and device
            identifiers.
          </p>
        </section>

        {/* How We Use Your Information */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            3. How We Use Your Information
          </h2>
          <p className="text-gray-600">We use the information we collect to:</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Provide, maintain, and improve our Services</li>
            <li>
              Respond to your comments, questions, and customer service requests
            </li>
            <li>Send you technical notices, updates, and security alerts</li>
            <li>
              Analyze trends and usage to develop new features and services
            </li>
          </ul>
        </section>

        {/* Sharing Your Information */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            4. Sharing Your Information
          </h2>
          <p className="text-gray-600">
            We do not sell your personal information. We may share your
            information with trusted third-party service providers who help us
            operate our Services. We may also share information if required by
            law or to protect our rights and property.
          </p>
        </section>

        {/* Cookies */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            5. Cookies
          </h2>
          <p className="text-gray-600">
            We use cookies and similar tracking technologies to collect
            information about your usage of our Services and to improve your
            experience. You can set your browser to refuse cookies or to alert
            you when cookies are being sent.
          </p>
        </section>

        {/* Data Retention */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            6. Data Retention
          </h2>
          <p className="text-gray-600">
            We will retain your information for as long as necessary to fulfill
            the purposes outlined in this Privacy Policy, unless a longer
            retention period is required or permitted by law.
          </p>
        </section>

        {/* Security */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            7. Security
          </h2>
          <p className="text-gray-600">
            We take reasonable measures to protect your personal information
            from unauthorized access or disclosure. However, no security system
            is impenetrable, and we cannot guarantee the absolute security of
            your data.
          </p>
        </section>

        {/* Children's Privacy */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            8. Children’s Privacy
          </h2>
          <p className="text-gray-600">
            Our Services are not intended for individuals under the age of 18.
            We do not knowingly collect personal information from children under
            18. If we discover that a child under 18 has provided us with
            personal information, we will delete such information from our
            systems.
          </p>
        </section>

        {/* Changes to This Policy */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            9. Changes to This Policy
          </h2>
          <p className="text-gray-600">
            We may update this Privacy Policy from time to time. We will notify
            you of any significant changes by posting the new policy on our
            website or by sending an email to the address associated with your
            account.
          </p>
        </section>

        {/* Contact Us */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            10. Contact Us
          </h2>
          <p className="text-gray-600">
            If you have any questions or concerns about this Privacy Policy,
            please contact us at
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
