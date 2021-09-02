const { i18n } = require("./next-i18next.config");
module.exports = {
  i18n,
  webpack5: true,
  env: {
    BASE_URL: "https://phudoangroup.com",
    WEB_LOGO: "https://phudoangroup.com/assets/icon/Logo.png",
    SITE_ICON: "https://phudoangroup.com/assets/icon/favicon.ico",
    SITE_IMAGE: "https://phudoangroup.com/assets/image/favicon.ico",
    DEFAULT_LOCALE: "vi_VN",
    DEFAULT_KEY_WORDS:
      "PHÚ ĐOÀN, HÀNG HẢI, DỊCH VỤ CẢNG BIỂN, TRƯỜNG GIANG PHÚ MỸ, VŨNG TÀU, DỊCH VỤ VẬN TẢI",
    AUTHOR: "PHU DOANNO TRADING SERVICES CO., LTD.",
    DEFAULT_SITE_NAME: "Phú Đoàn Group",
    DEFAULT_SITE_TITLE: "Công ty TNHH Thương mại Dịch Vụ Phú Đoàn",
    DEFAULT_SITE_DESCRIPTION:
      "Chuyên nghiệp, tận tâm, tin cậy và hiệu quả. Cùng Khách Hàng Hướng Tới Chuỗi Dịch Vụ Logistics Hiệu Quả Nhất",
  },
};
