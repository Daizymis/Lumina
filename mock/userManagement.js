import Mock from "mockjs";

// mock方法,详细的可以看官方文档
const Random = Mock.Random;

export default [
    {
        url: "/dev-api/system/user/list",
        type: "get",
        response: () => {
            return {"total":2,"rows":[{"createBy":"admin","createTime":"2023-04-23 16:11:38","updateBy":null,"updateTime":null,"remark":"管理员","userId":1,"deptId":103,"userName":"admin","nickName":"若依","email":"ry@163.com","phonenumber":"15888888888","sex":"1","avatar":"","password":null,"status":"0","delFlag":"0","loginIp":"114.254.94.76","loginDate":"2023-05-25T17:34:25.000+08:00","dept":{"createBy":null,"createTime":null,"updateBy":null,"updateTime":null,"remark":null,"deptId":103,"parentId":null,"ancestors":null,"deptName":"研发部门","orderNum":null,"leader":"若依","phone":null,"email":null,"status":null,"delFlag":null,"parentName":null,"children":[]},"roles":[],"roleIds":null,"postIds":null,"roleId":null,"admin":true},{"createBy":"admin","createTime":"2023-04-23 16:11:38","updateBy":null,"updateTime":null,"remark":"测试员","userId":2,"deptId":105,"userName":"ry","nickName":"若依","email":"ry@qq.com","phonenumber":"15666666666","sex":"1","avatar":"","password":null,"status":"0","delFlag":"0","loginIp":"116.5.84.245","loginDate":"2023-05-25T17:19:38.000+08:00","dept":{"createBy":null,"createTime":null,"updateBy":null,"updateTime":null,"remark":null,"deptId":105,"parentId":null,"ancestors":null,"deptName":"测试部门","orderNum":null,"leader":"若依","phone":null,"email":null,"status":null,"delFlag":null,"parentName":null,"children":[]},"roles":[],"roleIds":null,"postIds":null,"roleId":null,"admin":false}],"code":200,"msg":"查询成功"}  },
    },
    {
        url: "/dev-api/system/dict/data/type/sys_normal_disable",
        type: "get",
        response: () => {
           return {"msg":"操作成功","code":200,"data":[{"createBy":"admin","createTime":"2023-04-23 16:13:26","updateBy":null,"updateTime":null,"remark":"正常状态","dictCode":6,"dictSort":1,"dictLabel":"正常","dictValue":"0","dictType":"sys_normal_disable","cssClass":"","listClass":"primary","isDefault":"Y","status":"0","default":true},{"createBy":"admin","createTime":"2023-04-23 16:13:26","updateBy":null,"updateTime":null,"remark":"停用状态","dictCode":7,"dictSort":2,"dictLabel":"停用","dictValue":"1","dictType":"sys_normal_disable","cssClass":"","listClass":"danger","isDefault":"N","status":"0","default":false}]}
        },
    },
    {
        url: '/mock/system/dict/data/type/sys_user_sex',
        type: "post",
        response: () => {
            return {"msg":"操作成功","code":200,"data":[{"createBy":"admin","createTime":"2023-04-23 16:13:24","updateBy":null,"updateTime":null,"remark":"性别男","dictCode":1,"dictSort":1,"dictLabel":"男","dictValue":"0","dictType":"sys_user_sex","cssClass":"","listClass":"","isDefault":"Y","status":"0","default":true},{"createBy":"admin","createTime":"2023-04-23 16:13:24","updateBy":null,"updateTime":null,"remark":"性别女","dictCode":2,"dictSort":2,"dictLabel":"女","dictValue":"1","dictType":"sys_user_sex","cssClass":"","listClass":"","isDefault":"N","status":"0","default":false},{"createBy":"admin","createTime":"2023-04-23 16:13:25","updateBy":null,"updateTime":null,"remark":"性别未知","dictCode":3,"dictSort":3,"dictLabel":"未知","dictValue":"2","dictType":"sys_user_sex","cssClass":"","listClass":"","isDefault":"N","status":"0","default":false}]}
        }
    },
    ,
    {
        url: "/mock/system/user/deptTree",
        type: "get",
        response: () => {
           return {"msg":"操作成功","code":200,"data":[{"id":100,"label":"若依科技","children":[{"id":101,"label":"深圳总公司","children":[{"id":103,"label":"研发部门"},{"id":104,"label":"市场部门"},{"id":105,"label":"测试部门"},{"id":106,"label":"财务部门"},{"id":107,"label":"运维部门"}]},{"id":102,"label":"长沙分公司","children":[{"id":108,"label":"市场部门"},{"id":109,"label":"财务部门"}]}]}]}
        },
    },
    {
        url: '/mock/user/permissions',
        type: "post",
        response: () => {
            const permissions = [
                "Entrance::CustPayment",
                "Entrance:RegisterForm",
                "Entrance:CustomerSettings",
                "Entrance:SystemSet",
                "Entrance:TicketReview",
                "Entrance:ProjectApproval",
                "Entrance:Order",
                "Entrance:SalesContractReview",
                "Entrance:SalesOtherContract",
                "Entrance:CostContract",
                "Entrance:CSOrder",
                "Entrance:UniversalProjectApproval",
                "Entrance:Pusher",
                "Entrance:DataShare",
                "Entrance:BackOrder",
                "Entrance:CIMSPurchaseOrder",
                "Entrance:SupplierInvoice",
                "Entrance:BizsOpportunity",
                "Entrance:CustomerAccount",
                "Entrance:CIMSAfterPurchaseOrder",
                "Entrance:BatchReOrder",
                "Entrance:Statement",
                "Entrance:StatementStamp",
                "Entrance:OuterStatement",
                "Entrance:BackPayment",
                "Entrance:SaleOrder",
            ];
            return {
                code: 200,
                data: {
                    permissions
                }
            }
        }
    }
];
