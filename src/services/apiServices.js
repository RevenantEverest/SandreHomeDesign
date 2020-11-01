import axios from 'axios';
const services = {};

services.getInstagramImages = async () => {
    // 5328134428
    let name = "sandrehomedesign";
    return axios.get("https://images"+(Math.random()*3333)+"-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=https://www.instagram.com/" + name + "/");
};

export default services;