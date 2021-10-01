const baseURL = chrome.runtime.getURL('assets/images/photos/');
const photos = [
    'apelido.png',
    'ave-maria.png',
    'bixo.png',
    'charme.png',
    'faixa.png',
    'graca_de_deus.png',
    'hostia.png',
    'louvor.png',
    'poster.png',,
    'prof_catita_happy.png',
    'prof_catita_sad.png',
    'prof_catita.png',
    'prof_mutation.png',
    'soldado.png',
    'sorriso_cativante.png',
    'uniforme.png',
    'verao.png',
];
const photosLength = photos.length;

chrome.runtime.onMessage.addListener(function (message, sender, senderResponse) {
    const randomPhoto = photos[Math.floor(Math.random() * photosLength)];
    const photoURL = `${baseURL}${randomPhoto}`;
    if (message.msg === "image") {
        senderResponse({ data: {link: photoURL}, index: message.index });
        return true;  // Will respond asynchronously.
    }
});