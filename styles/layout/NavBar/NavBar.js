export default theme => ({
    title: {
        color: 'blue'
    }
})

function myfunction() {
    var num = 0;
    const nav = document.getElementsByClassName('nav-a')
    if (window.scrollY > num) {
        nav.classList.add("nav-green");
    } else {
        nav.classList.remove("nav-green");
    }
}
