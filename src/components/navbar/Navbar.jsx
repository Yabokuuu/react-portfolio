import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <div className="wrapper">
            <span>Olushola Olateju</span>
            <div className="social">
                <a href="https://www.instagram.com/ihatesholz/" target="_blank" rel="noreferrer"><img src="/instagram.png" alt="instagram"></img></a>
                <a href="https://www.linkedin.com/in/olushola-olateju-575b78257/" target="_blank" rel="noreferrer"><img src="/linkedin.png" alt="linkedin"></img></a>
                <a href="https://wa.me/+447764879835" target="_blank" rel="noreferrer" ><img src="/whatsapp.png" alt="whatsapp"></img></a>
                <a href="https://github.com/Yabokuuu" target="_blank" rel="noreferrer" ><img src="/github-mark.png" alt="github"></img></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar