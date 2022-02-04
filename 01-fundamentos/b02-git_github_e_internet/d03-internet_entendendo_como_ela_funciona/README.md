#Curl

Assim como você fará com toda nova tecnologia que aprender em programação, o primeiro passo na maioria das vezes é dar uma olhada na documentação! A documentação contém muitas informações úteis que podem nos poupar tempo de pesquisa se a analisarmos.

Com a etapa de instalação concluida e a documentação em mãos, vamos conhecer um pouco mais sobre o comando rodando exemplos práticos no terminal!

1. Sintaxe básica do curl .

```
curl [OPTIONS] [URL]
```

* Options aqui podemos especificar diversas opções que nos permitem acessar informações e definir comportamentos/configurações, como por exemplo:

 * -u ou --user : Permite especificar nome de usuário e senha para autenticação no servidor.

 * -T ou --upload-file : Permite transferir arquivos locais para uma URL remota.

 * -s ou --silent : Coloca o curl em modo silencioso. Este comando fará com que mensagens de erro e status de progressão não gerem nenhum tipo de notificação.

 * Caso você queira conhecer mais opções, é possível acessar o manual completo do curl através do comando curl --manual .

* URL é o endereço WEB ao qual vamos nos referir para fazer nosas requisições via comando curl .

2. Agora faremos nossa primeira requisição para um site.


```
curl testdomain.com
```

* Note que a resposta que você receberá no terminal será um código HTML que como vimos anteriormente, permite configurar a estrutura física da página web.

* Além disto, observe também que as tags <html> , <head> , <title> , <body> e <h1> estão presentes na resposta. A tag <h1> foi vista anteriormente no conteúdo e representa o título principal. As demais tags nós veremos com mais detalhes no próximo bloco de conteúdo. 🚀

3. Nesta próxima etapa, utilizaremos uma option do comando curl , conhecida como --head . Ela nos permitirá ter acesso a todo cabeçalho da página. Não se preocupe em entender todos os detalhes, vários pontos que estão presentes nesta resposta serão vistos por você com profundidade ao longo do curso!

```
curl --head https://www.betrybe.com/
```

* Nesta requisição ao site da trybe, recebemos algumas informações como por exemplo:

 * Status da requisição : está representado pelo número 200, e nos informa que nossa requisição foi feita com sucesso.

 * Server : Servidor Web para onde as requisições estão sendo feitas.

 * Content-type : Especifica como os dados são representados. Neste caso, text/html .

4. Por fim, veremos como podemos fazer uma requisição de download para uma URL específica, utilizando a option -O . A partir desta requisição você terá acesso ao arquivo localmente, no diretório em que o terminal está rodando.

```
curl -O https://uploads-ssl.webflow.com/5dbd9ce75ad64f24b67f0932/5dbdd9165ad64f5e29811c52_BRAND3.png
```

* Note que o arquivo em sua máquina terá o mesmo nome do arquivo remoto. É comum que as nomenclaturas de arquivos remotos não sejam descritivas. Para resolver este problema, podemos utilizar uma segunda option do comando curl que nos permitirá nomear o arquivo da forma que desejarmos.

```
curl -o trybe_logo.png https://uploads-ssl.webflow.com/5dbd9ce75ad64f24b67f0932/5dbdd9165ad64f5e29811c52_BRAND3.png
```

* Observe que agora o download foi feito com o nome trybe_logo.png .

Interessante quanta informação conseguimos acessar através de comandos simples no terminal não é mesmo? Existem diversas outras options que podem ser utilizadas via comando curl , porém, não nos aprofundaremos neste conteúdo por agora.

Se você quiser se aprofundar mais, alguns exercícios e um artigo sobre curl foram separados na na seção de Recursos Adicionais . A leitura do artigo e realização dos exercícios é opcional, e é mais uma forma de você colocar em prática todos os conceitos que viu até aqui, além de refletir sobre eles enquanto cria as requisições usando o terminal. 💻🐁

