(()=>{
  const content = document.firstElementChild.lastElementChild.firstElementChild.innerText
  
  const lines = content.split('\n').map(a=>parseInt(a)).slice(0,-1)

  const ans = lines.reduce((val,acc)=>acc+val,0)

  return ans
})()
