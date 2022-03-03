import React from 'react'

const PhoneDetails = ({ carrier, country, countryCode, phoneNumber, InterPhone, Validity }) => {
    if (Validity) {
         return (
      <div className='details'>
        <p> <span> Carrier</span> {carrier} </p>
        <p> <span> Country of use</span> {country} </p>
        <p> <span> Country code</span> {countryCode} </p>
        <p> <span>Local Phone</span> {phoneNumber}</p> 
        <p> <span> International phone number</span>{InterPhone}</p>
        <h3>Phone number ({phoneNumber}) is valid</h3>

      </div>
  )
    }
    return <div className='error'>
        Phone number ({phoneNumber}) is not Valid
    </div>
   
}

export default PhoneDetails