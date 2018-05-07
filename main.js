const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let img = new Image()
let filename = ''

const downloadBtn = document.getElementById('download-btn')
const uploadFile = document.getElementById('upload-file')
const revertBtn = document.getElementById('revert-btn')

// Add Filters & Effects
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('filter-btn')) {
    if (e.target.classList.contains('brightness-add')) {
      Caman('#canvas', img, function() {
        this.brightness(5).render()
      })
    } else if (e.target.classList.contains('brightness-remove')) {
      Caman('#canvas', img, function () {
        this.brightness(-5).render();
      })
    }
    else if (e.target.classList.contains('contrast-add')) {
      Caman('#canvas', img, function () {
        this.contrast(5).render();
      })
    }
    else if (e.target.classList.contains('contrast-remove')) {
      Caman('#canvas', img, function () {
        this.contrast(-5).render();
      })
    }
    else if (e.target.classList.contains('saturation-add')) {
      Caman('#canvas', img, function () {
        this.saturation(5).render();
      })
    }
    else if (e.target.classList.contains('saturation-remove')) {
      Caman('#canvas', img, function () {
        this.saturation(-5).render();
      })
    }
    else if (e.target.classList.contains('vibrance-add')) {
      Caman('#canvas', img, function () {
        this.vibrance(5).render();
      })
    }
    else if (e.target.classList.contains('vibrance-remove')) {
      Caman('#canvas', img, function () {
        this.vibrance(-5).render();
      })
    }
    else if (e.target.classList.contains('vintage-add')) {
      Caman('#canvas', img, function () {
        this.vintage().render();
      })
    }
    else if (e.target.classList.contains('lomo-add')) {
      Caman('#canvas', img, function () {
        this.lomo().render();
      })
    }
    else if (e.target.classList.contains('clarity-add')) {
      Caman('#canvas', img, function () {
        this.clarity().render();
      })
    }
    else if (e.target.classList.contains('sincity-add')) {
      Caman('#canvas', img, function () {
        this.sinCity().render();
      })
    }
    else if (e.target.classList.contains('crossprocess-add')) {
      Caman('#canvas', img, function () {
        this.crossProcess().render();
      })
    }
    else if (e.target.classList.contains('pinhole-add')) {
      Caman('#canvas', img, function () {
        this.pinhole().render();
      })
    }
    else if (e.target.classList.contains('nostalgia-add')) {
      Caman('#canvas', img, function () {
        this.nostalgia().render();
      })
    }
    else if (e.target.classList.contains('hermajesty-add')) {
      Caman('#canvas', img, function () {
        this.herMajesty().render();
      })
    }
  }
})

// Rever Filters
revertBtn.addEventListener('click', (e) => {
  Caman('#canvas', img, function () {
    this.revert()
  })
})

// Upload File
uploadFile.addEventListener('change', (e) => {
  // Get File
  const file = document.getElementById('upload-file').files[0]

  //  Init FileReader
  // https://developer.mozilla.org/es/docs/Web/API/FileReader

  const reader = new FileReader()

  if (file) {
    // Set file name
    fileName = file.name
    // Read data as URL
    reader.readAsDataURL(file)
  }

  // Add image to canvas
  reader.addEventListener('load', () => {
    // Create img
    img = new Image()
    // Set src
    img.src = reader.result
    // On image load, add to canvas
    img.onload = function() {
      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0, img.width, img.height)
      canvas.removeAttribute('data-caman-id')
    }
  }, false)
})

// Download Event
downloadBtn.addEventListener('click', (e) => {
  // Get file ext
  const fileExtension = fileName.slice(-4)

  // Init new filename
  let newFilename

  // Check image type
  if (fileExtension === '.jpg' || fileExtension === '.png') {
    newFilename = fileName.substring(0, fileName.length - 4) + '-edited.jpg'
  }

  // Call download
  download(canvas, newFilename)

})

// Download function
function download(canvas, filename) {
  // Init event
  let e
  // Create link
  const link = document.createElement('a')

  // Set props
  link.download = filename
  link.href = canvas.toDataURL('image/jpeg', 8.8)
  // New mouse event
  e = new MouseEvent('click')
  // Dispatch event
  link.dispatchEvent(e)
}
