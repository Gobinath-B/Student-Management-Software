var cron = require('node-cron')
const db = require('../config/fb').firestore()
exports.createTask = ()=>{
    cron.schedule('10 * * * *', async () => {
        console.log('running a task every 10 minute');
    });
}

const studentTaskUpdate = async (id = "Swq0AKtoqJTUpwmNPCnV")=>{
    const task_info = await db.collection('task').doc(id).get()    
    let task_data = task_info.data();
    for(let x in task_data){
        task_data[x] = {
            status:false,
            ...task_data[x]
        }
    }
    console.log(task_data);
    await db.collection('students').doc(id).update({task:task_data}) 
}

// studentTaskUpdate()