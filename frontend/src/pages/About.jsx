export default function About() {
  const metrics = [
    ['Algorithm',        'Random Forest Regressor'],
    ['R² Score',         '90.4%'],
    ['Task Type',        'Regression'],
    ['Training Samples', '205 rows'],
    ['Feature Columns',  '14 numerical (of 25 total)'],
    ['Target Variable',  'Price (USD)'],
    ['Preprocessing',    'StandardScaler'],
    ['scikit-learn',     '1.6.1'],
    ['Dataset Source',   'UCI Automobile Dataset'],
  ]

  const features = ['symboling','wheelbase','carlength','carwidth','carheight','curbweight','enginesize','boreratio','stroke','compressionratio','horsepower','peakrpm','citympg','highwaympg']

  const stack = [
    { label:'ML Model',         value:'scikit-learn 1.6.1', cls:'badge-red'  },
    { label:'Backend',          value:'FastAPI + Uvicorn',  cls:'badge-dark' },
    { label:'Frontend',         value:'React + Vite',       cls:'badge-blue' },
    { label:'Charts',           value:'Recharts',           cls:'badge-blue' },
    { label:'Backend Deploy',   value:'Render',             cls:'badge-green'},
    { label:'Frontend Deploy',  value:'Vercel',             cls:'badge-green'},
  ]

  return (
    <div className="page" style={{background:'var(--bg)'}}>
      <div className="section-sm">

        <div style={{marginBottom:'2.5rem'}}>
          <span className="badge badge-blue" style={{marginBottom:'0.75rem'}}>Project Info</span>
          <div className="accent-bar"/>
          <h2 style={{fontSize:'2.2rem',fontWeight:900,letterSpacing:'0.02em',marginBottom:'0.4rem'}}>ABOUT THIS MODEL</h2>
          <p style={{color:'var(--text-muted)',fontSize:'0.9rem',maxWidth:500}}>
            Trained on the UCI Automobile dataset to predict car prices based on technical specifications using Random Forest regression.
          </p>
        </div>

        <div className="grid-2" style={{alignItems:'start'}}>

          {/* Model details */}
          <div className="card">
            <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontSize:'1.1rem',fontWeight:800,letterSpacing:'0.05em',marginBottom:'1.25rem',color:'var(--navy)'}}>MODEL DETAILS</div>
            {metrics.map(([k,v]) => (
              <div key={k} className="about-row">
                <span className="about-key">{k}</span>
                <span className="about-val">{v}</span>
              </div>
            ))}
          </div>

          <div style={{display:'flex',flexDirection:'column',gap:'1.25rem'}}>

            {/* Features */}
            <div className="card">
              <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontSize:'1.1rem',fontWeight:800,letterSpacing:'0.05em',marginBottom:'1rem',color:'var(--navy)'}}>INPUT FEATURES (14)</div>
              <div style={{display:'flex',flexWrap:'wrap',gap:'0.4rem'}}>
                {features.map((f,i) => (
                  <span key={f} className="feature-tag">
                    <span style={{color:'var(--text-light)',fontSize:'0.7rem'}}>{i+1}.</span>{f}
                  </span>
                ))}
              </div>
            </div>

            {/* Stack */}
            <div className="card">
              <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontSize:'1.1rem',fontWeight:800,letterSpacing:'0.05em',marginBottom:'1rem',color:'var(--navy)'}}>TECH STACK</div>
              {stack.map(s => (
                <div key={s.label} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0.55rem 0',borderBottom:'1px solid var(--border)'}}>
                  <span style={{fontSize:'0.85rem',color:'var(--text-muted)'}}>{s.label}</span>
                  <span className={`badge ${s.cls}`}>{s.value}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}