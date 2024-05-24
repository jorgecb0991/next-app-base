import { reduxTypes } from '../../types';
import invoiceService from '../../services/invoiceService';

const { request, list, failure } = reduxTypes.invoiceType;

const invoiceRequest = (listeners) => ({ type: request, payload: listeners });
const invoiceFailure = (response) => ({ type: failure, payload: response });
const getInvoiceListSuccess = (response) => ({ type: list, payload: response });


const findInvoices = (request, listeners) => {
    return (dispatch) => {
        dispatch(invoiceRequest(listeners));
        invoiceService.findInvoices(request)
            .then(response => dispatch(getInvoiceListSuccess(response.content)))
            .catch(error => dispatch(invoiceFailure(error)));
    }
}

const invoiceAction = {
    findInvoices
}

export default invoiceAction