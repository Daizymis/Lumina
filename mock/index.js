import Mock from 'mockjs'

Mock.setup({
    timeout: "2000",
    debug: true,
});
let prefix = import.meta.env.MODE === 'production' ? '/prod-api' : '/dev-api';
let configArray = [];
const files = import.meta.glob("./*.js");
for (const path in files) {
    files[path]().then((mod) => {
        configArray = configArray.concat(mod.default);
        [...mod.default].forEach((item) => {
            console.log(item);
            Mock.mock(prefix + item.url, item.type, item.response);
        });
    });
}
