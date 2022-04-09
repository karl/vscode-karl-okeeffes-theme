import Color from 'colorjs.io'

export const tecomaColors = () => {
  const editorBackground = new Color('lch(13%, 0, 140)');
  const background = editorBackground.clone();
  background.lightness += 5;

  const variableLocal = new Color('lch(70% 20 66)');
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

  return {
    comment: '#686868',
    string: '#c2ad00',
    punctuation: '#868686',
    symbol: '#8fa738',
    number: '#993c26',
    numberPeriod: '#6c3122',
    builtInConstant: '#2bba8a',
    templateExpression: '#afafaf',

    userDefinedConstant: '#b34d1b',
    variable: '#b2987f',
    variableDefinitionParameter: '#c6975c',
    variableProperty: '#bbbbbb',
    variableLanguage: '#797979',
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

    keyword: '#797979',
    keywordControlFlow: '#cabf82',
    keywordGeneratorAndAsync: '#a89d6c',
    keywordOperator: '#9a6f5e',
    keywordOptional: '#a66a52',
    keywordAssignment: '#797979',

    label: '#cabf82',
    debuggerAndConsole: '#f07ad9',
    storage: '#797979',

    type: '#718c8f',
    typeDeclaration: '#729296',
    typeInterface: '#717d8f',
    typeInterfaceDeclaration: '#718199',
    typeParameter: '#788c7a',
    typeBuiltin: '#88b5a7',
    typePrimitive: '#847070',
    types: '#797979',

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
    minorSyntax: '#797979',

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
