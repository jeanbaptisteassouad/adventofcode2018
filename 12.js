(()=>{
  const content = document.firstElementChild.lastElementChild.firstElementChild.innerText
  
  const lines = content.split('\n').map(a=>parseInt(a)).slice(0,-1)

  const freq_array = [0]
  let ans
  let acc = 0
  let i = 0
  const len = lines.length

  while (true) {
    console.log(i)
    const val = lines[i%len]

    acc = acc+val

    const is_already_there = freq_array.reduce((acc2,val2)=>val2===acc||acc2,false)
    
    if (is_already_there) {
      ans = acc
      break
    } else {
      freq_array.push(acc)
    }

    i++
  }

  return ans
})()
