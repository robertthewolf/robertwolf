export default function (time) {
    console.log(time)
  if (time < 1.2) {
    return `Hejså!<br/>Ahoj!<br/>Ciao!`
  } else if (time < 3.4) {
    return 'My job is to create websites'
  } else if (time < 7.2) {
    return 'that are functional and fun'
  } else if (time < 9) {
    return 'I combine knowledge from'
  } else if (time < 11) {
    return 'communication, design and development'
  } else if (time < 13) {
    return 'so the product makes sense'
  } else if (time < 15) {
    return 'from the very beginning'
  } else if (17 < time && time < 19) {
    return 'when it comes to design'
  } else if (19 < time && time < 22.3) {
    return 'I like to go beyond the limits.'
  } else if (22.3 < time && time < 24.4) {
    return 'Only then we can create'
  } else if (24.4 < time && time < 29) {
    return 'outstanding, innovative product'
  } else if (29 < time) {
    return 'are you looking for an intern?'
  }
}
