Vue.config.devtools = true;

const app = new Vue ({
    el: "#root",
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        messageIndex: null,
        userIndex: 0,
        newMessage:"",
        search: "",
        // isActive: false,
        
    },
    methods: {
        getImage(contact) {
            return 'img/avatar' + contact.avatar + '.jpg';
        },
        chooseChat (userIndex) {
            this.userIndex = userIndex;
        },
        chooseMessage(index) {
            // this.isActive = !this.isActive;
            if (this.messageIndex == null) {
                this.messageIndex = index;  
            }
            this.messageIndex = null;
        },
        sendMessage() {
            let thisContact = this.contacts[this.userIndex];
            let tmp = dayjs().format("DD/MM/YYYY hh:mm:ss");
            if (this.newMessage != "") {
                thisContact.messages.push ({
                    // date: new Date().toLocaleString(),
                    date: tmp,
                    message: this.newMessage,
                    status: 'sent'
                });
                this.newMessage= "";
            }
            setTimeout(() => {
                thisContact.messages.push ({
                // date: new Date().toLocaleString(),
                date: tmp,
                message: "Ok",
                status: 'received'
            })}, 1000);
        },
        filterContacts() {
            return this.contacts.filter((contact) => {
                return contact.name.toLowerCase().includes(this.search.toLowerCase());
            });
        }    
    }
})