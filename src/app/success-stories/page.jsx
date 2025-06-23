// // /app/success-stories/page.jsx

// export default function SuccessStoriesPage() {
//   const stories = [
//     {
//       title: 'EduNext LMS Platform',
//       category: 'EdTech',
//       summary:
//         'Built a full-stack Learning Management System used by 25,000+ students. Features include video learning, progress tracking, live tests, and real-time notifications.',
//       result: '95% engagement rate increase within 3 months.',
//       client: 'EduNext Pvt Ltd',
//     },
//     {
//       title: 'FinSmart Mobile Banking App',
//       category: 'FinTech',
//       summary:
//         'Created a cross-platform mobile app for digital wallets, payments, and user KYC. Integrated 3rd party APIs and biometric login.',
//       result: 'Now serving 50,000+ daily users with 99.99% uptime.',
//       client: 'FinSmart Inc',
//     },
//     {
//       title: 'RetailPOS Inventory System',
//       category: 'Retail SaaS',
//       summary:
//         'Developed a multi-branch Point of Sale and inventory system for a retail chain with staff, barcode scanner, and auto stock sync.',
//       result: 'Reduced inventory mismatch by 90%.',
//       client: 'StyleMart',
//     },
//     {
//       title: 'Fleet Management Dashboard',
//       category: 'Logistics',
//       summary:
//         'Designed a web dashboard to track 1,200+ delivery riders in real-time using GPS, traffic API, and zone assignment system.',
//       result: 'Cut delivery time by 22% across cities.',
//       client: 'ByTrack Logistics',
//     },
//     {
//       title: 'SaaS CRM for Sales Teams',
//       category: 'B2B SaaS',
//       summary:
//         'Built a custom CRM web app with sales pipelines, calendar integrations, team roles, and analytics.',
//       result: 'Increased conversion rate by 48% over 6 months.',
//       client: 'SalesHQ Pro',
//     },
//     {
//       title: 'E-commerce Rebuild for Organic Brand',
//       category: 'E-commerce',
//       summary:
//         'Revamped UI/UX and backend for a Shopify-style organic store. Improved mobile speed, checkout UX, and added subscription model.',
//       result: 'Boosted daily sales from 70 to 260 orders.',
//       client: 'NatureMoms',
//     },
//   ];

//   return (
//     <main className="px-6 py-12 md:py-20 max-w-7xl mx-auto">
//       <h1 className="text-4xl font-bold mb-6 text-center">Success Stories</h1>
//       <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
//         We’ve helped dozens of companies grow fast and build powerful products through innovative web, mobile, and AI solutions.
//       </p>

//       <div className="grid gap-8 md:grid-cols-2">
//         {stories.map((story, index) => (
//           <div
//             key={index}
//             className="p-6 border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition bg-white"
//           >
//             <h2 className="text-2xl font-semibold text-blue-700 mb-2">{story.title}</h2>
//             <p className="text-sm text-gray-500 mb-1">{story.category} | Client: {story.client}</p>
//             <p className="text-gray-700 mb-3">{story.summary}</p>
//             <p className="text-sm font-medium text-green-700">📈 Result: {story.result}</p>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }



// /app/success-stories/page.jsx

export default function SuccessStoriesPage() {
  const stories = [
    {
      title: 'EduNext LMS Platform',
      category: 'EdTech',
      summary:
        'Built a full-stack Learning Management System used by 25,000+ students. Features include video learning, progress tracking, live tests, and real-time notifications.',
      result: '95% engagement rate increase within 3 months.',
      client: 'EduNext Pvt Ltd',
    },
    {
      title: 'FinSmart Mobile Banking App',
      category: 'FinTech',
      summary:
        'Created a cross-platform mobile app for digital wallets, payments, and user KYC. Integrated 3rd party APIs and biometric login.',
      result: 'Now serving 50,000+ daily users with 99.99% uptime.',
      client: 'FinSmart Inc',
    },
    {
      title: 'RetailPOS Inventory System',
      category: 'Retail SaaS',
      summary:
        'Developed a multi-branch Point of Sale and inventory system for a retail chain with staff, barcode scanner, and auto stock sync.',
      result: 'Reduced inventory mismatch by 90%.',
      client: 'StyleMart',
    },
    {
      title: 'Fleet Management Dashboard',
      category: 'Logistics',
      summary:
        'Designed a web dashboard to track 1,200+ delivery riders in real-time using GPS, traffic API, and zone assignment system.',
      result: 'Cut delivery time by 22% across cities.',
      client: 'ByTrack Logistics',
    },
    {
      title: 'SaaS CRM for Sales Teams',
      category: 'B2B SaaS',
      summary:
        'Built a custom CRM web app with sales pipelines, calendar integrations, team roles, and analytics.',
      result: 'Increased conversion rate by 48% over 6 months.',
      client: 'SalesHQ Pro',
    },
    {
      title: 'E-commerce Rebuild for Organic Brand',
      category: 'E-commerce',
      summary:
        'Revamped UI/UX and backend for a Shopify-style organic store. Improved mobile speed, checkout UX, and added subscription model.',
      result: 'Boosted daily sales from 70 to 260 orders.',
      client: 'NatureMoms',
    },
  ];

  return (
    <main className="px-6 py-12 md:py-20 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Success Stories</h1>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        We’ve helped dozens of companies grow fast and build powerful products through innovative web, mobile, and AI solutions.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {stories.map((story, index) => (
          <div
            key={index}
            className="group p-6 rounded-xl shadow-md transition duration-300 cursor-pointer bg-white hover:bg-blue-600 hover:text-white"
          >
            <h2 className="text-2xl font-semibold text-blue-700 group-hover:text-white mb-2 transition">
              {story.title}
            </h2>
            <p className="text-sm text-gray-500 group-hover:text-gray-200 mb-1 transition">
              {story.category} | Client: {story.client}
            </p>
            <p className="text-gray-700 group-hover:text-white mb-3 transition">{story.summary}</p>
            <p className="text-sm font-medium text-green-700 group-hover:text-green-200 transition">
              📈 Result: {story.result}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
