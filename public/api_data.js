define({ "api": [
  {
    "type": "post",
    "url": "/good/add",
    "title": "添加原料信息",
    "name": "add",
    "group": "good",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goodsName",
            "description": "<p>原料名称。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>数量。</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/goodRouter.js",
    "groupTitle": "good"
  },
  {
    "type": "get",
    "url": "/good/getInfo",
    "title": "查询全部原料信息",
    "name": "getInfo",
    "group": "good",
    "version": "0.0.0",
    "filename": "router/goodRouter.js",
    "groupTitle": "good"
  },
  {
    "type": "post",
    "url": "/sickInfo/insert",
    "title": "添加疫情信息",
    "name": "add",
    "group": "sickInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "temperature",
            "description": "<p>温度。</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "health",
            "description": "<p>健康与否 。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>唯一表示编号。</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/sickRouter.js",
    "groupTitle": "sickInfo"
  },
  {
    "type": "post",
    "url": "/animal/add",
    "title": "添加原料信息",
    "name": "add",
    "group": "temp",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "animalName",
            "description": "<p>动物名称。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>数量。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>唯一标识。不可重复</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/animalRouter.js",
    "groupTitle": "temp"
  },
  {
    "type": "post",
    "url": "/temperature/add",
    "title": "添加信息",
    "name": "add",
    "group": "temp",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "temperature",
            "description": "<p>温度。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "humidity",
            "description": "<p>湿度。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "time",
            "description": "<p>时间戳。</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/tempRouter.js",
    "groupTitle": "temp"
  },
  {
    "type": "get",
    "url": "/animal/getInfo",
    "title": "查询全部原料信息",
    "name": "getInfo",
    "group": "temp",
    "version": "0.0.0",
    "filename": "router/animalRouter.js",
    "groupTitle": "temp"
  },
  {
    "type": "get",
    "url": "/temperature/getInfo",
    "title": "查询全部温湿度信息",
    "name": "getInfo",
    "group": "temp",
    "version": "0.0.0",
    "filename": "router/tempRouter.js",
    "groupTitle": "temp"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "登录",
    "name": "login",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码。</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/update",
    "title": "更改密码",
    "name": "update",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>新密码。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rePassword",
            "description": "<p>重复密码。</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "user"
  }
] });
