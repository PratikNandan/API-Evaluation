///reference types="cypress"/>
describe('Evaluation', () => {
    const baseurl = "https://crypto-wallet-server.mock.beeceptor.com" 
    it('create/Register', () => {
        cy.request({
            method:"POST",
            url:baseurl+"/api/v1/register",
            headers:{
                "Content-Type":"application/json"
            },
            body:{
                "username":"user123",
                "password":"securepassword",
                "email":"user@example.com"
            }
        }).then((Response)=> {
            expect(Response.status).to.eq(200);
            cy.log(JSON.stringify(Response.body))
 
         })
    });

    it('login', () => {
        cy.request({
            method:"POST",
            url:baseurl+"/api/v1/login",
            headers:{
                "Content-Type":"application/json"
            },
            body:{
                "username":"user123",
                "password":"securepassword",
            }
        }).then((Response)=> {
            expect(Response.status).to.eq(200);
            cy.log(JSON.stringify(Response.body))
 
         })
    });


    it('Retrieve Balance', () => {

        cy.request({
            method:"GET",
            url:baseurl+"/api/v1/balance",
            headers:{
                "Content-Type":"application/json"
            }

        }).then((Response)=> {
            expect(Response.status).to.eq(200);
            cy.log(JSON.stringify(Response.body))

        })
        
    });

    it('List Transactions', () => {

        cy.request({
            method:"GET",
            url:baseurl+"/api/v1/transactions",
            headers:{
                "Content-Type":"application/json"
            }

        }).then((Response)=> {
            expect(Response.status).to.eq(200);
            cy.log(JSON.stringify(Response.body))

        })
        
    });

    it('transfer', () => {
        cy.request({
            method:"POST",
            url:baseurl+"/api/v1/transactions",
            headers:{
                "Content-Type":"application/json"
            },
            body:{
                "recipient_address":"0x1234567890ABCDEF",
                "amount":5.0,
                "currency":"ETH"
            }
        }).then((Response)=> {
            expect(Response.status).to.eq(200);
            cy.log(JSON.stringify(Response.body))
 
         })
    });


    it('calculate fees', () => {
        cy.request({
            method:"POST",
            url:baseurl+"/api/v1/transaction_fee",
            headers:{
                "Content-Type":"application/json"
            },
            body:{
                "amount":2.5,
                "currency":"BTC",
                "recipient_address":"0x1234567890ABCDE"
            }
        }).then((Response)=> {
            expect(Response.status).to.eq(200);
            cy.log(JSON.stringify(Response.body))
 
         })
    });


    it('Get Exchange Rates', () => {

        cy.request({
            method:"GET",
            url:baseurl+"/api/v1/exchange_rates",
            headers:{
                "Content-Type":"application/json"
            }

        }).then((Response)=> {
            expect(Response.status).to.eq(200);
            cy.log(JSON.stringify(Response.body))

        })
        
    });










   //dnt 
});