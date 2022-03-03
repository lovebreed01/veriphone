import React, {useState} from 'react'
import PhoneDetails from './PhoneDetails'
const Home = () => {
  const [phone, setPhone] = useState('')
  const [number, setNumber] = useState()
  const [loading, setLoading] = useState(false)
  const [emptyInput , setEmptyInput] = useState('')
  const getPhone = async () => {
    if (!number) {
      setEmptyInput('Try Entering A Phone Number')
        return false
    }
    setLoading(true)
      const request = await fetch(`https://veriphone.p.rapidapi.com/verify?phone=${number}`, {
      "headers": {
        "x-rapidapi-host": "veriphone.p.rapidapi.com",
		    "x-rapidapi-key": "7cdb72d0d9msh58d22c0ddbc27edp104290jsnfa0d9bd5e6bc"
      },
      "method": "GET"
    })
    const data = await request.json();
    console.log(data)
    setPhone(data)
    setLoading(false)
    return data  
  }
  const handleChange = (e) => {
    setNumber(e.target.value)
    setEmptyInput('')
  }
  return (
    <>
    <nav> <h3>Veriphone</h3></nav>
      <div className='container'>
      <h2>Verify Phone Number</h2>
      <div className="inputContainer">
        <span className='input-error'>{emptyInput}</span>
        <input type="number" placeholder='Your phone number here' name="phone" id="phone-number" autoComplete='off' onChange={handleChange} />
        <button onClick={getPhone}>{loading ? 'Verifying Number...' : "Verify Number" } </button>
      </div>
      {phone && number && <PhoneDetails
        carrier={phone.carrier}
        country={phone.country}
        countryCode={phone.country_code}
        phoneNumber={phone.local_number}
        InterPhone={phone.international_number}
        Validity = {phone.phone_valid}
      >
        
        </PhoneDetails>
}
      </div>
      </>
  )
}

export default Home