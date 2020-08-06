import React from 'react';
import './Signup.css';

const validEmailRegex = RegExp(
  // /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};



class Signup extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      errors: {
        fullName: '',
        email: '',
        password: '',
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName': 
        errors.fullName = 
          value.length < 5
            ? 'Full Name must be at least 5 characters long!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be at least 8 characters long!'
            : '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }

  render(){
    const {errors} = this.state;
    return(
      <div className={'authBox'}>
        <div className={'leftBox'}>
        <div className={'box'}>
            <div className={'titleAuth'}>Register</div>
            <form onSubmit={this.handleSubmit} noValidate>
            <div className={'inputSBox'}>
              <input className={'inputS'} type={'text'} placeholder={'Name'} onChange={this.handleChange} noValidate/>
              {errors.fullName.length > 0 && 
                <span className='error'>{errors.fullName}</span>}
            </div>
            <div className={'inputSBox'}>
              <input className={'inputS'} type={'phone'} placeholder={'Phone Number'}/>
            </div>
            <div className={'inputSBox'}>
              <input className={'inputS'} type={'text'} placeholder={'E-Mail'} onChange={this.handleChange} noValidate/>
              {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
            </div>
            <div className={'inputSBox'}>
              <input className={'inputS'} type={'password'} placeholder={'Password'} onChange={this.handleChange} noValidate/>
              {errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}
            </div>
            <div>
              <input type="button" value="SignUp" className={'btnAuth'} onClick="msg()"/>
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
}

export default Signup;