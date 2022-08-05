module.exports = {
    extends: ['stylelint-config-hudochenkov/full'],
    plugins: ['stylelint-scss', 'stylelint-order'],
    rules  : {
        indentation                              : 4,
        'color-hex-case'                         : 'upper',
        'color-hex-length'                       : 'long',
        'no-descending-specificity'              : null,
        'custom-property-no-missing-var-function': null,
        'color-function-notation'                : 'legacy',
        'order/order'                            : null,
        'function-no-unknown'                    : null,
        'at-rule-no-unknown'                     : [
            true,
            {
                ignoreAtRules: ['function', 'if', 'each', 'else', 'include', 'mixin', 'return', 'for', 'use', 'forward', 'debug', 'warn', 'extend', 'error'],
            },
        ],
        'font-family-no-missing-generic-family-keyword': null,
        'selector-pseudo-element-no-unknown'           : [
            true,
            {
                ignorePseudoElements: ['v-deep'],
            },
        ],
        'declaration-no-important'   : null, // It should be true
        'selector-max-type'          : null, // It should be 3
        'selector-max-id'            : null, // It should be 1
        'selector-no-qualifying-type': [ // It should not have ignore list
            true,
            {
                ignore: ['attribute', 'class', 'id'],
            },
        ],
        'unit-no-unknown': [
            true,
            {
                ignoreUnits: ['xs', 'sm', 'md', 'lg', 'xl'],
            },
        ],
    },
    syntax      : 'scss',
    customSyntax: 'postcss-scss',
};
