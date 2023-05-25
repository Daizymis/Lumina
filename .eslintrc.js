module.exports = {
    root: true, //此项是用来告诉eslint找当前配置文件不能往父级查找
    env: {
        node: true, //此项指定环境的全局变量，下面的配置指定为node环境
        jquery: true //jquery全局变量
    },
    //指定环境为我们提供了预置的全局变量
    //对于那些我们自定义的全局变量，可以用globals指定
    //设置每个变量等于true允许变量被重写，或false不允许被重写
    globals: {
        'c': true //代码中有将console.log定义为变量c绑定在全局变量中
    },
    'extends': [ //扩展配置，基础规则
        'eslint:recommended', // @vue/cli-plugin-eslint
        'plugin:prettier/recommended', // eslint-plugin-prettier
        'plugin:vue/recommended' // @vue/eslint-config-prettiers
    ],
    parserOptions: {
        parser: 'babel-eslint' //解析器有默认的espress改为babel-eslint
    },
    rules: { //规则可覆盖extends中的配置
        //'indent': ['error', 2, {SwitchCase: 1}], //两个空格缩进
        'no-var': 1, //禁用var，用let和const代替0 = off, 1 = warn, 2 = error
        'no-console': process.env.VUE_APP_ENV === 'production' ? 'warn' : 'off',// 生产环境不允许console
        'no-debugger': process.env.VUE_APP_ENV === 'production' ? 'warn' : 'off',// 生产环境不允许debugger
        'no-alert': process.env.VUE_APP_ENV === 'production' ? 'warn' : 'off',// 生产环境不允许alert
        "template-curly-spacing": ["error", "never"],
        'vue/max-attributes-per-line': [ //标签中属性不能超过三个（同时结合了prettier的单行编码不能超过80个字符）
            'error',
            {
                singleline: 4,
                multiline: {
                    max: 1,
                    allowFirstLine: false
                }
            }
        ],
        'id-length': 'off', //会对所有标识符进行检测，对for循环等语句中的使用不太友好，靠开发同学自我约束
        'vue/require-default-prop': 2, // 对于prop 需要默认值 0 = off, 1 = warn, 2 = error
        'vue/no-v-html': 0, //0 = off, 1 = warn, 2 = error
        'vue/html-self-closing': 0, // 避免和 eslint-plugin-prettier冲突 关闭此配置,,,0 = off, 1 = warn, 2 = error
        'vue/html-indent': 0, // 避免和 eslint-plugin-prettier冲突 关闭此配置,,,0 = off, 1 = warn, 2 = error
        "vue/singleline-html-element-content-newline": 0, // 在单行元素的内容前后需要换行符
        'prettier/prettier': [
            'error',
            {
                semi: true, //分号
                tabWidth: 2, //一个tab代表几个空格数
                singleQuote: true, //字符串必须使用单引号
                trailingComma: 'none', //是否使用尾逗号，有三个可选值"<none|es5|all>"
                bracketSpacing: true, //对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
                jsxBracketSameLine: false, // jsx > 是否另起一行
                arrowParens: 'avoid', //箭头函数只有一个参数时省略小括号
                proseWrap: 'preserve' //代码超出是否要换行 preserve保留
            }
        ]
    }
}
