import socketIOClient from 'socket.io-client';
const isDev = process.env.NODE_ENV === 'development';

const socketIo = isDev ? socketIOClient() : socketIOClient();

export default socketIo;
