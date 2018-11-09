import CONSTS from '../configs/const'

const requestType = [
    'json',
    'arrayBuffer',
    'blob',
    'text'
]
export default (requestUrl, parms = {}) => {
    const apiURL = `${CONSTS.API_ENDPOINT}${requestUrl}`;
    const fetchRequest = (method) => {
        return fetch(apiURL, Object.assign(parms, { method }))
            .then(response => response[parms.dataType || 'json']())
    }
    return {
        get: () => fetchRequest('GET'),
        post: () => fetchRequest('POST'),
    }
}
