import axios from 'axios';

import config from './config';

axios.get(`${config.serverUrl}/api/contests`).then(

    resp => {

            console.log("RESP DATA");
            console.log(resp.data);
        }

);//.catch(err => console.log(err));
