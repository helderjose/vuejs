vuejs versão antiga
usa json no package.json para configurar o jest
está funcionando o npm run test


npm install
npm run dev

npm run test
test:watch

# Anotações
No package.json tem um json com as configurações do jest.


# testMatch [array<string>]
https://jestjs.io/docs/en/configuration#testmatch-arraystring

__test__ é a pasta padrão de teste

(default: [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ])

# coverage
https://jestjs.io/docs/en/configuration#collectcoverage-boolean