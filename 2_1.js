(()=>{
  const content = document.firstElementChild.lastElementChild.firstElementChild.innerText

  const lines = content.split('\n').slice(0,-1)

  const hasSameLetter = a => a.split('')
    .map(a=>[a,1])
    .reduce((acc,val)=>{
      let alreadyHere = false
      acc = acc.map(a=>{
        if (a[0]===val[0]) {
          alreadyHere = true
          return [a[0],a[1] + 1]
        } else {
          return a
        }
      })

      if (alreadyHere === false) {
        acc = acc.concat([val])
      }

      return acc
    },[])
    .reduce((acc,val)=>{
      const next_acc = acc.slice()
      if (val[1] === 2) {
        next_acc[0] = next_acc[0] || true
      }
      if (val[1] === 3) {
        next_acc[1] = next_acc[1] || true
      }
      return next_acc
    },[false,false])
    .map(a=>a+0)


  return lines.map(hasSameLetter)
    .reduce((acc,val)=>[acc[0]+val[0],acc[1]+val[1]],[0,0])
    .reduce((acc,val)=>acc*val,1)

})()
