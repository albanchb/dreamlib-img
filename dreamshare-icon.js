class DreamshareIconLibrary {
  constructor() {
    this.basePath = 'https://dreamshare.fr/lib/icons/'; 
    this.icons = {
      medal1: `${this.basePath}medal1.png`,
      medal2: `${this.basePath}medal2.png`,
      medal3: `${this.basePath}medal3.png`,
      moon: `${this.basePath}moon.png`,
      hey: `${this.basePath}hey.png`,
      gem: `${this.basePath}gem.png`,
      flame: `${this.basePath}flame.png`,
      favicon: `${this.basePath}favicon.jpg`,
      dreamshare: `${this.basePath}dreamshare.png`,
      tryhackme: `${this.basePath}tryhackme.png`,
      hitler: `${this.basePath}hitler.gif`,
    };
  }

  createIconElement(iconName, width, height) {
    const img = document.createElement('img');
    img.src = this.icons[iconName];
    img.alt = iconName;
    img.classList.add('icon');

    img.style.width = width || '50px';
    img.style.height = height || '50px';
    img.style.objectFit = 'contain'; 

    return img;
  }

  replaceIcons() {
    const icons = document.querySelectorAll('i'); 
    icons.forEach(icon => {
      const iconName = icon.className; 
      const width = icon.style.width || '50px'; 
      const height = icon.style.height || '50px'; 
      if (this.icons[iconName]) {
        const iconElement = this.createIconElement(iconName, width, height);
        icon.parentNode.replaceChild(iconElement, icon);
      }
    });
  }
}

function initDreamshareIcons() {
  const dreamshareIconLibrary = new DreamshareIconLibrary();
  dreamshareIconLibrary.replaceIcons(); 
}

initDreamshareIcons();
