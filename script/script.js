let rootElem = $('#root');

let imageArr = [
    'https://cdn.fishki.net/upload/post/201405/15/1269354/6255d7e14e84a5998c8f918f308e9192.jpg',
    'https://avatars.mds.yandex.net/get-pdb/25978/538b8e63-03db-47a2-88bb-3ddbf17019cd/s1200',
    'https://avatars.mds.yandex.net/get-pdb/28866/d0ded605-9553-4be4-9df4-29f1f7ae7bde/s1200',
    'https://pbs.twimg.com/profile_images/617005083461591040/umq-UquG_400x400.jpg',
];

for (let i = 0; i < imageArr.length; i++) {
    let inputContent = imageArr[i];
    addNewCard(inputContent);
}

$('button').click(function() {
    let inputContent = $('#input1').val();
    addNewCard(inputContent);
})

function addNewCard(url) {
    let card = $('<div>');
    let imgElem = $('<img>');
    let closeElem = $('<div>');
    let closeX = $('<span>');
    closeElem.addClass('close');
    closeX.text('X');
    card.addClass('card');
    imgElem.attr('src', url);
    card.append(imgElem);
    closeElem.append(closeX);
    card.append(closeElem);
    rootElem.append(card);

    closeElem.click(function() {
        $(this).parent('.card').remove()
    });

    card.click(function() {
        let modelImg = $(this).find('img').attr("src");
        modelShower(modelImg);
    });
};

function modelShower(element) {
    let model = $('<div>');
    model.attr('id', 'model');
    let modelImgElem = $('<img>');
    modelImgElem.attr('src', element);
    model.append(modelImgElem);
    $('body').append(model);
    model.click(() => model.remove());
};