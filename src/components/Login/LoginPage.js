import React, {useState, useContext} from "react";
import {useHistory} from 'react-router-dom'
import API from "../../API";
import {Context} from "../../contextLogin/loginContext";
import {Avatar, Button, Grid, Paper, TextField, FormControlLabel, Checkbox} from "@material-ui/core";
import LockOpenIcon from '@material-ui/icons/LockOpen';


const paperStyle = {padding:20,height:'50vh',width:380,margin:'20px auto'}
const avatarStyle = {backgroundColor:'#47C0C5'}
const loginButtonBack = {backgroundColor:'#47C0C5',marginTop:'30px'}

const LoginPage = ({setIsAuth}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    // eslint-disable-next-line
    const [_user, setUser] = useContext(Context)
    let navigate = useHistory()

    const handleSubmit = async () => {
        setError(false)
        try {
            const requestToken = await API.getRequestToken2()
            const sessionId = await API.authenticate(
                requestToken,
                username,
                password
            )

            setUser({sessionId: sessionId.session_id, username})
            setIsAuth(true)
            localStorage.setItem('isAuth', 'true')
            localStorage.setItem('user', JSON.stringify( {sessionId: sessionId.session_id, username}))
            navigate.push('/profile')

        } catch (error) {
            setError(true)
        }
    }

    const handleInput = (e) => {
        const name = e.currentTarget.name
        const value = e.currentTarget.value

        if (name === 'username') setUsername(value)
        if (name === 'password') setPassword(value)
    }

    return (
        <Grid>
            {error && <div className='error' style={{color: 'red', textAlign: 'center', marginTop: '25px'}}>Something Went Wrong! Please write correct Username or Password:)</div>}
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><LockOpenIcon /></Avatar>
                    <h2>Log in</h2>
                </Grid>
                <form>
                    <TextField
                        onChange={handleInput}
                        value={username}
                        name='username'
                        label='Username'
                        style={{marginBottom: '15px'}}
                        placeholder='Enter Username'
                        fullWidth />
                    <TextField
                        onChange={handleInput}
                        value={password}
                        name='password'
                        autoComplete="on"
                        label='Password'
                        placeholder='Enter Password'
                        type='password'
                        fullWidth />
                    <FormControlLabel style={{marginTop: '15px'}}
                                      control={
                                          <Checkbox
                                              name="checkedB"
                                              color="primary"
                                          />
                                      }
                                      label="Remember me"
                    />
                </form>


                <Button
                    onClick={handleSubmit}
                    type='submit'
                    style={loginButtonBack}
                    variant="contained"
                    fullWidth
                >
                    Login
                </Button>
            </Paper>
        </Grid>
    )
}

export default LoginPage