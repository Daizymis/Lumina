import Mock from 'mockjs'

Mock.setup({
    timeout: "2000",
    debug: true,
});

let configArray = [];
const files = import.meta.glob("./*.js");
for (const path in files) {
    files[path]().then((mod) => {
        configArray = configArray.concat(mod.default);
        [...mod.default].forEach((item) => {
            console.log(item);
            Mock.mock(item.url, item.type, item.response);
            /*for (let [path, target] of Object.entries(item)) {
                let protocol = path.split("|");
                Mock.mock(protocol[1], protocol[0], target);
                console.log(protocol[1], protocol[0], target);
            }*/
        });
    });
}
