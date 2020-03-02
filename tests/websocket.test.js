const WebSocket = require('ws');

describe('WebSockets', () => {
    it('Connect websockets response', async done => {
        const websocket = new WebSocket('wss://echo.websocket.org')
            websocket.on('open', function open() {
                websocket.send('Websocket test works!');
            });

            websocket.on('message', (message) => {
                expect(message).toEqual('Websocket test works!');
                websocket.close();
            });

            websocket.on('close', () => done());
    });
});