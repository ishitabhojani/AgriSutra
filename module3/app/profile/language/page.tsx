// // "use client";

// // import React, { useState } from "react";
// // import { useRouter } from "next/navigation";

// // export default function LanguageSelectionPage() {
// //   const router = useRouter();

// //   // For demonstration, we have two languages: English & Gujarati.
// //   // You can add more or fetch them from an API.
// //   const languages = ["English", "Gujarati"];

// //   // We'll assume the default language is "English". Adjust as needed.
// //   const [selectedLanguage, setSelectedLanguage] = useState("English");

// //   const handleSelectLanguage = (lang: string) => {
// //     setSelectedLanguage(lang);
// //     // If you want to store in localStorage or call an API, do it here:
// //     // localStorage.setItem("preferredLanguage", lang);
// //   };

// //   // Handle "back" or "save" logic
// //   const handleGoBack = () => {
// //     router.back(); // or router.push("/profile") if you prefer
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100">
// //       {/* Header */}
// //       <div className="bg-white p-4 shadow-sm flex items-center justify-between">
// //         <h1 className="text-lg font-bold">Select Language</h1>
// //         <button
// //           onClick={handleGoBack}
// //           className="text-blue-600 hover:text-blue-800 font-semibold"
// //         >
// //           Done
// //         </button>
// //       </div>

// //       {/* Language List */}
// //       <ul className="mt-2 bg-white">
// //         {languages.map((lang) => (
// //           <li
// //             key={lang}
// //             className="flex items-center justify-between p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50"
// //             onClick={() => handleSelectLanguage(lang)}
// //           >
// //             <span>{lang}</span>
// //             {/* Show a check or highlight if it's selected */}
// //             {selectedLanguage === lang && (
// //               <span className="text-green-600 font-semibold">&#10003;</span>
// //             )}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// "use client";

// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useTranslation } from "react-i18next";

// export default function LanguageSelectionPage() {
//   const router = useRouter();
//   const { t, i18n } = useTranslation();
//   const [language, setLanguage] = useState("en");

//   // Load saved language from localStorage and set i18n accordingly
//   useEffect(() => {
//     const savedLanguage = localStorage.getItem("language") || "en";
//     i18n.changeLanguage(savedLanguage);
//     setLanguage(savedLanguage);
//   }, [i18n]);

//   // Change language and persist in localStorage
//   const changeLanguage = async (lang: string) => {
//     await i18n.changeLanguage(lang);
//     localStorage.setItem("language", lang);
//     setLanguage(lang);
//     // If you want to refresh the page to ensure all translations update:
//     // window.location.reload();
//   };

//   // Go back or navigate away when done
//   const handleDone = () => {
//     router.back(); // or router.push("/profile");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header */}
//       <div className="bg-white p-4 shadow-sm flex items-center justify-between">
//         <h1 className="text-lg font-bold">
//           {t("common.selectLanguage") || "Select Language"}
//         </h1>
//         <button
//           onClick={handleDone}
//           className="text-blue-600 hover:text-blue-800 font-semibold"
//         >
//           {t("common.done") || "Done"}
//         </button>
//       </div>

//       {/* Language List */}
//       <ul className="mt-2 bg-white">
//         {/* English */}
//         <li
//           className="flex items-center justify-between p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50"
//           onClick={() => changeLanguage("en")}
//         >
//           <span>English</span>
//           {language === "en" && (
//             <span className="text-green-600 font-semibold">&#10003;</span>
//           )}
//         </li>

//         {/* Gujarati */}
//         <li
//           className="flex items-center justify-between p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50"
//           onClick={() => changeLanguage("gu")}
//         >
//           <span>ગુજરાતી</span>
//           {language === "gu" && (
//             <span className="text-green-600 font-semibold">&#10003;</span>
//           )}
//         </li>
//       </ul>
//     </div>
//   );
// }
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LanguageSelectionPage() {
  const router = useRouter();
  const [language, setLanguage] = useState("en");

  // Load the saved language from localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "en";
    setLanguage(savedLang);
  }, []);

  // Update localStorage and then reload or navigate
  const handleSelectLanguage = (lang: string) => {
    localStorage.setItem("language", lang);
    setLanguage(lang);
    // Force a page reload so the Navbar (which handles i18n) picks up the new language
    window.location.reload();
    // OR, if you prefer, just go back:
    // router.back();
  };

  // If you want a "Done" button that just goes back:
  const handleDone = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white p-4 shadow-sm flex items-center justify-between">
        <h1 className="text-lg font-bold">Select Language</h1>
        <button
          onClick={handleDone}
          className="text-blue-600 hover:text-blue-800 font-semibold"
        >
          Done
        </button>
      </div>

      {/* Language List */}
      <ul className="mt-2 bg-white">
        {/* English */}
        <li
          className="flex items-center justify-between p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50"
          onClick={() => handleSelectLanguage("en")}
        >
          <span>English</span>
          {language === "en" && (
            <span className="text-green-600 font-semibold">&#10003;</span>
          )}
        </li>

        {/* Gujarati */}
        <li
          className="flex items-center justify-between p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50"
          onClick={() => handleSelectLanguage("gu")}
        >
          <span>ગુજરાતી</span>
          {language === "gu" && (
            <span className="text-green-600 font-semibold">&#10003;</span>
          )}
        </li>
      </ul>
    </div>
  );
}
