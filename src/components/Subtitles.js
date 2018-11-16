export default function (time) {
    console.log(time)
  if (time < 1.2) {
    return `Hejså!<br/>Ahoj!<br/>Ciao!`
  } else if (time < 3.4) {
    return 'My job is to create websites'
  } else if (time < 7.5) {
    return 'that are functional and fun'
  } else if (time < 9.3) {
    return 'I combine knowledge from'
  } else if (time < 11.3) {
    return 'communication, design and development'
  } else if (time < 13.5) {
    return 'so the product makes sense'
  } else if (time < 15.9) {
    return 'from the very beginning'
  } else if (19 < time && time < 20.7) {
    return 'when it comes to design'
  } else if (20.7 < time && time < 23.7) {
    return 'I like to go beyond the limits.'
  } else if (23.7 < time && time < 26) {
    return 'Only then we can create'
  } else if (26 < time && time < 32) {
    return 'outstanding, innovative product'
  } else if (32 < time) {
    return 'are you looking for an intern?'
  }
}
