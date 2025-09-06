export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
      {/* Floating Gradient Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              SaaS Ecommerce
            </h3>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Revolutionizing ecommerce with cutting-edge technology and seamless user experiences.
              Join thousands of businesses thriving in the digital marketplace.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'linkedin'].map((platform, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <img
                    src={`https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/${platform}.svg`}
                    alt={platform}
                    className="w-5 h-5 filter invert"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold mb-4 text-lg">Product</h4>
            <ul className="space-y-2 text-gray-300">
              {['Features', 'Pricing', 'Integrations', 'API Docs'].map((item, i) => (
                <li key={i}>
                  <a className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-2 text-gray-300">
              {['About', 'Blog', 'Careers', 'Press'].map((item, i) => (
                <li key={i}>
                  <a className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">&copy; 2025 All Rights Reserved Jhet Tacalig</p>
          <div className="flex space-x-6 text-sm text-gray-400">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, i) => (
              <a key={i} href="#" className="hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
