// JS para PanelSolar con DetectableArea usando Cliente MOUSE
document.querySelector('.detectable-area').addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const panel = document.querySelector('.solar-panel');
    const sol = document.querySelector('.sun');

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Mover el "sol" al cursor
    sol.style.left = `${mouseX}px`;
    sol.style.top = `${mouseY}px`;

    const panelRect = panel.getBoundingClientRect();
    const panelX = panelRect.left + panelRect.width / 2;
    const panelY = panelRect.top + panelRect.height / 2;

    const angleDeg = Math.atan2(mouseY - (panelY - rect.top), mouseX - (panelX - rect.left)) * 180 / Math.PI;
    
    panel.style.transform = `translateX(-50%) rotate(${angleDeg}deg)`;
});
// JavaScript para el efecto parallax
window.addEventListener('scroll', function() {
    const parallax = document.querySelectorAll('.parallax');

    for (let item of parallax) {
        let scrollPosition = window.pageYOffset;
        let itemOffsetTop = item.offsetTop;
        let itemHeight = item.offsetHeight;

        if (scrollPosition >= itemOffsetTop - window.innerHeight && scrollPosition <= itemOffsetTop + itemHeight) {
            item.querySelector('.parallax-bg').style.transform = `translateY(${scrollPosition - itemOffsetTop}px)`;
        }
    }
});


function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
//FuncionDe Botones TOGGLE and Download
document.getElementById('toggleButton').addEventListener('click', function() {
    var codeBlock = document.getElementById('codeBlock');
    if (codeBlock.classList.contains('hidden')) {
        codeBlock.classList.remove('hidden');
    } else {
        codeBlock.classList.add('hidden');
    }
});
document.getElementById('downloadButton').addEventListener('click', function() {
    window.open('https://mega.nz/file/TB1zlAAL#UnAN7UJyRvEg6ryTmH95heWX-fzrg86v7qiR0KHX5Gs', '_blank');
});
