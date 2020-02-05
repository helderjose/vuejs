# hash-history (hash)


# history
Esse não usa o hash tag na url, cada requisição get é enviada para o server.
The problem with sending it to the server is that we want to handle the route in
our single page application though, we don't want to get the route to the server we
want to handle it on our local page here, though if we visit our page for the
first time, in this case we want to get it to the server because we need to
get the single page application

localhost:8080/#/user

localhost:8080/ é enviada para o server, this will give us back our index.html file.
/user is then handled over to our running Javascript application and may be handled by that application.

# Imperative Navigation
É a navegação pelo código, ex: this.$router.push('/')
