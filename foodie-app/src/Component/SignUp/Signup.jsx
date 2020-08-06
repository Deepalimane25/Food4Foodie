import React, { useState } from 'react';
import './Signup.css';

const Signup = () =>{

  const [data, setData] = useState(
    {
      name: "",
      phone: "",
      email: "",
      password: "",
    }
  );
  
  const InputEvent = (event) => {
    const {name, value} = event.target;
    setData((preVal) => {
      return{
        ...preVal,
        [name]:value,
      };
    });
  };
  
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`SignUp Successfull !!!`)
  };

  
    return(
      <div className={'authBox'}>
        <div className={'leftBox'}>
        <div className={'box'}>
            <div className={'titleAuth'}>Register</div>
            <form onSubmit={formSubmit}>
            <div className={'inputSBox'}>
              <input className={'inputS'} type={'text'}  name="name" value={data.name} onChange={InputEvent} placeholder={'Name'} required/>
            </div>
            <div className={'inputSBox'}>
              <input className={'inputS'} type={'phone'} name="phone" value={data.phone} onChange={InputEvent} placeholder={'Phone Number'} required/>
            </div>
            <div className={'inputSBox'}>
              <input className={'inputS'} type={'text'} name="email" value={data.email} onChange={InputEvent} placeholder={'E-Mail'} required/>
            </div>
            <div className={'inputSBox'}>
              <input className={'inputS'} type={'password'} name="password" value={data.password} onChange={InputEvent} placeholder={'Password'} required/>
            </div>
            <div>
              <input type="submit" value="SignUp" className={'btnAuth'} onClick="msg()" />
            </div>
            </form>

              
        </div>
    </div> 

        <div className={'rightBox'}>
              <div className={'bgGreen'}/>
                <div className={'imageAuth'}/>
                <div className={'imageText bold style1'}>_FOOD4FOODIE_</div>
                <div className={'imageText style2'}>Always On Time</div>
        </div>

      </div>

    )
}

export default Signup;