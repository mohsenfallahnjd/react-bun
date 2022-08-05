module.exports = {
    root: true,

    env: {
        browser: true,
        node   : true,
        es2021 : true,
    },

    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],

    parser       : '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType : 'module',
    },

    plugins: [
        'react',
        '@typescript-eslint',
        'jsdoc',
    ],

    rules: {
        'max-len': [
            'error',
            {
                code: 256,
            },
        ],

        indent      : ['error', 4],
        'no-console': process.env.NODE_ENV === 'production' ? [
            'error',
            {
                allow: [
                    'warn', 'error',
                ],
            },
        ] : 'off',
        'no-debugger'                : process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'padded-blocks'              : ['error', 'never'],
        'linebreak-style'            : ['error', process.platform === 'win32' ? 'windows' : 'unix'],
        'lines-between-class-members': [
            'error',
            'always',
            {
                exceptAfterSingleLine: true,
            },
        ],
        'class-methods-use-this': 'off',
        'no-trailing-spaces'    : [
            'error',
            {
                skipBlankLines: true,
                ignoreComments: true,
            },
        ],
        'key-spacing': [
            'error',
            {
                align: 'colon',
            },
        ],
        'arrow-parens'           : ['error', 'always'],
        'no-underscore-dangle'   : 'off',
        'space-in-parens'        : 'off',
        'no-prototype-builtins'  : 'off',
        'import/no-unresolved'   : 'off',
        'import/extensions'      : 'off',
        'no-multiple-empty-lines': 'off',
        'no-unneeded-ternary'    : 'error',
        'brace-style'            : [
            'error',
            '1tbs',
        ],
        curly                              : ['error', 'all'],
        'no-else-return'                   : 'error',
        'no-lonely-if'                     : 'error',
        'import/no-named-as-default'       : 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export'     : 'off',

        'no-undef': 'off',

        // React
        'react/prop-types'                   : 0,
        'react/jsx-indent'                   : ['error', 4],
        'react/jsx-indent-props'             : ['error', 4],
        'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
        'react/jsx-filename-extension'       : ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/jsx-curly-spacing'            : [2, {
            when   : 'always',
            spacing: {
                objectLiterals: 'never',
            },
        }],

        // JSDoc
        'require-jsdoc': [
            'warn',
            {
                require: {
                    FunctionDeclaration    : true,
                    MethodDefinition       : true,
                    ClassDeclaration       : true,
                    ArrowFunctionExpression: true,
                    FunctionExpression     : true,
                },
            },
        ],

        'jsdoc/require-returns-description': 0,
        'jsdoc/require-param-description'  : 0,
        'jsdoc/check-indentation'          : 1,
        'jsdoc/check-line-alignment'       : 1,
        'jsdoc/check-syntax'               : 1,
        'jsdoc/match-description'          : 0,
        'jsdoc/no-multi-asterisks'         : [
            'warn',
            {
                preventAtMiddleLines: false,
            },
        ],
        'jsdoc/check-tag-names': [
            'error',
            {
                definedTags: ['values'],
            },
        ],
    },
};
