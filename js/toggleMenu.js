const toggleMenu = () => {
    const menuToggle = document.querySelector('.mobile-menu');
    menuToggle.classList.toggle('active');

    const navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active');
}