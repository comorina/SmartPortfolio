import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <header class="header-title">
        <nav class="nav-bar bd-grid">
          <div class="logo-web">
            <h2>Comorin</h2>
          </div>
          <div class="nav-element">
            <ul class="nav-element-list">
              <li class="nav-item"><a href="#" class="nav-item-link">Home</a></li>
              <li class="nav-item"><a href="#" class="nav-item-link">About</a></li>
              <li class="nav-item"><a href="#" class="nav-item-link">Education</a></li>
              <li class="nav-item"><a href="#" class="nav-item-link">Achievement</a></li>
              <li class="nav-item"><a href="#" class="nav-item-link">Skill</a></li>
              <li class="nav-item"><a href="#" class="nav-item-link">Project</a></li>
              <li class="nav-item"><a href="#" class="nav-item-link">Hobbies</a></li>
            </ul>
          </div>
          <div class="menu-bar">
            <button class="menu-btn"><i class="bx bx-menu"></i></button>
            <div class="menu-content">
              <a href="#" class="menu-item-link">Home</a>
              <a href="#" class="menu-item-link">About</a>
              <a href="#" class="menu-item-link">Education</a>
              <a href="#" class="menu-item-link">Achievement</a>
              <a href="#" class="menu-item-link">Skill</a>
              <a href="#" class="menu-item-link">Project</a>
              <a href="#" class="menu-item-link">Hobbies</a>
            </div>
          </div>
        </nav>
      </header>
      {/* <!-- ========================================Main Component=================================================== --> */}
      <main class="main-body">
        {/* <!-- ============================================Home============================================================== --> */}
        <section class="home-data">

        </section>
      </main>
    </>
  );
}

export default App;
