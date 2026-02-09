export default function Menu() {
  const menuSections = [
    {
      title: "Cocina Meals*",
      items: [
        { name: "Bacon (2pcs)", price: "₱99", description: "" },
        { name: "Bagnet", price: "₱120", description: "" },
        { name: "Bangus (Boneless, Half)", price: "₱120", description: "" },
        { name: "Chicken (Boneless)", price: "₱120", description: "" },
        { name: "Corned Beef", price: "₱99", description: "" },
        { name: "Hotdog, Giant TJ", price: "₱99", description: "" },
        { name: "Hotdog, Jumbo (1pc)", price: "₱70", description: "" },
        { name: "Liempo", price: "₱120", description: "" },
        { name: "Longganisa (2pcs)", price: "₱120", description: "" },
        { name: "Porkchop", price: "₱120", description: "" },
        { name: "Sausage, Hungarian", price: "₱99", description: "" },
        { name: "Siomai (4pcs)", price: "₱60", description: "" },
        { name: "Spam (3pcs)", price: "₱99", description: "" },
        { name: "Tapa", price: "₱99", description: "" },
        { name: "Tocino", price: "₱99", description: "" },
      ]
    },
    {
      title: "Pulutan (For Sharing)",
      items: [
        { name: "Chicharon Bulaklak", price: "₱130", description: "" },
        { name: "Barkada Tapa", price: "₱220", description: "" },
        { name: "Double Tapa", price: "₱110", description: "" },
        { name: "Double Tocino", price: "₱110", description: "" },
        { name: "Pork Sisig", price: "₱125", description: "" },
      ]
    },
    {
      title: "Ala Carte",
      items: [
        { name: "Lugaw w/ Chicken", price: "₱35", description: "" },
        { name: "Pansit Canton Plain", price: "₱120", description: "" },
        { name: "Pansit Bagnet", price: "₱195", description: "" },
        { name: "Pansit Chicken", price: "₱170", description: "" },
        { name: "Pansit Liempo/Porkchop", price: "₱180", description: "" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <header className="bg-red-600 text-white py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center" style={{color: '#FFB84D'}}>COCINA MEALS</h1>
          <p className="text-center mt-2 text-lg">Delicious Filipino Meals</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Menu</h2>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8 rounded">
            <p className="text-sm text-gray-700">
              <strong>*With Cocina Rice & Egg</strong>
            </p>
            <p className="text-sm text-gray-600 mt-1">Add ₱15 for sizzling sauce</p>
            <p className="text-sm text-gray-600">Add ₱10 for garlic cheese sauce</p>
          </div>

          {menuSections.map((section, idx) => (
            <section key={idx} className="mb-12">
              <h3 className="text-2xl font-bold text-red-600 mb-6 border-b-2 border-red-300 pb-2">
                {section.title}
              </h3>
              <div className="grid gap-4">
                {section.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
                      <span className="text-lg font-bold text-red-600 ml-4">{item.price}</span>
                    </div>
                    {item.description && <p className="text-gray-600 text-sm mt-1">{item.description}</p>}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-bold text-lg mb-2">cocina</h3>
          <p className="mb-2">📍 124 F. Manalo St., Calzada Tipas, Taguig</p>
          <p className="mb-1">📞 0999 482 5762 / 0917 726 0908 (Viber)</p>
        </div>
      </footer>
    </div>
  );
}
