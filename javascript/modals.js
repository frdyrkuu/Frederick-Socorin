modal();

function modal() {
    const modal = document.querySelector('.modal');

    const certmodal1 = document.querySelector('.certmodal1');
    const image1 = document.getElementById("cert-img-1").src;

    const certmodal2 = document.querySelector('.certmodal2');
    const image2 = document.getElementById("cert-img-2").src;

    const certmodal3 = document.querySelector('.certmodal3');
    const image3 = document.getElementById("cert-img-3").src;

    const certmodal4 = document.querySelector('.certmodal4');
    const image4 = document.getElementById("cert-img-4").src;

    certmodal1.addEventListener('click', function () {
        modal.classList.remove('hidden');
        modal.classList.add('visible');

        document.querySelector('.cert-img').setAttribute("src", image1);
    });

    certmodal2.addEventListener('click', function () {
        modal.classList.remove('hidden');
        modal.classList.add('visible');

        document.querySelector('.cert-img').setAttribute("src", image2);
    });

    certmodal3.addEventListener('click', function () {
        modal.classList.remove('hidden');
        modal.classList.add('visible');

        document.querySelector('.cert-img').setAttribute("src", image3);
    });

    certmodal4.addEventListener('click', function () {
        modal.classList.remove('hidden');
        modal.classList.add('visible');

        document.querySelector('.cert-img').setAttribute("src", image4);
    });
}


function closemodal() {
    const modal = document.querySelector('.modal');

    const close = document.querySelector('.closemodal');

    const certmodal1 = document.querySelector('.certmodal1');
    const image1 = document.getElementById("cert-img-1").src;

    modal.classList.remove('visible');
    modal.classList.add('hidden');

}