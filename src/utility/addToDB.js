
const getStoredApp=()=>{
    const storedAppStr= localStorage.getItem("installedApps");

    if(storedAppStr){
        const storedAppData=JSON.parse(storedAppStr)
        return storedAppData;
    }
    else{
        return[]
    }

}


const addToStoreDB=(id)=>{

     const storedAppData =getStoredApp();
     if(storedAppData.includes(id)){
        alert("Already Exist!!")
     }
    else{
        storedAppData.push(id)
        const data = JSON.stringify(storedAppData)
        localStorage.setItem("installedApps",data)
    }

}

export {addToStoreDB,getStoredApp};