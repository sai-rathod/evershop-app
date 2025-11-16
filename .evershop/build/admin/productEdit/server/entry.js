import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Area } from '@evershop/evershop/components/common';
import { renderHtml } from '@evershop/evershop/components/common';
import e6a723cdb49007b615ca921b88358d1fd from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/auth/pages/admin/all/AdminUser.js';
import e835926d1c55fbb498253e5d50c307803 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/base/pages/admin/all/GlobalCss.js';
import e4ae1b36d9a8a49961afa10f3e7928326 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/base/pages/admin/all/Layout.js';
import e6aafab0a99df3cf7d6c662594f47ae23 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/base/pages/admin/all/Meta.js';
import e9202d651418814552c97bae86df6dc5b from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/CatalogMenuGroup.js';
import e3bec23e73ac3b12e192ad9326de51821 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/NewProductQuickLink.js';
import e4f47237263f4f898579be9fa6d1ffbbc from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit/Collection.js';
import e196d13918d3584a3f06bfdaf661ddbeb from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit/ProductEditForm.js';
import e52de8db4aeccc43867ce51be866ad565 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit/VariantGroup.js';
import e9cc574b6c9af63f1a4352a0a419ab400 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/Attributes.js';
import e05952c13645f28098689cc33a643d4b3 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/General.js';
import e0002f46955f93438deb65f2fb17f4828 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/Inventory.js';
import e508ada93d4b2299ec92b50aa370d8ac7 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/Media.js';
import e3c1414a6861f443d61e593db8896fd96 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/PageHeading.js';
import e5f6ce2166e56ca4086e842fba55b9e34 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/Seo.js';
import ef6881110bc3c1c977483dc44bcb6e634 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/Status.js';
import ecaf43ef9df03dd8557befff3a4512a78 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/checkout/pages/admin/all/ShippingSettingMenu.js';
import e08adb36e9e7a6ac5c95e89be4b81c976 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CmsMenuGroup.js';
import ecb243fe1c449deda7638a962fbbbcdf1 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CopyRight.js';
import e7b34f21ec0f8f129e3b85f2257ad7dff from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Logo.js';
import eb01834606299fecea3af4b2d0687288d from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Navigation.js';
import e6a8310377b3dd3e860ecded08f6a2c17 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Notification.js';
import e845545e146b7bc075776a87b83b88b27 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/QuickLinks.js';
import e0e5bfc93e951446531979129cb372d2d from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/SearchBox.js';
import ece7702765b194d9d57d5a05634eb2dea from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Version.js';
import ef89557c2007bf7630b05f952fa0ca3e8 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/all/CustomerMenuGroup.js';
import e8036f3bbf44cfcca80826f6f535a90e1 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/all/OmsMenuGroup.js';
import ed17eeecc0ca17205807b461b809823d2 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/CouponMenuGroup.js';
import e828c52bf4253e43d4455b3037eada48f from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/NewCouponQuickLink.js';
import ee4aa72132c12ca518660b07b63e22fbf from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/PaymentSettingMenu.js';
import e57bd040215c79dfa89505b9a567ccd86 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/SettingMenuGroup.js';
import ed970bcb9b203fa65d6ebbf547761d6b7 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/StoreSettingMenu.js';
import e6a0becdf62c3dea9cf6374241043ef7a from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/tax/pages/admin/all/TaxSettingMenu.js';
import e7b000ca2bd2518d89cc07b44dbbe58ac from 'file:///home/saii/DevOps_Projects/evershop-app/extensions/sample/dist/pages/admin/all/Hello.js';
import collection_products from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/components/CollectionProductsSetting.js';
import text_block from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/TextBlockSetting.js';
import basic_menu from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/BasicMenuSetting.js';
import banner from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/BannerSetting.js';
import simple_slider from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/SlideshowSetting.js';
export default renderHtml;
Area.defaultProps.components = {
  header: {
    e6a723cdb49007b615ca921b88358d1fd: {
      id: 'e6a723cdb49007b615ca921b88358d1fd',
      sortOrder: 50,
      component: { default: e6a723cdb49007b615ca921b88358d1fd }
    },
    e7b34f21ec0f8f129e3b85f2257ad7dff: {
      id: 'e7b34f21ec0f8f129e3b85f2257ad7dff',
      sortOrder: 10,
      component: { default: e7b34f21ec0f8f129e3b85f2257ad7dff }
    },
    e0e5bfc93e951446531979129cb372d2d: {
      id: 'e0e5bfc93e951446531979129cb372d2d',
      sortOrder: 20,
      component: { default: e0e5bfc93e951446531979129cb372d2d }
    }
  },
  head: {
    e835926d1c55fbb498253e5d50c307803: {
      id: 'e835926d1c55fbb498253e5d50c307803',
      sortOrder: 5,
      component: { default: e835926d1c55fbb498253e5d50c307803 }
    },
    e6aafab0a99df3cf7d6c662594f47ae23: {
      id: 'e6aafab0a99df3cf7d6c662594f47ae23',
      sortOrder: 5,
      component: { default: e6aafab0a99df3cf7d6c662594f47ae23 }
    }
  },
  body: {
    e4ae1b36d9a8a49961afa10f3e7928326: {
      id: 'e4ae1b36d9a8a49961afa10f3e7928326',
      sortOrder: 10,
      component: { default: e4ae1b36d9a8a49961afa10f3e7928326 }
    },
    e6a8310377b3dd3e860ecded08f6a2c17: {
      id: 'e6a8310377b3dd3e860ecded08f6a2c17',
      sortOrder: 10,
      component: { default: e6a8310377b3dd3e860ecded08f6a2c17 }
    }
  },
  adminMenu: {
    e9202d651418814552c97bae86df6dc5b: {
      id: 'e9202d651418814552c97bae86df6dc5b',
      sortOrder: 20,
      component: { default: e9202d651418814552c97bae86df6dc5b }
    },
    e08adb36e9e7a6ac5c95e89be4b81c976: {
      id: 'e08adb36e9e7a6ac5c95e89be4b81c976',
      sortOrder: 60,
      component: { default: e08adb36e9e7a6ac5c95e89be4b81c976 }
    },
    e845545e146b7bc075776a87b83b88b27: {
      id: 'e845545e146b7bc075776a87b83b88b27',
      sortOrder: 10,
      component: { default: e845545e146b7bc075776a87b83b88b27 }
    },
    ef89557c2007bf7630b05f952fa0ca3e8: {
      id: 'ef89557c2007bf7630b05f952fa0ca3e8',
      sortOrder: 40,
      component: { default: ef89557c2007bf7630b05f952fa0ca3e8 }
    },
    e8036f3bbf44cfcca80826f6f535a90e1: {
      id: 'e8036f3bbf44cfcca80826f6f535a90e1',
      sortOrder: 30,
      component: { default: e8036f3bbf44cfcca80826f6f535a90e1 }
    },
    ed17eeecc0ca17205807b461b809823d2: {
      id: 'ed17eeecc0ca17205807b461b809823d2',
      sortOrder: 50,
      component: { default: ed17eeecc0ca17205807b461b809823d2 }
    },
    e57bd040215c79dfa89505b9a567ccd86: {
      id: 'e57bd040215c79dfa89505b9a567ccd86',
      sortOrder: 500,
      component: { default: e57bd040215c79dfa89505b9a567ccd86 }
    }
  },
  quickLinks: {
    e3bec23e73ac3b12e192ad9326de51821: {
      id: 'e3bec23e73ac3b12e192ad9326de51821',
      sortOrder: 20,
      component: { default: e3bec23e73ac3b12e192ad9326de51821 }
    },
    e828c52bf4253e43d4455b3037eada48f: {
      id: 'e828c52bf4253e43d4455b3037eada48f',
      sortOrder: 30,
      component: { default: e828c52bf4253e43d4455b3037eada48f }
    }
  },
  rightSide: {
    e4f47237263f4f898579be9fa6d1ffbbc: {
      id: 'e4f47237263f4f898579be9fa6d1ffbbc',
      sortOrder: 15,
      component: { default: e4f47237263f4f898579be9fa6d1ffbbc }
    },
    e9cc574b6c9af63f1a4352a0a419ab400: {
      id: 'e9cc574b6c9af63f1a4352a0a419ab400',
      sortOrder: 30,
      component: { default: e9cc574b6c9af63f1a4352a0a419ab400 }
    },
    e0002f46955f93438deb65f2fb17f4828: {
      id: 'e0002f46955f93438deb65f2fb17f4828',
      sortOrder: 15,
      component: { default: e0002f46955f93438deb65f2fb17f4828 }
    },
    ef6881110bc3c1c977483dc44bcb6e634: {
      id: 'ef6881110bc3c1c977483dc44bcb6e634',
      sortOrder: 10,
      component: { default: ef6881110bc3c1c977483dc44bcb6e634 }
    }
  },
  content: {
    e196d13918d3584a3f06bfdaf661ddbeb: {
      id: 'e196d13918d3584a3f06bfdaf661ddbeb',
      sortOrder: 10,
      component: { default: e196d13918d3584a3f06bfdaf661ddbeb }
    },
    e3c1414a6861f443d61e593db8896fd96: {
      id: 'e3c1414a6861f443d61e593db8896fd96',
      sortOrder: 5,
      component: { default: e3c1414a6861f443d61e593db8896fd96 }
    },
    e7b000ca2bd2518d89cc07b44dbbe58ac: {
      id: 'e7b000ca2bd2518d89cc07b44dbbe58ac',
      sortOrder: 0,
      component: { default: e7b000ca2bd2518d89cc07b44dbbe58ac }
    }
  },
  leftSide: {
    e52de8db4aeccc43867ce51be866ad565: {
      id: 'e52de8db4aeccc43867ce51be866ad565',
      sortOrder: 70,
      component: { default: e52de8db4aeccc43867ce51be866ad565 }
    },
    e05952c13645f28098689cc33a643d4b3: {
      id: 'e05952c13645f28098689cc33a643d4b3',
      sortOrder: 10,
      component: { default: e05952c13645f28098689cc33a643d4b3 }
    },
    e508ada93d4b2299ec92b50aa370d8ac7: {
      id: 'e508ada93d4b2299ec92b50aa370d8ac7',
      sortOrder: 15,
      component: { default: e508ada93d4b2299ec92b50aa370d8ac7 }
    },
    e5f6ce2166e56ca4086e842fba55b9e34: {
      id: 'e5f6ce2166e56ca4086e842fba55b9e34',
      sortOrder: 60,
      component: { default: e5f6ce2166e56ca4086e842fba55b9e34 }
    }
  },
  settingPageMenu: {
    ecaf43ef9df03dd8557befff3a4512a78: {
      id: 'ecaf43ef9df03dd8557befff3a4512a78',
      sortOrder: 15,
      component: { default: ecaf43ef9df03dd8557befff3a4512a78 }
    },
    ee4aa72132c12ca518660b07b63e22fbf: {
      id: 'ee4aa72132c12ca518660b07b63e22fbf',
      sortOrder: 10,
      component: { default: ee4aa72132c12ca518660b07b63e22fbf }
    },
    ed970bcb9b203fa65d6ebbf547761d6b7: {
      id: 'ed970bcb9b203fa65d6ebbf547761d6b7',
      sortOrder: 5,
      component: { default: ed970bcb9b203fa65d6ebbf547761d6b7 }
    },
    e6a0becdf62c3dea9cf6374241043ef7a: {
      id: 'e6a0becdf62c3dea9cf6374241043ef7a',
      sortOrder: 20,
      component: { default: e6a0becdf62c3dea9cf6374241043ef7a }
    }
  },
  footerLeft: {
    ecb243fe1c449deda7638a962fbbbcdf1: {
      id: 'ecb243fe1c449deda7638a962fbbbcdf1',
      sortOrder: 10,
      component: { default: ecb243fe1c449deda7638a962fbbbcdf1 }
    },
    ece7702765b194d9d57d5a05634eb2dea: {
      id: 'ece7702765b194d9d57d5a05634eb2dea',
      sortOrder: 20,
      component: { default: ece7702765b194d9d57d5a05634eb2dea }
    }
  },
  adminNavigation: {
    eb01834606299fecea3af4b2d0687288d: {
      id: 'eb01834606299fecea3af4b2d0687288d',
      sortOrder: 10,
      component: { default: eb01834606299fecea3af4b2d0687288d }
    }
  },
  '*': {
    collection_products: {
      id: 'collection_products',
      sortOrder: 0,
      component: { default: collection_products }
    },
    text_block: {
      id: 'text_block',
      sortOrder: 0,
      component: { default: text_block }
    },
    basic_menu: {
      id: 'basic_menu',
      sortOrder: 0,
      component: { default: basic_menu }
    },
    banner: {
      id: 'banner',
      sortOrder: 0,
      component: { default: banner }
    },
    simple_slider: {
      id: 'simple_slider',
      sortOrder: 0,
      component: { default: simple_slider }
    }
  }
} 