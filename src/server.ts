import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

const start = async () => {
  try {
    await mongoose.connect(config.mongo_uri as string, {
      // dbName: "taskManager",
    })

    app.listen(config.port, () => {
      console.log(`server is running on ${config.port}`)
    })
  } catch (err) {
    console.log(err)
  }
}

start()
