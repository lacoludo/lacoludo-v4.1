export default () => (
  <style jsx>{`
    .active {
      color: #00d8ff !important;
    }

    .nav-link {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
      min-width: 50px;
      overflow: hidden;
      white-space: nowrap;
      font-size: 13px;
      color: #ffffff;
      text-decoration: none;
      transition: background-color 0.1s ease-in-out;
    }
  `}</style>
)
