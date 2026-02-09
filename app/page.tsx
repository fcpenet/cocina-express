'use client'

import { basePath } from './config';

export default function Menu() {
  // Helper function to convert dish name to filename
  const getImagePath = (dishName: string) => {
    const filename = dishName
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[(),/]/g, '')
      .replace(/--+/g, '-');
    return `${basePath}/assets/food-images/${filename}.jpg`;
  };

  const leftColumn = {
    title: "COCINA MEALS*",
    items: [
      { name: "BACON (2PCS)", price: "₱99" },
      { name: "BAGNET", price: "₱120" },
      { name: "BANGUS (BONELESS, HALF)", price: "₱120" },
      { name: "CHICKEN (BONELESS)", price: "₱120" },
      { name: "CORNED BEEF", price: "₱99" },
      { name: "HOTDOG, GIANT TJ", price: "₱99" },
      { name: "HOTDOG, JUMBO (1PC)", price: "₱70" },
      { name: "LIEMPO", price: "₱120" },
      { name: "LONGGANISA (3PCS)", price: "₱120" },
      { name: "NUGGETS", price: "₱99" },
      { name: "PORKCHOP", price: "₱120" },
      { name: "SAUSAGE, HUNGARIAN", price: "₱99" },
      { name: "SPAM (3PCS)", price: "₱99" },
      { name: "TAPA", price: "₱99" },
      { name: "TOCINO", price: "₱99" },
    ]
  };

  const rightSections = [
    {
      title: "PULUTAN (FOR SHARING)",
      items: [
        { name: "CHICHARON BULAKLAK", price: "₱130" },
        { name: "BARKADA TAPA", price: "₱220" },
        { name: "DOUBLE TAPA", price: "₱110" },
        { name: "DOUBLE TOCINO", price: "₱110" },
        { name: "PORK SISIG", price: "₱125" },
      ]
    },
    {
      title: "ALA CARTE",
      items: [
        { name: "LUGAW W/ CHICKEN", price: "₱35" },
        { name: "PANSIT CANTON PLAIN", price: "₱120" },
        { name: "PANSIT BAGNET", price: "₱195" },
        { name: "PANSIT CHICKEN", price: "₱170" },
        { name: "PANSIT LIEMPO/PORKCHOP", price: "₱180" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-400 via-orange-400 to-red-600 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Quick Link */}
        <div className="flex justify-end mb-4">
          <a
            href={`${basePath}/cocina-meals`}
            className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
          >
            View Grid Layout →
          </a>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="mb-4 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-black text-yellow-300 drop-shadow-lg"
                style={{textShadow: '3px 3px 6px rgba(0,0,0,0.3)'}}>
              COCINA MEALS*
            </h1>
          </div>

          <div className="bg-red-700 rounded-full px-8 py-4 relative">
            <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">Menu</h2>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Cocina Meals */}
          <div className="bg-red-700 bg-opacity-90 rounded-lg p-6 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-6">{leftColumn.title}</h3>
            <div className="space-y-3">
              {leftColumn.items.map((item, idx) => (
                <div key={idx} className="flex items-center text-white gap-3">
                  <img
                    src={getImagePath(item.name)}
                    alt={item.name}
                    className="w-40 h-40 rounded-full object-cover flex-shrink-0"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="160" height="160"%3E%3Ccircle cx="80" cy="80" r="80" fill="%23ddd"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-size="64"%3E🍽️%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  <span className="font-semibold text-sm md:text-base uppercase">{item.name}</span>
                  <div className="flex-grow border-b-2 border-dotted border-white border-opacity-40 mx-2 mb-1"></div>
                  <span className="font-bold text-yellow-300">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Pulutan & Ala Carte */}
          <div className="space-y-6">
            {rightSections.map((section, sectionIdx) => (
              <div key={sectionIdx} className="bg-orange-500 bg-opacity-90 rounded-lg p-6 shadow-2xl">
                <h3 className="text-3xl font-bold text-yellow-300 mb-6 drop-shadow">{section.title}</h3>
                <div className="space-y-3">
                  {section.items.map((item, idx) => (
                    <div key={idx} className="flex items-center text-white gap-3">
                      <img
                        src={getImagePath(item.name)}
                        alt={item.name}
                        className="w-40 h-40 rounded-full object-cover flex-shrink-0"
                        onError={(e) => {
                          e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="160" height="160"%3E%3Ccircle cx="80" cy="80" r="80" fill="%23ddd"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-size="64"%3E🍽️%3C/text%3E%3C/svg%3E';
                        }}
                      />
                      <span className="font-semibold text-sm md:text-base uppercase">{item.name}</span>
                      <div className="flex-grow border-b-2 border-dotted border-white border-opacity-40 mx-2 mb-1"></div>
                      <span className="font-bold text-yellow-300">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center QR Code Section */}
        <div className="flex flex-col items-center mt-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
          <div className="bg-white p-4 rounded-lg mb-4">
            <div className="w-32 h-32 bg-gray-200 flex items-center justify-center text-gray-500 text-xs text-center">
              QR Code<br/>Placeholder
            </div>
          </div>
          <div className="text-white text-center">
            <p className="font-bold text-xl mb-1">cocina</p>
            <p className="text-sm mb-1">📍 124 F. MANALO ST., CALZADA TIPAS, TAGUIG</p>
            <p className="text-sm">0999 482 5762 / 0917 726 0908 (Viber)</p>
          </div>
        </div>

        {/* Footer Notes */}
        <div className="mt-8 text-center bg-yellow-400 bg-opacity-90 rounded-lg p-4 max-w-2xl mx-auto">
          <p className="text-sm text-red-900 font-semibold">
            *with Cocina Rice & Egg
          </p>
          <p className="text-sm text-red-800">add 15 for sizzling sauce</p>
          <p className="text-sm text-red-800">add 10 for garlic cheese sauce</p>
        </div>
      </div>
    </div>
  );
}
