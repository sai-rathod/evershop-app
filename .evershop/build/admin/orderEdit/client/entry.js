
      import React from 'react';
      import ReactDOM from 'react-dom';
      import { Area } from '@evershop/evershop/components/common';
      import {HydrateAdmin} from '@evershop/evershop/components/common';
      
import e6a723cdb49007b615ca921b88358d1fd from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/auth/pages/admin/all/AdminUser.js';
import e835926d1c55fbb498253e5d50c307803 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/base/pages/admin/all/GlobalCss.js';
import e4ae1b36d9a8a49961afa10f3e7928326 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/base/pages/admin/all/Layout.js';
import e6aafab0a99df3cf7d6c662594f47ae23 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/base/pages/admin/all/Meta.js';
import e9202d651418814552c97bae86df6dc5b from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/CatalogMenuGroup.js';
import e3bec23e73ac3b12e192ad9326de51821 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/NewProductQuickLink.js';
import ecaf43ef9df03dd8557befff3a4512a78 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/checkout/pages/admin/all/ShippingSettingMenu.js';
import e08adb36e9e7a6ac5c95e89be4b81c976 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CmsMenuGroup.js';
import ecb243fe1c449deda7638a962fbbbcdf1 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CopyRight.js';
import e7b34f21ec0f8f129e3b85f2257ad7dff from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Logo.js';
import eb01834606299fecea3af4b2d0687288d from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Navigation.js';
import e6a8310377b3dd3e860ecded08f6a2c17 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Notification.js';
import e845545e146b7bc075776a87b83b88b27 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/QuickLinks.js';
import e0e5bfc93e951446531979129cb372d2d from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/SearchBox.js';
import ece7702765b194d9d57d5a05634eb2dea from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Version.js';
import e3ff8d90b7ce56917db5cb595f729a4f2 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/cod/pages/admin/orderEdit/CaptureButton.js';
import ef89557c2007bf7630b05f952fa0ca3e8 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/all/CustomerMenuGroup.js';
import e8036f3bbf44cfcca80826f6f535a90e1 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/all/OmsMenuGroup.js';
import e32eec17ec2bdfa131417b4dbc758d81c from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Activities.js';
import ed6cb95085fa1a84644d65564dca6b24e from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/AddTrackingButton.js';
import eee2f1494378e876fcf2bd0eb16059780 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/CancelButton.js';
import e0b6aa5e12e463350b5c1c1ce26375122 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Customer.js';
import e797d658705aa9f6b929026cf93634385 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/CustomerNotes.js';
import ef18b5aba9bee7dbc938c0d07d8140235 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Items.js';
import e588e33acd3009882dee45f85901f57f6 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Layout.js';
import e7159893376f59f6c07d2a83010d646d2 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/MarkDeliveredButton.js';
import e6b2a9627e538e923299328491fde05d1 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/PageHeading.js';
import e7d09774793f79757979dae8272f4c8bd from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Payment.js';
import edd53121ac400ac5ac39516339321e950 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/ShipButton.js';
import eb2af39c99839597789a970ef70673ee4 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Status.js';
import e18b15faeeecbd726dd3faa135a9a711b from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/TrackingButton.js';
import e06cc508e277803f995e8103542a7fd98 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/paypal/pages/admin/orderEdit/PaypalCaptureButton.js';
import ed17eeecc0ca17205807b461b809823d2 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/CouponMenuGroup.js';
import e828c52bf4253e43d4455b3037eada48f from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/NewCouponQuickLink.js';
import ee4aa72132c12ca518660b07b63e22fbf from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/PaymentSettingMenu.js';
import e57bd040215c79dfa89505b9a567ccd86 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/SettingMenuGroup.js';
import ed970bcb9b203fa65d6ebbf547761d6b7 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/StoreSettingMenu.js';
import e5b546110c101f535a49c09b4cb811b34 from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/stripe/pages/admin/orderEdit/StripeCaptureButton.js';
import edb5b3d2fe1b258bc3d5d46108501510e from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/stripe/pages/admin/orderEdit/StripeRefundButton.js';
import e6a0becdf62c3dea9cf6374241043ef7a from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/tax/pages/admin/all/TaxSettingMenu.js';
import e7b000ca2bd2518d89cc07b44dbbe58ac from 'file:///home/saii/DevOps_Projects/evershop-app/extensions/sample/dist/pages/admin/all/Hello.js';
import collection_products from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/components/CollectionProductsSetting.js';
import text_block from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/TextBlockSetting.js';
import basic_menu from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/BasicMenuSetting.js';
import banner from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/BannerSetting.js';
import simple_slider from 'file:///home/saii/DevOps_Projects/evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/SlideshowSetting.js';
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
  orderPaymentActions: {
    e3ff8d90b7ce56917db5cb595f729a4f2: {
      id: 'e3ff8d90b7ce56917db5cb595f729a4f2',
      sortOrder: 10,
      component: { default: e3ff8d90b7ce56917db5cb595f729a4f2 }
    },
    e06cc508e277803f995e8103542a7fd98: {
      id: 'e06cc508e277803f995e8103542a7fd98',
      sortOrder: 10,
      component: { default: e06cc508e277803f995e8103542a7fd98 }
    },
    e5b546110c101f535a49c09b4cb811b34: {
      id: 'e5b546110c101f535a49c09b4cb811b34',
      sortOrder: 10,
      component: { default: e5b546110c101f535a49c09b4cb811b34 }
    },
    edb5b3d2fe1b258bc3d5d46108501510e: {
      id: 'edb5b3d2fe1b258bc3d5d46108501510e',
      sortOrder: 10,
      component: { default: edb5b3d2fe1b258bc3d5d46108501510e }
    }
  },
  leftSide: {
    e32eec17ec2bdfa131417b4dbc758d81c: {
      id: 'e32eec17ec2bdfa131417b4dbc758d81c',
      sortOrder: 30,
      component: { default: e32eec17ec2bdfa131417b4dbc758d81c }
    },
    ef18b5aba9bee7dbc938c0d07d8140235: {
      id: 'ef18b5aba9bee7dbc938c0d07d8140235',
      sortOrder: 10,
      component: { default: ef18b5aba9bee7dbc938c0d07d8140235 }
    },
    e7d09774793f79757979dae8272f4c8bd: {
      id: 'e7d09774793f79757979dae8272f4c8bd',
      sortOrder: 20,
      component: { default: e7d09774793f79757979dae8272f4c8bd }
    }
  },
  order_actions: {
    ed6cb95085fa1a84644d65564dca6b24e: {
      id: 'ed6cb95085fa1a84644d65564dca6b24e',
      sortOrder: 5,
      component: { default: ed6cb95085fa1a84644d65564dca6b24e }
    },
    e7159893376f59f6c07d2a83010d646d2: {
      id: 'e7159893376f59f6c07d2a83010d646d2',
      sortOrder: 10,
      component: { default: e7159893376f59f6c07d2a83010d646d2 }
    },
    edd53121ac400ac5ac39516339321e950: {
      id: 'edd53121ac400ac5ac39516339321e950',
      sortOrder: 10,
      component: { default: edd53121ac400ac5ac39516339321e950 }
    },
    e18b15faeeecbd726dd3faa135a9a711b: {
      id: 'e18b15faeeecbd726dd3faa135a9a711b',
      sortOrder: 15,
      component: { default: e18b15faeeecbd726dd3faa135a9a711b }
    }
  },
  pageHeadingRight: {
    eee2f1494378e876fcf2bd0eb16059780: {
      id: 'eee2f1494378e876fcf2bd0eb16059780',
      sortOrder: 35,
      component: { default: eee2f1494378e876fcf2bd0eb16059780 }
    }
  },
  rightSide: {
    e0b6aa5e12e463350b5c1c1ce26375122: {
      id: 'e0b6aa5e12e463350b5c1c1ce26375122',
      sortOrder: 15,
      component: { default: e0b6aa5e12e463350b5c1c1ce26375122 }
    },
    e797d658705aa9f6b929026cf93634385: {
      id: 'e797d658705aa9f6b929026cf93634385',
      sortOrder: 10,
      component: { default: e797d658705aa9f6b929026cf93634385 }
    }
  },
  content: {
    e588e33acd3009882dee45f85901f57f6: {
      id: 'e588e33acd3009882dee45f85901f57f6',
      sortOrder: 10,
      component: { default: e588e33acd3009882dee45f85901f57f6 }
    },
    e6b2a9627e538e923299328491fde05d1: {
      id: 'e6b2a9627e538e923299328491fde05d1',
      sortOrder: 5,
      component: { default: e6b2a9627e538e923299328491fde05d1 }
    },
    e7b000ca2bd2518d89cc07b44dbbe58ac: {
      id: 'e7b000ca2bd2518d89cc07b44dbbe58ac',
      sortOrder: 0,
      component: { default: e7b000ca2bd2518d89cc07b44dbbe58ac }
    }
  },
  pageHeadingLeft: {
    eb2af39c99839597789a970ef70673ee4: {
      id: 'eb2af39c99839597789a970ef70673ee4',
      sortOrder: 200,
      component: { default: eb2af39c99839597789a970ef70673ee4 }
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
ReactDOM.hydrate(
        React.createElement(HydrateAdmin, null),
        document.getElementById('app')
      );