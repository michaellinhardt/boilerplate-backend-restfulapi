process.env.NODE_ENV = process.env.NODE_ENV || 'development'
import Application from '@michaellinhardt/restfulapi'

import config from './config/index.js'
console.debug('yolo', config.env.port)

class MyServer extends Application {

	constructor () {

		super()
		this.test()
		console.debug(this.config.fake.fakee)

	}

}

const application = new MyServer()

export default application
