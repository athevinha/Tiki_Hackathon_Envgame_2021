Page({
  onLoad(query) {
    this.setData({
      name: 'Nguyen Van A'
    });
    Page({
  getAuthCode() {
    my.getAuthCode({
      success: (res) => {},
      fail: (res) => {
        
      }
    });
  }
});
  },
  onReady() {
  },
  onShow() {
  },
  onHide() {
  },
  onUnload() {
  }
});