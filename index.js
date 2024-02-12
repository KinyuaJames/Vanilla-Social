// root
var root = document.querySelector(':root')

// sidebar
const menuItems = document.querySelectorAll('.menu-item')
// messages
const messagesNotification = document.querySelector('#messages-notification')
const messages = document.querySelector('.messages')
const message = document.querySelectorAll('.message')
const messageSearch = document.querySelector('#message-search')
// customize theme
const theme = document.querySelector('#sidebar-theme')
const themeModal =  document.querySelector('.customize-theme')
const fontSizes = document.querySelectorAll('.choose-size span')
// customize colors
const colorPalette = document.querySelectorAll('.choose-color span')
// customize darkmode
const bg = document.querySelectorAll('.choose-bg div')
const bg2 = document.querySelector('.bg-2')
const bg3 = document.querySelector('.bg-3')
let dimColor;
let whiteColor;
let darkColor;




const changeActiveItem = ()=>{
  menuItems.forEach(item=>{
    item.classList.remove('active')
  })
}

menuItems.forEach(item=>{
  item.addEventListener('click',()=>{
    changeActiveItem()
    item.classList.add('active')
    if (item.id != 'notification') {
      document.querySelector('.notification-popup').style.display = 'none'
      
    }else{
      document.querySelector('.notification-popup').style.display = 'block'
      document.querySelector('#notification .notification-count').style.display = 'none'
    }
  })
})

// messages
messagesNotification.addEventListener('click', ()=>{
  // console.log('aah');
  messages.style.boxShadow = '0 0 2rem var(--color-primary)'
  messagesNotification.querySelector('.notification-count').style.display = 'none'
  setTimeout(() => {
    messages.style.boxShadow = 'none'
    
  }, 2000);
})

// search messages
const searchMessage = ()=>{
  const val = messageSearch.value.toLowerCase()
  message.forEach(chat => {
    let name = chat.querySelector('h5').textContent.toLowerCase()
    if (name.indexOf(val)!= -1) {
      chat.style.display = 'flex'
    }else{
      chat.style.display = 'none'
      
    }
  })
}
messageSearch.addEventListener('keyup', searchMessage)



// change theme
const opneThemeModal = ()=>{
  themeModal.style.display = "grid"
}
const closeThemeModal = (e)=>{
  if (e.target.classList.contains('customize-theme')) {
    themeModal.style.display = "none"
  }
}

const removeSizeSelector = () =>{
  fontSizes.forEach(size=>{
    size.classList.remove('active')
  })
}

fontSizes.forEach(size=>{
  size.addEventListener('click',()=>{
    removeSizeSelector()
    let fontSize
    size.classList.toggle('active')

    if (size.classList.contains('font-size-1')) {
      fontSize = '10px'
      root.style.setProperty('--sticky-top-left', '5.4rem')
      root.style.setProperty('--sticky-top-right', '5.4rem')
    } else if (size.classList.contains('font-size-2')){
      fontSize = '13px'
      root.style.setProperty('--sticky-top-left', '5.4rem')
      root.style.setProperty('--sticky-top-right', '-7rem')
    }else if (size.classList.contains('font-size-3')){
      fontSize = '16px'
      root.style.setProperty('--sticky-top-left', '-2rem')
      root.style.setProperty('--sticky-top-right', '-17rem')
    }else if (size.classList.contains('font-size-4')){
      fontSize = '19px'
      root.style.setProperty('--sticky-top-left', '-5rem')
      root.style.setProperty('--sticky-top-right', '-25rem')
    }else if (size.classList.contains('font-size-5')){
      fontSize = '22px'
      root.style.setProperty('--sticky-top-left', '-12rem')
      root.style.setProperty('--sticky-top-right', '-35rem')
    }

    document.querySelector('html').style.fontSize = fontSize
  })


})

// customize color
const changeActiveColorClass = ( )=>{
  colorPalette.forEach(colorPick =>{
    colorPick.classList.remove('active')
  })
}

colorPalette.forEach(color=>{
  color.addEventListener('click', ()=>{
    let priHue
    if(color.classList.contains('color-1')){
      priHue = 252
    }else  if(color.classList.contains('color-2')){
      priHue = 52
    }else  if(color.classList.contains('color-3')){
      priHue = 352
    }else  if(color.classList.contains('color-4')){
      priHue = 152
    }else  if(color.classList.contains('color-5')){
      priHue = 202
    }
    changeActiveColorClass()
    color.classList.add('active')
    root.style.setProperty('--primary-color-hue', priHue)
  })
})

// change darkmode
const changeBg = () =>{
  bg.forEach(i => {i.classList.remove('active')})
  root.style.setProperty('--dark-color-lightness', darkColor);
  root.style.setProperty('--dim-color-lightness', dimColor);
  root.style.setProperty('--white-color-lightness', whiteColor);
}
bg.forEach(mode=>{
  mode.addEventListener('click', ()=>{
    if (mode.classList.contains('bg-2')) {
      darkColor = '95%'
      whiteColor = '20%'
      dimColor = '15%'
    } else if (mode.classList.contains('bg-3')) {
      darkColor = '95%'
      whiteColor = '10%'
      dimColor = '0%'
      
    }else if (mode.classList.contains('bg-1')) {
      darkColor = '17%'
      whiteColor = '100%'
      dimColor = '95%'
      priHue=252;
      root.style.setProperty('--primary-color-hue', priHue)
    }
    changeBg()
    mode.classList.add('active')
  })
})

themeModal.addEventListener('click', closeThemeModal)
theme.addEventListener('click', opneThemeModal)