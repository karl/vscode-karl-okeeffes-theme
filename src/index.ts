import { join } from 'path'
import { promises as fs } from 'fs'
import { originalColors } from './originalColors'
import { tecomaColors } from './tecoma'

;(global as any).self = global

const createTheme = (colors) => {
  return {
    tokenColors: [
      {
        name: 'Comment',
        scope: ['comment', 'punctuation.definition.comment'],
        settings: {
          fontStyle: 'italic',
          foreground: colors.comment,
        },
      },
      {
        name: 'Unused code',
        scope: ['comment.unused'],
        settings: {
          fontStyle: '',
          foreground: colors.comment,
        },
      },
      {
        name: 'String',
        scope: 'string',
        settings: {
          foreground: colors.string,
        },
      },
      {
        name: 'String punctuation',
        scope: [
          'punctuation.definition.string.begin',
          'punctuation.definition.string.end',
        ],
        settings: {
          foreground: colors.punctuation,
        },
      },
      {
        name: 'Symbol',
        scope: ['constant.language.symbol'],
        settings: {
          foreground: colors.symbol,
        },
      },
      {
        name: 'Number',
        scope: 'constant.numeric',
        settings: {
          foreground: colors.number,
        },
      },
      {
        name: 'Number period',
        scope: 'meta.delimiter.decimal.period',
        settings: {
          foreground: colors.numberPeriod,
        },
      },
      {
        name: 'Built-in constant',
        scope: 'constant.language',
        settings: {
          foreground: colors.builtInConstant,
        },
      },
      {
        name: 'User-defined constant',
        scope: [
          'constant.character',
          'constant.other',
          'variable.other.constant.property',
        ],
        settings: {
          foreground: colors.userDefinedConstant,
        },
      },
      {
        name: 'Variable',
        scope: ['variable'],
        settings: {
          foreground: colors.variable,
        },
      },
      {
        name: 'Variable definition / Parameter',
        scope: ['meta.definition variable', 'variable.parameter'],
        settings: {
          foreground: colors.variableDefinitionParameter,
        },
      },
      {
        name: 'Variable',
        scope: ['variable.other.property', 'variable.other.object.property'],
        settings: {
          foreground: colors.variableProperty,
        },
      },
      {
        name: 'Language variable',
        scope: 'variable.language',
        settings: {
          foreground: colors.variableLanguage,
        },
      },
      {
        name: 'This',
        scope: ['variable.language.this', 'variable.language.self'],
        settings: {
          foreground: colors.variableThis,
        },
      },
      {
        name: 'Function',
        scope: ['entity.name.function'],
        settings: {
          foreground: colors.func,
        },
      },
      {
        name: 'Function',
        scope: [
          'meta.definition entity.name.function',
          'meta.object-literal.key entity.name.function',
          'meta.function.method entity.name.function',
        ],
        settings: {
          foreground: colors.funcDeclaration,
        },
      },
      {
        name: 'Object literal brackets',
        scope: ['meta.objectliteral punctuation.definition.block'],
        settings: {
          foreground: '#fff',
        },
      },
      {
        name: 'Function parameter brackets',
        scope: [
          'punctuation.definition.parameters',
          'storage.type.function.arrow',
          'meta.arrow punctuation.definition.block',
          'meta.function punctuation.definition.block',
        ],
        settings: {
          foreground: colors.funcParameterBrackets,
        },
      },
      {
        name: 'Template expression',
        scope: ['meta.template.expression'],
        settings: {
          foreground: colors.templateExpression,
        },
      },
      {
        name: 'Keyword',
        scope: 'keyword',
        settings: {
          foreground: colors.keyword,
        },
      },
      {
        name: 'Keyword control flow',
        scope: [
          'keyword.control.flow',
          'keyword.control.loop',
          'keyword.control.trycatch',
          'keyword.control.exception',
        ],
        settings: {
          foreground: colors.keywordControlFlow,
        },
      },
      {
        name: 'Generator and async',
        scope: ['keyword.generator.asterisk', 'storage.modifier.async'],
        settings: {
          foreground: colors.keywordGeneratorAndAsync,
        },
      },
      {
        name: 'Label (for Svelte)',
        scope: ['entity.name.label'],
        settings: {
          foreground: colors.label,
        },
      },
      {
        name: 'Debugger and Console',
        scope: [
          'keyword.other.debugger',
          'support.class.console',
          'support.function.console',
        ],
        settings: {
          foreground: colors.debuggerAndConsole,
        },
      },
      {
        name: 'Keyword',
        scope: 'keyword.operator',
        settings: {
          foreground: colors.keywordOperator,
        },
      },
      {
        name: 'Keyword',
        scope: 'punctuation.accessor.optional',
        settings: {
          foreground: colors.keywordOptional,
        },
      },
      {
        name: 'Keyword',
        scope: 'keyword.operator.assignment',
        settings: {
          foreground: colors.keywordAssignment,
        },
      },
      {
        name: 'Storage',
        scope: 'storage',
        settings: {
          foreground: colors.storage,
        },
      },
      {
        name: 'Type',
        scope: ['entity.name.type', 'entity.other.inherited-class'],
        settings: {
          foreground: colors.type,
        },
      },
      {
        name: 'Class',
        scope: ['entity.name.type.class', 'entity.name.class.declaration'],
        settings: {
          foreground: colors.aClass,
        },
      },
      {
        name: 'Class Usage',
        scope: ['entity.name.class'],
        settings: {
          foreground: colors.aClassUsage,
        },
      },
      {
        name: 'Class usage',
        scope: ['support.class'],
        settings: {
          foreground: colors.supportClass,
        },
      },
      {
        name: 'Support',
        scope: ['support', 'support.class.builtin'],
        settings: {
          foreground: colors.support,
        },
      },
      {
        name: 'Builtin type',
        scope: 'support.type.builtin',
        settings: {
          foreground: colors.typeBuiltin,
        },
      },
      {
        name: 'Primitive type',
        scope: 'support.type.primitive',
        settings: {
          foreground: colors.typePrimitive,
        },
      },
      {
        name: 'Tag',
        scope: 'entity.name.tag',
        settings: {
          foreground: colors.tag,
        },
      },
      {
        name: 'Custom Tag',
        scope: 'support.class.component',
        settings: {
          foreground: colors.customTag,
        },
      },
      {
        name: 'Attribute',
        scope: 'entity.other.attribute-name',
        settings: {
          foreground: colors.attribute,
        },
      },
      {
        name: 'Attribute value braces',
        scope: 'punctuation.section.embedded',
        settings: {
          foreground: colors.attributeValueBraces,
        },
      },
      {
        name: 'Binding pattern',
        scope: 'punctuation.definition.binding-pattern',
        settings: {
          foreground: colors.bindingPattern,
        },
      },
      {
        name: 'Minor Syntax',
        scope: [
          'punctuation',
          'meta.brace.round',
          'meta.brace.square',
          'meta.brace.curly',
          'meta.bracket',
          'meta.separator',
          'beginning.punctuation',
          'meta.tag.inline.any',
          'meta.tag.block.any',
          'meta.tag.structure.any',
          'meta.tag.any',
          'meta.tag.sgml.doctype',
          'constant.language.import-export-all',
          'support.type.object.module',
        ],
        settings: {
          foreground: colors.minorSyntax,
        },
      },
      {
        name: 'Import variable',
        scope: ['meta.import variable.other.readwrite'],
        settings: {
          foreground: colors.importVariable,
        },
      },
      {
        name: 'Import alias',
        scope: ['meta.import variable.other.readwrite.alias'],
        settings: {
          foreground: colors.importAlias,
        },
      },
      {
        name: 'Deinfitions / Object keys',
        scope: [
          'meta.object-literal.key',
          'support.type.property-name',
          'meta.definition',
          'variable.object.property',
          'constant.language.symbol.hashkey',
        ],
        settings: {
          foreground: colors.objectKeys,
        },
      },
      {
        name: 'Object keys (JSON)',
        scope: ['support.type.property-name.json'],
        settings: {
          foreground: colors.objectKeysJson,
        },
      },
      {
        name: 'Svelte assignment',
        scope: ['source.svelte keyword.operator.assignment'],
        settings: {
          foreground: colors.svelteAssignment,
        },
      },
      {
        name: 'Svelte prop',
        scope: ['source.svelte keyword.control.export'],
        settings: {
          foreground: colors.svelteProp,
        },
      },
      {
        name: 'Markdown titles',
        scope: ['markup.heading'],
        settings: {
          foreground: colors.markdownHeading,
        },
      },
      {
        name: 'Markdown italic',
        scope: ['markup.italic'],
        settings: {
          fontStyle: 'italic',
        },
      },
      {
        name: 'Markdown bold',
        scope: ['markup.bold'],
        settings: {
          fontStyle: 'bold',
        },
      },
      {
        name: 'Markdown code',
        scope: ['markup.raw', 'markup.inline.raw', 'markup.fenced_code'],
        settings: {
          foreground: colors.markdownCode,
        },
      },
      {
        name: 'Markdown formatted code',
        scope: ['meta.embedded'],
        settings: {
          foreground: colors.markdownFormattedCode,
        },
      },
      {
        name: 'Markdown link',
        scope: ['markup.underline.link'],
        settings: {
          foreground: colors.markdownLink,
        },
      },
      {
        name: 'Types',
        scope: ['meta.type', 'meta.return.type', 'keyword.operator.type'],
        settings: {
          foreground: colors.types,
        },
      },
      {
        name: 'CSS variables',
        scope: ['variable.css', 'variable.argument.css'],
        settings: {
          foreground: colors.cssVariables,
        },
      },
      {
        name: 'CSS id',
        scope: ['entity.other.attribute-name.id.css'],
        settings: {
          foreground: colors.cssId,
        },
      },
      {
        name: 'CSS class',
        scope: ['entity.other.attribute-name.class.css'],
        settings: {
          foreground: colors.cssClass,
        },
      },
      {
        name: 'CSS pseudo class',
        scope: ['entity.other.attribute-name.pseudo-class.css'],
        settings: {
          foreground: colors.cssPseudoClass,
        },
      },
      {
        name: 'CSS pseudo element',
        scope: ['entity.other.attribute-name.pseudo-element.css'],
        settings: {
          foreground: colors.cssPseudoElement,
        },
      },
      {
        scope: 'rainbow1',
        settings: {
          foreground: colors.rainbow01,
          fontStyle: '',
        },
      },
      {
        scope: 'keyword.rainbow2',
        settings: {
          foreground: colors.rainbow02,
          fontStyle: '',
        },
      },
      {
        scope: 'entity.name.function.rainbow3',
        settings: {
          foreground: colors.rainbow03,
          fontStyle: '',
        },
      },
      {
        scope: 'comment.rainbow4',
        settings: {
          foreground: colors.rainbow04,
          fontStyle: '',
        },
      },
      {
        scope: 'string.rainbow5',
        settings: {
          foreground: colors.rainbow05,
          fontStyle: '',
        },
      },
      {
        scope: 'variable.parameter.rainbow6',
        settings: {
          foreground: colors.rainbow06,
          fontStyle: '',
        },
      },
      {
        scope: 'constant.numeric.rainbow7',
        settings: {
          foreground: colors.rainbow07,
          fontStyle: '',
        },
      },
      {
        scope: 'entity.name.type.rainbow8',
        settings: {
          foreground: colors.rainbow08,
          fontStyle: '',
        },
      },
      {
        scope: 'markup.bold.rainbow9',
        settings: {
          foreground: colors.rainbow09,
          fontStyle: '',
        },
      },
      {
        scope: 'invalid.rainbow10',
        settings: {
          foreground: colors.rainbow10,
          fontStyle: '',
        },
      },
      {
        scope: 'keyword.control.cucumber.table source',
        settings: {
          foreground: colors.cucumberTable,
        },
      },
    ],
    semanticTokenColors: {
      variable: colors.variableGlobal,
      'variable.declaration': colors.variableGlobalDeclaration,
      'variable.readonly': colors.variableGlobalReadonly,
      'variable.declaration.readonly': colors.variableGlobalReadonlyDeclaration,
      'variable.local': colors.variableLocal,
      'variable.declaration.local': colors.variableLocalDeclaration,
      'variable.readonly.local': colors.variableLocalReadonly,
      'variable.declaration.readonly.local':
        colors.variableLocalReadonlyDeclaration,
      parameter: colors.parameter,
      'parameter.declarion': colors.parameterDeclaration,
      property: colors.property,
      enum: colors.anEnum,
      enumMember: colors.anEnumMember,
      function: colors.func,
      'function.declaration': colors.funcDeclaration,
      method: colors.func,
      'method.declaration': colors.funcDeclaration,
      'member.declaration': colors.funcDeclaration,
      '*.defaultLibrary': colors.defaultLibrary,
      'interface.defaultLibrary': colors.defaultLibraryInterface,
      'function.defaultLibrary': colors.defaultLibraryFunction,
      'variable.defaultLibrary': colors.defaultLibraryVariable,
      type: colors.type,
      'type.declaration': colors.typeDeclaration,
      interface: colors.typeInterface,
      'interface.declaration': colors.typeInterfaceDeclaration,
      typeParameter: colors.typeParameter,
    },
    colors: {
      foreground: colors.foreground,
      'statusBar.background': colors.appBackground,
      'statusBar.foreground': colors.foreground,
      'statusBar.noFolderBackground': colors.appBackground,
      'statusBar.noFolderForeground': colors.foreground,
      'statusBar.debuggingBackground': colors.appBackground,
      'statusBar.debuggingForeground': '#b8975b',
      'activityBar.background': colors.appBackground,
      'activityBar.foreground': colors.foreground,
      'sideBar.background': colors.appBackground,
      'sideBar.foreground': colors.foreground,
      'sideBarSectionHeader.background': colors.appBackground,
      'editor.background': colors.editorBackground,
      'editor.foreground': colors.foreground,
      'editorCursor.foreground': '#afafaf',
      'editorLineNumber.foreground': '#404040',
      'editorLineNumber.activeForeground': '#484848',
      'editorWhitespace.foreground': '#999999',
      'editor.lineHighlightBackground': '#0000002f',
      'editor.selectionBackground': '#006a7d5c',
      'editor.inactiveSelectionBackground': '#6060605c',
      'editor.selectionHighlightBackground': '#5f5f5f2c',
      'editor.wordHighlightBackground': '#5f5f5f40',
      'editor.wordHighlightStrongBackground': '#5f5f5f50',
      'editor.findMatchBackground': '#efa40020',
      'editor.findMatchHighlightBackground': '#efa40020',
      'editor.findRangeHighlightBackground': '#efa4000A',
      'editorIndentGuide.background': '#ffffff05',
      'editorIndentGuide.activeBackground': '#ffffff15',
      'scrollbar.shadow': '#0000006b',
      'list.activeSelectionBackground': '#222222',
      'list.inactiveSelectionBackground': '#222222',
      'list.hoverBackground': '#252525',
      'list.focusBackground': '#303030',
      // "badge.background": "#fce100",
      // "badge.foreground": "#222222",
      'activityBarBadge.background': '#fce100',
      'activityBarBadge.foreground': '#222222',
      'dropdown.background': '#2a2a2a',
      'input.background': '#202020',
      focusBorder: '#cdb700',
      'inputOption.activeBorder': '#69a88b',
      'inputOption.activeBackground': '#69a88b55',
      'sash.hoverBorder': '#555555',
      'terminal.ansiBlack': '#000000',
      'terminal.ansiRed': '#bd414d',
      'terminal.ansiGreen': '#759c58',
      'terminal.ansiYellow': '#c6975c',
      'terminal.ansiBlue': '#397cb3',
      'terminal.ansiMagenta': '#9c57b0',
      'terminal.ansiCyan': '#3a7277',
      'terminal.ansiWhite': '#D6D6D6',
      'terminal.ansiBrightBlack': '#808080',
      'terminal.ansiBrightRed': '#E06C75',
      'terminal.ansiBrightGreen': '#94C470',
      'terminal.ansiBrightYellow': '#EFBC81',
      'terminal.ansiBrightBlue': '#4CA1E7',
      'terminal.ansiBrightMagenta': '#C678DD',
      'terminal.ansiBrightCyan': '#4F989E',
      'terminal.ansiBrightWhite': '#ECECEC',
      'terminalCursor.foreground': '#8a8a8a',
      'diffEditor.insertedTextBackground': '#0c7e631f',
      'diffEditor.removedTextBackground': '#942d0e1f',
      'editorGutter.addedBackground': '#0c7e63de',
      'editorGutter.deletedBackground': '#af320bde',
      'editorGutter.modifiedBackground': '#607079de',
      'tab.inactiveBackground': '#2a2a2a',
      'editorGroupHeader.tabsBackground': '#2a2a2a',
      'editorWarning.foreground': '#ecca31',
      'editorError.foreground': '#e76857',
    },
    name: 'Tecoma Theme',
    semanticHighlighting: true,
  }
}

export function writeFile(path, data) {
  return fs.writeFile(path, JSON.stringify(data, null, 2))
}

async function main() {
  writeFile(
    join(__dirname, '..', 'themes', 'Tecoma.json'),
    createTheme(tecomaColors())
  )
}
main()
