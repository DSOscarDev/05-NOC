import { envs } from './config/plugins/envs.plugin';
import { LogModel, MongoDatabase } from './data/mongo';
import { Server } from './presentation/server';


(async() => {
  main();
})();


async function main(){
  
  await MongoDatabase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME,
  })

  // Crear una  coleccion = tables, documento= registro
  // const newLog = await LogModel.create({
  //   message: 'Test mesage desde Mongo',    
  //   origin: 'App.ts',
  //   level: 'low'
  // });

  // await newLog.save();
  // console.log(newLog);

  // const logs = await LogModel.find();  
  //console.log(logs[0]);
  const fechaHoraActual = new Date();
  const fechaHoraActualLocal = fechaHoraActual.toLocaleString();
  console.log(fechaHoraActual);
  console.log(fechaHoraActualLocal);


  // Server.start();
}


