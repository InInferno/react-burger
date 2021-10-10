// export async function loginFetch(url, email, password) { 

//         await fetch(`${url}/auth/login`, {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json;charset=utf-8'
//             },
//             body: JSON.stringify({"email": email, "password": password})
//         })
//             // .then(res => {
//             //     if (res.status !== 200) {
//             //         throw new Error(res.status)
//             //     }
//             //     return res.json()
//             // })
//             // .then(res => {
//             //     console.log(res)
//             //     dispatch(login(res))
//             //     setCookie('accessToken', res.accessToken);
//             //     setCookie('refreshToken', res.refreshToken);
//             // })
//             // .catch((err) => {
//             //     console.log('err', err)
//             //     dispatch(loginError(err))
//             // });
    
// }