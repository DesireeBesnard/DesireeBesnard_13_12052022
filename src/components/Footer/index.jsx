function Footer() {

    const date = new Date().getFullYear()

    return (
        <footer class="footer">
            <p class="footer-text">Copyright {date} Argent Bank</p>
        </footer>
    )
}

export default Footer;