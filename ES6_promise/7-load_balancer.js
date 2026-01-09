export default function loadBalancer(chinaDownload, USDownload) {
    return Promise.race([chinaDownload, USDownload]); // race start all promises at the same time, returns the first one that finishes doesnt matter if winner is fullfilled or rejected. 
    }