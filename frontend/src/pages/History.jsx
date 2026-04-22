import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function History() {
  const [history, setHistory] = useState([])
  useEffect(() => { setHistory(JSON.parse(localStorage.getItem('carval_history')||'[]')) }, [])

  const clear = () => {
    if(window.confirm('Clear all prediction history?')) {
      localStorage.removeItem('carval_history')
      setHistory([])
    }
  }

  const tier = price =>
    price < 10000 ? 'Economy' :
    price < 25000 ? 'Mid-Range' :
    price < 40000 ? 'Premium' : 'Luxury'

  return (
    <div className="page" style={{background:'var(--bg)'}}>
      <div className="section-sm">

        {/* Header */}
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'2rem'}}>
          <div>
            <span className="badge badge-dark" style={{marginBottom:'0.75rem'}}>Saved Records</span>
            <div className="accent-bar"/>
            <h2 style={{fontSize:'2.2rem',fontWeight:900,letterSpacing:'0.02em'}}>VALUATION HISTORY</h2>
            <p style={{color:'var(--text-muted)',fontSize:'0.88rem',marginTop:'0.2rem'}}>{history.length} record{history.length!==1?'s':''} saved</p>
          </div>
          {history.length>0 && <button onClick={clear} className="btn btn-danger btn-sm">Clear All</button>}
        </div>

        {history.length===0 ? (
          <div className="empty-state">
            <div style={{width:64,height:64,borderRadius:'50%',background:'var(--bg)',border:'2px solid var(--border)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 1rem',fontSize:'1.5rem',color:'var(--text-light)'}}>○</div>
            <h3>No records yet</h3>
            <p style={{color:'var(--text-light)',marginBottom:'1.5rem'}}>Your valuations will appear here</p>
            <Link to="/predict" className="btn btn-primary">Get First Valuation →</Link>
          </div>
        ) : (
          <div className="grid-3">
            {history.map((item,i) => (
              <div key={item.id} className="history-card fade-up" style={{animationDelay:`${i*0.05}s`}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'0.75rem'}}>
                  <span className="badge badge-dark" style={{fontSize:'0.68rem'}}>#{history.length-i}</span>
                  <span className="history-date">{item.date}</span>
                </div>
                <div className="history-price">{item.predicted_price}</div>
                <div style={{fontSize:'0.76rem',fontWeight:600,color:'var(--primary)',marginBottom:'0.75rem'}}>{tier(item.predicted_price_raw)}</div>
                <div className="divider" style={{margin:'0.75rem 0'}}/>
                <div style={{display:'flex',flexWrap:'wrap',gap:'0.35rem'}}>
                  {[['HP',item.inputs.horsepower],['Engine',item.inputs.enginesize],['MPG',item.inputs.citympg]].map(([l,v])=>(
                    <span key={l} className="feature-tag" style={{fontSize:'0.74rem'}}>
                      {l}: <strong>{v}</strong>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}