import { routes } from '@utils/routes';

interface IMenuList {
  label: string;
  route: string;
  submenu?: IMenuList[];
}

export const MENU_LIST: IMenuList[] = [
  {
    label: 'Trang chủ',
    route: routes.HOME,
  },
  {
    label: 'Giới thiệu',
    route: '/',
  },
  {
    label: 'Sản phẩm',
    route: routes.PRODUCTS,
    submenu: [
      {
        label: 'Sản phẩm làm đẹp',
        route: routes.PRODUCTS,
      },
      {
        label: 'Viêm Đường Hô Hấp - Đau họng - Ho - Viêm phổi',
        route: routes.PRODUCTS,
      },
      {
        label: 'Sản phẩm - Đau nhức cơ xương khớp',
        route: routes.PRODUCTS,
      },
      {
        label: 'Thảo dược xua đuổi côn trùng - Tâm linh tài lộc',
        route: routes.PRODUCTS,
      },
    ],
  },
  {
    label: 'Tin tức',
    route: '/',
    submenu: [
      {
        label: 'Blog - List Large',
        route: '/',
      },
      {
        label: 'Blog - List Small',
        route: '/',
      },
      {
        label: 'Blog - Mix Style',
        route: '/',
      },
      {
        label: 'Single Post',
        route: '/',
      },
    ],
  },
  {
    label: 'Liên hệ',
    route: '/',
    submenu: [
      {
        label: 'About Us',
        route: '/',
      },
      {
        label: 'Meet Our Team',
        route: '/',
      },
      {
        label: 'FAQ’s',
        route: '/',
      },
      {
        label: 'Icon',
        route: '/',
      },
      {
        label: '404',
        route: '/',
      },
    ],
  },
  {
    label: 'Hệ thống phân phối',
    route: '/',
  },
];

export const MENU_BOTTOM = [
  {
    route: '/',
    className: 'fa-light fa-house',
    title: 'Shop',
  },
  {
    route: '/',
    className: 'fa-regular fa-user',
    title: 'Account',
  },
  {
    route: '/',
    className: 'fa-regular fa-magnifying-glass',
    title: 'Search',
  },
  {
    route: '/',
    className: 'fa-regular fa-heart',
    title: 'Wishlist',
  },
];

export const MENU_LANGUAGE = [
  {
    src: '/images/flagde.jpg',
    name: 'GER',
  },
  {
    src: '/images/flagit.jpg',
    name: 'ITA',
  },
  {
    src: '/images/flaghi.jpg',
    name: 'HIN',
  },
  {
    name: 'REQUIRES WPML',
  },
];

export const ABOUT_LINKS = [
  {
    label: 'Giới thiệu',
    route: '/',
  },
  {
    label: 'Ý kiến khách hàng',
    route: '/',
  },
  {
    label: 'Liên hệ',
    route: '/',
  },
];

export const SHOP_LINKS = [
  {
    label: 'Sản phẩm sức khỏe',
    route: '/',
  },
  {
    label: 'Sản phẩm làm đẹp',
    route: '/',
  },
  {
    label: 'Nhang thảo dược',
    route: '/',
  },
  {
    label: 'Chương trình khuyến mãi',
    route: '/',
  },
];

export const HELP_CENTER_LINKS = [
  {
    label: 'Chính sách đổi trả',
    route: '/',
  },
  {
    label: 'Chính sách bảo mật',
    route: '/',
  },
  {
    label: 'Câu hỏi thường gặp',
    route: '/',
  },
];

export const CONTACT_LINKS = [
  {
    address: '161/28/11 Bình Trị Đông, Phường Bình Trị Đông A, Q.Bình Tân, TP.HCM',
    branch: '428/30 Chiến Lược, Phường Bình Trị Đông A, Q.Bình Tân, TP.HCM ',
    phone1: '028.6688 7979 ',
    phone2: '0906.861.663',
    web: 'thaoduocanhduong.vn',
  },
];

export const BRAND = [
  {
    className: 'fa-brands fa-facebook',
  },
  {
    className: 'fa-brands fa-twitter',
  },
  {
    className: 'fa-brands fa-linkedin',
  },
];

export const SERVICE = [
  {
    className: 'fa-light fa-dolly',
    title: 'Miễn Phí Vận Chuyển',
    description: 'Đơn hàng trên 1 triệu đồng',
  },
  {
    className: 'fa-light fa-box-check',
    title: 'Hỗ trợ đổi trả',
    description: 'Lỗi do nhà sẳn suất',
  },
  {
    className: 'fa-light fa-headphones',
    title: 'Hỗ trợ 24/7',
    description: '0286.688.7979 / 0906.861.663',
  },
  {
    className: 'fa-light fa-money-check',
    title: 'Thanh Toán Linh Hoạt ',
    description: 'Tùy bạn lựa chọn',
  },
];
