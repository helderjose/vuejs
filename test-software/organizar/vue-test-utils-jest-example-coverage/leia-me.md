vuejs versão antiga
usa json no package.json para configurar o jest
testes funcionando, watch funcionando, coverage funcionando
o coverage está dando warning por causa da opção "html" no coverageReporters


npm install
npm run dev

npm run test
test:watch

# Anotações
No package.json tem um json com as configurações do jest.

Obs: dá para setar a porcentagem deseja da cobertura de código.
https://jestjs.io/docs/en/configuration#coveragethreshold-object


# testMatch [array<string>]
https://jestjs.io/docs/en/configuration#testmatch-arraystring

__test__ é a pasta padrão de teste

(default: [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ])

se quiser mudar a pasta padrão use a opção "testMatch".

# coverage
https://jestjs.io/docs/en/configuration#collectcoverage-boolean




# package.json
Essas pastas serão ignoradas  do
"!**/node_modules/**",
"!**/vendor/**"


collectCoverageFrom
não pode usar <rootDir> nessa metatag


Pesquisar sobre o warning : Handlebars: Access has been denied to resolve the property "statements" because it is not an "own property" of its parent.

"html" está fazendo dar essa mensagem
"text" deixa em forma de tabela no terminal
"coverageReporters": ["json", "text", "lcovonly", "clover", "html"]

Dá para configurar o istanbul para usar html (não testei)
https://www.npmjs.com/package/karma-coverage-istanbul-reporter


