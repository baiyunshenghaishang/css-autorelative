const css = require('css')
module.exports = function(source) {
    const cssom = css.parse(source)
    const config = {
        ignoreComment: 'no',
    }
    const processRules = rules => {
        for (let i = 0; i < rules.length; i++) {
            let rule = rules[i]
            if (rule.type === 'media') {
                processRules(rule.rules)
                continue
            } else if (rule.type === 'keyframes') {
                processRules(rule.keyframes)
                continue
            }
            let declarations = rule.declarations
            for (let i = 0; i < declarations.length; i++) {
                let declaration = declarations[i],
                    isOverflowAuto =
                        declaration.type === 'declaration' &&
                        declaration.property === 'overflow' &&
                        (declaration.value === 'auto' ||
                            declaration.value === 'scroll')
                if (isOverflowAuto) {
                    let nextDeclaration = declarations[i + 1],
                        isNextOverflowTouch =
                            nextDeclaration.type === 'declaration' &&
                            nextDeclaration.property ===
                                '-webkit-overflow-scrolling' &&
                            nextDeclaration.value === 'touch'
                    if (isNextOverflowTouch) {
                        continue
                    }
                    let isIgnoreComment =
                        nextDeclaration &&
                        nextDeclaration.type === 'comment' &&
                        nextDeclaration.comment.trim() === config.ignoreComment
                    if (isIgnoreComment) {
                        continue
                    }
                    declarations.splice(i + 1, 0, {
                        type: 'declaration',
                        property: '-webkit-overflow-scrolling',
                        value: 'touch',
                    })
                }
            }
        }
    }

    processRules(cssom.stylesheet.rules)
    return css.stringify(cssom)
}
