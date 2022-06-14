//  nodejs get local ip address
// https://stackoverflow.com/questions/3653065/get-local-ip-address-in-node-js
import ip from 'ip';
import os from 'os';

const ifaces = os.networkInterfaces();

console.log(ifaces);
console.log(ip.address());
