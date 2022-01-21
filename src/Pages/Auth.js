import React, {useState, useContext} from 'react';
import RepositoryContext from '../Context/RepositoryContext';


function Auth() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isSignin, setisSignin] = useState(false);
    const { repository } = useContext(RepositoryContext); 

    const onSubmit = () => {
        if(isSignin) {
            repository.signIn(email, password)
        }
        else{
            repository.signUp(email, username, password, name)
        }
    }

  return(
  <div className='authPage'>
      <div className='loginDetails'>
      <div style={{flex: 1, backgroundColor: 'red'}}><img src="https://i.pinimg.com/736x/98/98/6d/98986d6e34fc4f8e8c48a96e43c9b5cd--fashion-collage-my-fashion.jpg" alt="" style={{height: '100vh'}}/></div>
            <div style={{flex: 1, backgroundColor: 'white', marginLeft: '30px'}}>
                <div>
                    <h1 style={{fontSize: '50px', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', marginTop: '20px'}}>Happening now</h1>
                    <h2 style={{marginTop: '40px', }}>Join Twitter Today.</h2>
                    {isSignin && (
                    <div style={{display:'flex', flexDirection: 'column'}}>
                        < AuthInput type="text" value={email} placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
                        < AuthInput type="password" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
                        </div>)}
                    {!isSignin && (
                    <div style={{display:'flex', flexDirection: 'column'}}>
                        < AuthInput type="text" value={username} placeholder='username' onChange={(e) => setUsername(e.target.value)}/>
                        < AuthInput type="text" value={name} placeholder='name' onChange={(e) => setName(e.target.value)}/>
                        < AuthInput type="text" value={email} placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
                        < AuthInput type="password" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    )}
                </div>
                <button className='auth__button' onClick={onSubmit}>{isSignin? 'Sign In' : 'Sign Up'}</button>
                {!isSignin && (<div style={{marginTop: '30px'}} onClick={() => setisSignin(true)}>Already have an account? Sign In</div>)}
                {isSignin && (<div style={{marginTop: '30px'}} onClick={() => setisSignin(false)}>Don't have an Account? Sign Up</div>)}
            </div>
      </div>
    </div>) 
}

function AuthInput({type, placeholder, onChange, value}) {
    return(
            <input 
                type={type}
                placeholder={placeholder}
                className='auth__input'
                onChange={onChange}
                value={value}/>
            
    )
}

export default Auth;

