# The Hundred Family Surnames (baijiaxing)

[![Node.js CI](https://github.com/rsonglab/baijiaxing/actions/workflows/node.js.yml/badge.svg)](https://github.com/rsonglab/baijiaxing/actions/workflows/node.js.yml)
[![Coverage Status](https://coveralls.io/repos/github/rsonglab/baijiaxing/badge.svg?branch=master)](https://coveralls.io/github/rsonglab/baijiaxing?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/rsonglab/baijiaxing/blob/master/LICENSE)
[![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@rsonglab/baijiaxing)](https://www.npmjs.com/package/@rsonglab/baijiaxing)

It's a list of the Hundred Family Surnames.

> "The Hundred Family Surnames (Chinese: 百家姓), commonly known as Bai Jia Xing, also translated as Hundreds of Chinese Surnames, is a classic Chinese text composed of common Chinese surnames." - [Wikipedia](https://en.wikipedia.org/wiki/Hundred_Family_Surnames)

## Install

```shell
npm i @rsonglab/baijiaxing
```

## Usage

```js
const bjx = require("@rsonglab/baijiaxing");

bjx.list;
/* [
  '趙', '錢', '孫', '李', '周', '吳', '鄭', '王', '馮', '陳',
  '褚', '衛', '蔣', '沈', '韓', '楊', '朱', '秦', '尤', '許',
  '何', '呂', '施', '張', '孔', '曹', '嚴', '華', '金', '魏',
  '陶', '姜', '戚', '謝', '鄒', '喻', '柏', '水', '竇', '章',
  '雲', '蘇', '潘', '葛', '奚', '范', '彭', '郎', '魯', '韋',
  '昌', '馬', '苗', '鳳', '花', '方', '俞', '任', '袁', '柳',
  '酆', '鮑', '史', '唐', '費', '廉', '岑', '薛', '雷', '賀',
  '倪', '湯', '滕', '殷', '羅', '畢', '郝', '鄔', '安', '常',
  '樂', '于', '時', '傅', '皮', '卞', '齊', '康', '伍', '余',
  '元', '卜', '顧', '孟', '平', '黃', '和', '穆', '蕭', '尹',
  ... 404 more items
] */

bjx.object;
/* {
  '趙': 'Zhao',
  '錢': 'Qian',
  '孫': 'Sun',
  '李': 'Li',
  '周': 'Zhou',
  '吳': 'Wu',
  '鄭': 'Zheng',
  '王': 'Wang',
  '馮': 'Feng',
  '陳': 'Chen',
  ... 494 more items
} */

bjx.random();
// 公孫

bjx.getID("宋");
// 118

bjx.getName(118);
// 宋

bjx.getName("Song");
// 宋

bjx.getPinyin("宋");
// Song
```

Live demo: [https://runkit.com/embed/uc856jmfnoj1](https://runkit.com/embed/uc856jmfnoj1)

## API

### bjx.list

An array with all the Surnames.

### bjx.object

An object with all the Surnames.

### bjx.random()

Return a random Surnames.

### bjx.getID(name)

`@param name [Required]`

Search an id by surname.

### bjx.getName(id)

`@param id/pinyin [Required]`

Search a surname by id or pinyin.

### bjx.getPinyin(name)

`@param name [Required]`

Search an pinyin by surname.

## License

It is an open-source npm package licensed under the "MIT License". Please see the file LICENSE for license terms.
