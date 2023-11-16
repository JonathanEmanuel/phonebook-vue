import { getContactById, savePhonebook, updatePhonebook } from '../js/firebase.js'

const appContact = new Vue({
    el:'#appContact',
    data:{
        id: '',
        name: '',
        email: '',
        phone: ''
    },
    created(){
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        console.log(id); // "Juan"
        this.id = id;

        if( this.id != ''){
            this.getContact();
        }

    },
    methods: {
        saveContact(){
            const data = {
                name: this.name,
                email: this.email,
                phone: this.phone
            }

            console.log(data)
            if( this.id == ''){
                savePhonebook( data ). then( res => {
                    console.log(res)

                    location.href = 'index.html';
                })
            } else {
                data.id = this.id;
                updatePhonebook(data, this.id).then( res => {
                    console.log(res)
                    location.href = 'index.html';

                })
            }
        },
        getContact(){
        
            getContactById(this.id).then( res => {
                console.log(res);
                if( res) {
                    this.name = res.name;
                    this.email = res.email;
                    this.phone = res.phone;

                }
            })
        }
    }

})