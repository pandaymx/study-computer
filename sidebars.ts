import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // 侧边栏自动生成已移除教程内容

  computerAppSidebar: [
    {
      type: 'category',
      label: '硬件',
      items: [
        'basic/hardware/cpu',
        'basic/hardware/graph',
        'basic/hardware/memory',
        'basic/hardware/storage',
        'basic/hardware/motherboard',
        'basic/hardware/power-supply',
        'basic/hardware/peripherals',
      ],
    },
    {
      type: 'category',
      label: '接口',
      items: [
        'basic/interfaces/usb',
        'basic/interfaces/pcie',
        'basic/interfaces/hdmi',
        'basic/interfaces/sata',
        'basic/interfaces/ethernet',
      ],
    },
    {
      type: 'category',
      label: '设备',
      items: [
        'basic/devices/laptop',
        'basic/devices/tablet',
        'basic/devices/smartphone',
      ],
    },
    {
      type: 'category',
      label: '系统与软件',
      items: [
        'basic/system/boot-and-bios',
        'basic/system/permissions',
        'basic/system/compression',
      ],
    },
  ],

  csSidebar: [
    {
      type: 'category',
      label: '数据结构',
      items: ['cs/data-structures/data-structures'],
    },
    {
      type: 'category',
      label: '计算机网络',
      items: ['cs/computer-networks/computer-networks'],
    },
    {
      type: 'category',
      label: '操作系统',
      items: ['cs/operating-systems/operating-systems'],
    },
    {
      type: 'category',
      label: '计算机组成原理',
      items: ['cs/computer-architecture/computer-architecture'],
    },
  ],

  toolSidebar: [
    {
      type: 'category',
      label: '实用工具',
      items: [
        'tool/document-tools/README',
        'tool/version-control-tools/README',
        'tool/ide-tools/README',
        'tool/containerization-tools/README',
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
