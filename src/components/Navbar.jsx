import img from './img/logo.png'
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
                <div class="collapse navbar-collapse" style={{ display: 'flex', justifyContent: 'center' }} id="navbarSupportedContent">
                    <ul class="navbar-nav" style={{ paddingRight: '5rem' }}>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#" style={{ color: '#FCAEAE', fontSize: '20px', paddingRight: '2rem' }}><b>Home</b></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#" style={{ color: '#FCAEAE', fontSize: '20px', paddingRight: '2rem' }}><b>About</b></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#" style={{ color: '#FCAEAE', fontSize: '20px', paddingRight: '2rem' }}><b>Contact</b></a>
                        </li>
                    </ul>
                    <img src={img} alt="" style={{ width: '100px' }} />
                    <form class="d-flex" role="search" style={{ paddingLeft: '5rem' }}>
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn" type="submit" style={{ backgroundColor: '#FCAEAE', color: '#FFFF' }}>Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;