export const Footer = () => (
  <footer className="bg-gray-900 text-white py-12 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h4 className="font-serif text-xl mb-4">HIPPO PERFUMES</h4>
        <p className="text-gray-400 text-sm">Luxury fragrances for everyone.</p>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Quick Links</h4>
        <ul className="text-gray-400 text-sm space-y-2">
          <li><a href="#shop">Shop</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Contact</h4>
        <p className="text-gray-400 text-sm">+27 71 107 8327</p>
      </div>
    </div>
  </footer>
);
