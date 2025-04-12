
import React from 'react'
import logoMbesa from '/logo-mbesa.png'
import logoMas from '/logo-mas.png'
import Spinner from './components/Spinner'
import Dropdown from './components/Dropdown'
import './App.css'

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white glassmorph p-4 space-y-6">
      {/* Logo Section */}
      <div className="flex flex-col items-center space-y-2 mt-6">
        <img src={logoMbesa} alt="Logo MBESA" className="w-24 h-24 rounded-full border-2 border-cyan-400 shadow-lg" />
        <img src={logoMas} alt="Logo MAS" className="w-20 h-20 rounded-full border-2 border-purple-400 shadow-lg" />
      </div>

      {/* Title Section */}
      <h1 className="text-3xl font-extrabold text-cyan-400 drop-shadow-md">DAFTAR LINK TAUTAN</h1>

      {/* Spinner */}
      <Spinner />

      <h2 className="text-xl font-semibold text-indigo-300 drop-shadow">MA ALMANSHURIYAH</h2>

      {/* Links */}
      <div className="space-y-2 w-full max-w-md text-center mt-4">
        <a href="https://s.id/PPDB_MA_2025" className="block p-3 bg-blue-700 rounded-lg hover:scale-105 transition">Pendaftaran</a>

        <Dropdown
          title="Instagram"
          links={[
            { label: 'besmatcha_', url: 'https://www.instagram.com/besmatcha_' },
            { label: 'matcha105', url: 'https://www.instagram.com/matcha105' }
          ]}
        />

        <Dropdown
          title="Facebook"
          links={[
            { label: 'osis.maalmanshuriyah', url: 'https://www.facebook.com/osis.maalmanshuriyah' },
            { label: 'Profil FB', url: 'https://www.facebook.com/profile.php?id=100010475287342' }
          ]}
        />

        <a href="https://youtube.com/@besmaalmanshuriyah" className="block p-3 bg-red-600 rounded-lg hover:scale-105 transition">YouTube</a>
        <a href="https://www.tiktok.com/@alman_105" className="block p-3 bg-pink-600 rounded-lg hover:scale-105 transition">TikTok</a>

        <Dropdown
          title="WhatsApp"
          links={[
            { label: 'Hariri DR, S.HI.', url: 'https://wa.me/6285798989997' },
            { label: 'Sofitri, S.Pd.', url: 'https://wa.me/6285795884228' }
          ]}
        />
      </div>
    </div>
  )
}

export default App
