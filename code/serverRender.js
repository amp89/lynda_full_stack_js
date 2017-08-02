import axios from 'axios';

import config from './config';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';



const getApiUrl = contestId => {
    if (contestId){
        return `${config.serverUrl}/api/contest/${contestId}`;
    }
    return `${config.serverUrl}/api/contests`;

}

const getInitialData = (contestId,apiData) => {
    if (contestId){
        return {currentContestId: apiData.id,
        contests:{
            [apiData.id]:apiData
        }};
    }else{

        return {
                contests: apiData.contests
        };
    };

};



const serverRender = (contestId) =>
    axios.get(getApiUrl(contestId)).then(

            resp => {
                    const initialData = getInitialData(contestId, resp.data);
                    return {
                        initialMarkup: ReactDOMServer.renderToString(
                                <App initialData={initialData}/>
                        ),
                        initialData: resp.data

                };
            }

        )
    .catch(console.error);


export default serverRender;
