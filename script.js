import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 1,
    duration: '20s'
}

export default function () {
    http.get('https://test.k6.io');
    sleep(1);
}
