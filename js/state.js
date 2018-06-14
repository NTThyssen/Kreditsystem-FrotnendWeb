class StateClass {
    //state klasse som bruges til at gemme midlertidig data for sessions.
    constructor() {
        this.state = {
            token: null,
            title: null,
            username: null,
            password: null,
            user: null,
            orders: null,

        };

        this.url = 'http://ec2-18-222-19-131.us-east-2.compute.amazonaws.com:8080/kreditsystem/api';
        //gør metoder globale
        this.transitionTo = this.transitionTo.bind(this);
        this.init = this.init.bind(this);
    }

    init() {
        this.transitionTo('login');
    }
    //denne metode håndtere at skifte fra en side til en anden.
    //når metoden kaldes gives en route og evt en id.
    //route bruges til at vælge den html-fil der skal loades.
    transitionTo(route, id) {
        switch (route) {
            case 'login':
                $('#maincontainer').load('partials/login.html');
                this.title = 'Login';
                break;
            case 'profile':
                $('#maincontainer').load('partials/mainPage.html');
                this.title = 'Velkommen';
                break;
            case 'frontpage':
                $('#rightMainPage').load('partials/frontpage.html');
                this.title = 'Velkommen';
                break;
            case 'money':
                $('#rightMainPage').load('partials/money.html');
                this.title = 'Indbetal penge';
                break;
            case 'details':
                $('#rightMainPage').load('partials/details.html');
                this.title = 'Mine oplysninger';
                break;
            case 'history':
                $('#rightMainPage').load('partials/history.html');
                this.title = 'Historik';
                break;
            case 'order' :
                $('#rightMainPage').attr('data-id', id);
                $('#rightMainPage').load('partials/order.html');
                break;
            default:
                throw Error(`Unknown route ${route}`)
        }
    }
        //Metode som opsamler brugernavn og password fra login-siden og sender til backend.
        login(username, password) {
            return $.ajax(this.loginUrl, {
                crossDomain: true,
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({username, password}),
                dataType: 'text'
            })
                //hvis login er succesfuldt, gem data lokalt
                //og hent resterende data om bruger.
                .then(token => {
                    this.state.token = token;
                    this.loginDetails = {username, password};
                     //this.fetchCustomerData(token);
                    return this.fetchCustomerData(token);
                })
                .then((user) => {
                    this.user = user;
                    return user;
                })
                //gå til forside.
                .then(() => {
                    this.transitionTo('profile')

                })
            }
    //metode som henter data om enkelt bruger. 
    //Der bliver sendt token som er gemt i state klassen
    //og back end kan da udlevere den rigtige brugers data.
    fetchCustomerData(token) {
        return $.ajax(this.customerUrl,{
            crossDomain: true,
            headers: {"Authorization": "Bearer "+token},
            method: 'GET',
        });
    }
    //Metode som sætter penge ind på en brugers konto.
    depositMoney(amount) {
        alert(amount);
        return $.ajax(`${this.depositUrl}/${amount}`,{
            crossDomain: true,
            method: 'POST',
            headers: {"Authorization": "Bearer " + this.state.token}
        });
    }

    //Henter alle ordre for den aktuelle bruger.
    //Benytte også token ligesom fetchCustomerData()
    fetchCustomerOrders(){
        return $.ajax(this.orderUrl, {
            crossDomain: true,
            method: 'GET',
            contentType: 'application/json',
            dataType: 'text',
            headers: {"Authorization": "Bearer " + this.state.token}
        }).then(response => this.state.orders = JSON.parse(response));
    }
    //Samler info fra "Mine oplysninger" siden og samler dem i et objekt
    //og sender så objektet til backend. 
    updateCustomerData(firstname, lastname, customer){
    console.log(firstname, lastname, customer);
        return $.ajax(this.customerUrl, {
            crossDomain: true,
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify({firstname, lastname, customer}),
            dataType: 'text',
            headers: {"Authorization": "Bearer " + this.state.token}
        })
        //(Prøver at) opdatere brugerens data og opdatere felter på siden
        //TODO
        //fetchCustomerData(this.state.token)
    }

    getOrder(id){
        const data = this.state.orders.find(order => String(order.id) === String(id));
        if (!data) {
            return null;
        }
        return new Order(data);
    }

    //En masse settere og gettere som gør det nemmere og pænere at 
    //bruge og opdatere de vigtigeste felter i klassen.
    set title(title) {
        $('#title').text(title);
        this.state.title = title;
    }

    set token(token) {

        this.state.token = token;
        alert(token);
        alert(this.state.token);
    }

    set loginDetails({username, password}) {
        this.state = {
            ...this.state,
            username,
            password
        };
    }

    set user(user) {
        this.state.user = user;
    }

    get user() {
        return this.state.user;
    }
    get token(){
        return this.state.user;
    }

    get loginUrl () {
        return `${this.url}/authentication/login`;
    }
    get customerUrl() {
       // return `${this.url}/customer/${this.state.id}`;
        return `${this.url}/customer/self`;
    }
    get depositUrl(){
        return `${this.url}/customer/account/self/deposit`;
    }

    get orderUrl() {
        //return `${this.url}/order/2`;
        return `${this.url}/order/customer/self`;
    }
    
}

const state = new StateClass();
