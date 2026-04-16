import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#050505] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex flex-col items-start mb-6">
              <img src="/basmi_logo.png" alt="BASMI Logo" className="h-12 w-auto object-contain mb-3" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              <span className="text-xl font-bold tracking-widest text-white uppercase">BASMI</span>
              <span className="text-xs text-blue-500 tracking-widest uppercase mt-1 font-semibold">Defence. Innovation. Technology.</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Address: RZ B1/132A, Mahavir Enclave, Dabri, South West Delhi, New Delhi - 110045
            </p>
            <p className="text-sm text-gray-400">
              Email: <a href="mailto:sales@basmi-india.com" className="text-blue-400 hover:text-blue-300">sales@basmi-india.com</a>
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Divisions</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/security" className="hover:text-white transition-colors">HVM Systems</Link></li>
              <li><Link to="/tactical" className="hover:text-white transition-colors">Access Control Systems</Link></li>
              <li><Link to="/uas" className="hover:text-white transition-colors">UAS & Counter-UAS</Link></li>
              <li><Link to="/aerospace" className="hover:text-white transition-colors">Tactical & Defence Equipment</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/indigenization" className="hover:text-white transition-colors">Indigenization</Link></li>
              <li><Link to="/aerospace" className="hover:text-white transition-colors">Aerospace & Naval</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Request Consultation</h3>
            <p className="text-sm text-gray-400 mb-4">Reach out to our experts for end-to-end integrated protection systems.</p>
            <form className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Business email" 
                className="bg-white/5 border border-white/10 rounded-md px-3 py-2 w-full text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                autoComplete="off"
              />
              <button 
                type="button" 
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors border border-white/10"
              >
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} BASMI India. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <Link to="#" className="hover:text-white transition-colors">ISO 9001:2015</Link>
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
