let images = document.querySelectorAll('img, picture > source');

for (let i = 0; i < images.length; i++) {
    const image = images[i];
    chrome.runtime.sendMessage({ msg: 'replaceImage', index: i }, function ({ data, index }) {
        if (image.tagName === 'IMG') {
            image.src = data.photoURL;
            image.srcset = data.photoURL;
        }

        if (image.tagName === 'SOURCE') {
            image.srcset = data.photoURL;
            image.type = 'image/png';
        }
    });
}