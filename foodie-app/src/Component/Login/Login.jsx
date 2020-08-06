import React, { useState } from 'react';
import './Login.css';

const Signin = () =>{

  const [data, setData] = useState(
    {
      username: "",
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
    alert(`Login Successfull !!!`)
  };

    return(
      <div className={'authBox'}>
        <div className={'leftBox'}>
          <div className={'bgGreen'}/>
          <div className={'imageAuth'}/>
          <div className={'imageText bold style1'}>_FOOD4FOODIE_</div>
          <div className={'imageText style2'}>Always On Time</div>
        </div>
        <div className={'rightBox'}>
          <div className={'box'}>
            <div className={'titleAuth'}>Login</div>
            <form onSubmit={formSubmit}>
            <div className={'inputSBox'}>
              <input className={'inputS'} type={'text'} name="username" value={data.username} onChange={InputEvent} placeholder={'Username'} required/>
            </div>
            <div className={'inputSBox'}>
              <input className={'inputS'} type={'password'} name="password" value={data.password} onChange={InputEvent} placeholder={'Password'} required/>
            </div>
            <div className={'contentBox'}>
              <div className={'checkboxBox'}>
                <input type={'checkbox'} className={'checkbox'}/>
                <label className={'checkboxLabel'}> Remember Me</label>
              </div>
              <div className={'text1'}>Forgot password?</div>
            </div>
            <div>
            <input type="submit" value="SignIn" className={'btnAuth'} onClick="msg()"/>
            </div>
            </form>
            <div className={'borderBox'}>
              <div className={'line'}/>
              <div className={'text2 or'}> OR </div>
            </div>
            <div className={'socialMedia'}>
              <div className={'icon google'}/>
              {/* <div className={'icon facebook'}/> */}
              {/* <div className={'icon google'}/> */}
            </div>
          </div> 

        </div>

      </div>
    )
  
}

export default Signin;