"use client";

import React from "react";
import { Phone, Mail, MessageCircle, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

// 1. Import the translation hook
import { useTranslation } from "react-i18next";

export default function HelpAndSupportPage() {
  const router = useRouter();

  // 2. Initialize the translation hook
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white p-6 shadow-sm">
        <div className="flex items-center">
          <button
            onClick={() => router.back()}
            className="text-black hover:text-gray-900 focus:outline-none mr-4"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          {/* 3. Use translated string for "Help & Support" */}
          <h1 className="text-2xl font-bold text-gray-900">
            {t("helpSupportPage.helpAndSupport")}
          </h1>
        </div>
        {/* 4. Use translated string for "How can we help you?" */}
        <p className="text-gray-600 mt-2">{t("helpSupportPage.howCanWeHelp")}</p>
      </div>

      {/* Contact Options */}
      <div className="max-w-4xl mx-auto mt-6 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Call Us */}
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center cursor-pointer hover:shadow-md transition">
            <Phone className="h-10 w-10 text-green-600 mb-4" />
            {/* 5. Replace "Call Us" with translation */}
            <h2 className="text-lg font-semibold">{t("helpSupportPage.callUs")}</h2>
            {/* 6. Replace phone number with translation if desired */}
            <p className="text-sm text-gray-500">
              {t("helpSupportPage.phoneNumber")}
            </p>
          </div>

          {/* Email Support */}
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center cursor-pointer hover:shadow-md transition">
            <Mail className="h-10 w-10 text-green-600 mb-4" />
            {/* 7. Replace "Email Support" and email address */}
            <h2 className="text-lg font-semibold">
              {t("helpSupportPage.emailSupport")}
            </h2>
            <p className="text-sm text-gray-500">
              {t("helpSupportPage.emailAddress")}
            </p>
          </div>

          {/* Chat Support */}
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center cursor-pointer hover:shadow-md transition">
            <MessageCircle className="h-10 w-10 text-green-600 mb-4" />
            {/* 8. Replace "Chat Support" and "Contact at whatsapp" */}
            <h2 className="text-lg font-semibold">
              {t("helpSupportPage.chatSupport")}
            </h2>
            <p className="text-sm text-gray-500">
              {t("helpSupportPage.chatSupportDesc")}
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-8 px-4">
        {/* 9. Replace "Frequently Asked Questions" */}
        <h2 className="text-xl font-bold mb-4">
          {t("helpSupportPage.faqHeading")}
        </h2>
        <ul className="space-y-4">
          {/* FAQ #1 */}
          <li className="bg-white p-4 rounded-lg shadow-sm">
            <p className="font-semibold">
              {t("helpSupportPage.faq1Question")}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {t("helpSupportPage.faq1Answer")}
            </p>
          </li>
          {/* FAQ #2 */}
          <li className="bg-white p-4 rounded-lg shadow-sm">
            <p className="font-semibold">
              {t("helpSupportPage.faq2Question")}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {t("helpSupportPage.faq2Answer")}
            </p>
          </li>
          {/* FAQ #3 */}
          <li className="bg-white p-4 rounded-lg shadow-sm">
            <p className="font-semibold">
              {t("helpSupportPage.faq3Question")}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {t("helpSupportPage.faq3Answer")}
            </p>
          </li>
          {/* Add more FAQs as needed */}
        </ul>
      </div>
    </div>
  );
}
