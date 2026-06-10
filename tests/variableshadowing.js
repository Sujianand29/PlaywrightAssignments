const browserVersion = "Chrome";

function getBrowserVersion(){

    if(browserVersion === "Chrome"){
        let browserVersion = "chrome let variable";
        console.log("Browser Version inside if block: " + browserVersion);
    }
    console.log("Browser Version inside function: " + browserVersion);
}
getBrowserVersion();