export const Footer = () => (
  <footer className="bg-brand-black border-t border-white/10 text-white py-12 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h4 className="font-heading text-xl mb-4">CARS PLUG</h4>
        <p className="text-gray-400 text-sm">Your premium plug for luxury and affordable vehicles.</p>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Quick Links</h4>
        <ul className="text-gray-400 text-sm space-y-2">
          <li><a href="#inventory">Inventory</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Contact</h4>
        <p className="text-gray-400 text-sm">
          WhatsApp: 0655479547<br />
          Follow us on TikTok<br />
          Eco Glades Office Park, 70 Ribbon Grass St, Eco-Park Estate, Centurion, 0144
        </p>
      </div>
    </div>
  </footer>
);
