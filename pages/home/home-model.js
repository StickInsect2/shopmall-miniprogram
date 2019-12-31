import { Base } from '../../utils/base.js';

class Home extends Base {
  constructor() {
    super();
  }

  getBannerData(id, callback) {
    var params = {
      url: 'banner/' + id,
      sCallback: function (res) {
        callback && callback(res.items);
      }

    }
    this.request(params);
    // wx.request({
    //   url: "banner/" + id,
    //   method: 'GET',
    //   success: function (res) {
    //     callback(res);
    //   },
    //   fail: function (res) {
    //     console.log(res);
    //   }
    // })
  }
}

export { Home };