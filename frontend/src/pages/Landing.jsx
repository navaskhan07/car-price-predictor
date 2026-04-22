import { Link } from 'react-router-dom'

const CarSVG = () => (
  <svg viewBox="0 0 620 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',maxWidth:580,filter:'drop-shadow(0 20px 40px rgba(192,57,43,0.18))'}}>
    {/* Ground shadow */}
    <ellipse cx="310" cy="248" rx="260" ry="9" fill="rgba(0,0,0,0.09)"/>
    {/* Body */}
    <path d="M70 190 L70 205 L555 205 L555 190 C542 174 520 166 496 164 L462 157 L430 132 C410 114 382 105 353 103 L238 101 C210 101 185 110 168 126 L138 156 L102 163 C84 167 72 177 70 190Z" fill="#c0392b"/>
    {/* Cabin */}
    <path d="M168 190 L172 152 L193 124 C210 107 232 100 254 98 L366 96 C392 96 414 106 430 122 L456 152 L460 190Z" fill="#d44235"/>
    {/* Windshield */}
    <path d="M197 186 L202 147 L220 123 C233 110 248 103 265 101 L320 100 L320 186Z" fill="rgba(173,216,235,0.6)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
    {/* Rear window */}
    <path d="M425 98 L452 147 L456 186 L425 186Z" fill="rgba(173,216,235,0.5)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
    {/* Side windows */}
    <rect x="322" y="99" width="101" height="87" fill="rgba(173,216,235,0.55)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
    {/* Door lines */}
    <line x1="321" y1="100" x2="321" y2="205" stroke="#b03a2e" strokeWidth="1.5"/>
    <line x1="424" y1="98" x2="424" y2="205" stroke="#b03a2e" strokeWidth="1.5"/>
    {/* Body crease line */}
    <path d="M76 178 L542 178" stroke="#e74c3c" strokeWidth="1.5" opacity="0.45"/>
    {/* Front headlight */}
    <rect x="536" y="173" width="20" height="11" rx="3" fill="rgba(255,248,150,0.95)"/>
    <rect x="536" y="186" width="20" height="8" rx="2" fill="rgba(255,100,80,0.7)"/>
    {/* Rear tail light */}
    <rect x="70" y="173" width="10" height="20" rx="2" fill="rgba(255,60,60,0.9)"/>
    {/* Wheel arches */}
    <path d="M108 205 A 70 45 0 0 1 252 205" fill="#b03a2e"/>
    <path d="M368 205 A 70 45 0 0 1 516 205" fill="#b03a2e"/>
    {/* Wheels outer */}
    <circle cx="180" cy="215" r="48" fill="#0f0f1a"/>
    <circle cx="442" cy="215" r="48" fill="#0f0f1a"/>
    {/* Tire */}
    <circle cx="180" cy="215" r="41" fill="#111"/>
    <circle cx="442" cy="215" r="41" fill="#111"/>
    {/* Rim */}
    <circle cx="180" cy="215" r="30" fill="#2d3748"/>
    <circle cx="442" cy="215" r="30" fill="#2d3748"/>
    {/* Spokes - wheel 1 */}
    <line x1="180" y1="202" x2="180" y2="188" stroke="#718096" strokeWidth="4.5" strokeLinecap="round"/>
    <line x1="180" y1="228" x2="180" y2="242" stroke="#718096" strokeWidth="4.5" strokeLinecap="round"/>
    <line x1="167" y1="215" x2="153" y2="215" stroke="#718096" strokeWidth="4.5" strokeLinecap="round"/>
    <line x1="193" y1="215" x2="207" y2="215" stroke="#718096" strokeWidth="4.5" strokeLinecap="round"/>
    <line x1="171" y1="206" x2="161" y2="196" stroke="#718096" strokeWidth="4.5" strokeLinecap="round"/>
    <line x1="189" y1="224" x2="199" y2="234" stroke="#718096" strokeWidth="4.5" strokeLinecap="round"/>
    <line x1="189" y1="206" x2="199" y2="196" stroke="#718096" strokeWidth="4.5" strokeLinecap="round"/>
    <line x1="171" y1="224" x2="161" y2="234" stroke="#718096" strokeWidth="4.5" strokeLinecap="round"/>
    {/* Spokes - wheel 2 */}
    <line x1="442" y1="202" x2="442" y2="188" stroke="#718096" strokeWidth="4.5" strokeLinecap="round"/>
    <line x1="442" y1="228" x2="442" y2="242" stroke="#718096" strokeWidth="4.5" strokeLinecap="round"/>
    <line x1="429" y1="215" x2="415" y2="215" stroke="#718096" strokeWidth="4.5" strokeLinecap="round"/>
    <line x1="455" y1="215" x2="469" y2="215" stroke="#718096" strokeWidth="4.5" strokeLinecap="round"/>
    <line x1="433" y1="206" x2="423" y2="196" stroke="#718096" strokeWidth="4.5" strokeLinecap="round"/>
    <line x1="451" y1="224" x2="461" y2="234" stroke="#718096" strokeWidth="4.5" strokeLinecap="round"/>
    <line x1="451" y1="206" x2="461" y2="196" stroke="#718096" strokeWidth="4.5" strokeLinecap="round"/>
    <line x1="433" y1="224" x2="423" y2="234" stroke="#718096" strokeWidth="4.5" strokeLinecap="round"/>
    {/* Hub caps */}
    <circle cx="180" cy="215" r="13" fill="#a0aec0"/>
    <circle cx="180" cy="215" r="5" fill="#718096"/>
    <circle cx="442" cy="215" r="13" fill="#a0aec0"/>
    <circle cx="442" cy="215" r="5" fill="#718096"/>
    {/* Antenna */}
    <line x1="300" y1="96" x2="300" y2="76" stroke="#96281b" strokeWidth="1.5"/>
  </svg>
)

export default function Landing() {
  return (
    <div className="page" style={{background:'var(--bg)'}}>
      <div className="hero-wrap">
        {/* Watermark */}
        <div className="hero-watermark">CAR</div>

        {/* Left content */}
        <div className="hero-content fade-up">
          <div className="hero-eyebrow">
            <span className="badge badge-red">ML Powered · R² 90.4%</span>
          </div>
          <div className="accent-bar" />
          <h1 className="hero-title">
            FIND YOUR<br />CAR'S <span className="red">TRUE<br />VALUE</span>
          </h1>
          <p className="hero-sub">
            Enter 14 technical specs and get an instant AI-powered price estimate
            built on a Random Forest model trained on real automotive data.
          </p>
          <div className="hero-actions">
            <a href="/predict" className="btn btn-primary btn-lg">Get Valuation →</a>
            <a href="/about" className="btn btn-dark btn-lg">How It Works</a>
          </div>
          {/* Stat strip */}
          <div className="stat-strip">
            {[
              { value: '90.4%', label: 'R² Accuracy' },
              { value: '14',    label: 'Input Specs'  },
              { value: '205',   label: 'Cars Trained' },
            ].map(s => (
              <div key={s.label} className="stat-strip-item">
                <div className="stat-strip-value">{s.value}</div>
                <div className="stat-strip-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Car */}
        <div className="hero-car">
          <CarSVG />
        </div>
      </div>
    </div>
  )
}