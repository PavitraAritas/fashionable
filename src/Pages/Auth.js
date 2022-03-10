import React, {useState, useContext} from 'react';
import { AuthBody } from '../StyledComponents';
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
  <>
      <AuthBody><img src="https://hips.hearstapps.com/ell.h-cdn.co/assets/15/33/1439415641-elle-30index.jpg" alt="" />
            <AuthBody.Card>
                <>
                    <h1>Fashionable</h1>
                    <h2>Who What Wear</h2>
                    {isSignin && (
                    <div>
                        < AuthInput type="text" value={email} placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
                        < AuthInput type="password" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
                        </div>)}
                    {!isSignin && (
                    <div>
                        < AuthInput type="text" value={username} placeholder='username' onChange={(e) => setUsername(e.target.value)}/>
                        < AuthInput type="text" value={name} placeholder='name' onChange={(e) => setName(e.target.value)}/>
                        < AuthInput type="text" value={email} placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
                        < AuthInput type="password" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    )}
                </>
                <AuthBody.Button onClick={onSubmit}>{isSignin? 'Sign In' : 'Sign Up'}</AuthBody.Button>
                {!isSignin && (<div style={{marginTop: '30px'}} onClick={() => setisSignin(true)}>Already have an account? Sign In</div>)}
                {isSignin && (<div style={{marginTop: '30px'}} onClick={() => setisSignin(false)}>Don't have an Account? Sign Up</div>)}
            </AuthBody.Card>
            </AuthBody>
    </>) 
}

function AuthInput({type, placeholder, onChange, value}) {
    return(
            <AuthBody.Input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}/>
            
    )
}

export default Auth;

