class GTag {
  init(trackingId) {
    this.trackingId = trackingId;
    if (!this.trackingId) {
      console.log('no trackingId');
      return;
    }

    this.createScript();
    this.initDataLayer();
  }

  createScript() {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + this.trackingId;
    script.async = true;
    document.body.appendChild(script);
  }

  initDataLayer() {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', this.trackingId);
  }

  gtag() {
    window.dataLayer.push(arguments);
  }

  updatePagePath(page_path) {
    this.gtag('config', this.trackingId, { 'page_path': page_path });
  }
}

const gtag = new GTag();

export default gtag;