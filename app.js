window.addEventListener('load', () => {
  console.log('load')
  navigator.registerProtocolHandler('mailto', 'https://limonte.github.io/registerProtocolHandler-demo/?send=%s', 'Custom service handler for mailto links')
})