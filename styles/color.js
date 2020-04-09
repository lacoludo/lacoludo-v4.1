export const color = '#00d8ff'

export default () => {
  return (
    <style jsx global>{`
      a:hover,
      a:focus,
      .menu--mohe .menu__item-name.curent-nav,
      .menu--mohe .menu__item:hover .menu__item-label,
      .menu--mohe .menu__item:focus .menu__item-label,
      #royal_preloader.text .loader,
      .project-nav-wrap .left-nav .text-on-hover:before,
      .project-nav-wrap .right-nav .text-on-hover:after,
      .menu__item-team:hover,
      .menu__item-team.menu__item--current-team,
      .menu__item-team.menu__item--current-team:hover,
      .menu__item-team.menu__item--current-team:focus,
      .title h6 span,
      .about-wrap .about-icon,
      .blog-pagination li p:hover,
      .arrow-icons:hover,
      .num-of-com span,
      .comm-link,
      .sidebar-list-one li a:hover,
      .comment a,
      .menu > ul > li a:hover,
      .menu > ul > li a.mPS2id-highlight,
      .home-text-freelance h1 {
        color: ${color};
      }
      #filter li a:before,
      .footer a:before,
      .title .list li:before,
      #royal_preloader.royal_preloader_progress .royal_preloader_meter,
      .cd-close-nav:hover::after,
      .cd-close-nav:hover::before,
      #owl-sep-1.owl-theme .owl-controls .owl-page span:hover,
      #owl-sep-1.owl-theme .owl-controls .owl-page.active span,
      #owl-blog-slider.owl-theme .owl-controls .owl-page.active span,
      #owl-blog-slider.owl-theme .owl-controls .owl-page span:hover,
      .sidebar-search button,
      .sidebar-list-two li a:hover,
      #ajax-form button:hover,
      #cd-zoom-in,
      #cd-zoom-out,
      #sync2 .synced .item {
        background-color: ${color};
      }
      figure.vimeo a:before,
      figure.youtube a:before {
        border-left: 10px solid ${color};
      }
      figure.vimeo:hover a:after,
      figure.youtube:hover a:after {
        background: ${color};
      }
      .post-wrapper blockquote {
        border-left: 3px solid ${color};
      }
      .sidebar-search input:active,
      .sidebar-search input:focus {
        border-bottom: 1px solid ${color};
      }
      .sidebar-list-one li:before {
        border: 1px solid ${color};
      }
      .sidebar-list-two li a:hover {
        border: 2px solid ${color};
      }
      #ajax-form textarea:focus,
      #ajax-form input:focus,
      #ajax-form textarea:active,
      #ajax-form input:active {
        border-bottom: 1px solid ${color};
      }
    `}</style>
  )
}
