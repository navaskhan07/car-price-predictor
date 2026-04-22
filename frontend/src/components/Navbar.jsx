import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()
  const left  = [{ to: '/', label: 'Home' }, { to: '/predict', label: 'Predict' }]
  const right = [{ to: '/history', label: 'History' }, { to: '/about', label: 'About' }]
  return (
    <nav className="navbar">
      <div className="nav-side">
        {left.map(l => <Link key={l.to} to={l.to} className={`nav-link ${pathname===l.to?'active':''}`}>{l.label}</Link>)}
      </div>
      <Link to="/" className="nav-brand">
        <span className="brand-main">Car<span className="brand-accent">Val</span></span>
        <span className="brand-tag">AI</span>
      </Link>
      <div className="nav-side">
        {right.map(l => <Link key={l.to} to={l.to} className={`nav-link ${pathname===l.to?'active':''}`}>{l.label}</Link>)}
      </div>
    </nav>
  )
}