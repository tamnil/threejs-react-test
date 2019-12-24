
let angleId = 0
export const addAngle = text => ({
  type: 'ADD_TODO',
  id: angleId++,
  text
})

