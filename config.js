const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "null", //servidor que deseas que consuma o (*) en caso que sea acceso libre
                    credentials: true
                }
            ]
        }
    }
}
module.exports.config = config