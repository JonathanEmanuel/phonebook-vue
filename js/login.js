const host = 'http://localhost:3000/';
const app = new Vue({
    el: '#app',
    data: {
        email: '',
        password: ''
    },
    methods: {
        login(){
            const data = {
                email: this.email,
                password: this.password
            }
            const endPoint = `${host}api/auth`;
            const config = {
                method: "POST",
                body: JSON.stringify(data),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            }

            fetch(endPoint, config)
            .then(response => response.json()) 
            .then(json => {
                console.log(json)

                if( json.token ){
                    console.log('ok');
                    localStorage.setItem('jwt', json.token);
                    location.href = 'index.html'
                }
            })
            .catch(err => console.log(err))
                console.log(data)

                //this.email = '';
                //this.password = '';
             

                //location.href= 'login.html';
            }
        

    }
})