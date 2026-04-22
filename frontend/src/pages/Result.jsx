import { useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts'

const MAX_PRICE = 50000

const LABELS = {
  symboling:'Symboling',wheelbase:'Wheelbase',carlength:'Length',
  carwidth:'Width',carheight:'Height',curbweight:'Curb Weight',
  enginesize:'Engine',boreratio:'Bore Ratio',stroke:'Stroke',
  compressionratio:'Compression',horsepower:'Horsepower',
  peakrpm:'Peak RPM',citympg:'City MPG',highwaympg:'Hwy MPG',
}

export default function Result() {
  const { state } = useLocation()
  const navigate  = useNavigate()
  useEffect(() => { if(!state) navigate('/predict') }, [state, navigate])
  if(!state) return null

  const { result, inputs } = state
  const pct = Math.min((result.predicted_price_raw / MAX_PRICE) * 100, 100)

  const tier =
    result.predicted_price_raw < 10000 ? { label:'Economy',     color:'#059669' } :
    result.predicted_price_raw < 25000 ? { label:'Mid-Range',   color:'#2563eb' } :
    result.predicted_price_raw < 40000 ? { label:'Premium',     color:'#d97706' } :
                                          { label:'Luxury',      color:'#c0392b' }

  return (
    <div className="page" style={{background:'var(--bg)'}}>
      <div className="section-sm fade-in" style={{maxWidth:860}}>

        {/* Header */}
        <div style={{marginBottom:'2rem'}}>
          <span className="badge badge-green" style={{marginBottom:'0.75rem'}}>✓ Valuation Complete</span>
          <div className="accent-bar"/>
          <h2 style={{fontSize:'2.2rem',fontWeight:900,letterSpacing:'0.02em'}}>VALUATION REPORT</h2>
        </div>

        {/* Main result card */}
        <div className="card" style={{marginBottom:'1.25rem'}}>
          <div className="grid-2" style={{alignItems:'center',gap:'2.5rem'}}>

            {/* Price */}
            <div>
              <div className="price-label">Estimated Market Value</div>
              <div className="price-value">{result.predicted_price}</div>
              <div style={{marginTop:'0.75rem',display:'inline-flex',alignItems:'center',gap:'0.5rem',padding:'0.35rem 0.85rem',borderRadius:6,background:'var(--bg)',border:'1px solid var(--border)'}}>
                <span style={{width:8,height:8,borderRadius:'50%',background:tier.color,display:'inline-block'}}/>
                <span style={{fontSize:'0.8rem',fontWeight:600,color:tier.color}}>{tier.label} Segment</span>
              </div>
              <div style={{marginTop:'1.5rem',display:'flex',gap:'0.75rem',flexWrap:'wrap'}}>
                <Link to="/predict" className="btn btn-primary">New Valuation</Link>
                <Link to="/history" className="btn btn-outline">History</Link>
              </div>
            </div>

            {/* Gauge */}
            <div style={{position:'relative',height:220}}>
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart cx="50%" cy="75%" innerRadius="70%" outerRadius="100%" startAngle={180} endAngle={0}
                  data={[{value:pct,fill:'#c0392b'}]}>
                  <PolarAngleAxis type="number" domain={[0,100]} angleAxisId={0} tick={false}/>
                  <RadialBar background={{fill:'#f0f0f3'}} dataKey="value" angleAxisId={0} cornerRadius={8}/>
                </RadialBarChart>
              </ResponsiveContainer>
              <div style={{position:'absolute',bottom:20,left:'50%',transform:'translateX(-50%)',textAlign:'center'}}>
                <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontSize:'1.8rem',fontWeight:900,color:'var(--primary)'}}>{pct.toFixed(0)}%</div>
                <div style={{fontSize:'0.72rem',color:'var(--text-muted)',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.05em'}}>of $50K scale</div>
              </div>
            </div>
          </div>
        </div>

        {/* Spec summary */}
        <div className="card">
          <div style={{fontSize:'0.72rem',fontWeight:700,color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'1rem'}}>
            Vehicle Specifications Used
          </div>
          <div style={{display:'flex',flexWrap:'wrap',gap:'0.5rem'}}>
            {Object.entries(inputs).map(([k,v]) => (
              <div key={k} className="feature-tag">
                <span style={{color:'var(--text-light)',fontSize:'0.72rem'}}>{LABELS[k]}:</span>
                <span style={{fontWeight:600}}>{v}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}