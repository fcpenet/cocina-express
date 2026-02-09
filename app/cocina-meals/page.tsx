'use client'

import { useRef } from 'react'
import { basePath } from '../config';

export default function CocinaMealsGrid() {
  const gridRef = useRef<HTMLDivElement>(null)

  // Helper function to convert dish name to filename
  const getImagePath = (dishName: string) => {
    const filename = dishName
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[(),/]/g, '')
      .replace(/--+/g, '-');
    return `${basePath}/assets/food-images/${filename}.jpg`;
  };

  const meals = [
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
  ];

  const exportAsImage = async () => {
    if (!gridRef.current) return;

    try {
      // Dynamically import html2canvas
      const html2canvas = (await import('html2canvas')).default;

      const canvas = await html2canvas(gridRef.current, {
        backgroundColor: null,
        scale: 2,
        logging: false,
      });

      // Convert canvas to blob
      canvas.toBlob((blob) => {
        if (!blob) return;

        // Create download link
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `cocina-meals-menu-${Date.now()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      });
    } catch (error) {
      console.error('Error exporting image:', error);
      alert('Failed to export image. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-400 via-orange-400 to-red-600 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-4">
          <a
            href={`${basePath}/`}
            className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
          >
            ← Back to Menu
          </a>
          <button
            onClick={exportAsImage}
            className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2"
          >
            <span>📸</span> Export as Image
          </button>
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
        <div className="max-w-7xl mx-auto">
          <div ref={gridRef} className="bg-red-700 bg-opacity-90 rounded-lg p-8 shadow-2xl">
              {/* Grid Layout */}
              <div className="grid grid-cols-8 gap-4">
                {meals.map((meal, idx) => (
                  <div
                    key={idx}
                    className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 hover:bg-opacity-20 transition-all duration-300 flex flex-col items-center text-center border-2 border-white border-opacity-20"
                  >
                    <div className="relative mb-2">
                      <img
                        src={getImagePath(meal.name)}
                        alt={meal.name}
                        className="w-40 h-40 rounded-full object-cover border-4 border-yellow-300 shadow-lg"
                        onError={(e) => {
                          e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="160" height="160"%3E%3Ccircle cx="80" cy="80" r="80" fill="%23ddd"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-size="64"%3E🍽️%3C/text%3E%3C/svg%3E';
                        }}
                      />
                      <div className="absolute -bottom-2 right-0 w-12 h-12 bg-white rounded-full border-2 border-black shadow-lg"></div>
                    </div>
                    <h3 className="text-white font-bold text-xs uppercase leading-tight min-h-[2.5rem] flex items-center">
                      {meal.name}
                    </h3>
                  </div>
                ))}
              </div>
          </div>

          {/* Footer Notes */}
          <div className="mt-8 text-center bg-yellow-400 bg-opacity-90 rounded-lg p-4">
            <p className="text-sm text-red-900 font-semibold">
              *with Cocina Rice & Egg
            </p>
            <p className="text-sm text-red-800">add 15 for sizzling sauce</p>
            <p className="text-sm text-red-800">add 10 for garlic cheese sauce</p>
          </div>

          {/* Contact Info */}
          <div className="mt-6 text-center text-white">
            <p className="font-bold text-xl mb-2">cocina</p>
            <p className="text-sm mb-1">📍 124 F. Manalo St., Calzada Tipas, Taguig</p>
            <p className="text-sm">📞 0999 482 5762 / 0917 726 0908 (Viber)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
