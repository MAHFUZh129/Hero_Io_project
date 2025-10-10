
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


const removeFromDB=(id)=>{
  const storedAppData= JSON.parse(localStorage.getItem('installedApps')) || [];
  const updatedAppData=storedAppData.filter(app => app.id !== id);

localStorage.setItem('installedApps', JSON.stringify(updatedAppData));
};





export {addToStoreDB,getStoredApp,removeFromDB};