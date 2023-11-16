const host = 'http://localhost:3000/';
const app = new Vue({
    el: '#app',
    data: {
        email: '',
        password1: '',
        password2: ''
    },
    methods: {
        crearCuenta(){
            
            if( this.password1 != this.password2 ){
                alert('Contaseñas incorrectas');
                return
            }
            
            const data = {
                email: this.email,
                password: this.password1
            }
            const endPoint = `${host}api/user`;
            const config = {
                method: "POST",
                body: JSON.stringify(data),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            }

            fetch(endPoint, config)
            .then(response => response.json()) 
            .then(json => console.log(json))
            .catch(err => console.log(err))
                console.log(data)

                this.email = '';
                this.password1 = '';
                this.password2 = '';

                location.href= 'login.html';
            }
        

    }
})