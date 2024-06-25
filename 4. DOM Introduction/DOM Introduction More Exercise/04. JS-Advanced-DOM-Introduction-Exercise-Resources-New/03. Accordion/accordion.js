function toggle() {
    let x = document.getElementById('extra');
    if (x.style.display === 'none' || x.style.display === '') {
        x.style.display = 'block';
        document.querySelector('.button').textContent = 'Less';
    } else {
        x.style.display = 'none';
        document.querySelector('.button').textContent = 'More';
    }
}