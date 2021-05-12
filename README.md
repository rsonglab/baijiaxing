# The Hundred Family Surnames (baijiaxing)

It's just an array of Hundred Family Surnames.

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
  '赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈',
  '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许',
  '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏',
  '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章',
  '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦',
  '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳',
  '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺',
  '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常',
  '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余',
  '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹',
  ... 403 more items
] */

bjx.random();
// 公孙

bjx.getID("宋");
// 118

bjx.getName();
// 宋
```

## API

### bjx.list

A JSON array with all the Surnames.

### bjx.random()

Return a random Surnames.

### bjx.getID()

`@param {Number} `

Search an id by surname.

### bjx.getName()

Search a surname by id.

## License

It is an open-source npm package licensed under the "MIT License". Please see the file LICENSE for license terms.
