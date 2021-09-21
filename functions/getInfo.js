
exports.handler = function (event, context, callback) {
    // const { name } = JSON.parse(event.body)
    // body: JSON.stringify({name:name}),
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({name:"ms"}),
        headers: {
            'Access-Control-Allow-Origin':'*'
        }
    })
}