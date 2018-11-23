import axios from 'axios';

export const register = newUser => {
    return axios
        .post('https://guarded-depths-49314.herokuapp.com/register', {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            password: newUser.password,
        })
        .then(res => {
            console.log('Registered!')
        })
}

export const login = user => {
    return axios
        .post('https://guarded-depths-49314.herokuapp.com/login', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data);
            console.log('Logged In');
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const getProfile = token => {
    return axios
      .get('https://guarded-depths-49314.herokuapp.com/profile', {
        headers: { Authorization: ` ${token}` }
      })
      .then(response => {
        console.log(response)
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
  }

