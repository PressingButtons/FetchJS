const dom_parser = new DOMParser( );

export function fetchJSON(url, config = { }) {
    return fetch(url, config).then( res => res.json( ));
}

export function fetchText(url, config = { }) {
    return fetch(url, config).then( res => res.text( ));
}

export function fetchHTML(url, config = { }) {
    return fetch(url, config).then(res => res.text( )).then(parseHTML);
}

function parseHTML(html) {
    return dom_parser.parseFromString(html, 'text/html');
}