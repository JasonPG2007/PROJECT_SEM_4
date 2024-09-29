const LeftMenu = () => {
  return (
    <aside className="left-sidebar">
      {/* Sidebar scroll */}
      <div>
        <div className="brand-logo d-flex align-items-center justify-content-between">
          <a href="/admin/dashboard" className="text-nowrap logo-img">
            <img src="/src/assets/LOGO2.png" width="100" alt="" />
          </a>
          <div
            className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
            id="sidebarCollapse"
          >
            <i className="ti ti-x fs-8"></i>
          </div>
        </div>
        {/* Sidebar navigation */}
        <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
          <ul id="sidebarnav">
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span className="hide-menu">Home</span>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="/admin/dashboard"
                aria-expanded="false"
              >
                <span>
                  <i className="ti ti-layout-dashboard"></i>
                </span>
                <span className="hide-menu">Dashboard</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="/" aria-expanded="false">
                <span>
                  <i className="ti ti-world-www"></i>
                </span>
                <span className="hide-menu">Page user</span>
              </a>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span className="hide-menu">Category books</span>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="/admin/cate-book/"
                aria-expanded="false"
              >
                <span>
                  <i className="ti ti-list"></i>
                </span>
                <span className="hide-menu">List</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="/admin/cate-book/create"
                aria-expanded="false"
              >
                <span>
                  <i className="ti ti-plus"></i>
                </span>
                <span className="hide-menu">Create</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="/admin/cate-book/updated"
                aria-expanded="false"
              >
                <span>
                  <i className="ti ti-edit"></i>
                </span>
                <span className="hide-menu">Update</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="/admin/cate-book/deleted"
                aria-expanded="false"
              >
                <span>
                  <i className="ti ti-trash"></i>
                </span>
                <span className="hide-menu">Deleted</span>
              </a>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span className="hide-menu">BOOKS</span>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="/admin/book/"
                aria-expanded="false"
              >
                <span>
                  <i className="ti ti-list"></i>
                </span>
                <span className="hide-menu">List</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="/admin/book/create"
                aria-expanded="false"
              >
                <span>
                  <i className="ti ti-plus"></i>
                </span>
                <span className="hide-menu">Create</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="/admin/book/updated"
                aria-expanded="false"
              >
                <span>
                  <i className="ti ti-edit"></i>
                </span>
                <span className="hide-menu">Update</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="/admin/book/deleted"
                aria-expanded="false"
              >
                <span>
                  <i className="ti ti-trash"></i>
                </span>
                <span className="hide-menu">Deleted</span>
              </a>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span className="hide-menu">User</span>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="/sign-in" aria-expanded="false">
                <span>
                  <i className="ti ti-login"></i>
                </span>
                <span className="hide-menu">Sign in</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="/sign-up" aria-expanded="false">
                <span>
                  <i className="ti ti-user-plus"></i>
                </span>
                <span className="hide-menu">Sign up</span>
              </a>
            </li>
          </ul>
        </nav>
        {/* End Sidebar navigation  */}
      </div>
      {/* End Sidebar scroll */}
    </aside>
  );
};
export default LeftMenu;