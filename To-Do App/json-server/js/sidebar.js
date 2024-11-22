window.openSidebar = () => {
    const sidebar = document.getElementById("sidebar");
            sidebar.classList.toggle("-translate-x-full"); // Hide
            sidebar.classList.toggle("translate-x-0");    // Show
};