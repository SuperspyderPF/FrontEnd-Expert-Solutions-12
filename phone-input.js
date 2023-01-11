import React, {useState } from 'react';

export default function PhoneInput() {
  const [value, setValue] = useState('');
  const notmetreq = value.length<14;
  const onchange = event => {
    setValue(format(event.target.value));
  }

  return (
      <>
      <input 
        type="tel"
        value={value}
        onChange={onChange}
        placeholder="(555) 555-5555" 
        >
        </input>
      <button
        disabled={notmetreq}
        onClick={() => setValue('')}
        >Submit
        </button>
    </>

  );
}
function format(str){
  let rawstring='',output='';
  function onlykeepnumber(str){
    const numbers = "1234567890".split("")
    let i = str.length;
    while(i--){
      const number = str[i];
      if(!numbers.includes(number)){
        str=str.substring(0, i) + '' + str.substring(i + 1);
      }
    }
    rawstring=str
  }
  function addcustomformat(rawstring){
    if(rawstring.length>0){output += '(' + rawstring.substring(0, 3)}
    if(rawstring.length>3){output += ')' + rawstring.substring(3, 6)}
    if(rawstring.length>6){output += '-' + rawstring.substring(6, 10)}
  }
  onlykeepnumber(str);
  addcustomformat(rawstring);
  return output
}
