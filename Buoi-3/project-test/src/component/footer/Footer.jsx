import React from 'react';

class Footer extends React.Component {
  constructor() {
    super();
    this.name = "footer";
  }

  render() {
    return (
      <footer class="py-5 bg-dark">
      <div class="container"><p class="m-0 text-center text-white">Copyright © Your Website 2023</p></div>
  </footer>
    );
  }
}

export default Footer;
