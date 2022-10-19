 const productBrand = {
    samsung : 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png',
    motorola : 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Motorola_M_symbol_blue.svg/2048px-Motorola_M_symbol_blue.svg.png'
} 


export const logoMatch = (name) => {
      if(name === 'samsung') return 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png'
      if(name === 'motorola') return 'https://1000marcas.net/wp-content/uploads/2020/01/Motorola-Logo-1-500x411.png'
      if(name === 'iphone') return 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/640px-Apple_logo_black.svg.png'
}