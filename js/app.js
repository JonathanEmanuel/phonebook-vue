import { getPhonebooks, savePhonebook, deletePhonebook } from '../js/firebase.js'



// or



const app = new Vue({
    el: '#app',
    data: {
        loading: false,
        id: '',
        name: '',
        email: '',
        phone: '',
        phonebook: [
            // {id: 1, name: 'John', email: 'john@mail.com', phone: '2123'},
        ]
    },
    created(){
        this.getContacts();
        
    },

    methods: {
        getContacts(){
            this.loading = true;
            getPhonebooks().then( docs =>{
                this.phonebook = docs
            }).finally( () => {
                this.loading = false;
            })
        },
        openFormContact(id){
            console.log( id);
            window.location = `contact.html?id=${id}`;
        },
        save(){
            console.log('Save');          
        },
        deleteContact(id){
            this.loading = true;
            console.log(id);
            deletePhonebook(id).then( res => {
                console.log(res)
                this.getContacts();
            })
        }
    }
})

