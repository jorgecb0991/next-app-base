import api from './_api'

const findInvoices = (request) => {
    
    return api.get( 'http://localhost:8080/invoices',request)
}

const invoice = {
    findInvoices
}

export default invoice