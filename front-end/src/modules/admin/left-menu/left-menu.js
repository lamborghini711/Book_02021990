import React, { Component } from 'react';

class LeftMenu extends Component {
  render() {
    return (
      <div>
        {/* Left side column. contains the sidebar */}
        <aside className="main-sidebar">
          {/* sidebar: style can be found in sidebar.less */}
          <section className="sidebar">
            {/* Sidebar user panel */}
            <div className="user-panel">
              <div className="pull-left image">
                <img src="/img/icon-web/user2-160x160.jpg" className="img-circle" alt="user" />
              </div>
              <div className="pull-left info">
                <p>Alexander Pierce</p>
                <a href="1"><i className="fa fa-circle text-success" /> Online</a>
              </div>
            </div>
            {/* search form */}
            <form action="1" method="get" className="sidebar-form">
              <div className="input-group">
                <input type="text" name="q" className="form-control" placeholder="Search..." />
                <span className="input-group-btn">
                  <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search" />
                  </button>
                </span>
              </div>
            </form>
            {/* /.search form */}
            {/* sidebar menu: : style can be found in sidebar.less */}
            <ul className="sidebar-menu" data-widget="tree">
              <li className="header">MAIN NAVIGATION</li>
              <li className="treeview">
                <a href="1">
                  <i className="fa fa-dashboard" /> <span>Dashboard</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li><a href="../../index.html"><i className="fa fa-circle-o" /> Dashboard v1</a></li>
                  <li><a href="../../index2.html"><i className="fa fa-circle-o" /> Dashboard v2</a></li>
                </ul>
              </li>
              <li className="treeview active">
                <a href="1">
                  <i className="fa fa-files-o" />
                  <span>Layout Options</span>
                  <span className="pull-right-container">
                    <span className="label label-primary pull-right">4</span>
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li><a href="../layout/top-nav.html"><i className="fa fa-circle-o" /> Top Navigation</a></li>
                  <li><a href="../layout/boxed.html"><i className="fa fa-circle-o" /> Boxed</a></li>
                  <li className="active"><a href="../layout/fixed.html"><i className="fa fa-circle-o" /> Fixed</a></li>
                  <li><a href="collapsed-sidebar.html"><i className="fa fa-circle-o" /> Collapsed Sidebar</a></li>
                </ul>
              </li>
              <li>
                <a href="../widgets.html">
                  <i className="fa fa-th" /> <span>Widgets</span>
                  <span className="pull-right-container">
                    <small className="label pull-right bg-green">new</small>
                  </span>
                </a>
              </li>
              <li className="treeview">
                <a href="1">
                  <i className="fa fa-pie-chart" />
                  <span>Charts</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li><a href="../charts/chartjs.html"><i className="fa fa-circle-o" /> ChartJS</a></li>
                  <li><a href="../charts/morris.html"><i className="fa fa-circle-o" /> Morris</a></li>
                  <li><a href="../charts/flot.html"><i className="fa fa-circle-o" /> Flot</a></li>
                  <li><a href="../charts/inline.html"><i className="fa fa-circle-o" /> Inline charts</a></li>
                </ul>
              </li>
              <li className="treeview">
                <a href="1">
                  <i className="fa fa-laptop" />
                  <span>UI Elements</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li><a href="../UI/general.html"><i className="fa fa-circle-o" /> General</a></li>
                  <li><a href="../UI/icons.html"><i className="fa fa-circle-o" /> Icons</a></li>
                  <li><a href="../UI/buttons.html"><i className="fa fa-circle-o" /> Buttons</a></li>
                  <li><a href="../UI/sliders.html"><i className="fa fa-circle-o" /> Sliders</a></li>
                  <li><a href="../UI/timeline.html"><i className="fa fa-circle-o" /> Timeline</a></li>
                  <li><a href="../UI/modals.html"><i className="fa fa-circle-o" /> Modals</a></li>
                </ul>
              </li>
              <li className="treeview">
                <a href="1">
                  <i className="fa fa-edit" /> <span>Forms</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li><a href="../forms/general.html"><i className="fa fa-circle-o" /> General Elements</a></li>
                  <li><a href="../forms/advanced.html"><i className="fa fa-circle-o" /> Advanced Elements</a></li>
                  <li><a href="../forms/editors.html"><i className="fa fa-circle-o" /> Editors</a></li>
                </ul>
              </li>
              <li className="treeview">
                <a href="1">
                  <i className="fa fa-table" /> <span>Tables</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li><a href="../tables/simple.html"><i className="fa fa-circle-o" /> Simple tables</a></li>
                  <li><a href="../tables/data.html"><i className="fa fa-circle-o" /> Data tables</a></li>
                </ul>
              </li>
              <li>
                <a href="../calendar.html">
                  <i className="fa fa-calendar" /> <span>Calendar</span>
                  <span className="pull-right-container">
                    <small className="label pull-right bg-red">3</small>
                    <small className="label pull-right bg-blue">17</small>
                  </span>
                </a>
              </li>
              <li>
                <a href="../mailbox/mailbox.html">
                  <i className="fa fa-envelope" /> <span>Mailbox</span>
                  <span className="pull-right-container">
                    <small className="label pull-right bg-yellow">12</small>
                    <small className="label pull-right bg-green">16</small>
                    <small className="label pull-right bg-red">5</small>
                  </span>
                </a>
              </li>
              <li className="treeview">
                <a href="1">
                  <i className="fa fa-folder" /> <span>Examples</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li><a href="../examples/invoice.html"><i className="fa fa-circle-o" /> Invoice</a></li>
                  <li><a href="../examples/profile.html"><i className="fa fa-circle-o" /> Profile</a></li>
                  <li><a href="../examples/login.html"><i className="fa fa-circle-o" /> Login</a></li>
                  <li><a href="../examples/register.html"><i className="fa fa-circle-o" /> Register</a></li>
                  <li><a href="../examples/lockscreen.html"><i className="fa fa-circle-o" /> Lockscreen</a></li>
                  <li><a href="../examples/404.html"><i className="fa fa-circle-o" /> 404 Error</a></li>
                  <li><a href="../examples/500.html"><i className="fa fa-circle-o" /> 500 Error</a></li>
                  <li><a href="../examples/blank.html"><i className="fa fa-circle-o" /> Blank Page</a></li>
                  <li><a href="../examples/pace.html"><i className="fa fa-circle-o" /> Pace Page</a></li>
                </ul>
              </li>
              <li className="treeview">
                <a href="1">
                  <i className="fa fa-share" /> <span>Multilevel</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li><a href="1"><i className="fa fa-circle-o" /> Level One</a></li>
                  <li className="treeview">
                    <a href="1"><i className="fa fa-circle-o" /> Level One
                      <span className="pull-right-container">
                        <i className="fa fa-angle-left pull-right" />
                      </span>
                    </a>
                    <ul className="treeview-menu">
                      <li><a href="1"><i className="fa fa-circle-o" /> Level Two</a></li>
                      <li className="treeview">
                        <a href="1"><i className="fa fa-circle-o" /> Level Two
                          <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right" />
                          </span>
                        </a>
                        <ul className="treeview-menu">
                          <li><a href="1"><i className="fa fa-circle-o" /> Level Three</a></li>
                          <li><a href="1"><i className="fa fa-circle-o" /> Level Three</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="1"><i className="fa fa-circle-o" /> Level One</a></li>
                </ul>
              </li>
              <li><a href="https://adminlte.io/docs"><i className="fa fa-book" /> <span>Documentation</span></a></li>
              <li className="header">LABELS</li>
              <li><a href="1"><i className="fa fa-circle-o text-red" /> <span>Important</span></a></li>
              <li><a href="1"><i className="fa fa-circle-o text-yellow" /> <span>Warning</span></a></li>
              <li><a href="1"><i className="fa fa-circle-o text-aqua" /> <span>Information</span></a></li>
            </ul>
          </section>
          {/* /.sidebar */}
        </aside>

      </div>
    );
  }
}

export default LeftMenu;