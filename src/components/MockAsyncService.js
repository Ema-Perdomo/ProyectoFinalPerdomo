//Practica de asincronico actividad de clase
const productos = [{
    id : 1,
    nombre : 'Mancuerna',
    precio : 25  
  }, {
    id : 2,
    nombre : 'Barra',
    precio : 40 
  }, {
    id : 3,
    nombre : 'Discos',
    precio : 20 
  }];
  
  const getProductos=()=> {
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(productos);      
      },3000);
    });
  }
  
  async function awaitProd(){
    try{
      const prodAwait = await getProductos();
      console.log(prodAwait);
    }catch(err){
      console.log(err);
    }
  }
  awaitProd()
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  