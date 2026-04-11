import React, { useState } from 'react';

/* ─── Inline styles (no external font file needed — Google Fonts CDN) ─── */
const GF_LINK = document.createElement('link');
GF_LINK.rel = 'stylesheet';
GF_LINK.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;600;700&display=swap';
document.head.appendChild(GF_LINK);

const S = {
  wrap: {
    fontFamily: "'Noto Sans Devanagari', sans-serif",
    background: 'linear-gradient(135deg, #f0f4ff 0%, #faf0ff 100%)',
    minHeight: '100vh',
    padding: '24px 16px',
  },
  card: {
    background: '#fff',
    border: '2px solid #7c3aed',
    borderRadius: '16px',
    padding: '28px',
    maxWidth: '640px',
    margin: '0 auto 24px auto',
    boxShadow: '0 4px 24px rgba(124,58,237,0.10)',
  },
  heading: {
    color: '#7c3aed',
    fontSize: '22px',
    fontWeight: '700',
    marginBottom: '20px',
    textAlign: 'center',
    borderBottom: '2px solid #ede9fe',
    paddingBottom: '12px',
  },
  label: {
    display: 'block',
    color: '#374151',
    fontWeight: '600',
    marginBottom: '6px',
    fontSize: '15px',
  },
  input: {
    width: '100%',
    padding: '10px 14px',
    border: '1.5px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '15px',
    outline: 'none',
    boxSizing: 'border-box',
    marginBottom: '16px',
    fontFamily: "'Noto Sans Devanagari', sans-serif",
    transition: 'border-color .2s',
  },
  select: {
    width: '100%',
    padding: '10px 14px',
    border: '1.5px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '15px',
    background: '#fff',
    boxSizing: 'border-box',
    marginBottom: '16px',
    fontFamily: "'Noto Sans Devanagari', sans-serif",
    cursor: 'pointer',
  },
  btn: {
    background: 'linear-gradient(90deg,#7c3aed,#a855f7)',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    padding: '12px 32px',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    display: 'block',
    margin: '0 auto',
    fontFamily: "'Noto Sans Devanagari', sans-serif",
    boxShadow: '0 2px 10px rgba(124,58,237,0.25)',
    transition: 'opacity .2s',
  },
  slotCard: {
    background: '#f5f3ff',
    border: '1.5px solid #c4b5fd',
    borderRadius: '12px',
    padding: '16px 20px',
    marginBottom: '14px',
  },
  slotTitle: {
    color: '#5b21b6',
    fontWeight: '700',
    fontSize: '17px',
    marginBottom: '8px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '8px',
  },
  pill: (color) => ({
    background: color,
    borderRadius: '6px',
    padding: '4px 10px',
    fontSize: '13px',
    fontWeight: '600',
    color: '#fff',
  }),
  badge: {
    display: 'inline-block',
    background: '#ddd6fe',
    color: '#5b21b6',
    borderRadius: '6px',
    padding: '3px 9px',
    fontSize: '13px',
    marginRight: '6px',
    marginBottom: '4px',
  },
  error: {
    background: '#fef2f2',
    border: '1px solid #fca5a5',
    borderRadius: '8px',
    padding: '12px 16px',
    color: '#b91c1c',
    textAlign: 'center',
    marginTop: '12px',
  },
  notice: {
    background: '#fffbeb',
    border: '1px solid #fcd34d',
    borderRadius: '8px',
    padding: '12px 16px',
    color: '#92400e',
    fontSize: '14px',
    marginBottom: '20px',
    textAlign: 'center',
  },
};

/* ─── Static state list (from CoWIN) ─── */
const STATES = [
  { id: 1,  name: 'अंडमान और निकोबार द्वीप समूह' },
  { id: 2,  name: 'आंध्र प्रदेश' },
  { id: 3,  name: 'अरुणाचल प्रदेश' },
  { id: 4,  name: 'असम' },
  { id: 5,  name: 'बिहार' },
  { id: 6,  name: 'चंडीगढ़' },
  { id: 7,  name: 'छत्तीसगढ़' },
  { id: 9,  name: 'दादरा और नगर हवेली' },
  { id: 11, name: 'गोवा' },
  { id: 12, name: 'गुजरात' },
  { id: 13, name: 'हरियाणा' },
  { id: 14, name: 'हिमाचल प्रदेश' },
  { id: 15, name: 'जम्मू और कश्मीर' },
  { id: 16, name: 'झारखंड' },
  { id: 17, name: 'कर्नाटक' },
  { id: 18, name: 'केरल' },
  { id: 19, name: 'लद्दाख' },
  { id: 20, name: 'लक्षद्वीप' },
  { id: 21, name: 'मध्य प्रदेश' },
  { id: 22, name: 'महाराष्ट्र' },
  { id: 23, name: 'मणिपुर' },
  { id: 24, name: 'मेघालय' },
  { id: 25, name: 'मिज़ोरम' },
  { id: 26, name: 'नागालैंड' },
  { id: 27, name: 'दिल्ली' },
  { id: 28, name: 'ओडिशा' },
  { id: 29, name: 'पुदुच्चेरी' },
  { id: 30, name: 'पंजाब' },
  { id: 31, name: 'राजस्थान' },
  { id: 32, name: 'सिक्किम' },
  { id: 33, name: 'तमिल नाडु' },
  { id: 34, name: 'तेलंगाना' },
  { id: 35, name: 'त्रिपुरा' },
  { id: 36, name: 'उत्तर प्रदेश' },
  { id: 37, name: 'उत्तराखंड' },
  { id: 38, name: 'पश्चिम बंगाल' },
];

/* ─── Helpers ─── */
function todayStr() {
  const d = new Date();
  return `${String(d.getDate()).padStart(2,'0')}-${String(d.getMonth()+1).padStart(2,'0')}-${d.getFullYear()}`;
}

/* ─── Main Component ─── */
export default function Vaccine() {
  const [searchMode, setSearchMode]   = useState('pincode'); // 'pincode' | 'district'
  const [pincode, setPincode]         = useState('');
  const [date, setDate]               = useState(todayStr());
  const [stateId, setStateId]         = useState('');
  const [districts, setDistricts]     = useState([]);
  const [districtId, setDistrictId]   = useState('');
  const [loadingDist, setLoadingDist] = useState(false);
  const [slots, setSlots]             = useState([]);
  const [loading, setLoading]         = useState(false);
  const [error, setError]             = useState('');
  const [searched, setSearched]       = useState(false);

  /* Fetch districts when state changes */
  async function fetchDistricts(sid) {
    setLoadingDist(true);
    setDistricts([]);
    setDistrictId('');
    try {
      const res = await fetch(
        `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${sid}`,
        { headers: { 'Accept-Language': 'hi' } }
      );
      const data = await res.json();
      setDistricts(data.districts || []);
    } catch {
      setDistricts([]);
    }
    setLoadingDist(false);
  }

  async function handleSearch() {
    setError('');
    setSlots([]);
    setSearched(true);
    if (!date) { setError('कृपया तारीख चुनें।'); return; }
    setLoading(true);
    try {
      let url = '';
      if (searchMode === 'pincode') {
        if (!pincode || pincode.length !== 6) { setError('कृपया सही 6 अंकों का पिनकोड डालें।'); setLoading(false); return; }
        url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${date}`;
      } else {
        if (!districtId) { setError('कृपया जिला चुनें।'); setLoading(false); return; }
        url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtId}&date=${date}`;
      }
      const res  = await fetch(url, { headers: { 'Accept-Language': 'hi' } });
      const data = await res.json();
      setSlots(data.sessions || []);
    } catch {
      setError('API से डेटा लाने में समस्या हुई। CoWIN API अभी उपलब्ध नहीं हो सकती।');
    }
    setLoading(false);
  }

  /* Date input: convert yyyy-mm-dd ↔ dd-mm-yyyy */
  function handleDateChange(e) {
    const raw = e.target.value; // yyyy-mm-dd
    if (!raw) return;
    const [y,m,d2] = raw.split('-');
    setDate(`${d2}-${m}-${y}`);
  }
  function dateForInput() {
    if (!date) return '';
    const [d2,m,y] = date.split('-');
    return `${y}-${m}-${d2}`;
  }

  return (
    <div style={S.wrap}>
      <div style={S.card}>
        <div style={S.heading}>💉 वैक्सीन स्लॉट खोजें</div>

        <div style={S.notice}>
          ℹ️ CoWIN API अब सार्वजनिक है। COVID वैक्सीनेशन लगभग पूर्ण हो चुका है,
          इसलिए नए स्लॉट सीमित हो सकते हैं।
        </div>

        {/* Mode toggle */}
        <div style={{ display:'flex', gap:'12px', marginBottom:'20px' }}>
          {['pincode','district'].map(m => (
            <button
              key={m}
              onClick={() => setSearchMode(m)}
              style={{
                flex:1, padding:'10px', borderRadius:'10px', cursor:'pointer',
                border: searchMode===m ? '2px solid #7c3aed' : '1.5px solid #d1d5db',
                background: searchMode===m ? '#ede9fe' : '#f9fafb',
                color: searchMode===m ? '#5b21b6' : '#6b7280',
                fontWeight: searchMode===m ? '700' : '400',
                fontFamily:"'Noto Sans Devanagari', sans-serif",
                fontSize:'14px',
              }}
            >
              {m === 'pincode' ? '📮 पिनकोड से' : '🗺️ जिले से'}
            </button>
          ))}
        </div>

        {/* Pincode mode */}
        {searchMode === 'pincode' && (
          <>
            <label style={S.label}>पिनकोड दर्ज करें</label>
            <input
              style={S.input}
              type="number"
              placeholder="जैसे: 110001"
              value={pincode}
              onChange={e => setPincode(e.target.value)}
              maxLength={6}
            />
          </>
        )}

        {/* District mode */}
        {searchMode === 'district' && (
          <>
            <label style={S.label}>राज्य चुनें</label>
            <select
              style={S.select}
              value={stateId}
              onChange={e => { setStateId(e.target.value); fetchDistricts(e.target.value); }}
            >
              <option value="">-- राज्य चुनें --</option>
              {STATES.map(s => <option key={s.id} value={s.id}>{s.name} ({s.id})</option>)}
            </select>

            <label style={S.label}>जिला चुनें</label>
            <select
              style={S.select}
              value={districtId}
              onChange={e => setDistrictId(e.target.value)}
              disabled={!districts.length}
            >
              <option value="">
                {loadingDist ? 'लोड हो रहा है...' : districts.length ? '-- जिला चुनें --' : '-- पहले राज्य चुनें --'}
              </option>
              {districts.map(d => (
                <option key={d.district_id} value={d.district_id}>
                  {d.district_name} ({d.district_id})
                </option>
              ))}
            </select>
          </>
        )}

        {/* Date */}
        <label style={S.label}>तारीख चुनें</label>
        <input
          style={S.input}
          type="date"
          value={dateForInput()}
          onChange={handleDateChange}
        />

        <button style={S.btn} onClick={handleSearch} disabled={loading}>
          {loading ? '🔍 खोज रहे हैं...' : '🔍 स्लॉट खोजें'}
        </button>

        {error && <div style={S.error}>{error}</div>}
      </div>

      {/* Results */}
      {searched && !loading && (
        <div style={{ maxWidth:'640px', margin:'0 auto' }}>
          {slots.length === 0 && !error ? (
            <div style={{ ...S.card, textAlign:'center', color:'#6b7280' }}>
              😔 इस तारीख पर कोई स्लॉट उपलब्ध नहीं है।
            </div>
          ) : (
            slots.map((s, i) => (
              <div key={i} style={S.slotCard}>
                <div style={S.slotTitle}>🏥 {s.name}</div>
                <div style={{ color:'#6b7280', fontSize:'13px', marginBottom:'10px' }}>
                  📍 {s.address} &nbsp;|&nbsp; 📅 {s.date}
                </div>
                <div style={S.row}>
                  <span style={S.pill('#16a34a')}>💉 वैक्सीन: {s.vaccine}</span>
                  <span style={S.pill('#2563eb')}>👤 न्यूनतम आयु: {s.min_age_limit}+</span>
                  <span style={S.pill(s.fee_type==='Free'?'#059669':'#d97706')}>
                    {s.fee_type === 'Free' ? '🆓 मुफ्त' : `💰 ₹${s.fee}`}
                  </span>
                </div>
                <div style={{ marginTop:'10px' }}>
                  {s.slots?.map((sl,j) => <span key={j} style={S.badge}>🕐 {sl}</span>)}
                </div>
                <div style={{ marginTop:'8px', fontSize:'13px', color:'#374151' }}>
                  उपलब्ध क्षमता — डोज़ 1: <b>{s.available_capacity_dose1}</b> &nbsp;
                  डोज़ 2: <b>{s.available_capacity_dose2}</b> &nbsp;
                  कुल: <b>{s.available_capacity}</b>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}






















// import React, { useEffect, useMemo, useState } from 'react';
// import MoviesList from '../components/MoviesList';
// import Statelist from '../components/Statelist';
// import AppointmentList from '../components/AppointmentList';
// import './load.css';
// import './CSS_ke_log/movieslistakadistrict.css';

// const COWIN_BASE_URL = 'https://cdn-api.co-vin.in/api/v2';
// const COWIN_HEADERS = {
//   Accept: 'application/json',
//   'Accept-Language': 'en_US',
// };

// function formatDateForCowin(inputDate) {
//   if (!inputDate) {
//     return '';
//   }

//   const [yyyy, mm, dd] = inputDate.split('-');
//   if (!yyyy || !mm || !dd) {
//     return '';
//   }

//   return `${dd}-${mm}-${yyyy}`;
// }

// async function fetchCowinJson(url) {
//   const response = await fetch(url, { headers: COWIN_HEADERS });

//   if (!response.ok) {
//     const message = await response.text();
//     throw new Error(`CoWIN API error (${response.status})${message ? `: ${message}` : ''}`);
//   }

//   return response.json();
// }

// function Vaccine() {
//   const [districts, setDistricts] = useState([]);
//   const [states, setStates] = useState([]);
//   const [appointments, setAppointments] = useState([]);
//   const [isLoadingAppointments, setIsLoadingAppointments] = useState(false);
//   const [error, setError] = useState(null);
//   const [dateValue, setDateValue] = useState('');
//   const [districtId, setDistrictId] = useState('');
//   const [stateId, setStateId] = useState('');
//   const [hasSearchedAppointments, setHasSearchedAppointments] = useState(false);

//   const cowinDate = useMemo(() => formatDateForCowin(dateValue), [dateValue]);

//   const fetchStates = async () => {
//     try {
//       const data = await fetchCowinJson(`${COWIN_BASE_URL}/admin/location/states`);
//       const transformedData = (data.states || []).map((state) => ({
//         ied: state.state_id,
//         sname: state.state_name,
//       }));

//       setStates(transformedData);
//     } catch (apiError) {
//       setError(apiError.message);
//     }
//   };

//   const fetchDistricts = async () => {
//     const trimmedStateId = stateId.toString().trim();
//     if (!trimmedStateId) {
//       setError('State number dalo, tab district list aayegi.');
//       setDistricts([]);
//       return;
//     }

//     setError(null);

//     try {
//       const data = await fetchCowinJson(
//         `${COWIN_BASE_URL}/admin/location/districts/${encodeURIComponent(trimmedStateId)}`
//       );

//       const transformedData = (data.districts || []).map((district) => ({
//         id: district.district_id,
//         dname: district.district_name,
//       }));

//       setDistricts(transformedData);
//     } catch (apiError) {
//       setDistricts([]);
//       setError(apiError.message);
//     }
//   };

//   const fetchAppointments = async () => {
//     const trimmedDistrictId = districtId.toString().trim();
//     if (!trimmedDistrictId || !cowinDate) {
//       setError('Appointment fetch ke liye date aur district number dono chahiye.');
//       setAppointments([]);
//       return;
//     }

//     setHasSearchedAppointments(true);
//     setIsLoadingAppointments(true);
//     setError(null);

//     try {
//       const query = `district_id=${encodeURIComponent(trimmedDistrictId)}&date=${encodeURIComponent(
//         cowinDate
//       )}`;
//       const data = await fetchCowinJson(
//         `${COWIN_BASE_URL}/appointment/sessions/public/findByDistrict?${query}`
//       );

//       const transformedData = (data.sessions || []).map((session) => ({
//         cid: session.center_id,
//         cname: session.name,
//         tfrom: session.from,
//         to: session.to,
//         feetype: session.fee_type,
//         sessionid: session.session_id,
//         date: session.date,
//         cap_dose1: session.available_capacity_dose1,
//         cap_dose2: session.available_capacity_dose2,
//         avl_cap: session.available_capacity,
//         fees: session.fee,
//         Minage: session.min_age_limit,
//         Vtype: session.vaccine,
//       }));

//       setAppointments(transformedData);
//     } catch (apiError) {
//       setAppointments([]);
//       setError(apiError.message);
//     } finally {
//       setIsLoadingAppointments(false);
//     }
//   };

//   useEffect(() => {
//     fetchStates();
//   }, []);

//   const submitHandler = async (event) => {
//     event.preventDefault();
//     await fetchAppointments();
//   };

//   return (
//     <React.Fragment>
//       <div style={{ border: '2px solid blueviolet', background_color: 'lightgreen', width: 'fit-content' }}>
//         <div className="nzdiki">
//           <span>à¤¨à¥›à¤¦à¥€à¤•à¥€ à¤µà¥ˆà¤•à¥à¤¸à¥€à¤¨ à¤Ÿà¥€à¤•à¥‡ à¤•à¥€ à¤œà¤¾à¤¨à¤•à¤¾à¤°à¥€</span>
//         </div>

//         <form onSubmit={submitHandler}>
//           <div className="form_controls dlid">
//             <label>à¤°à¤¾à¤œà¥à¤¯ à¤¸à¤‚à¤–à¥à¤¯à¤¾ à¤¡à¤¾à¤²à¥‡à¤‚</label>
//             <input
//               type="number"
//               id="t"
//               className="padding"
//               value={stateId}
//               onChange={(event) => setStateId(event.target.value)}
//             />
//             <button type="button" onClick={fetchDistricts} className="fifth" style={{ margin: '4px' }}>
//               à¤¸à¤‚à¤–à¥à¤¯à¤¾ à¤•à¥‡ à¤†à¤§à¤¾à¤° à¤ªà¤° à¤œà¤¿à¤²à¤¾ à¤¸à¥‚à¤šà¥€
//             </button>
//           </div>

//           <div className="form_controls flex">
//             <label>à¤¦à¤¿à¤¨à¤¾à¤‚à¤• à¤¡à¤¾à¤²à¥‡à¤‚</label>
//             <input
//               type="date"
//               id="ddl"
//               value={dateValue}
//               onChange={(event) => setDateValue(event.target.value)}
//               className="padding"
//             />
//           </div>

//           <div className="form_controls">
//             <label>à¤œà¤¿à¤²à¤¾ à¤¸à¤‚à¤–à¥à¤¯à¤¾ à¤¡à¤¾à¤²à¥‡à¤‚</label>
//             <input
//               id="disID"
//               value={districtId}
//               onChange={(event) => setDistrictId(event.target.value)}
//               className="padding"
//             />
//           </div>

//           <div id="vaccine_actions">
//             <button type="submit" id="tintin" className="fifth" style={{ fontSize: '15px' }}>
//               à¤¸à¤¬à¤®à¤¿à¤Ÿ à¤•à¤°à¥‡à¤‚
//             </button>
//           </div>
//         </form>
//       </div>

//       <br />

//       <MoviesList movies={districts} />
//       <Statelist movies={states} />

//       <div>
//         <button onClick={fetchStates} id="statenaamid" className="fifth" style={{ fontSize: '17x' }}>
//           à¤°à¤¾à¤œà¥à¤¯ à¤¸à¤‚à¤–à¥à¤¯à¤¾ à¤¸à¥‚à¤šà¥€ à¤¦à¥‡à¤–à¥‡à¤‚
//         </button>
//       </div>

//       {isLoadingAppointments && <p id="loadwala">Loading....</p>}
//       {!isLoadingAppointments && error && <p>{error}</p>}
//       {!isLoadingAppointments && !error && hasSearchedAppointments && appointments.length === 0 && (
//         <p id="loadwala">Nothing found</p>
//       )}
//       {!isLoadingAppointments && appointments.length > 0 && <AppointmentList movies={appointments} />}
//     </React.Fragment>
//   );
// }

// export default Vaccine;
