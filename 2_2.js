(()=>{
  const content = document.firstElementChild.lastElementChild.firstElementChild.innerText

  const lines = content.split('\n').slice(0,-1).map(a=>a.split(''))

  const a_char_code = 97

  const charToInt = a => a.charCodeAt(0) - a_char_code

  let sum_array = lines.map(a =>
    a.map(charToInt).reduce((acc,val)=>acc+val,0)
  )

  should_inspect_array = sum_array.map((a,a_i) => {
    return sum_array.reduce((acc,b,b_i) => {
      let should_inspect = Math.abs(a-b)
      if (0 < should_inspect && should_inspect < 26) {
        should_inspect = true
      } else {
        should_inspect = false
      }

      if (b_i <= a_i) {
        should_inspect = false
      }

      return acc.concat([should_inspect])
    },[])
  })

  const areTheSameExceptOne = (a,b) => {
    return 0 < a.reduce((acc,a,i)=>{
      if (a !== b[i]) {
        acc--
      }
      return acc
    }, 2)
  }

  let ans = should_inspect_array.map((x,a_i)=>{
    return x.map((should_inspect,b_i)=>{
      if (should_inspect) {
        const a = lines[a_i]
        const b = lines[b_i]
        return areTheSameExceptOne(a,b)
      } else {
        return false
      }
    }).reduce((acc,val,ind)=>{
      if (val) {
        return [true,a_i,ind]
      } else {
        return acc
      }
    }, [false,-1,-1])
  }).filter(a=>a[0])
  [0]
  .slice(1)
  .map(a=>lines[a])

  ans = ans[0].filter((a,i)=>a===ans[1][i]).join('')

  return ans

})()
