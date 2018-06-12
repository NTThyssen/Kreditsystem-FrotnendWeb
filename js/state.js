class StateClass {
    constructor() {
        this.state = {
            token: null,
            title: null,
            username: null,
            password: null,
            user: null,
            id: null,
            orders: null,
        };

        this.url = 'http://ec2-18-222-19-131.us-east-2.compute.amazonaws.com:8080/kreditsystem/api';

        this.transitionTo = this.transitionTo.bind(this);
        this.init = this.init.bind(this);
    }

    init() {
        this.transitionTo('login');
    }

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

    login(username, password) {
        return $.ajax(this.loginUrl, {
            crossDomain: true,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({username, password}),
            dataType: 'text'
        })
            .then(token => {
                this.token = token;
                this.loginDetails = {username, password};
                
                return this.fetchCustomerData(token);
            })
            .then((user) => {
                this.user = user;

            })
            .then(() => this.transitionTo('profile'));
    }

    fetchCustomerData(token) {
        return $.ajax(this.customerUrl)
            .then(response => {
                const [user] = response;
                return user;
            });
    }
    depositMoney(amount) {
        alert(amount);
        return $.ajax(`${this.depositUrl}/${amount}`)
        .then(response => {
            console.log(response);
            success: ()=>alert(`${amount} was inserted into the account.`);

        })
    }
    fetchCustomerOrders(){
        return $.ajax(this.orderUrl, {
            crossDomain: true,
            method: 'GET',
            //contentType: 'application/json',
            //data: JSON.stringify({customerid: this.user.id}),
            //dataType: 'text'
        }).then(responseJSON => this.orders = responseJSON);
    }
    getOrder(id){
        const data = this.state.orders.find(order => String(order.id) === String(id));
        if (!data) {
            return null;
        }
        return new Order(data);
    }

    set title(title) {
        $('#title').text(title);
        this.state.title = title;
    }

    set token(token) {
        this.state.token = token;
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

    set id(id){
        this.state.id = id;
    }

    set orders(orders){
        this.state.orders = orders;
        console.log(this.state.orders);
    }

    get user() {
        return this.state.user;
    }

    get loginUrl () {
        return `${this.url}/authentication/login`;
    }
    get customerUrl() {
        return `${this.url}/customer`;
    }

    get depositUrl(){
        return `$customer/${this.state.id}/account/deposit/`
    }
    get orderUrl() {
    //return `${this.url}/order/customer/${2}`
    return `${this.url}/order/customer/${this.state.id}`;
    }
}

const state = new StateClass();
