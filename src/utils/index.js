
function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  
async function setDelay(delay){
    await sleep(delay);
};


export { setDelay };