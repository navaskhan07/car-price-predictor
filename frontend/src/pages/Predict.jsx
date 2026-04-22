import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { predictPrice } from '../api/predict'

const STEPS = {
  1: {
    label: 'Body',
    title: 'Body Dimensions',
    desc: 'Physical measurements of the vehicle',
    fields: [
      { name:'symboling',  label:'Symboling',   placeholder:'e.g. 1',     tip:'Risk rating -3 (safe) to 3 (risky).' },
      { name:'wheelbase',  label:'Wheelbase',   placeholder:'e.g. 88.6',  tip:'Front-to-rear axle distance in inches.' },
      { name:'carlength',  label:'Length',      placeholder:'e.g. 168.8', tip:'Overall car length in inches.' },
      { name:'carwidth',   label:'Width',       placeholder:'e.g. 64.1',  tip:'Overall car width in inches.' },
      { name:'carheight',  label:'Height',      placeholder:'e.g. 48.8',  tip:'Overall car height in inches.' },
    ]
  },
  2: {
    label: 'Engine',
    title: 'Engine & Drivetrain',
    desc: 'Mechanical and engine specifications',
    fields: [
      { name:'curbweight',       label:'Curb Weight',       placeholder:'e.g. 2548', tip:'Weight without passengers (lbs).' },
      { name:'enginesize',       label:'Engine Size',       placeholder:'e.g. 130',  tip:'Displacement in cubic inches.' },
      { name:'boreratio',        label:'Bore Ratio',        placeholder:'e.g. 3.47', tip:'Cylinder bore diameter ratio.' },
      { name:'stroke',           label:'Stroke',            placeholder:'e.g. 2.68', tip:'Piston travel distance in inches.' },
      { name:'compressionratio', label:'Compression Ratio', placeholder:'e.g. 9.0',  tip:'Max to min cylinder volume ratio.' },
    ]
  },
  3: {
    label: 'Performance',
    title: 'Performance',
    desc: 'Power output and fuel economy',
    fields: [
      { name:'horsepower',  label:'Horsepower',   placeholder:'e.g. 111',  tip:'Engine output in horsepower.' },
      { name:'peakrpm',     label:'Peak RPM',     placeholder:'e.g. 5000', tip:'RPM at peak power.' },
      { name:'citympg',     label:'City MPG',     placeholder:'e.g. 21',   tip:'Fuel efficiency in city (mpg).' },
      { name:'highwaympg',  label:'Highway MPG',  placeholder:'e.g. 27',   tip:'Fuel efficiency on highway (mpg).' },
    ]
  }
}

const initForm = () => ({
  symboling:'',wheelbase:'',carlength:'',carwidth:'',carheight:'',
  curbweight:'',enginesize:'',boreratio:'',stroke:'',compressionratio:'',
  horsepower:'',peakrpm:'',citympg:'',highwaympg:'',
})

export default function Predict() {
  const [step, setStep]     = useState(1)
  const [form, setForm]     = useState(initForm())
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = e => {
    setForm(p => ({...p,[e.target.name]:e.target.value}))
    setErrors(p => ({...p,[e.target.name]:''}))
  }

  const validateStep = () => {
    const errs = {}
    STEPS[step].fields.forEach(f => {
      if (form[f.name]==='') errs[f.name]='Required'
      else if (isNaN(Number(form[f.name]))) errs[f.name]='Must be a number'
    })
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleNext = () => { if(validateStep()) setStep(s=>s+1) }
  const handleBack = () => setStep(s=>s-1)

  const handleSubmit = async () => {
    if(!validateStep()) return
    setLoading(true)
    try {
      const payload = {}
      Object.keys(form).forEach(k => { payload[k] = parseFloat(form[k]) })
      const result = await predictPrice(payload)
      const entry = { id:Date.now(), date:new Date().toLocaleString(), inputs:{...payload}, ...result }
      const hist = JSON.parse(localStorage.getItem('carval_history')||'[]')
      localStorage.setItem('carval_history', JSON.stringify([entry,...hist].slice(0,20)))
      navigate('/result', { state:{ result, inputs:payload } })
    } catch {
      alert('Prediction failed. Make sure backend is running on port 8000.')
    } finally { setLoading(false) }
  }

  const current = STEPS[step]

  return (
    <div className="page" style={{background:'var(--bg)'}}>
      <div className="section-sm" style={{maxWidth:720}}>

        {/* Header */}
        <div style={{marginBottom:'2rem'}}>
          <span className="badge badge-dark" style={{marginBottom:'0.75rem'}}>Car Configurator</span>
          <div className="accent-bar"/>
          <h2 style={{fontSize:'2.2rem',fontWeight:900,letterSpacing:'0.02em',marginBottom:'0.4rem'}}>VEHICLE VALUATION</h2>
          <p style={{color:'var(--text-muted)',fontSize:'0.9rem'}}>Enter specifications to receive an AI-powered price estimate</p>
        </div>

        {/* Step tabs */}
        <div className="config-tab">
          {[1,2,3].map(s => (
            <button key={s} className={`config-tab-btn ${step===s?'active':''}`} onClick={()=>{}}>
              {step>s?'✓ ':''}{STEPS[s].label}
            </button>
          ))}
        </div>

        {/* Step progress dots */}
        <div className="step-progress">
          {[1,2,3].map((s,i) => (
            <div key={s} style={{display:'flex',alignItems:'center'}}>
              <div className="step-item">
                <div className={`step-circle ${step===s?'active':step>s?'done':''}`}>
                  {step>s?'✓':s}
                </div>
                <span className={`step-label ${step===s?'active':''}`}>{STEPS[s].label}</span>
              </div>
              {i<2 && <div className={`step-line ${step>s?'done':''}`}/>}
            </div>
          ))}
        </div>

        {/* Form card */}
        <div className="card fade-up">
          {/* Section header */}
          <div style={{display:'flex',alignItems:'center',gap:'1rem',marginBottom:'1.5rem',paddingBottom:'1rem',borderBottom:'1px solid var(--border)'}}>
            <div style={{width:42,height:42,borderRadius:'50%',background:'var(--primary)',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:"'Barlow Condensed',sans-serif",fontSize:'1.3rem',fontWeight:900,flexShrink:0}}>
              {step}
            </div>
            <div>
              <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontSize:'1.3rem',fontWeight:800,letterSpacing:'0.03em'}}>{current.title.toUpperCase()}</div>
              <div style={{fontSize:'0.82rem',color:'var(--text-muted)'}}>{current.desc}</div>
            </div>
          </div>

          <div className="grid-2" style={{gap:'1rem'}}>
            {current.fields.map(f => (
              <div key={f.name} className="form-group">
                <label className="form-label">
                  {f.label}
                  <div className="tip-wrap">
                    <span className="tip-icon">?</span>
                    <div className="tip-box">{f.tip}</div>
                  </div>
                </label>
                <input
                  type="number" step="any" name={f.name}
                  value={form[f.name]} onChange={handleChange}
                  placeholder={f.placeholder}
                  className={`form-input ${errors[f.name]?'error':''}`}
                />
                {errors[f.name] && <span className="form-error">{errors[f.name]}</span>}
              </div>
            ))}
          </div>

          <div className="divider"/>

          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div>
              {step>1 && <button onClick={handleBack} className="btn btn-ghost">← Back</button>}
            </div>
            <div style={{display:'flex',gap:'0.75rem',alignItems:'center'}}>
              <span style={{fontSize:'0.78rem',color:'var(--text-light)',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.05em'}}>Step {step} / 3</span>
              {step<3
                ? <button onClick={handleNext} className="btn btn-dark">Next Step →</button>
                : <button onClick={handleSubmit} disabled={loading} className="btn btn-primary btn-lg">
                    {loading?<><span className="spinner"/> Analysing...</>:'Get Valuation →'}
                  </button>
              }
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}