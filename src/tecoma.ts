import Color from 'colorjs.io'

export const tecomaColors = () => {
  const editorBackground = new Color('lch(12% 0 0)');
  const background = editorBackground.clone();
  background.lightness += 5;

  const variableLocal = new Color('lch(75% 20 66)');
  const variableLocalDeclaration = variableLocal.clone();
  variableLocalDeclaration.chroma += 10;
  
  const variableLocalReadonly = variableLocal.clone();
  variableLocalReadonly.hue -= 10;
  variableLocalReadonly.lightness -= 10;
  const variableLocalReadonlyDeclaration = variableLocalReadonly.clone();
  variableLocalReadonlyDeclaration.chroma += 10;

  const variableGlobal = variableLocal.clone();
  variableGlobal.hue -= 40;
  const variableGlobalDeclaration = variableGlobal.clone();
  variableGlobalDeclaration.chroma += 10;

  const variableGlobalReadonly = variableGlobal.clone();
  variableGlobalReadonly.hue -= 10;
  variableGlobalReadonly.lightness -= 10;
  const variableGlobalReadonlyDeclaration = variableGlobalReadonly.clone();
  variableGlobalReadonlyDeclaration.chroma += 10;

  const variableParameter = variableLocal.clone();
  variableParameter.hue += 40;
  const variableParameterDeclaration = variableParameter.clone();
  variableParameterDeclaration.chroma += 10;

  const variableThis = variableLocal.clone();
  variableThis.hue = 300;

  const minorSyntax = new Color('lch(50% 0 0)');
  const punctuation = minorSyntax.clone();
  punctuation.lightness += 10;

  return {
    comment: '#686868',
    string: '#c2ad00',
    punctuation: punctuation.hex,
    symbol: '#8fa738',
    number: '#993c26',
    numberPeriod: '#6c3122',
    builtInConstant: '#2bba8a',
    templateExpression: '#afafaf',

    userDefinedConstant: '#b34d1b',
    variable: variableLocal.hex,
    variableDefinitionParameter: variableParameterDeclaration.hex,
    variableProperty: '#bbbbbb',
    variableLanguage: minorSyntax.hex,
    variableThis: variableThis.hex,
    variableGlobal: variableGlobal.hex,
    variableGlobalDeclaration: variableGlobalDeclaration.hex,
    variableGlobalReadonly: variableGlobalReadonly.hex,
    variableGlobalReadonlyDeclaration: variableGlobalReadonlyDeclaration.hex,
    variableLocal: variableLocal.hex,
    variableLocalDeclaration: variableLocalDeclaration.hex,
    variableLocalReadonly: variableLocalReadonly.hex,
    variableLocalReadonlyDeclaration: variableLocalReadonlyDeclaration.hex,
    parameter: variableParameter.hex,
    parameterDeclaration: variableParameterDeclaration.hex,
    func: '#577aa0',
    funcDeclaration: '#397cb3',
    funcParameterBrackets: '#697b90',

    keyword: minorSyntax.hex,
    keywordControlFlow: '#cabf82',
    keywordGeneratorAndAsync: '#a89d6c',
    keywordOperator: '#9a6f5e',
    keywordOptional: '#a66a52',
    keywordAssignment: minorSyntax.hex,

    label: '#cabf82',
    debuggerAndConsole: '#f07ad9',
    storage: minorSyntax.hex,

    type: '#718c8f',
    typeDeclaration: '#729296',
    typeInterface: '#717d8f',
    typeInterfaceDeclaration: '#718199',
    typeParameter: '#788c7a',
    typeBuiltin: '#88b5a7',
    typePrimitive: '#847070',
    types: minorSyntax.hex,

    anEnum: '#8f7499',
    anEnumMember: '#996da7',

    aClass: '#de8646',
    aClassUsage: '#c9793f',

    supportClass: '#b6636c',
    support: '#b84f5a',
    defaultLibrary: '#b85f68',
    defaultLibraryInterface: '#a58387',
    defaultLibraryFunction: '#a7434d',
    defaultLibraryVariable: '#b84f5a',

    tag: '#c08043',
    customTag: '#c39635',
    attribute: '#7a8d9e',
    attributeValueBraces: '#8d7371',
    bindingPattern: '#6e7b8f',
    minorSyntax: minorSyntax.hex,

    importVariable: '#8d979b',
    importAlias: '#c6975c',

    objectKeys: '#95a49d',
    objectKeysJson: '#afafaf',
    property: '#a5b3b0',

    svelteAssignment: '#2ec029',
    svelteProp: '#cabf82',
    cucumberTable: '#c6975c',

    markdownHeading: '#50816a',
    markdownCode: '#b8975b',
    markdownFormattedCode: '#afafaf',
    markdownLink: '#577aa0',

    cssVariables: '#ae9c8c',
    cssId: '#50816a',
    cssClass: '#577aa0',
    cssPseudoClass: '#be777f',
    cssPseudoElement: '#be8577',

    rainbow01: '#998800',
    rainbow02: '#ae9c8c',
    rainbow03: '#50816a',
    rainbow04: '#8b84b9',
    rainbow05: '#bdb58b',
    rainbow06: '#993c26',
    rainbow07: '#ff6ce4',
    rainbow08: '#c3940a',
    rainbow09: '#577aa0',
    rainbow10: '#afafaf',

    foreground: '#bdbdbd',
    editorBackground: editorBackground.hex,
    appBackground: background.hex,
  }
}
