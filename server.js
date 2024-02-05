
import Fastify from 'fastify'
import { ProdutoService } from './services/produtos.service.js'

const fastify = Fastify({
    logger: false
  })

const PORT = 5005

fastify.get('/', (req, res) => {
    res.send('Servidor neto - Resende!')
})

fastify.get('/produtos', ProdutoService.buscarProdutos)

fastify.get("/produtos/${id}", ProdutoService.buscarProdutosId)

fastify.post("/produtos", ProdutoService.enviarProduto)

fastify.patch("/produtos/${id}", ProdutoService.criarProdutos)

fastify.delete("/produtos/${id}", ProdutoService.deletarProdutos)



fastify.listen({ port: PORT}, (err, address) => {
    if(err) {
        console.error('Erro ao subir o servdor', err)
        return;
    }
    console.log(`Server is now listening on ${address}`);
})