// import token from './token'

/**
 * Transform header based on headerType
 *
 * @param {THeader} headerType
 * 
const xhr = new XMLHttpRequest();
const url = 'https://bar.other/resources/public-data/';

xhr.open('GET', url);
xhr.onreadystatechange = someHandler;
xhr.send();
 */

export const getHeader = (headerType) => {
    const access_token = process.env.BEARER_ACCESS_TOKEN || ''
    let header = {}

    switch (headerType) {
        case 'json':
            header = {
                'Content-Type': 'application/json',
                Authorization: access_token ? `Bearer ${access_token}` : '',
                'Access-Control-Allow-Origin': '*',
            }
            break

        case 'multipart':
            header = {
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*',
                Authorization: access_token ? `Bearer ${access_token}` : '',
            }
            break

        case 'default':
            header = {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
            break

        default:
            header = {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
    }

    return header
}
