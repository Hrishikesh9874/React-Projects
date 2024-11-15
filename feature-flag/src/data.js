
const dummyApiResponse = {
    showLightAndDarkMode: true,
    showTikTacToeBoard: true,
    showRandomColorGenerator: true,
    showAccordian: true,
    showTreeView: true
}

function featureFlagDataServiceCall(){
    return new Promise((res, rej)=>{
        if(dummyApiResponse) setTimeout(res(dummyApiResponse), 500);
        else rej('Some error occured, Please try again!');
    })
}

export default featureFlagDataServiceCall;