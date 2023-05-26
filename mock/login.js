import Mock from "mockjs";

// mock方法,详细的可以看官方文档
const Random = Mock.Random;

export default [
  {
    url: "/login",
    type: "post",
    response: () => {
      return { msg: "操作成功", code: 200, token: "eyJhbGciOiJIUzUxMi" };
    },
  },
  {
    url: "/logout",
    type: "post",
    response: () => {
      return { msg: "操作成功", code: 200, token: "eyJhbGciOiJIUzUxMi" };
    },
  },
  {
    url: "/getInfo",
    type: "get",
    response: () => {
      return {
        msg: "操作成功",
        code: 200,
        permissions: ["*:*:*"],
        roles: ["admin"],
        user: {
          searchValue: null,
          createBy: "admin",
          createTime: "2021-04-12 17:22:49",
          updateBy: null,
          updateTime: null,
          remark: "管理员",
          params: {},
          userId: 1,
          deptId: 100,
          userName: "admin",
          nickName: "cueoa_admin",
          email: "oa.support@cue.group",
          phonenumber: "18682415176",
          sex: "0",
          avatar: "",
          salt: null,
          status: "0",
          delFlag: "0",
          loginIp: "127.0.0.1",
          loginDate: "2021-04-12T17:22:42.000+0800",
          dept: {
            searchValue: null,
            createBy: null,
            createTime: null,
            updateBy: null,
            updateTime: null,
            remark: null,
            params: {},
            deptId: 100,
            parentId: 0,
            ancestors: null,
            deptName: "cue.group",
            orderNum: "0",
            leader: "cueoa",
            phone: null,
            email: null,
            status: "0",
            delFlag: null,
            parentName: null,
            children: [],
          },
          roles: [
            {
              searchValue: null,
              createBy: null,
              createTime: null,
              updateBy: null,
              updateTime: null,
              remark: null,
              params: {},
              roleId: 1,
              roleName: "超级管理员",
              roleKey: "admin",
              roleSort: "1",
              dataScope: "1",
              menuCheckStrictly: false,
              deptCheckStrictly: false,
              status: "0",
              delFlag: null,
              flag: false,
              menuIds: null,
              deptIds: null,
              admin: true,
            },
          ],
          roleIds: null,
          postIds: null,
          admin: true,
        },
      };
    },
  },
];
